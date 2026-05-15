import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import App from './App.jsx'
import ProgramaRecompensa from './pages/ProgramaRecompensa.jsx'
import { I18nProvider } from './i18n/I18nContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/programa-recompensa" element={<ProgramaRecompensa />} />
        </Routes>
      </HashRouter>
    </I18nProvider>
  </StrictMode>,
)
