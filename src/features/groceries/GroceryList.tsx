import { useMemo } from 'react'
import { GroceryRow } from './GroceryRow'
import { CATEGORIES, type GroceryItem, type GroupBy } from './types'

interface GroceryListProps {
  items: GroceryItem[]
  groupBy: GroupBy
  onToggle: (item: GroceryItem) => void
  onRemove: (id: string) => void
}

const NO_STORE = 'No store'

interface Group {
  key: string
  items: GroceryItem[]
}

function buildGroups(items: GroceryItem[], groupBy: GroupBy): Group[] {
  const map = new Map<string, GroceryItem[]>()
  for (const item of items) {
    const key =
      groupBy === 'category' ? item.category : (item.store ?? NO_STORE)
    const bucket = map.get(key)
    if (bucket) bucket.push(item)
    else map.set(key, [item])
  }

  // Order: categories follow the canonical list; stores go alphabetical with
  // "No store" last.
  const orderedKeys =
    groupBy === 'category'
      ? CATEGORIES.filter((c) => map.has(c))
      : [...map.keys()].sort((a, b) => {
          if (a === NO_STORE) return 1
          if (b === NO_STORE) return -1
          return a.localeCompare(b)
        })

  return orderedKeys.map((key) => ({
    key,
    // Unchecked items first, then checked — order is otherwise preserved.
    items: [...map.get(key)!].sort(
      (a, b) => Number(a.checked) - Number(b.checked),
    ),
  }))
}

export function GroceryList({
  items,
  groupBy,
  onToggle,
  onRemove,
}: GroceryListProps) {
  const groups = useMemo(() => buildGroups(items, groupBy), [items, groupBy])

  return (
    <div className="space-y-4">
      {groups.map((group) => {
        const doneCount = group.items.filter((i) => i.checked).length
        return (
          <section
            key={group.key}
            className="rounded-xl border border-border bg-card"
          >
            <header className="flex items-baseline justify-between border-b border-border/60 px-5 py-3">
              <h2 className="font-serif text-lg font-medium tracking-wide">
                {group.key}
              </h2>
              <span className="text-xs tabular-nums text-muted-foreground/70">
                {doneCount}/{group.items.length}
              </span>
            </header>
            <ul className="divide-y divide-border/40 px-5 py-1">
              {group.items.map((item) => (
                <GroceryRow
                  key={item.id}
                  item={item}
                  meta={
                    groupBy === 'category' ? item.store : item.category
                  }
                  onToggle={onToggle}
                  onRemove={onRemove}
                />
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
