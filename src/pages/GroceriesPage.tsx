import { useMemo, useState } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { sections } from '@/config/sections'
import { AddItemForm } from '@/features/groceries/AddItemForm'
import { GroupingToggle } from '@/features/groceries/GroupingToggle'
import { GroceryList } from '@/features/groceries/GroceryList'
import { useGroceries } from '@/features/groceries/useGroceries'
import { usingCloud } from '@/features/groceries/repo'
import type { GroupBy } from '@/features/groceries/types'

const section = sections.find((s) => s.path === '/groceries')!

export function GroceriesPage() {
  const { items, loading, add, toggle, remove, clearChecked } = useGroceries()
  const [groupBy, setGroupBy] = useState<GroupBy>('category')

  const stores = useMemo(
    () =>
      [...new Set(items.map((i) => i.store).filter((s): s is string => !!s))],
    [items],
  )
  const doneCount = items.filter((i) => i.checked).length
  const total = items.length
  const pct = total ? Math.round((doneCount / total) * 100) : 0

  return (
    <div>
      <PageHeader
        title={section.label}
        voice={section.voice}
        tagline={section.tagline}
      />

      <AddItemForm stores={stores} onAdd={add} />

      {/* Toolbar: progress, grouping, clear */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GroupingToggle value={groupBy} onChange={setGroupBy} />
          {total > 0 && (
            <span className="text-sm tabular-nums text-muted-foreground">
              {doneCount} of {total} done
            </span>
          )}
        </div>
        {doneCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearChecked}>
            Clear checked
          </Button>
        )}
      </div>

      {/* Progress bar */}
      {total > 0 && (
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}

      {/* List / states */}
      <div className="mt-6">
        {loading ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            Loading your list…
          </p>
        ) : total === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-16 text-center">
            <p className="font-serif text-xl text-foreground">
              Your list is empty
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add your first item above to get started.
            </p>
          </div>
        ) : (
          <GroceryList
            items={items}
            groupBy={groupBy}
            onToggle={toggle}
            onRemove={remove}
          />
        )}
      </div>

      {/* Storage indicator */}
      {!loading && (
        <p className="mt-10 text-xs text-muted-foreground/60">
          {usingCloud
            ? 'Synced to the cloud.'
            : 'Saved on this device. Connect Supabase for cross-device sync.'}
        </p>
      )}
    </div>
  )
}
