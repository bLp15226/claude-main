import { sections } from '@/config/sections'

const section = sections.find((s) => s.path === '/business')!

/**
 * Business section header. Uses the full PHC logo (designed for a black
 * background, which this section already is) as the masthead, with the
 * Aurelius voice label and tagline beneath.
 */
export function BusinessHeader() {
  return (
    <header className="mb-10 lg:mb-14">
      <img
        src="/phc-logo.png"
        alt="Premier Haven Co."
        className="h-auto w-[clamp(220px,40vw,340px)]"
      />
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary/90">
        Voice · {section.voice}
      </p>
      <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
        {section.tagline}
      </p>
    </header>
  )
}
