import { useMemo } from 'react'
import { GoalRow } from './GoalRow'
import type { GoalItem } from './types'

interface GoalsListProps {
  items: GoalItem[]
  onToggle: (item: GoalItem) => void
  onRemove: (id: string) => void
}

const TIMEFRAME_LABEL: Record<'weekly' | 'monthly', string> = {
  weekly: 'This Week',
  monthly: 'This Month',
}

/** Pinned goals, grouped weekly then monthly. Unchecked ones lead each group. */
export function GoalsList({ items, onToggle, onRemove }: GoalsListProps) {
  const groups = useMemo(() => {
    const order: ('weekly' | 'monthly')[] = ['weekly', 'monthly']
    return order
      .map((timeframe) => ({
        timeframe,
        items: items
          .filter((i) => i.timeframe === timeframe)
          .sort((a, b) => Number(a.done) - Number(b.done)),
      }))
      .filter((g) => g.items.length > 0)
  }, [items])

  if (groups.length === 0) return null

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <section key={group.timeframe} className="rounded-xl border border-border bg-card">
          <header className="border-b border-border/60 px-5 py-3">
            <h2 className="font-serif text-lg font-medium tracking-wide">
              {TIMEFRAME_LABEL[group.timeframe]}
            </h2>
          </header>
          <ul className="divide-y divide-border/40 px-5 py-1">
            {group.items.map((item) => (
              <GoalRow key={item.id} item={item} onToggle={onToggle} onRemove={onRemove} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
