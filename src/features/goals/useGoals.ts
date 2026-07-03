import { useCallback, useEffect, useState } from 'react'
import { byCreated, goalsRepo } from './repo'
import type { GoalItem, NewGoalItem } from './types'

/**
 * Loads goals/tasks for one section (business or family) and exposes
 * mutations. Business and Family share one underlying table, so this hook
 * fetches everything and filters client-side — the dataset is tiny (a
 * personal dashboard, not a team tool).
 *
 * Same optimistic-update + realtime-subscribe pattern as useGroceries: local
 * state changes immediately, the repo persists in the background, and the
 * subscription's later echo of this session's own write is deduped by id.
 */
export function useGoals(section: GoalItem['section']) {
  const [items, setItems] = useState<GoalItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    goalsRepo
      .list()
      .then((data) => active && setItems(data))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const unsubscribe = goalsRepo.subscribe((event) => {
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

  const add = useCallback(
    async (input: Omit<NewGoalItem, 'section'>) => {
      const item = await goalsRepo.add({ ...input, section })
      setItems((prev) => [...prev, item])
    },
    [section],
  )

  const toggle = useCallback(async (item: GoalItem) => {
    const next = !item.done
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, done: next } : i)))
    await goalsRepo.update(item.id, { done: next })
  }, [])

  const remove = useCallback(async (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
    await goalsRepo.remove(id)
  }, [])

  const clearDone = useCallback(async () => {
    setItems((prev) => prev.filter((i) => !(i.section === section && i.done)))
    await goalsRepo.clearDone(section)
  }, [section])

  const sectionItems = items.filter((i) => i.section === section)

  return {
    goals: sectionItems.filter((i) => i.kind === 'goal'),
    tasks: sectionItems.filter((i) => i.kind === 'task'),
    loading,
    add,
    toggle,
    remove,
    clearDone,
  }
}
