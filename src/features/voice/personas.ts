/**
 * Voice personas. Each section can have a roster of named characters you address
 * by a wake word ("Hey Arnold…"). For now these drive the persona's text replies
 * and which device voice is chosen; later the `blurb` becomes the system prompt
 * for the real (Claude-powered) brain, and `voiceHint` maps to a premium voice.
 *
 * NOTE: these are ORIGINAL characters in a *style* (e.g. a big accented gym
 * coach) — not clones of real people. Quality TTS providers forbid cloning real
 * voices without consent, so we evoke the vibe rather than impersonate anyone.
 */
export interface Persona {
  id: string
  /** Display + spoken name; also the wake word stem. */
  name: string
  /** Phrases that address this persona, lowercased. */
  wakeWords: string[]
  /** Section route this persona belongs to. */
  section: string
  /** One-line personality (future LLM system prompt seed). */
  blurb: string
  /** A signature line the persona can drop into replies. */
  catchphrase: string
  /** An interjection used when confirming an action. */
  interjection: string
  /** Hints for picking a device voice now / a premium voice later. */
  voiceHint: { lang: string; namePrefs: string[]; pitch: number; rate: number }
}

export const PERSONAS: Persona[] = [
  {
    id: 'coach-arnold',
    name: 'Arnold',
    wakeWords: ['hey arnold', 'arnold', 'coach'],
    section: '/workouts',
    blurb:
      'An over-the-top, Austrian-accented strongman gym coach. Booming, ' +
      'relentlessly positive, allergic to excuses. Big energy, short sentences.',
    catchphrase: "Now move it — no excuses!",
    interjection: 'Ha!',
    voiceHint: { lang: 'en', namePrefs: ['Daniel', 'Google UK English Male', 'Male'], pitch: 0.7, rate: 0.95 },
  },
  {
    id: 'coach-pulse',
    name: 'Pulse',
    wakeWords: ['hey pulse', 'pulse'],
    section: '/workouts',
    blurb:
      'A hype-machine HIIT instructor. Fast, upbeat, encouraging — think a ' +
      'spin-class coach who genuinely believes in you.',
    catchphrase: "Let's GO — you've got another gear!",
    interjection: 'Yes!',
    voiceHint: { lang: 'en', namePrefs: ['Samantha', 'Google US English', 'Female'], pitch: 1.1, rate: 1.05 },
  },
]

/** Personas available for a given section route. */
export function personasForSection(section: string): Persona[] {
  return PERSONAS.filter((p) => p.section === section)
}
