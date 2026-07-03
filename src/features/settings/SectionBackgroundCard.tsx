import { useRef, useState, type PointerEvent } from 'react'
import { Image, Trash2 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useSectionBackground } from './useSectionBackground'
import type { FocalPoint } from './backgroundStore'
import type { Section } from '@/config/sections'

interface SectionBackgroundCardProps {
  section: Section
}

/** One section's background-image picker: preview, upload, reposition, remove. */
export function SectionBackgroundCard({ section }: SectionBackgroundCardProps) {
  const { url, position, upload, reposition, remove } = useSectionBackground(section.path)
  const fileInput = useRef<HTMLInputElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const [draftPosition, setDraftPosition] = useState<FocalPoint>(position)

  // While dragging, show the live drag position; otherwise show the saved one.
  const shown = dragging ? draftPosition : position

  const positionFromEvent = (e: PointerEvent<HTMLDivElement>): FocalPoint => {
    const rect = previewRef.current!.getBoundingClientRect()
    return {
      x: Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)),
      y: Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100)),
    }
  }

  return (
    <Card className="overflow-hidden">
      <div
        ref={previewRef}
        className={`relative h-32 touch-none bg-cover bg-muted ${url ? 'cursor-crosshair' : ''}`}
        style={
          url
            ? { backgroundImage: `url(${url})`, backgroundPosition: `${shown.x}% ${shown.y}%` }
            : undefined
        }
        onPointerDown={(e) => {
          if (!url) return
          e.currentTarget.setPointerCapture(e.pointerId)
          setDragging(true)
          setDraftPosition(positionFromEvent(e))
        }}
        onPointerMove={(e) => {
          if (!dragging) return
          setDraftPosition(positionFromEvent(e))
        }}
        onPointerUp={(e) => {
          if (!dragging) return
          setDragging(false)
          reposition(positionFromEvent(e))
        }}
      >
        {url && (
          <span
            aria-hidden
            className="pointer-events-none absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-primary/40"
            style={{ left: `${shown.x}%`, top: `${shown.y}%` }}
          />
        )}
      </div>
      <CardHeader>
        <CardTitle>{section.label}</CardTitle>
        <CardDescription>
          {url ? 'Drag the photo above to reposition it.' : section.tagline}
        </CardDescription>
      </CardHeader>
      <div className="flex gap-2 px-6 pb-6">
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) upload(file)
            e.target.value = ''
          }}
        />
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Image className="size-4" />
          {url ? 'Change photo' : 'Add photo'}
        </button>
        {url && (
          <button
            type="button"
            onClick={remove}
            aria-label={`Remove ${section.label} background`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground/60 transition hover:text-foreground"
          >
            <Trash2 className="size-4" />
          </button>
        )}
      </div>
    </Card>
  )
}
