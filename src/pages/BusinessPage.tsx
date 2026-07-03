import { SectionScaffold } from '@/components/layout/SectionScaffold'
import { BusinessHeader } from '@/features/business/BusinessHeader'
import { GoalsPanel } from '@/features/goals/GoalsPanel'
import { useGoals } from '@/features/goals/useGoals'
import { sections } from '@/config/sections'

const section = sections.find((s) => s.path === '/business')!

export function BusinessPage() {
  const goalsState = useGoals('business')

  return (
    <SectionScaffold section={section} header={<BusinessHeader />}>
      <GoalsPanel {...goalsState} />
    </SectionScaffold>
  )
}
