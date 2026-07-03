import { NavLink } from 'react-router-dom'
import { Settings } from 'lucide-react'
import { sections } from '@/config/sections'
import { cn } from '@/lib/utils'
import { useAuth } from '@/features/auth/AuthProvider'

/** Desktop / Chromebook navigation rail. Hidden on small screens. */
export function Sidebar() {
  const { mode, user, signOut } = useAuth()
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 flex-col border-r border-border/70 bg-surface">
      {/* Brand mark */}
      <div className="flex items-start justify-between px-7 pt-9 pb-8">
        <div>
          <span className="font-serif text-2xl font-medium tracking-wide">
            Command<span className="text-primary">.</span>
          </span>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Center
          </p>
        </div>
        <NavLink
          to="/settings"
          aria-label="Settings"
          className={({ isActive }) =>
            cn(
              'mt-1 rounded-md p-1.5 transition-colors',
              isActive
                ? 'text-primary'
                : 'text-muted-foreground/60 hover:text-foreground',
            )
          }
        >
          <Settings className="size-[18px]" />
        </NavLink>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <NavLink
              key={section.path}
              to={section.path}
              className={({ isActive }) =>
                cn(
                  'group relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors',
                  isActive
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted-foreground hover:bg-card hover:text-foreground',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={cn(
                      'absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-primary transition-opacity',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <Icon
                    className={cn(
                      'size-[18px] transition-colors',
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground group-hover:text-foreground',
                    )}
                  />
                  <span className="font-medium">{section.label}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t border-border/60 px-7 py-6">
        {mode === 'cloud' ? (
          <>
            {user?.email && (
              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            )}
            <button
              type="button"
              onClick={signOut}
              className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              Sign out
            </button>
          </>
        ) : (
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Premium build
          </p>
        )}
      </div>
    </aside>
  )
}
