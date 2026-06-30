interface PageHeaderProps {
  title: string
  voice: string | null
  tagline: string
}

/** Section identity block: voice persona, serif title, and tagline. */
export function PageHeader({ title, voice, tagline }: PageHeaderProps) {
  return (
    <header className="mb-10 lg:mb-14">
      {voice && (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary/90">
          Voice · {voice}
        </p>
      )}
      <h1 className="font-serif text-4xl font-medium tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        {tagline}
      </p>
    </header>
  )
}
