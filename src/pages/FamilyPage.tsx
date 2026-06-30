import { SectionScaffold } from '@/components/layout/SectionScaffold'
import { sections } from '@/config/sections'

const section = sections.find((s) => s.path === '/family')!

export function FamilyPage() {
  return <SectionScaffold section={section} />
}
