import { useCallback, useEffect, useState } from 'react'
import { groceryRepo } from './repo'
import type { GroceryItem, NewItem } from './types'

/**
 * Loads grocery items and exposes mutations. Updates are optimistic: local
 * state changes immediately, then the repo persists in the background.
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
