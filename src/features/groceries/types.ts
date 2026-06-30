/** A single grocery list item. Mirrors the public.grocery_items table. */
export interface GroceryItem {
  id: string
  name: string
  category: string
  store: string | null
  checked: boolean
  created_at: string
}

/** Fields supplied when adding a new item. */
export interface NewItem {
  name: string
  category: string
  store: string | null
}

/** Fixed category list, used for the picker and for grouping order. */
export const CATEGORIES = [
  'Produce',
  'Dairy & Eggs',
  'Meat & Seafood',
  'Bakery',
  'Pantry',
  'Frozen',
  'Beverages',
  'Household',
  'Other',
] as const

export type Category = (typeof CATEGORIES)[number]

/** How the list is grouped on screen. */
export type GroupBy = 'category' | 'store'
