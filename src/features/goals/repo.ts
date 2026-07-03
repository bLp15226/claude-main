import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { GoalItem, NewGoalItem } from './types'

/**
 * The goals/tasks data layer. Business and Family share one table — each row
 * is tagged with its owning section — so the UI only ever talks to this one
 * interface, same swappable-repo pattern as Groceries/Workouts.
 */
export interface GoalsRepo {
  list(): Promise<GoalItem[]>
  add(input: NewGoalItem): Promise<GoalItem>
  update(id: string, patch: Partial<Pick<GoalItem, 'title' | 'timeframe' | 'done'>>): Promise<void>
  remove(id: string): Promise<void>
  clearDone(section: GoalItem['section']): Promise<void>
  /** Subscribe to changes from other sessions. No-op locally, real on cloud. */
  subscribe(onChange: (event: GoalChangeEvent) => void): () => void
}

export type GoalChangeEvent =
  | { type: 'INSERT'; item: GoalItem }
  | { type: 'UPDATE'; item: GoalItem }
  | { type: 'DELETE'; id: string }

export const byCreated = (a: GoalItem, b: GoalItem) =>
  a.created_at.localeCompare(b.created_at)

// ── Local (device) implementation ──────────────────────────────────────────
const STORAGE_KEY = 'pd:goals'

function readLocal(): GoalItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as GoalItem[]) : []
  } catch {
    return []
  }
}

function writeLocal(items: GoalItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const localRepo: GoalsRepo = {
  async list() {
    return readLocal().sort(byCreated)
  },
  async add(input) {
    const item: GoalItem = {
      id: crypto.randomUUID(),
      section: input.section,
      kind: input.kind,
      title: input.title,
      timeframe: input.timeframe,
      done: false,
      created_at: new Date().toISOString(),
    }
    writeLocal([...readLocal(), item])
    return item
  },
  async update(id, patch) {
    writeLocal(readLocal().map((i) => (i.id === id ? { ...i, ...patch } : i)))
  },
  async remove(id) {
    writeLocal(readLocal().filter((i) => i.id !== id))
  },
  async clearDone(section) {
    writeLocal(readLocal().filter((i) => !(i.section === section && i.done)))
  },
  subscribe() {
    return () => {}
  },
}

// ── Supabase (cloud) implementation ────────────────────────────────────────
const TABLE = 'goal_items'

const supabaseRepo: GoalsRepo = {
  async list() {
    const { data, error } = await supabase!
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: true })
    if (error) throw error
    return (data ?? []) as GoalItem[]
  },
  async add(input) {
    const { data, error } = await supabase!
      .from(TABLE)
      .insert(input)
      .select()
      .single()
    if (error) throw error
    return data as GoalItem
  },
  async update(id, patch) {
    const { error } = await supabase!.from(TABLE).update(patch).eq('id', id)
    if (error) throw error
  },
  async remove(id) {
    const { error } = await supabase!.from(TABLE).delete().eq('id', id)
    if (error) throw error
  },
  async clearDone(section) {
    const { error } = await supabase!
      .from(TABLE)
      .delete()
      .eq('section', section)
      .eq('done', true)
    if (error) throw error
  },
  subscribe(onChange) {
    const channel = supabase!
      .channel('goal-items-sync')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: TABLE },
        (payload) => onChange({ type: 'INSERT', item: payload.new as GoalItem }),
      )
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: TABLE },
        (payload) => onChange({ type: 'UPDATE', item: payload.new as GoalItem }),
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: TABLE },
        (payload) => onChange({ type: 'DELETE', id: (payload.old as { id: string }).id }),
      )
      .subscribe()

    return () => {
      supabase!.removeChannel(channel)
    }
  },
}

/** Are we saving to the cloud (true) or just this device (false)? */
export const usingCloud = isSupabaseConfigured

/** The active data layer for the rest of the app to use. */
export const goalsRepo: GoalsRepo = usingCloud ? supabaseRepo : localRepo
