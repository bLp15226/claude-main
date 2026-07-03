import { SectionScaffold } from '@/components/layout/SectionScaffold'
import { sections } from '@/config/sections'
import { GoalsPanel } from '@/features/goals/GoalsPanel'
import { useGoals } from '@/features/goals/useGoals'
import { VoiceAssistant } from '@/features/voice/VoiceAssistant'
import { personasForSection } from '@/features/voice/personas'
import { interpretFamily } from '@/features/voice/familyCommands'
import { pick } from '@/features/voice/commands'
import type { Persona } from '@/features/voice/personas'

const section = sections.find((s) => s.path === '/family')!

export function FamilyPage() {
  const personas = personasForSection('/family')
  const goalsState = useGoals('family')
  const { goals, tasks, add, toggle } = goalsState

  // Voice assistant (Phase 1): the simple command reader runs the action and
  // returns Kurt's spoken reply, same seam Workouts' interpret() uses.
  // "complete_item"/"status" have no fixed reply — interpretFamily() can't see
  // the real list, so this page resolves them against the live goals/tasks.
  const handleVoice = (text: string, persona: Persona): string => {
    const cmd = interpretFamily(text, persona)
    if (cmd.kind === 'add_task') {
      add({ kind: 'task', title: cmd.title, timeframe: null })
      return cmd.reply
    }
    if (cmd.kind === 'add_goal') {
      add({ kind: 'goal', title: cmd.title, timeframe: cmd.timeframe })
      return cmd.reply
    }
    if (cmd.kind === 'complete_item') {
      const match = [...goals, ...tasks].find((i) =>
        i.title.toLowerCase().includes(cmd.query.toLowerCase()),
      )
      if (match) {
        toggle(match)
        return `${pick(persona.interjections)} "${match.title}" — marked done. ${pick(persona.catchphrases)}`
      }
      return `${pick(persona.interjections)} I don't see anything matching "${cmd.query}" on the list. ${pick(persona.catchphrases)}`
    }
    if (cmd.kind === 'status') {
      const openGoals = goals.filter((g) => !g.done).length
      const openTasks = tasks.filter((t) => !t.done).length
      return (
        `${pick(persona.interjections)} You've got ${openGoals} ${openGoals === 1 ? 'goal' : 'goals'} ` +
        `pinned and ${openTasks} ${openTasks === 1 ? 'task' : 'tasks'} waiting today. ${pick(persona.catchphrases)}`
      )
    }
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
