import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getBackground,
  setBackgroundImage,
  setBackgroundPosition,
  clearBackground,
  type FocalPoint,
} from './backgroundStore'

const DEFAULT_POSITION: FocalPoint = { x: 50, y: 50 }

/** A section's custom background image (+ focal point), stored on-device. */
export function useSectionBackground(sectionPath: string) {
  const [url, setUrl] = useState<string | null>(null)
  const [position, setPositionState] = useState<FocalPoint>(DEFAULT_POSITION)
  const urlRef = useRef<string | null>(null)

  const load = useCallback(async () => {
    const record = await getBackground(sectionPath)
    if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    const next = record ? URL.createObjectURL(record.blob) : null
    urlRef.current = next
    setUrl(next)
    setPositionState(record?.position ?? DEFAULT_POSITION)
  }, [sectionPath])

  useEffect(() => {
    load()
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
      urlRef.current = null
    }
  }, [load])

  const upload = useCallback(
    async (file: File) => {
      await setBackgroundImage(sectionPath, file)
      await load()
    },
    [sectionPath, load],
  )

  /** Update the focal point (what part of the photo stays centered). */
  const reposition = useCallback(
    async (pos: FocalPoint) => {
      setPositionState(pos) // optimistic — avoids a round trip before the UI updates
      await setBackgroundPosition(sectionPath, pos)
    },
    [sectionPath],
  )

  const remove = useCallback(async () => {
    await clearBackground(sectionPath)
    await load()
  }, [sectionPath, load])

  return { url, position, upload, reposition, remove }
}
