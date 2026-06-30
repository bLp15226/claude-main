import { useState, type FormEvent } from 'react'
import { Mic, Send, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { speak, useSpeech } from './useSpeech'
import type { Persona } from './personas'

interface VoiceAssistantProps {
  /** Personas available here; the first is the default. */
  personas: Persona[]
  /** Run a heard/typed command, return the persona's spoken reply. */
  onCommand: (text: string, persona: Persona) => string
}

/**
 * Floating mic widget. Tap to talk (where speech is supported) or type a
 * command as a fallback. Replies are shown and spoken in the persona's voice.
 * Phase 1: device voice + the simple command reader; the smart brain comes later.
 */
export function VoiceAssistant({ personas, onCommand }: VoiceAssistantProps) {
  const { sttSupported, ttsSupported, listening, transcript, start, stop } = useSpeech()
  const [open, setOpen] = useState(false)
  const [personaId, setPersonaId] = useState(personas[0]?.id)
  const [heard, setHeard] = useState('')
  const [reply, setReply] = useState('')
  const [typed, setTyped] = useState('')

  const persona = personas.find((p) => p.id === personaId) ?? personas[0]
  if (!persona) return null

  const handle = (text: string) => {
    const clean = text.trim()
    if (!clean) return
    setHeard(clean)
    const r = onCommand(clean, persona)
    setReply(r)
    if (ttsSupported) speak(r, persona)
  }

  const onMic = () => {
    if (listening) {
      stop()
    } else {
      start(handle)
    }
  }

  const submitTyped = (e: FormEvent) => {
    e.preventDefault()
    handle(typed)
    setTyped('')
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6">
      {/* Panel */}
      {open && (
        <div className="w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-border bg-card p-4 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {personas.length > 1 ? (
                <select
                  value={personaId}
                  onChange={(e) => setPersonaId(e.target.value)}
                  aria-label="Voice persona"
                  className="rounded-md border border-border bg-card px-2 py-1 text-sm text-foreground"
                >
                  {personas.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="font-serif text-lg">{persona.name}</span>
              )}
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                Voice · early
              </span>
            </div>
            <button
              type="button"
              aria-label="Close voice assistant"
              onClick={() => setOpen(false)}
              className="text-muted-foreground/50 transition hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Conversation */}
          <div className="mt-3 min-h-[3rem] space-y-2 text-sm">
            {heard && (
              <p className="text-muted-foreground">
                <span className="text-muted-foreground/50">You:</span> {heard}
              </p>
            )}
            {reply && (
              <p className="text-foreground">
                <span className="text-primary/80">{persona.name}:</span> {reply}
              </p>
            )}
            {!heard && !reply && (
              <p className="text-muted-foreground/70">
                {sttSupported
                  ? `Tap the mic and say "${persona.wakeWords[0]}, add bench press" — or type it below.`
                  : `Speech isn't available in this browser — type a command below (e.g. "add bench press").`}
              </p>
            )}
            {listening && (
              <p className="text-primary/80">
                Listening… {transcript && <span className="text-muted-foreground">{transcript}</span>}
              </p>
            )}
          </div>

          {/* Typed fallback */}
          <form onSubmit={submitTyped} className="mt-3 flex gap-2">
            <Input
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Type a command…"
              aria-label="Type a command"
              autoComplete="off"
              className="h-9"
            />
            <button
              type="submit"
              disabled={!typed.trim()}
              aria-label="Send command"
              className="inline-flex h-9 shrink-0 items-center rounded-md border border-border px-3 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}

      {/* Mic button */}
      <button
        type="button"
        aria-label={open ? 'Voice assistant' : 'Open voice assistant'}
        onClick={() => {
          if (!open) setOpen(true)
          else onMic()
        }}
        className={`flex size-14 items-center justify-center rounded-full border shadow-lg transition-colors ${
          listening
            ? 'animate-pulse border-primary bg-primary text-primary-foreground'
            : 'border-primary/40 bg-card text-primary hover:bg-primary hover:text-primary-foreground'
        }`}
      >
        <Mic className="size-6" />
      </button>
    </div>
  )
}
