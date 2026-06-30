import type { Workout } from './types'

/**
 * The workout data layer. The UI only ever talks to this interface, so we can
 * swap storage backends without touching components — exactly like groceries.
 *   - localRepo: saves to this device (works with no setup, used now)
 *   - hevyRepo:  live Hevy data (added later, once an API key is wired
 *                server-side; see the placeholder at the bottom)
 *
 * `save` is an upsert: it creates the workout if new, replaces it if it exists.
 * Persisting whole workouts keeps this interface tiny and maps cleanly onto
 * Hevy's "post a workout" endpoint when we get there.
 */
export interface WorkoutRepo {
  list(): Promise<Workout[]>
  save(workout: Workout): Promise<void>
  remove(id: string): Promise<void>
}

// Most-recent first.
const byRecent = (a: Workout, b: Workout) =>
  b.performed_at.localeCompare(a.performed_at)

// ── Local (device) implementation ──────────────────────────────────────────
const STORAGE_KEY = 'pd:workouts'

function readLocal(): Workout[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Workout[]) : []
  } catch {
    return []
  }
}

function writeLocal(workouts: Workout[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts))
}

const localRepo: WorkoutRepo = {
  async list() {
    return readLocal().sort(byRecent)
  },
  async save(workout) {
    const all = readLocal()
    const idx = all.findIndex((w) => w.id === workout.id)
    if (idx >= 0) all[idx] = workout
    else all.push(workout)
    writeLocal(all)
  },
  async remove(id) {
    writeLocal(readLocal().filter((w) => w.id !== id))
  },
}

// ── Hevy (cloud) implementation ────────────────────────────────────────────
// Placeholder. Hevy's API needs an API key kept server-side (never in the
// frontend bundle), so the real adapter lands once that's wired — the same way
// groceries swaps to Supabase. Until then we always use the device.
export const usingHevy = false

/** The active data layer for the rest of the app to use. */
export const workoutRepo: WorkoutRepo = localRepo
