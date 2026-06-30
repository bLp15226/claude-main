import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MobileNav } from './MobileNav'

/**
 * The persistent frame around every section: navigation rail on desktop,
 * a brand bar + bottom tabs on mobile. Section pages render into <Outlet />.
 */
export function AppShell() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="flex min-h-dvh">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile-only brand bar */}
          <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border/70 bg-surface/80 px-5 backdrop-blur md:hidden">
            <span className="font-serif text-xl font-medium tracking-wide">
              Command<span className="text-primary">.</span>
            </span>
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
