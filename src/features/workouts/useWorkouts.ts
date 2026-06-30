import { useCallback, useEffect, useRef, useState } from 'react'
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
 * changes immediately, then the repo persists in the background.
 *
 * Persistence is kept OUT of the setState updater (it lives in `commit`, called
 * once per action) — React 18 StrictMode invokes updaters twice in dev, so a
 * save inside one would run twice and, for duplicate, create a phantom copy.
 * We mirror state in a ref so each action computes the next state synchronously.
 */
export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)
  const ref = useRef<Workout[]>([])

  useEffect(() => {
    let active = true
    workoutRepo
      .list()
      .then((data) => {
        if (!active) return
        ref.current = data
        setWorkouts(data)
      })
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  // Single place that updates both the ref mirror and React state.
  const commit = useCallback((next: Workout[]) => {
    ref.current = next
    setWorkouts(next)
  }, [])

  // Apply a pure update to one workout, then persist just that workout.
  const mutate = useCallback(
    (id: string, fn: (workout: Workout) => Workout) => {
      const next = ref.current.map((w) => (w.id === id ? fn(w) : w))
      commit(next)
      const changed = next.find((w) => w.id === id)
      if (changed) void workoutRepo.save(changed)
    },
    [commit],
  )

  const addWorkout = useCallback(
    (title: string) => {
      const workout: Workout = {
        id: crypto.randomUUID(),
        title: title.trim() || 'Workout',
        performed_at: new Date().toISOString(),
        exercises: [],
      }
      commit([workout, ...ref.current])
      void workoutRepo.save(workout)
    },
    [commit],
  )

  const removeWorkout = useCallback(
    (id: string) => {
      commit(ref.current.filter((w) => w.id !== id))
      void workoutRepo.remove(id)
    },
    [commit],
  )

  // Start a fresh workout from a past one: same exercises, with last time's
  // weights/reps copied in as a starting point (targets to beat). New ids
  // throughout so the original stays untouched.
  const duplicateWorkout = useCallback(
    (id: string) => {
      const source = ref.current.find((w) => w.id === id)
      if (!source) return
      const copy: Workout = {
        id: crypto.randomUUID(),
        title: source.title,
        performed_at: new Date().toISOString(),
        exercises: source.exercises.map((e) => ({
          id: crypto.randomUUID(),
          name: e.name,
          sets: e.sets.map((s) => ({
            id: crypto.randomUUID(),
            weight: s.weight,
            reps: s.reps,
          })),
        })),
      }
      commit([copy, ...ref.current])
      void workoutRepo.save(copy)
    },
    [commit],
  )

  // Voice/quick-log primitive: ensure there's a workout for today, then add the
  // named exercise (reusing it if already present) with one fresh set. Returns
  // nothing — it just lands the change, like the other actions.
  const logExercise = useCallback(
    (name: string) => {
      const today = new Date().toISOString().slice(0, 10)
      const list = ref.current
      const head = list[0]
      const useHead = head && head.performed_at.slice(0, 10) === today

      const target: Workout = useHead
        ? head
        : {
            id: crypto.randomUUID(),
            title: 'Workout',
            performed_at: new Date().toISOString(),
            exercises: [],
          }

      const existing = target.exercises.find(
        (e) => e.name.toLowerCase() === name.toLowerCase(),
      )
      const exercises = existing
        ? target.exercises.map((e) =>
            e === existing ? { ...e, sets: [...e.sets, nextSet(e.sets)] } : e,
          )
        : [...target.exercises, { id: crypto.randomUUID(), name, sets: [nextSet([])] }]

      const updated: Workout = { ...target, exercises }
      const next = useHead
        ? list.map((w) => (w.id === updated.id ? updated : w))
        : [updated, ...list]
      commit(next)
      void workoutRepo.save(updated)
    },
    [commit],
  )

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
    duplicateWorkout,
    logExercise,
    addExercise,
    removeExercise,
    addSet,
    updateSet,
    removeSet,
  }
}
