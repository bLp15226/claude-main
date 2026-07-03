/** A pinned goal or a daily task. Mirrors the public.goal_items table. */
export interface GoalItem {
  id: string
  section: 'business' | 'family'
  kind: 'goal' | 'task'
  title: string
  /** Only meaningful for kind: 'goal'. Null for tasks. */
  timeframe: 'weekly' | 'monthly' | null
  done: boolean
  created_at: string
}

/** Fields supplied when adding a new item. */
export interface NewGoalItem {
  section: 'business' | 'family'
  kind: 'goal' | 'task'
  title: string
  timeframe: 'weekly' | 'monthly' | null
}
