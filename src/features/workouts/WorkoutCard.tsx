import { useState, type FormEvent } from 'react'
import { ChevronDown, ChevronRight, Copy, Plus, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ExerciseBlock } from './ExerciseBlock'
import {
  WEIGHT_UNIT,
  workoutSetCount,
  workoutVolume,
  type Workout,
  type WorkoutSet,
} from './types'

interface WorkoutCardProps {
  workout: Workout
  /** Previously-used exercise names, offered as autocomplete suggestions. */
  exerciseSuggestions: string[]
  /** Whether the card starts expanded (newest workout does; older collapse). */
  defaultExpanded?: boolean
  onRemove: () => void
  onDuplicate: () => void
  onAddExercise: (name: string) => void
  onRemoveExercise: (exerciseId: string) => void
  onAddSet: (exerciseId: string) => void
  onUpdateSet: (
    exerciseId: string,
    setId: string,
    patch: Partial<Pick<WorkoutSet, 'weight' | 'reps'>>,
  ) => void
  onRemoveSet: (exerciseId: string, setId: string) => void
}

const DATE_FMT: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
}

export function WorkoutCard({
  workout,
  exerciseSuggestions,
  defaultExpanded = true,
  onRemove,
  onDuplicate,
  onAddExercise,
  onRemoveExercise,
  onAddSet,
  onUpdateSet,
  onRemoveSet,
}: WorkoutCardProps) {
  const [exerciseName, setExerciseName] = useState('')
  const [expanded, setExpanded] = useState(defaultExpanded)

  const volume = workoutVolume(workout)
  const sets = workoutSetCount(workout)
  const date = new Date(workout.performed_at).toLocaleDateString(
    undefined,
    DATE_FMT,
  )

  const submitExercise = (e: FormEvent) => {
    e.preventDefault()
    const name = exerciseName.trim()
    if (!name) return
    onAddExercise(name)
    setExerciseName('')
  }

  const listId = `exercises-${workout.id}`

  return (
    <section className="rounded-xl border border-border bg-card">
      {/* Header */}
      <header
        className={`flex items-start justify-between gap-3 px-5 py-4 ${
          expanded ? 'border-b border-border/60' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex items-start gap-2 text-left"
        >
          {expanded ? (
            <ChevronDown className="mt-1 size-4 shrink-0 text-muted-foreground/50" />
          ) : (
            <ChevronRight className="mt-1 size-4 shrink-0 text-muted-foreground/50" />
          )}
          <span>
            <span className="block font-serif text-xl font-medium tracking-wide">
              {workout.title}
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground/70">
              {date}
            </span>
          </span>
        </button>
        <div className="flex items-center gap-4">
          {sets > 0 && (
            <div className="text-right">
              <p className="text-sm font-medium tabular-nums text-primary/90">
                {volume.toLocaleString()} {WEIGHT_UNIT}
              </p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                {sets} {sets === 1 ? 'set' : 'sets'} · volume
              </p>
            </div>
          )}
          <button
            type="button"
            aria-label={`Repeat ${workout.title}`}
            title="Start a new workout from this one"
            onClick={onDuplicate}
            className="shrink-0 text-muted-foreground/40 transition hover:text-primary"
          >
            <Copy className="size-4" />
          </button>
          <button
            type="button"
            aria-label={`Delete ${workout.title}`}
            onClick={onRemove}
            className="shrink-0 text-muted-foreground/40 transition hover:text-foreground"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </header>

      {/* Exercises */}
      {expanded && (
      <div className="space-y-3 px-5 py-4">
        {workout.exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            exercise={exercise}
            onAddSet={() => onAddSet(exercise.id)}
            onUpdateSet={(setId, patch) =>
              onUpdateSet(exercise.id, setId, patch)
            }
            onRemoveSet={(setId) => onRemoveSet(exercise.id, setId)}
            onRemove={() => onRemoveExercise(exercise.id)}
          />
        ))}

        {/* Add exercise */}
        <form onSubmit={submitExercise} className="flex gap-2">
          <Input
            list={listId}
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="Add an exercise… (e.g. Bench Press)"
            aria-label="Exercise name"
            autoComplete="off"
            className="h-9"
          />
          <datalist id={listId}>
            {exerciseSuggestions.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
          <button
            type="submit"
            disabled={!exerciseName.trim()}
            aria-label="Add exercise"
            className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border border-border px-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
          >
            <Plus className="size-4" />
          </button>
        </form>
      </div>
      )}
    </section>
  )
}
