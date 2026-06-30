import { useMemo } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { sections } from '@/config/sections'
import { NewWorkoutForm } from '@/features/workouts/NewWorkoutForm'
import { WorkoutCard } from '@/features/workouts/WorkoutCard'
import { useWorkouts } from '@/features/workouts/useWorkouts'
import { usingHevy } from '@/features/workouts/repo'
import { WEIGHT_UNIT, workoutVolume } from '@/features/workouts/types'

const section = sections.find((s) => s.path === '/workouts')!

export function WorkoutsPage() {
  const {
    workouts,
    loading,
    addWorkout,
    removeWorkout,
    duplicateWorkout,
    addExercise,
    removeExercise,
    addSet,
    updateSet,
    removeSet,
  } = useWorkouts()

  // Distinct exercise names across all workouts, for add-exercise autocomplete.
  const exerciseSuggestions = useMemo(
    () =>
      [
        ...new Set(
          workouts.flatMap((w) => w.exercises.map((e) => e.name)),
        ),
      ].sort((a, b) => a.localeCompare(b)),
    [workouts],
  )

  const totalVolume = useMemo(
    () => workouts.reduce((sum, w) => sum + workoutVolume(w), 0),
    [workouts],
  )

  return (
    <div>
      <PageHeader
        title={section.label}
        voice={section.voice}
        tagline={section.tagline}
      />

      <NewWorkoutForm onStart={addWorkout} />

      {/* Lifetime tally — a number the Coach can hype */}
      {workouts.length > 0 && totalVolume > 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-medium tabular-nums text-primary/90">
            {totalVolume.toLocaleString()} {WEIGHT_UNIT}
          </span>{' '}
          moved across{' '}
          <span className="tabular-nums">{workouts.length}</span>{' '}
          {workouts.length === 1 ? 'workout' : 'workouts'}. Keep stacking it.
        </p>
      )}

      {/* List / states */}
      <div className="mt-6 space-y-4">
        {loading ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            Loading your training log…
          </p>
        ) : workouts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-16 text-center">
            <p className="font-serif text-xl text-foreground">
              No workouts logged yet
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              The first rep is the hardest. Name a workout above and let's go.
            </p>
          </div>
        ) : (
          workouts.map((workout, index) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              exerciseSuggestions={exerciseSuggestions}
              defaultExpanded={index === 0}
              onRemove={() => removeWorkout(workout.id)}
              onDuplicate={() => duplicateWorkout(workout.id)}
              onAddExercise={(name) => addExercise(workout.id, name)}
              onRemoveExercise={(exerciseId) =>
                removeExercise(workout.id, exerciseId)
              }
              onAddSet={(exerciseId) => addSet(workout.id, exerciseId)}
              onUpdateSet={(exerciseId, setId, patch) =>
                updateSet(workout.id, exerciseId, setId, patch)
              }
              onRemoveSet={(exerciseId, setId) =>
                removeSet(workout.id, exerciseId, setId)
              }
            />
          ))
        )}
      </div>

      {/* Storage indicator */}
      {!loading && (
        <p className="mt-10 text-xs text-muted-foreground/60">
          {usingHevy
            ? 'Synced with Hevy.'
            : 'Saved on this device. Hevy sync lights up once your API key is connected.'}
        </p>
      )}
    </div>
  )
}
