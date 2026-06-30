import type { Workout } from './types'

/** One day's data point for an exercise's progress line. */
export interface ProgressPoint {
  /** Day key, YYYY-MM-DD. */
  date: string
  /** Local-midnight timestamp for that day, used for the x-scale. */
  time: number
  /** Total volume (weight × reps, summed) for the exercise that day. */
  value: number
  /** The individual sets behind the value, for the day-detail readout. */
  sets: { weight: number | null; reps: number | null }[]
}

/** Distinct exercise names that have at least one logged set (weight + reps),
 *  so the picker only offers lifts there's actually a trend to draw. */
export function exercisesWithData(workouts: Workout[]): string[] {
  const names = new Set<string>()
  for (const w of workouts) {
    for (const e of w.exercises) {
      if (e.sets.some((s) => (s.weight ?? 0) > 0 && (s.reps ?? 0) > 0)) {
        names.add(e.name)
      }
    }
  }
  return [...names].sort((a, b) => a.localeCompare(b))
}

/** Parse a YYYY-MM-DD key as LOCAL midnight (avoids UTC day-shift). */
function localMidnight(dayKey: string): number {
  const [y, m, d] = dayKey.split('-').map(Number)
  return new Date(y, m - 1, d).getTime()
}

/**
 * Per-day total-volume series for one exercise, ascending by date. Multiple
 * sessions of the same exercise on one day are summed into a single point.
 * `days` limits to a trailing window (e.g. 30); omit/Infinity for all time.
 */
export function exerciseVolumeSeries(
  workouts: Workout[],
  name: string,
  days = Infinity,
): ProgressPoint[] {
  const cutoff = Number.isFinite(days) ? Date.now() - days * 86_400_000 : -Infinity
  const byDay = new Map<string, ProgressPoint>()

  for (const w of workouts) {
    if (new Date(w.performed_at).getTime() < cutoff) continue
    const matches = w.exercises.filter((e) => e.name === name)
    if (matches.length === 0) continue

    const key = w.performed_at.slice(0, 10) // YYYY-MM-DD
    let point = byDay.get(key)
    if (!point) {
      point = { date: key, time: localMidnight(key), value: 0, sets: [] }
      byDay.set(key, point)
    }
    for (const e of matches) {
      for (const s of e.sets) {
        point.value += (s.weight ?? 0) * (s.reps ?? 0)
        point.sets.push({ weight: s.weight, reps: s.reps })
      }
    }
  }

  return [...byDay.values()].sort((a, b) => a.time - b.time)
}
