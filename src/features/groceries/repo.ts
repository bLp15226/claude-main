import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { GroceryItem, NewItem } from './types'

/**
 * The grocery data layer. The UI only ever talks to this interface, so we can
 * swap storage backends without touching components. Two implementations:
 *   - localRepo:    saves to this device (works with no setup)
 *   - supabaseRepo: cloud sync (used once Supabase env vars are present)
 */
export interface GroceryRepo {
  list(): Promise<GroceryItem[]>
  add(input: NewItem): Promise<GroceryItem>
  update(
    id: string,
    patch: Partial<Pick<GroceryItem, 'name' | 'category' | 'store' | 'checked'>>,
  ): Promise<void>
  remove(id: string): Promise<void>
  clearChecked(): Promise<void>
}

const byCreated = (a: GroceryItem, b: GroceryItem) =>
  a.created_at.localeCompare(b.created_at)

// ── Local (device) implementation ──────────────────────────────────────────
const STORAGE_KEY = 'pd:groceries'

function readLocal(): GroceryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as GroceryItem[]) : []
  } catch {
    return []
  }
}

function writeLocal(items: GroceryItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const localRepo: GroceryRepo = {
  async list() {
    return readLocal().sort(byCreated)
  },
  async add(input) {
    const item: GroceryItem = {
      id: crypto.randomUUID(),
      name: input.name,
      category: input.category,
      store: input.store,
      checked: false,
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
  async clearChecked() {
    writeLocal(readLocal().filter((i) => !i.checked))
  },
}

// ── Supabase (cloud) implementation ────────────────────────────────────────
const TABLE = 'grocery_items'

const supabaseRepo: GroceryRepo = {
  async list() {
    const { data, error } = await supabase!
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: true })
    if (error) throw error
    return (data ?? []) as GroceryItem[]
  },
  async add(input) {
    const { data, error } = await supabase!
      .from(TABLE)
      .insert(input)
      .select()
      .single()
    if (error) throw error
    return data as GroceryItem
  },
  async update(id, patch) {
    const { error } = await supabase!.from(TABLE).update(patch).eq('id', id)
    if (error) throw error
  },
  async remove(id) {
    const { error } = await supabase!.from(TABLE).delete().eq('id', id)
    if (error) throw error
  },
  async clearChecked() {
    const { error } = await supabase!.from(TABLE).delete().eq('checked', true)
    if (error) throw error
  },
}

/** Are we saving to the cloud (true) or just this device (false)? */
export const usingCloud = isSupabaseConfigured

/** The active data layer for the rest of the app to use. */
export const groceryRepo: GroceryRepo = usingCloud ? supabaseRepo : localRepo
