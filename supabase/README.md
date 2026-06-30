# Supabase setup

The app works **without** Supabase — grocery data saves to your device. To turn
on **cross-device cloud sync**, do the following once.

## 1. Create the project
1. Go to [supabase.com](https://supabase.com) and create a free project.
2. Pick a region close to you and save the database password somewhere safe.

## 2. Add the database schema
1. In the Supabase dashboard, open **SQL Editor → New query**.
2. Paste the contents of [`migrations/0001_groceries.sql`](migrations/0001_groceries.sql) and click **Run**.

## 3. Connect the app
1. In the dashboard, open **Project Settings → API**.
2. Copy the **Project URL** and the **anon public** key.
3. In the project root, copy `.env.example` to `.env` and fill in:
   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Restart the dev server. The app auto-detects the keys and switches from
   device storage to the cloud.

## 4. Passkey sign-in (device biometrics)

Cloud sync is gated behind a single-user login using **device passkeys**
(Face ID / fingerprint / Windows Hello). This needs the `passkey` Edge Function
deployed and a couple of secrets set. One-time setup:

### a. Install + link the CLI
```
npm i -g supabase
supabase login
supabase link --project-ref <your-project-ref>   # ref is in your project URL
```

### b. Apply the passkey tables
Run [`migrations/0002_passkeys.sql`](migrations/0002_passkeys.sql) in the SQL
editor (same as step 2), or `supabase db push`.

### c. Deploy the function
```
supabase functions deploy passkey --no-verify-jwt
```
`--no-verify-jwt` is required: this function is called *before* you're signed in.

### d. Set the function's secrets
The relying-party values must match the domain the app runs on.

For local dev:
```
supabase secrets set RP_ID=localhost RP_ORIGIN=http://localhost:5173 RP_NAME="Command Center"
```
For production (after deploying to Vercel), set them to your real host, e.g.:
```
supabase secrets set RP_ID=your-app.vercel.app RP_ORIGIN=https://your-app.vercel.app
```
> `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically —
> don't set those yourself.

### e. First run
With `.env` filled in (step 3) and the dev server restarted, open the app → you'll
see the sign-in screen → enter your email → **"First time? Set up a passkey"** →
approve the biometric prompt. That registers the passkey and signs you in. Next
time, just **"Sign in with passkey."**

> **Heads-up:** a passkey is bound to the domain (`RP_ID`) it was created on. A
> passkey made on `localhost` won't work on your Vercel domain — register once on
> each. WebAuthn also requires HTTPS, which localhost and Vercel both satisfy.
> No email/SMTP setup is needed (the session is minted directly, no email sent).

## Security notes
- The `anon` key is meant to be public; row-level security protects your data.
- Never put the **service-role key** or other API secrets in `.env` — those live
  in Supabase Edge Function secrets. See the root `.env.example`.
- The passkey tables have RLS on with no policies, so only the service-role
  function can read them.
