import { useState, type FormEvent } from 'react'
import { KeyRound, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { registerPasskey, signInWithPasskey } from './passkey'

type Mode = 'sign-in' | 'register'

/**
 * Sign-in screen, shown only in cloud mode when signed out. Uses the app's own
 * brand (not PHC). Sign-in succeeds → onAuthStateChange flips the app to the
 * dashboard, so there's no manual redirect here.
 */
export function AuthGate() {
  const [mode, setMode] = useState<Mode>('sign-in')
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const addr = email.trim()
    if (!addr || busy) return
    setBusy(true)
    setError(null)
    setNotice(null)
    try {
      if (mode === 'register') {
        await registerPasskey(addr)
        setNotice('Passkey created. Signing you in…')
        await signInWithPasskey(addr)
      } else {
        await signInWithPasskey(addr)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setBusy(false)
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <span className="font-serif text-3xl font-medium tracking-wide">
            Command<span className="text-primary">.</span>
          </span>
          <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Center
          </p>
        </div>

        <form onSubmit={submit} className="mt-10 space-y-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email"
            autoComplete="username webauthn"
            disabled={busy}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={busy || !email.trim()}
          >
            {busy ? <Loader2 className="animate-spin" /> : <KeyRound />}
            {mode === 'register'
              ? 'Create passkey'
              : 'Sign in with passkey'}
          </Button>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}
        {notice && !error && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {notice}
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            setMode((m) => (m === 'sign-in' ? 'register' : 'sign-in'))
            setError(null)
            setNotice(null)
          }}
          className="mx-auto mt-6 block text-xs text-muted-foreground/70 transition-colors hover:text-foreground"
          disabled={busy}
        >
          {mode === 'sign-in'
            ? 'First time? Set up a passkey'
            : 'Already have a passkey? Sign in'}
        </button>
      </div>
    </div>
  )
}
