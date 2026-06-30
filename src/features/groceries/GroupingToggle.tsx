import { cn } from '@/lib/utils'
import type { GroupBy } from './types'

const OPTIONS: { key: GroupBy; label: string }[] = [
  { key: 'category', label: 'Category' },
  { key: 'store', label: 'Store' },
]

/** Segmented control to switch how the list is grouped. */
export function GroupingToggle({
  value,
  onChange,
}: {
  value: GroupBy
  onChange: (next: GroupBy) => void
}) {
  return (
    <div className="inline-flex rounded-lg border border-border bg-card p-1">
      {OPTIONS.map((opt) => (
        <button
          key={opt.key}
          type="button"
          onClick={() => onChange(opt.key)}
          className={cn(
            'rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-colors',
            value === opt.key
              ? 'bg-primary/15 text-primary'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
