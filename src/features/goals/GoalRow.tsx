import { Check, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { GoalItem } from './types'

interface GoalRowProps {
  item: GoalItem
  meta?: string | null
  onToggle: (item: GoalItem) => void
  onRemove: (id: string) => void
}

/** A single goal or task row: checkbox, title, optional meta label, remove. */
export function GoalRow({ item, meta, onToggle, onRemove }: GoalRowProps) {
  return (
    <li className="group flex items-center gap-3 py-2.5">
      <button
        type="button"
        role="checkbox"
        aria-checked={item.done}
        aria-label={`Mark ${item.title} as ${item.done ? 'not done' : 'done'}`}
        onClick={() => onToggle(item)}
        className={cn(
          'flex size-5 shrink-0 items-center justify-center rounded-[6px] border transition-colors',
          item.done
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border hover:border-primary/60',
        )}
      >
        {item.done && <Check className="size-3.5" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          item.done ? 'text-muted-foreground/50 line-through' : 'text-foreground',
        )}
      >
        {item.title}
      </span>

      {meta && (
        <span className="shrink-0 text-xs uppercase tracking-wide text-muted-foreground/70">
          {meta}
        </span>
      )}

      <button
        type="button"
        aria-label={`Remove ${item.title}`}
        onClick={() => onRemove(item.id)}
        className="shrink-0 text-muted-foreground/40 opacity-0 transition hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        <Trash2 className="size-4" />
      </button>
    </li>
  )
}
