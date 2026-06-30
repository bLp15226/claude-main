import { Check, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { GroceryItem } from './types'

interface GroceryRowProps {
  item: GroceryItem
  /** Secondary label shown on the right (the dimension not grouped by). */
  meta?: string | null
  onToggle: (item: GroceryItem) => void
  onRemove: (id: string) => void
}

export function GroceryRow({ item, meta, onToggle, onRemove }: GroceryRowProps) {
  return (
    <li className="group flex items-center gap-3 py-2.5">
      <button
        type="button"
        role="checkbox"
        aria-checked={item.checked}
        aria-label={`Mark ${item.name} as ${item.checked ? 'not done' : 'done'}`}
        onClick={() => onToggle(item)}
        className={cn(
          'flex size-5 shrink-0 items-center justify-center rounded-[6px] border transition-colors',
          item.checked
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border hover:border-primary/60',
        )}
      >
        {item.checked && <Check className="size-3.5" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          item.checked
            ? 'text-muted-foreground/50 line-through'
            : 'text-foreground',
        )}
      >
        {item.name}
      </span>

      {meta && (
        <span className="shrink-0 text-xs text-muted-foreground/70">{meta}</span>
      )}

      <button
        type="button"
        aria-label={`Remove ${item.name}`}
        onClick={() => onRemove(item.id)}
        className="shrink-0 text-muted-foreground/40 opacity-0 transition hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        <Trash2 className="size-4" />
      </button>
    </li>
  )
}
