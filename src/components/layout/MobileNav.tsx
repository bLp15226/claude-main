import { NavLink } from 'react-router-dom'
import { sections } from '@/config/sections'
import { cn } from '@/lib/utils'

/** Bottom tab bar for phones. Hidden from md: up (rail takes over). */
export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border/70 bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      {sections.map((section) => {
        const Icon = section.icon
        return (
          <NavLink
            key={section.path}
            to={section.path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-1 py-3 text-[11px] transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              )
            }
          >
            <Icon className="size-5" />
            <span className="font-medium tracking-wide">
              {section.shortLabel}
            </span>
          </NavLink>
        )
      })}
    </nav>
  )
}
