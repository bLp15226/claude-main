import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { WEIGHT_UNIT, type WorkoutSet } from './types'

interface SetRowProps {
  index: number
  set: WorkoutSet
  onChange: (patch: Partial<Pick<WorkoutSet, 'weight' | 'reps'>>) => void
  onRemove: () => void
}

/** Parse a number input into a number, or null when blank/invalid. */
function parseField(value: string): number | null {
  if (value.trim() === '') return null
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

export function SetRow({ index, set, onChange, onRemove }: SetRowProps) {
  return (
    <li className="group flex items-center gap-3 py-1.5">
      <span className="w-6 shrink-0 text-center text-xs tabular-nums text-muted-foreground/60">
        {index + 1}
      </span>

      <div className="flex items-center gap-1.5">
        <Input
          type="number"
          inputMode="decimal"
          min={0}
          value={set.weight ?? ''}
          onChange={(e) => onChange({ weight: parseField(e.target.value) })}
          placeholder="0"
          aria-label={`Set ${index + 1} weight`}
          className="h-9 w-20 text-center"
        />
        <span className="text-xs text-muted-foreground/70">{WEIGHT_UNIT}</span>
      </div>

      <span className="text-muted-foreground/40">×</span>

      <div className="flex items-center gap-1.5">
        <Input
          type="number"
          inputMode="numeric"
          min={0}
          value={set.reps ?? ''}
          onChange={(e) => onChange({ reps: parseField(e.target.value) })}
          placeholder="0"
          aria-label={`Set ${index + 1} reps`}
          className="h-9 w-20 text-center"
        />
        <span className="text-xs text-muted-foreground/70">reps</span>
      </div>

      <button
        type="button"
        aria-label={`Remove set ${index + 1}`}
        onClick={onRemove}
        className="ml-auto shrink-0 text-muted-foreground/40 opacity-0 transition hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        <X className="size-4" />
      </button>
    </li>
  )
}
