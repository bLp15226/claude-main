import { useState, type FormEvent } from 'react'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface NewWorkoutFormProps {
  onStart: (title: string) => void
}

export function NewWorkoutForm({ onStart }: NewWorkoutFormProps) {
  const [title, setTitle] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    onStart(title.trim() || 'Workout')
    setTitle('')
  }

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-[1fr_auto]"
    >
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Name today's workout… (e.g. Push Day, Legs)"
        aria-label="Workout name"
        autoComplete="off"
      />
      <Button type="submit">
        <Plus />
        Start workout
      </Button>
    </form>
  )
}
