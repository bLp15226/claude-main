import { Plus, Trash2 } from 'lucide-react'
import { SetRow } from './SetRow'
import type { Exercise, WorkoutSet } from './types'

interface ExerciseBlockProps {
  exercise: Exercise
  onAddSet: () => void
  onUpdateSet: (
    setId: string,
    patch: Partial<Pick<WorkoutSet, 'weight' | 'reps'>>,
  ) => void
  onRemoveSet: (setId: string) => void
  onRemove: () => void
}

export function ExerciseBlock({
  exercise,
  onAddSet,
  onUpdateSet,
  onRemoveSet,
  onRemove,
}: ExerciseBlockProps) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/40 p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-medium text-foreground">{exercise.name}</h3>
        <button
          type="button"
          aria-label={`Remove ${exercise.name}`}
          onClick={onRemove}
          className="shrink-0 text-muted-foreground/40 transition hover:text-foreground"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      {exercise.sets.length > 0 && (
        <ul className="mt-2">
          {exercise.sets.map((set, i) => (
            <SetRow
              key={set.id}
              index={i}
              set={set}
              onChange={(patch) => onUpdateSet(set.id, patch)}
              onRemove={() => onRemoveSet(set.id)}
            />
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={onAddSet}
        className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary/90 transition-colors hover:text-primary"
      >
        <Plus className="size-4" />
        Add set
      </button>
    </div>
  )
}
