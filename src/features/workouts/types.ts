/** One set within an exercise: the weight used and reps performed at it. */
export interface WorkoutSet {
  id: string
  weight: number | null
  reps: number | null
}

/** A single exercise within a workout, plus its logged sets. */
export interface Exercise {
  id: string
  name: string
  sets: WorkoutSet[]
}

/**
 * A logged workout session. The shape loosely mirrors Hevy's workout model
 * (title, timestamp, exercises → sets) so the Hevy data layer can map onto it
 * later without changing the UI.
 */
export interface Workout {
  id: string
  title: string
  /** ISO timestamp of when the workout was performed. */
  performed_at: string
  exercises: Exercise[]
}

/** Weight unit shown in the UI. Stored numbers are in this unit. */
export const WEIGHT_UNIT = 'lb' as const

/** Total volume (weight × reps, summed across every set) for one workout. */
export function workoutVolume(workout: Workout): number {
  let total = 0
  for (const exercise of workout.exercises) {
    for (const set of exercise.sets) {
      total += (set.weight ?? 0) * (set.reps ?? 0)
    }
  }
  return Math.round(total)
}

/** How many sets are logged across the whole workout. */
export function workoutSetCount(workout: Workout): number {
  return workout.exercises.reduce((n, e) => n + e.sets.length, 0)
}
