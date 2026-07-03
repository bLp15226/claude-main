import { AddGoalForm } from './AddGoalForm'
import { GoalsList } from './GoalsList'
import { TaskList } from './TaskList'
import { usingCloud } from './repo'
import type { GoalItem, NewGoalItem } from './types'

interface GoalsPanelProps {
  goals: GoalItem[]
  tasks: GoalItem[]
  loading: boolean
  add: (input: Omit<NewGoalItem, 'section'>) => void
  toggle: (item: GoalItem) => void
  remove: (id: string) => void
  clearDone: () => void
}

/**
 * Embeddable goals + daily tasks panel, shared by Business and Family. Each
 * section's page owns its own `useGoals` call (so a voice command and this
 * panel share one live state instance, not two that could drift apart in
 * local/device-only mode) and passes the result straight through as props.
 */
export function GoalsPanel({ goals, tasks, loading, add, toggle, remove, clearDone }: GoalsPanelProps) {
  if (loading) {
    return (
      <p className="mb-10 py-8 text-center text-sm text-muted-foreground">
        Loading goals…
      </p>
    )
  }

  const isEmpty = goals.length === 0 && tasks.length === 0

  return (
    <div className="mb-10 space-y-4 lg:mb-14">
      <AddGoalForm onAdd={add} />

      {isEmpty ? (
        <div className="rounded-xl border border-dashed border-border py-12 text-center">
          <p className="font-serif text-lg text-foreground">Nothing pinned yet</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Add a weekly/monthly goal or a task to get started.
          </p>
        </div>
      ) : (
        <>
          <GoalsList items={goals} onToggle={toggle} onRemove={remove} />
          <TaskList items={tasks} onToggle={toggle} onRemove={remove} onClearDone={clearDone} />
        </>
      )}

      <p className="text-xs text-muted-foreground/60">
        {usingCloud ? 'Synced to the cloud.' : 'Saved on this device.'}
      </p>
    </div>
  )
}
