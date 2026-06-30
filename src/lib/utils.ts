import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn() merges class names intelligently: clsx handles conditional classes,
 * twMerge resolves conflicting Tailwind utilities (e.g. "p-2 p-4" -> "p-4").
 * This is the standard shadcn/ui helper used by every component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
