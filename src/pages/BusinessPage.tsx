import { SectionScaffold } from '@/components/layout/SectionScaffold'
import { BusinessHeader } from '@/features/business/BusinessHeader'
import { sections } from '@/config/sections'

const section = sections.find((s) => s.path === '/business')!

export function BusinessPage() {
  return <SectionScaffold section={section} header={<BusinessHeader />} />
}
