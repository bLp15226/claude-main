import type { Persona } from './personas'
import { stripWake } from './commands'

/**
 * Phase-1 "brain" for the Family section: a small, deterministic command
 * reader that understands "add a goal/task ..." and performs the real
 * action, same seam Workouts' `interpret()` uses. The calendar isn't built
 * yet, so anything else falls back to in-character banter.
 */
export type FamilyCommand =
  | { kind: 'add_task'; title: string; reply: string }
  | { kind: 'add_goal'; title: string; timeframe: 'weekly' | 'monthly'; reply: string }
  | { kind: 'unknown'; reply: string }

const GOAL_FILLER =
  /\b(this week|this month|a|an|the|to|for|please|add|new|set|weekly|monthly|goal|my|of)\b/gi
const TASK_FILLER = /\b(a|an|the|to|for|please|add|new|task|today|my|of)\b/gi

function extractTitle(text: string, filler: RegExp): string {
  const stripped = text.replace(filler, ' ').replace(/\s+/g, ' ').trim()
  return stripped ? stripped[0].toUpperCase() + stripped.slice(1) : ''
}

export function interpretFamily(rawText: string, persona: Persona): FamilyCommand {
  const text = stripWake(rawText, persona)

  if (!text || /^(hi|hello|hey)\b/.test(text)) {
    return { kind: 'unknown', reply: `${persona.interjection} ${persona.catchphrase}` }
  }

  if (/\bgoal\b/.test(text)) {
    const timeframe: 'weekly' | 'monthly' = /\bmonth/.test(text) ? 'monthly' : 'weekly'
    const title = extractTitle(text, GOAL_FILLER)
    if (title) {
      return {
        kind: 'add_goal',
        title,
        timeframe,
        reply: `${persona.interjection} "${title}" — pinned as a ${timeframe} goal. ${persona.catchphrase}`,
      }
    }
  }

  if (/\btask\b/.test(text)) {
    const title = extractTitle(text, TASK_FILLER)
    if (title) {
      return {
        kind: 'add_task',
        title,
        reply: `${persona.interjection} "${title}" — added to today's tasks. ${persona.catchphrase}`,
      }
    }
  }

  return {
    kind: 'unknown',
    reply:
      `${persona.name} here. Right now I can add goals and tasks — try ` +
      `"add a task to call the dentist" or "add a monthly goal to plan the trip." ` +
      `The calendar's still backstage.`,
  }
}
