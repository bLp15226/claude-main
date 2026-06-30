import { useCallback, useRef, useState } from 'react'
import type { Persona } from './personas'

// The Web Speech API isn't in the standard TS DOM lib; treat it loosely.
type AnyWindow = Window & {
  SpeechRecognition?: new () => SpeechRecognitionLike
  webkitSpeechRecognition?: new () => SpeechRecognitionLike
}
interface SpeechRecognitionLike {
  lang: string
  interimResults: boolean
  continuous: boolean
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null
  onend: (() => void) | null
  onerror: ((e: { error: string }) => void) | null
  start: () => void
  stop: () => void
}

function getRecognitionCtor() {
  const w = window as AnyWindow
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

/** Speak text aloud using the device's built-in voices, shaped to a persona. */
export function speak(text: string, persona: Persona) {
  const synth = window.speechSynthesis
  if (!synth) return
  synth.cancel() // never let replies stack up
  const u = new SpeechSynthesisUtterance(text)
  const voices = synth.getVoices()
  const hint = persona.voiceHint
  const match =
    voices.find((v) =>
      hint.namePrefs.some((n) => v.name.toLowerCase().includes(n.toLowerCase())),
    ) ?? voices.find((v) => v.lang.toLowerCase().startsWith(hint.lang))
  if (match) u.voice = match
  u.pitch = hint.pitch
  u.rate = hint.rate
  synth.speak(u)
}

/** Microphone speech-to-text. Returns capability + live transcript + controls. */
export function useSpeech() {
  const sttSupported = !!getRecognitionCtor()
  const ttsSupported = typeof window !== 'undefined' && !!window.speechSynthesis
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recRef = useRef<SpeechRecognitionLike | null>(null)

  const start = useCallback((onFinal: (text: string) => void) => {
    const Ctor = getRecognitionCtor()
    if (!Ctor) return
    const rec = new Ctor()
    rec.lang = 'en-US'
    rec.interimResults = true
    rec.continuous = false
    rec.onresult = (e) => {
      const text = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join(' ')
        .trim()
      setTranscript(text)
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => {
      setListening(false)
      // Use the latest transcript captured in state via the closure-free ref.
      setTranscript((t) => {
        if (t) onFinal(t)
        return t
      })
    }
    recRef.current = rec
    setTranscript('')
    setListening(true)
    rec.start()
  }, [])

  const stop = useCallback(() => {
    recRef.current?.stop()
  }, [])

  return { sttSupported, ttsSupported, listening, transcript, start, stop }
}
