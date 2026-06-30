import { useState, type FormEvent } from 'react'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { CATEGORIES, type NewItem } from './types'

interface AddItemFormProps {
  /** Previously-used store names, offered as autocomplete suggestions. */
  stores: string[]
  onAdd: (input: NewItem) => void
}

export function AddItemForm({ stores, onAdd }: AddItemFormProps) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<string>(CATEGORIES[0])
  const [store, setStore] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    onAdd({ name: trimmed, category, store: store.trim() || null })
    setName('')
    // Keep category/store sticky — you usually add a few from the same aisle.
  }

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-[1fr_170px_170px_auto]"
    >
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add an item…"
        aria-label="Item name"
        autoComplete="off"
      />

      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Category"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>

      <Input
        list="known-stores"
        value={store}
        onChange={(e) => setStore(e.target.value)}
        placeholder="Store (optional)"
        aria-label="Store"
        autoComplete="off"
      />
      <datalist id="known-stores">
        {stores.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>

      <Button type="submit" disabled={!name.trim()}>
        <Plus />
        Add
      </Button>
    </form>
  )
}
