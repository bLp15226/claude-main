import { Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { BusinessPage } from '@/pages/BusinessPage'
import { FamilyPage } from '@/pages/FamilyPage'
import { WorkoutsPage } from '@/pages/WorkoutsPage'
import { GroceriesPage } from '@/pages/GroceriesPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { AuthGate } from '@/features/auth/AuthGate'
import { useAuth } from '@/features/auth/AuthProvider'

export default function App() {
  const { status } = useAuth()

  if (status === 'loading') {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background text-sm text-muted-foreground">
        Loading…
      </div>
    )
  }

  if (status === 'signed-out') {
    return <AuthGate />
  }

  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/business" replace />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/business" replace />} />
      </Route>
    </Routes>
  )
}
