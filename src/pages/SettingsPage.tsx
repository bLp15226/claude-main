import { PageHeader } from '@/components/layout/PageHeader'
import { sections } from '@/config/sections'
import { SectionBackgroundCard } from '@/features/settings/SectionBackgroundCard'

export function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        voice={null}
        tagline="Personalize each section with your own background photo — saved on this device."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <SectionBackgroundCard key={section.path} section={section} />
        ))}
      </div>
    </div>
  )
}
