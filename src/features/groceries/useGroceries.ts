import { useCallback, useEffect, useState } from 'react'
import { byCreated, groceryRepo } from './repo'
import type { GroceryItem, NewItem } from './types'

/**
 * Loads grocery items and exposes mutations. Updates are optimistic: local
 * state changes immediately, then the repo persists in the background.
 *
 * Also subscribes to realtime changes from other devices/tabs (a no-op in
 * local/device-only mode). Merges are id-based and idempotent, since the
 * subscription also echoes back this session's own writes shortly after the
 * optimistic update already applied them — applying the same change twice
 * (or a delete for an id that's already gone) is harmless.
 */
export function useGroceries() {
  const [items, setItems] = useState<GroceryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    groceryRepo
      .list()
      .then((data) => active && setItems(data))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const unsubscribe = groceryRepo.subscribe((event) => {
      setItems((prev) => {
        if (event.type === 'INSERT') {
          if (prev.some((i) => i.id === event.item.id)) return prev
          return [...prev, event.item].sort(byCreated)
        }
        if (event.type === 'UPDATE') {
          return prev.map((i) => (i.id === event.item.id ? { ...i, ...event.item } : i))
        }
        return prev.filter((i) => i.id !== event.id)
      })
    })
    return unsubscribe
  }, [])

  const add = useCallback(async (input: NewItem) => {
    const item = await groceryRepo.add(input)
    setItems((prev) => [...prev, item])
  }, [])

  const toggle = useCallback(async (item: GroceryItem) => {
    const next = !item.checked
    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, checked: next } : i)),
    )
    await groceryRepo.update(item.id, { checked: next })
  }, [])

  const remove = useCallback(async (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
    await groceryRepo.remove(id)
  }, [])

  const clearChecked = useCallback(async () => {
    setItems((prev) => prev.filter((i) => !i.checked))
    await groceryRepo.clearChecked()
  }, [])

  return { items, loading, add, toggle, remove, clearChecked }
}
