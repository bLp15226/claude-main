import { useCallback, useEffect, useState } from 'react'
import { workoutRepo } from './repo'
import type { Exercise, Workout, WorkoutSet } from './types'

/** A fresh set that copies the previous set's weight/reps as a starting point
 *  (you usually repeat the last set, then tweak). */
function nextSet(prev: WorkoutSet[]): WorkoutSet {
  const last = prev[prev.length - 1]
  return {
    id: crypto.randomUUID(),
    weight: last?.weight ?? null,
    reps: last?.reps ?? null,
  }
}

/**
 * Loads workouts and exposes mutations. Updates are optimistic: local state
 * changes immediately, then the repo persists in the background. Nested edits
 * (exercises, sets) are expressed as pure updates to a single workout.
 */
export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    workoutRepo
      .list()
      .then((data) => active && setWorkouts(data))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  // Apply a pure update to one workout: optimistic state + persist the result.
  const mutate = useCallback(
    (id: string, fn: (workout: Workout) => Workout) => {
      setWorkouts((prev) => {
        const next = prev.map((w) => (w.id === id ? fn(w) : w))
        const changed = next.find((w) => w.id === id)
        if (changed) void workoutRepo.save(changed)
        return next
      })
    },
    [],
  )

  const addWorkout = useCallback((title: string) => {
    const workout: Workout = {
      id: crypto.randomUUID(),
      title: title.trim() || 'Workout',
      performed_at: new Date().toISOString(),
      exercises: [],
    }
    setWorkouts((prev) => [workout, ...prev])
    void workoutRepo.save(workout)
  }, [])

  const removeWorkout = useCallback((id: string) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id))
    void workoutRepo.remove(id)
  }, [])

  const addExercise = useCallback(
    (workoutId: string, name: string) => {
      const exercise: Exercise = {
        id: crypto.randomUUID(),
        name: name.trim(),
        sets: [],
      }
      mutate(workoutId, (w) => ({
        ...w,
        exercises: [...w.exercises, exercise],
      }))
    },
    [mutate],
  )

  const removeExercise = useCallback(
    (workoutId: string, exerciseId: string) => {
      mutate(workoutId, (w) => ({
        ...w,
        exercises: w.exercises.filter((e) => e.id !== exerciseId),
      }))
    },
    [mutate],
  )

  const addSet = useCallback(
    (workoutId: string, exerciseId: string) => {
      mutate(workoutId, (w) => ({
        ...w,
        exercises: w.exercises.map((e) =>
          e.id === exerciseId ? { ...e, sets: [...e.sets, nextSet(e.sets)] } : e,
        ),
      }))
    },
    [mutate],
  )

  const updateSet = useCallback(
    (
      workoutId: string,
      exerciseId: string,
      setId: string,
      patch: Partial<Pick<WorkoutSet, 'weight' | 'reps'>>,
    ) => {
      mutate(workoutId, (w) => ({
        ...w,
        exercises: w.exercises.map((e) =>
          e.id === exerciseId
            ? {
                ...e,
                sets: e.sets.map((s) =>
                  s.id === setId ? { ...s, ...patch } : s,
                ),
              }
            : e,
        ),
      }))
    },
    [mutate],
  )

  const removeSet = useCallback(
    (workoutId: string, exerciseId: string, setId: string) => {
      mutate(workoutId, (w) => ({
        ...w,
        exercises: w.exercises.map((e) =>
          e.id === exerciseId
            ? { ...e, sets: e.sets.filter((s) => s.id !== setId) }
            : e,
        ),
      }))
    },
    [mutate],
  )

  return {
    workouts,
    loading,
    addWorkout,
    removeWorkout,
    addExercise,
    removeExercise,
    addSet,
    updateSet,
    removeSet,
  }
}
