import { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { GoalRow } from './GoalRow'
import type { GoalItem } from './types'

interface TaskListProps {
  items: GoalItem[]
  onToggle: (item: GoalItem) => void
  onRemove: (id: string) => void
  onClearDone: () => void
}

/** Flat daily task checklist: unchecked first, then done. */
export function TaskList({ items, onToggle, onRemove, onClearDone }: TaskListProps) {
  const sorted = useMemo(
    () => [...items].sort((a, b) => Number(a.done) - Number(b.done)),
    [items],
  )
  const doneCount = items.filter((i) => i.done).length

  if (items.length === 0) return null

  return (
    <section className="rounded-xl border border-border bg-card">
      <header className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <h2 className="font-serif text-lg font-medium tracking-wide">Today's Tasks</h2>
        {doneCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearDone}>
            Clear done
          </Button>
        )}
      </header>
      <ul className="divide-y divide-border/40 px-5 py-1">
        {sorted.map((item) => (
          <GoalRow key={item.id} item={item} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>
    </section>
  )
}
