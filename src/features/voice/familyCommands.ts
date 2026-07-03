import type { Persona } from './personas'
import { stripWake, pick } from './commands'

/**
 * Phase-1 "brain" for the Family section: a small, deterministic command
 * reader that understands "add a goal/task ...", "mark ... done," and a
 * status query, and performs the real action — same seam Workouts'
 * `interpret()` uses. The calendar isn't built yet, so anything else falls
 * back to in-character banter.
 */
export type FamilyCommand =
  | { kind: 'add_task'; title: string; reply: string }
  | { kind: 'add_goal'; title: string; timeframe: 'weekly' | 'monthly'; reply: string }
  | { kind: 'complete_item'; query: string }
  | { kind: 'status' }
  | { kind: 'unknown'; reply: string }

const GOAL_FILLER =
  /\b(this week|this month|a|an|the|to|for|please|add|new|set|weekly|monthly|goal|my|of)\b/gi
const TASK_FILLER = /\b(a|an|the|to|for|please|add|new|task|today|my|of)\b/gi
const COMPLETE_FILLER = /\b(mark|complete|finish|done|as|the|a|an|please|task|goal|my)\b/gi

function extractTitle(text: string, filler: RegExp): string {
  const stripped = text.replace(filler, ' ').replace(/\s+/g, ' ').trim()
  return stripped ? stripped[0].toUpperCase() + stripped.slice(1) : ''
}

export function interpretFamily(rawText: string, persona: Persona): FamilyCommand {
  const text = stripWake(rawText, persona)

  if (!text || /^(hi|hello|hey)\b/.test(text)) {
    return { kind: 'unknown', reply: `${pick(persona.interjections)} ${pick(persona.catchphrases)}` }
  }

  if (/\b(what'?s on my list|what are my (tasks|goals)|how (am i|are we) doing|status)\b/.test(text)) {
    return { kind: 'status' }
  }

  if (/\bmark\b.*\bdone\b/.test(text) || /\b(complete|finish)\b/.test(text)) {
    const query = extractTitle(text, COMPLETE_FILLER)
    if (query) return { kind: 'complete_item', query }
  }

  if (/\bgoal\b/.test(text)) {
    const timeframe: 'weekly' | 'monthly' = /\bmonth/.test(text) ? 'monthly' : 'weekly'
    const title = extractTitle(text, GOAL_FILLER)
    if (title) {
      return {
        kind: 'add_goal',
        title,
        timeframe,
        reply: `${pick(persona.interjections)} "${title}" — pinned as a ${timeframe} goal. ${pick(persona.catchphrases)}`,
      }
    }
  }

  if (/\btask\b/.test(text)) {
    const title = extractTitle(text, TASK_FILLER)
    if (title) {
      return {
        kind: 'add_task',
        title,
        reply: `${pick(persona.interjections)} "${title}" — added to today's tasks. ${pick(persona.catchphrases)}`,
      }
    }
  }

  return {
    kind: 'unknown',
    reply:
      `${persona.name} here. Try "add a task to call the dentist," "add a monthly ` +
      `goal to plan the trip," "mark the dentist task done," or "what's on my list." ` +
      `The calendar's still backstage.`,
  }
}
