import type { Persona } from './personas'

/**
 * The Phase-1 "brain": a small, deterministic command reader for the Workouts
 * domain. It understands a couple of obvious patterns (e.g. "add bench press",
 * "add a set of pushups") so the voice loop genuinely DOES something today.
 *
 * This is intentionally simple — real natural-language understanding is the
 * Claude-powered Phase 2, which slots in behind this same interpret() seam.
 */
export type Command =
  | { kind: 'add_exercise'; exercise: string; reply: string }
  | { kind: 'unknown'; reply: string }

/** Strip a persona's wake words and common politeness from the front. */
function stripWake(text: string, persona: Persona): string {
  let t = text.toLowerCase().trim()
  for (const w of [...persona.wakeWords, 'hey', 'ok', 'okay']) {
    if (t.startsWith(w)) t = t.slice(w.length).trim()
  }
  return t.replace(/^[,.\s]+/, '').replace(/^(please|can you|could you|would you)\s+/i, '')
}

// Filler that surrounds the exercise name in a spoken "add" command.
const FILLER =
  /\b(a set of|sets of|some sets of|a|an|some|set of|new|exercise|to (my|the) workout|to my list|at the end|of (my|the) workout|today|right now|now|please|for me)\b/gi

function titleCase(s: string): string {
  return s
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ')
}

/** Turn spoken text into a workout command + a persona-flavored reply. */
export function interpret(rawText: string, persona: Persona): Command {
  const text = stripWake(rawText, persona)

  if (/\badd\b/.test(text)) {
    // Everything after the first "add", with filler words removed.
    const after = text.slice(text.indexOf('add') + 3)
    const exercise = titleCase(after.replace(FILLER, ' ').replace(/[^a-z\s]/gi, ' ').trim())
    if (exercise) {
      return {
        kind: 'add_exercise',
        exercise,
        reply: `${persona.interjection} ${exercise} — locked into today's workout. ${persona.catchphrase}`,
      }
    }
  }

  return {
    kind: 'unknown',
    reply:
      `${persona.name} here. Right now I can add exercises — try ` +
      `"add bench press". The smart stuff arrives once we connect the brain.`,
  }
}
