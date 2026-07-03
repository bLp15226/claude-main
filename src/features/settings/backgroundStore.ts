/**
 * On-device storage for per-section background images, keyed by section
 * route (e.g. "/business"). Uses IndexedDB (not localStorage) because photos
 * are real file sizes — localStorage's ~5MB string limit wouldn't hold more
 * than one or two. Local-only for now; can swap to Supabase Storage later
 * the same way groceries/workouts swap from local to cloud.
 */
const DB_NAME = 'pd:settings'
const STORE = 'backgrounds'

/** Focal point as percentages (0-100), used as CSS background-position. */
export interface FocalPoint {
  x: number
  y: number
}

export interface StoredBackground {
  blob: Blob
  position: FocalPoint
}

const DEFAULT_POSITION: FocalPoint = { x: 50, y: 50 }

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

export async function getBackground(
  sectionPath: string,
): Promise<StoredBackground | undefined> {
  const db = await openDb()
  const raw = await new Promise<unknown>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly')
    const req = tx.objectStore(STORE).get(sectionPath)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  if (!raw) return undefined
  // Back-compat: earlier version stored the raw Blob directly (no position).
  if (raw instanceof Blob) return { blob: raw, position: DEFAULT_POSITION }
  return raw as StoredBackground
}

async function putBackground(
  sectionPath: string,
  record: StoredBackground,
): Promise<void> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).put(record, sectionPath)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function setBackgroundImage(
  sectionPath: string,
  blob: Blob,
): Promise<void> {
  const existing = await getBackground(sectionPath)
  await putBackground(sectionPath, {
    blob,
    position: existing?.position ?? DEFAULT_POSITION,
  })
}

export async function setBackgroundPosition(
  sectionPath: string,
  position: FocalPoint,
): Promise<void> {
  const existing = await getBackground(sectionPath)
  if (!existing) return
  await putBackground(sectionPath, { ...existing, position })
}

export async function clearBackground(sectionPath: string): Promise<void> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).delete(sectionPath)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}
