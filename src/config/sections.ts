import {
  Briefcase,
  Users,
  Dumbbell,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'

export interface Feature {
  title: string
  description: string
}

export interface Section {
  /** Route path */
  path: string
  /** Full name shown in headers and the desktop rail */
  label: string
  /** Short name for the mobile tab bar */
  shortLabel: string
  /** AI voice persona for this section, or null if none */
  voice: string | null
  /** One-line description of the section's character */
  tagline: string
  icon: LucideIcon
  /** Planned features, surfaced as placeholder cards until built */
  features: Feature[]
}

export const sections: Section[] = [
  {
    path: '/business',
    label: 'PHC Business',
    shortLabel: 'Business',
    voice: 'Aurelius',
    tagline: 'Calm, strategic counsel. Premium and family-first.',
    icon: Briefcase,
    features: [
      { title: 'Pinned Goals', description: 'Weekly and monthly targets, always in view at the top.' },
      { title: 'Shopify Revenue', description: 'Live daily revenue and top performers from the store.' },
      { title: 'Daily Tasks', description: 'The short list of what moves the business today.' },
      { title: 'Facebook Ads', description: 'See performance, pause ads, and adjust budgets by voice.' },
      { title: 'Omnisend', description: 'Email and SMS performance at a glance.' },
      { title: 'Suppliers & Inventory', description: 'Dropship status and lead times in one tracker.' },
    ],
  },
  {
    path: '/family',
    label: 'Personal & Family',
    shortLabel: 'Family',
    voice: 'The Understudy',
    tagline: 'Life, scheduled — delivered with comedic timing.',
    icon: Users,
    features: [
      { title: 'Calendar Sync', description: 'Google Calendar: bills, appointments, and dates.' },
      { title: 'Goals & Tasks', description: 'Personal weekly and monthly goals plus daily tasks.' },
      { title: 'Advice, With Jokes', description: 'Good-natured guidance with a sense of humor.' },
    ],
  },
  {
    path: '/workouts',
    label: 'Workouts',
    shortLabel: 'Workouts',
    voice: 'The Coach',
    tagline: 'Show up. Do the work. Track every rep.',
    icon: Dumbbell,
    features: [
      { title: 'Hevy Data', description: 'Live workouts, routines, and exercise templates.' },
      { title: 'AI Routines', description: 'Custom routines built from your goals and history.' },
      { title: 'Progress Log', description: 'Log sets, reps, and weight; watch the trend climb.' },
    ],
  },
  {
    path: '/groceries',
    label: 'Groceries',
    shortLabel: 'Groceries',
    voice: null,
    tagline: 'The list, the budget, and the plan — sorted.',
    icon: ShoppingCart,
    features: [
      { title: 'Smart Lists', description: 'Organize items by store or category; check off as you shop.' },
      { title: 'Price Comparison', description: 'Compare prices across your local stores.' },
      { title: 'Budget Tracking', description: 'Weekly and monthly grocery budgets.' },
      { title: 'Meal Planning', description: 'Plan meals and turn them into the shopping list.' },
      { title: 'Low-Stock Reminders', description: 'Never run out of the staples again.' },
    ],
  },
]
