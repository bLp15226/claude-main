import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

type AuthStatus = 'loading' | 'signed-in' | 'signed-out'

interface AuthValue {
  /** 'local' = no cloud configured (no login needed); 'cloud' = Supabase. */
  mode: 'local' | 'cloud'
  status: AuthStatus
  user: User | null
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthValue | null>(null)

/**
 * Provides auth state. In local mode (no Supabase env) there is no login and
 * the app behaves exactly as before. In cloud mode it tracks the Supabase
 * session so the rest of the app can gate on sign-in.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  if (!isSupabaseConfigured || !supabase) {
    const value: AuthValue = {
      mode: 'local',
      status: 'signed-in',
      user: null,
      signOut: async () => {},
    }
    return <AuthContext value={value}>{children}</AuthContext>
  }
  return <CloudAuthProvider>{children}</CloudAuthProvider>
}

function CloudAuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const apply = (session: Session | null) => {
      setUser(session?.user ?? null)
      setStatus(session ? 'signed-in' : 'signed-out')
    }

    supabase!.auth.getSession().then(({ data }) => apply(data.session))
    const { data: sub } = supabase!.auth.onAuthStateChange((_event, session) =>
      apply(session),
    )
    return () => sub.subscription.unsubscribe()
  }, [])

  const value: AuthValue = {
    mode: 'cloud',
    status,
    user,
    signOut: async () => {
      await supabase!.auth.signOut()
    },
  }
  return <AuthContext value={value}>{children}</AuthContext>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
