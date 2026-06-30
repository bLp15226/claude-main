import { useEffect, useMemo, useState } from 'react'
import { Select } from '@/components/ui/select'
import { ProgressChart } from './ProgressChart'
import { exerciseVolumeSeries, exercisesWithData } from './progress'
import { WEIGHT_UNIT, type Workout } from './types'

const RANGES = [
  { key: 'month', label: 'Month', days: 30 },
  { key: '3mo', label: '3 Months', days: 90 },
  { key: 'all', label: 'All', days: Infinity },
] as const

/** Format a day's sets as "135×10 · 145×8" for the detail readout. */
function fmtSets(sets: { weight: number | null; reps: number | null }[]): string {
  return sets
    .map((s) => `${s.weight ?? 0}×${s.reps ?? 0}`)
    .join(' · ')
}

function fmtFullDate(key: string): string {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function ProgressPanel({ workouts }: { workouts: Workout[] }) {
  const names = useMemo(() => exercisesWithData(workouts), [workouts])
  const [exercise, setExercise] = useState('')
  const [rangeKey, setRangeKey] = useState<string>('all')
  const [selected, setSelected] = useState<number | null>(null)

  // Fall back to the first available lift if none chosen (or it vanished).
  const active = exercise && names.includes(exercise) ? exercise : (names[0] ?? '')
  const days = RANGES.find((r) => r.key === rangeKey)!.days

  const points = useMemo(
    () => (active ? exerciseVolumeSeries(workouts, active, days) : []),
    [workouts, active, days],
  )

  // Reset the inspected point when the lift or range changes.
  useEffect(() => setSelected(null), [active, rangeKey])

  // Nothing to chart until at least one lift has logged sets.
  if (names.length === 0) return null

  // Default the readout to the most recent session.
  const sel =
    selected != null && selected >= 0 && selected < points.length
      ? selected
      : points.length - 1
  const point = points[sel]
  const delta = point && sel > 0 ? point.value - points[sel - 1].value : null

  return (
    <section className="rounded-xl border border-border bg-card p-5">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="font-serif text-lg font-medium tracking-wide">Progress</h2>
          {names.length > 1 && (
            <Select
              value={active}
              onChange={(e) => setExercise(e.target.value)}
              aria-label="Exercise to chart"
              className="h-9 w-auto"
            >
              {names.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          )}
        </div>
        <div className="flex items-center gap-1">
          {RANGES.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setRangeKey(r.key)}
              className={`rounded-md px-2.5 py-1 text-xs transition-colors ${
                rangeKey === r.key
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {names.length === 1 && (
        <p className="mt-1 text-sm text-muted-foreground">{active}</p>
      )}

      {/* Chart / states */}
      {points.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No sessions in this range. Try a wider range.
        </p>
      ) : points.length === 1 ? (
        <>
          <div className="mt-4">
            <ProgressChart points={points} selected={sel} onSelect={setSelected} />
          </div>
          <p className="mt-1 text-center text-xs text-muted-foreground/70">
            One session so far — log this lift again to see the line move.
          </p>
        </>
      ) : (
        <div className="mt-4">
          <ProgressChart points={points} selected={sel} onSelect={setSelected} />
        </div>
      )}

      {/* Day detail (hover/tap a point) */}
      {point && (
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border/60 pt-3 text-sm">
          <span className="font-medium text-foreground">{fmtFullDate(point.date)}</span>
          <span className="tabular-nums text-primary/90">
            {point.value.toLocaleString()} {WEIGHT_UNIT}
          </span>
          {delta !== null && delta !== 0 && (
            <span
              className={`text-xs tabular-nums ${
                delta > 0 ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {delta > 0 ? '▲' : '▼'} {Math.abs(delta).toLocaleString()} vs prev
            </span>
          )}
          <span className="text-muted-foreground/70">{fmtSets(point.sets)}</span>
        </div>
      )}
    </section>
  )
}
