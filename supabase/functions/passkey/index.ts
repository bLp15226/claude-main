// ─────────────────────────────────────────────────────────────────────────
// Passkey (WebAuthn) auth — Supabase Edge Function (Deno).
//
// One function, four actions (POST body { action, ... }):
//   register-start  → returns registration options (challenge)
//   register-finish → verifies attestation, stores the credential
//   auth-start      → returns authentication options (challenge)
//   auth-finish     → verifies assertion, mints a Supabase session
//
// After a passkey is verified, we issue a session by generating a magic-link
// token (admin API) and returning its token_hash; the client exchanges it via
// supabase.auth.verifyOtp(). The passkey check is what gates issuing that token.
//
// Deploy:  supabase functions deploy passkey --no-verify-jwt
// Secrets: supabase secrets set RP_ID=... RP_ORIGIN=... RP_NAME=...
//   (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically.)
//
// Pinned to @simplewebauthn v13 — if you bump it, re-check the API shapes.
// ─────────────────────────────────────────────────────────────────────────

import { createClient } from 'npm:@supabase/supabase-js@2'
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from 'npm:@simplewebauthn/server@13'
import { isoBase64URL } from 'npm:@simplewebauthn/server@13/helpers'

const RP_ID = Deno.env.get('RP_ID') ?? 'localhost'
const RP_ORIGIN = Deno.env.get('RP_ORIGIN') ?? 'http://localhost:5173'
const RP_NAME = Deno.env.get('RP_NAME') ?? 'Command Center'

const admin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  { auth: { autoRefreshToken: false, persistSession: false } },
)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })

// ── helpers ────────────────────────────────────────────────────────────────
async function findUserByEmail(email: string) {
  // No getUserByEmail in the admin API; scan (fine for a single-user app).
  const { data, error } = await admin.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  })
  if (error) throw error
  return data.users.find((u) => u.email?.toLowerCase() === email.toLowerCase())
}

async function getOrCreateUser(email: string) {
  const existing = await findUserByEmail(email)
  if (existing) return existing
  const { data, error } = await admin.auth.admin.createUser({
    email,
    email_confirm: true,
  })
  if (error) throw error
  return data.user
}

async function saveChallenge(email: string, type: string, challenge: string) {
  await admin.from('passkey_challenges').delete().eq('email', email).eq('type', type)
  const { error } = await admin
    .from('passkey_challenges')
    .insert({ email, type, challenge })
  if (error) throw error
}

async function takeChallenge(email: string, type: string) {
  const { data, error } = await admin
    .from('passkey_challenges')
    .select('challenge, expires_at')
    .eq('email', email)
    .eq('type', type)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error) throw error
  await admin.from('passkey_challenges').delete().eq('email', email).eq('type', type)
  if (!data) throw new Error('No pending challenge — start over.')
  if (new Date(data.expires_at) < new Date()) throw new Error('Challenge expired.')
  return data.challenge as string
}

// ── handler ──────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  try {
    const { action, email, response } = await req.json()
    if (!email) return json({ error: 'Email is required.' }, 400)
    const normEmail = String(email).trim().toLowerCase()

    if (action === 'register-start') {
      const user = await getOrCreateUser(normEmail)
      const { data: creds } = await admin
        .from('passkey_credentials')
        .select('id, transports')
        .eq('user_id', user.id)

      const options = await generateRegistrationOptions({
        rpName: RP_NAME,
        rpID: RP_ID,
        userName: normEmail,
        userID: new TextEncoder().encode(user.id),
        attestationType: 'none',
        excludeCredentials: (creds ?? []).map((c) => ({
          id: c.id,
          transports: c.transports ?? undefined,
        })),
        authenticatorSelection: {
          residentKey: 'preferred',
          userVerification: 'preferred',
        },
      })
      await saveChallenge(normEmail, 'register', options.challenge)
      return json(options)
    }

    if (action === 'register-finish') {
      const user = await getOrCreateUser(normEmail)
      const expectedChallenge = await takeChallenge(normEmail, 'register')
      const verification = await verifyRegistrationResponse({
        response,
        expectedChallenge,
        expectedOrigin: RP_ORIGIN,
        expectedRPID: RP_ID,
        requireUserVerification: false,
      })
      if (!verification.verified || !verification.registrationInfo) {
        return json({ error: 'Passkey registration failed.' }, 400)
      }
      const { credential } = verification.registrationInfo
      const { error } = await admin.from('passkey_credentials').insert({
        id: credential.id,
        user_id: user.id,
        public_key: isoBase64URL.fromBuffer(credential.publicKey),
        counter: credential.counter,
        transports: credential.transports ?? null,
      })
      if (error) throw error
      return json({ verified: true })
    }

    if (action === 'auth-start') {
      const user = await findUserByEmail(normEmail)
      if (!user) return json({ error: 'No account for that email.' }, 404)
      const { data: creds } = await admin
        .from('passkey_credentials')
        .select('id, transports')
        .eq('user_id', user.id)
      if (!creds?.length) {
        return json({ error: 'No passkey registered for this account.' }, 404)
      }
      const options = await generateAuthenticationOptions({
        rpID: RP_ID,
        allowCredentials: creds.map((c) => ({
          id: c.id,
          transports: c.transports ?? undefined,
        })),
        userVerification: 'preferred',
      })
      await saveChallenge(normEmail, 'auth', options.challenge)
      return json(options)
    }

    if (action === 'auth-finish') {
      const user = await findUserByEmail(normEmail)
      if (!user) return json({ error: 'No account for that email.' }, 404)
      const expectedChallenge = await takeChallenge(normEmail, 'auth')
      const { data: cred } = await admin
        .from('passkey_credentials')
        .select('*')
        .eq('id', response.id)
        .eq('user_id', user.id)
        .maybeSingle()
      if (!cred) return json({ error: 'Unknown passkey.' }, 404)

      const verification = await verifyAuthenticationResponse({
        response,
        expectedChallenge,
        expectedOrigin: RP_ORIGIN,
        expectedRPID: RP_ID,
        requireUserVerification: false,
        credential: {
          id: cred.id,
          publicKey: isoBase64URL.toBuffer(cred.public_key),
          counter: Number(cred.counter),
          transports: cred.transports ?? undefined,
        },
      })
      if (!verification.verified) {
        return json({ error: 'Passkey verification failed.' }, 401)
      }
      await admin
        .from('passkey_credentials')
        .update({ counter: verification.authenticationInfo.newCounter })
        .eq('id', cred.id)

      // Mint a session: generate a magic-link token, hand the hash to the client.
      const { data: link, error: linkError } =
        await admin.auth.admin.generateLink({ type: 'magiclink', email: normEmail })
      if (linkError) throw linkError
      return json({
        verified: true,
        token_hash: link.properties.hashed_token,
      })
    }

    return json({ error: `Unknown action: ${action}` }, 400)
  } catch (err) {
    console.error(err)
    return json({ error: err instanceof Error ? err.message : 'Server error.' }, 500)
  }
})
