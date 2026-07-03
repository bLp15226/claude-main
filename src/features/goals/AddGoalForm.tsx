import { useState, type FormEvent } from 'react'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { GoalItem, NewGoalItem } from './types'

interface AddGoalFormProps {
  onAdd: (input: Omit<NewGoalItem, 'section'>) => void
}

const KINDS: { key: GoalItem['kind']; label: string }[] = [
  { key: 'goal', label: 'Goal' },
  { key: 'task', label: 'Task' },
]

/** Add a pinned goal (weekly/monthly) or a daily task. */
export function AddGoalForm({ onAdd }: AddGoalFormProps) {
  const [title, setTitle] = useState('')
  const [kind, setKind] = useState<GoalItem['kind']>('task')
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd({ title: trimmed, kind, timeframe: kind === 'goal' ? timeframe : null })
    setTitle('')
  }

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-[auto_1fr_140px_auto]"
    >
      <div className="inline-flex rounded-lg border border-border p-1">
        {KINDS.map((k) => (
          <button
            key={k.key}
            type="button"
            onClick={() => setKind(k.key)}
            className={cn(
              'rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-colors',
              kind === k.key
                ? 'bg-primary/15 text-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {k.label}
          </button>
        ))}
      </div>

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={kind === 'goal' ? 'Add a goal…' : 'Add a task…'}
        aria-label="Title"
        autoComplete="off"
      />

      {kind === 'goal' ? (
        <Select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as 'weekly' | 'monthly')}
          aria-label="Timeframe"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Select>
      ) : (
        <div />
      )}

      <Button type="submit" disabled={!title.trim()}>
        <Plus />
        Add
      </Button>
    </form>
  )
}
