import { Outlet, useLocation, Link } from 'react-router-dom'
import { Settings } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { MobileNav } from './MobileNav'
import { useSectionBackground } from '@/features/settings/useSectionBackground'

/**
 * The persistent frame around every section: navigation rail on desktop,
 * a brand bar + bottom tabs on mobile. Section pages render into <Outlet />.
 */
export function AppShell() {
  const { pathname } = useLocation()
  const { url: backgroundUrl, position } = useSectionBackground(pathname)

  return (
    <div className="relative min-h-dvh text-foreground">
      {/* Optional per-section background photo, set in Settings. Dimmed with a
          dark tint (matching the app's background color) baked into the same
          layer, so it never fights with the solid canvas color underneath. */}
      {backgroundUrl && (
        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 11, 0.82), rgba(10, 10, 11, 0.82)), url(${backgroundUrl})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      )}

      <div className="flex min-h-dvh">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile-only brand bar */}
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/70 bg-surface/80 px-5 backdrop-blur md:hidden">
            <span className="font-serif text-xl font-medium tracking-wide">
              Command<span className="text-primary">.</span>
            </span>
            <Link
              to="/settings"
              aria-label="Settings"
              className="text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              <Settings className="size-5" />
            </Link>
          </header>

          <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-28 pt-8 sm:px-8 md:pb-12 lg:px-12 lg:pt-12">
            <Outlet />
          </main>
        </div>
      </div>

      <MobileNav />
    </div>
  )
}
