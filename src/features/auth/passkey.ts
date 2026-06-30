import {
  startRegistration,
  startAuthentication,
} from '@simplewebauthn/browser'
import { supabase } from '@/lib/supabase'

/**
 * Client side of the passkey flow. Each step calls the `passkey` Edge Function,
 * runs the browser WebAuthn ceremony, then (for sign-in) exchanges the returned
 * magic-link token for a Supabase session. onAuthStateChange does the rest.
 */

async function invoke<T>(action: string, body: Record<string, unknown>) {
  if (!supabase) throw new Error('Cloud is not configured.')
  const { data, error } = await supabase.functions.invoke('passkey', {
    body: { action, ...body },
  })
  if (error) {
    // Surface the function's JSON error message when present.
    const message =
      (data as { error?: string } | null)?.error ?? error.message
    throw new Error(message)
  }
  if ((data as { error?: string })?.error) {
    throw new Error((data as { error: string }).error)
  }
  return data as T
}

/** Register a new passkey for this email (first-time setup). */
export async function registerPasskey(email: string): Promise<void> {
  const optionsJSON = await invoke<Parameters<typeof startRegistration>[0]['optionsJSON']>(
    'register-start',
    { email },
  )
  const attResp = await startRegistration({ optionsJSON })
  await invoke('register-finish', { email, response: attResp })
}

/** Sign in with an existing passkey. Establishes a Supabase session. */
export async function signInWithPasskey(email: string): Promise<void> {
  const optionsJSON = await invoke<Parameters<typeof startAuthentication>[0]['optionsJSON']>(
    'auth-start',
    { email },
  )
  const authResp = await startAuthentication({ optionsJSON })
  const { token_hash } = await invoke<{ token_hash: string }>('auth-finish', {
    email,
    response: authResp,
  })

  if (!supabase) throw new Error('Cloud is not configured.')
  const { error } = await supabase.auth.verifyOtp({
    type: 'magiclink',
    token_hash,
  })
  if (error) throw error
}
