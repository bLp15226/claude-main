import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Section } from '@/config/sections'

interface SectionScaffoldProps {
  section: Section
  /** Optional custom header; falls back to the standard text PageHeader. */
  header?: ReactNode
}

/**
 * Branded placeholder for a section that isn't built out yet. Shows the
 * section's identity plus its planned features as elegant "Planned" cards,
 * so each screen feels intentional rather than empty.
 */
export function SectionScaffold({ section, header }: SectionScaffoldProps) {
  return (
    <div>
      {header ?? (
        <PageHeader
          title={section.label}
          voice={section.voice}
          tagline={section.tagline}
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {section.features.map((feature) => (
          <Card
            key={feature.title}
            className="transition-colors duration-200 hover:border-primary/30"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <CardTitle>{feature.title}</CardTitle>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  Planned
                </span>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
