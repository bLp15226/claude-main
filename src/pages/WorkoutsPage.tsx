import { SectionScaffold } from '@/components/layout/SectionScaffold'
import { sections } from '@/config/sections'

const section = sections.find((s) => s.path === '/workouts')!

export function WorkoutsPage() {
  return <SectionScaffold section={section} />
}
