import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from '@/features/auth/AuthProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

// Fade out the launch splash once the app has mounted. Remove on the fade's
// end, with a timeout fallback in case transitionend doesn't fire (e.g. a
// throttled/background tab).
const splash = document.getElementById('phc-splash')
if (splash) {
  const remove = () => splash.remove()
  window.setTimeout(() => {
    splash.classList.add('phc-hide')
    splash.addEventListener('transitionend', remove, { once: true })
    window.setTimeout(remove, 800)
  }, 350)
}
