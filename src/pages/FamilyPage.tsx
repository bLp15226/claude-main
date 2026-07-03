import { SectionScaffold } from '@/components/layout/SectionScaffold'
import { sections } from '@/config/sections'
import { GoalsPanel } from '@/features/goals/GoalsPanel'
import { useGoals } from '@/features/goals/useGoals'
import { VoiceAssistant } from '@/features/voice/VoiceAssistant'
import { personasForSection } from '@/features/voice/personas'
import { interpretFamily } from '@/features/voice/familyCommands'
import type { Persona } from '@/features/voice/personas'

const section = sections.find((s) => s.path === '/family')!

export function FamilyPage() {
  const personas = personasForSection('/family')
  const goalsState = useGoals('family')
  const { add } = goalsState

  // Voice assistant (Phase 1): the simple command reader runs the action and
  // returns Kurt's spoken reply, same seam Workouts' interpret() uses.
  const handleVoice = (text: string, persona: Persona): string => {
    const cmd = interpretFamily(text, persona)
    if (cmd.kind === 'add_task') add({ kind: 'task', title: cmd.title, timeframe: null })
    if (cmd.kind === 'add_goal') add({ kind: 'goal', title: cmd.title, timeframe: cmd.timeframe })
    return cmd.reply
  }

  return (
    <div>
      <SectionScaffold section={section}>
        <GoalsPanel {...goalsState} />
      </SectionScaffold>
      {personas.length > 0 && (
        <VoiceAssistant personas={personas} onCommand={handleVoice} />
      )}
    </div>
  )
}
