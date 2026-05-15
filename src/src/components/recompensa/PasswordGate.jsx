import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react'
import CircuitBackdrop from '@/components/CircuitBackdrop.jsx'

const SESSION_KEY = 'riskproof_auth'
const HASH_ENV = import.meta.env.VITE_RECOMPENSA_HASH

/** Converts a plain string to its SHA-256 hex digest using the browser's native WebCrypto API */
async function sha256(text) {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * Password-gate wrapper for the Programa RiskProof page.
 * On success it writes a session flag and renders children.
 * The actual password is never stored — only the SHA-256 digest
 * lives in the Vite env bundle.
 */
function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [shaking, setShaking] = useState(false)
  const [checking, setChecking] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setUnlocked(true)
    } else {
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!password.trim()) return
    setChecking(true)
    setError('')
    try {
      const digest = await sha256(password)
      if (digest === HASH_ENV) {
        sessionStorage.setItem(SESSION_KEY, 'true')
        setUnlocked(true)
      } else {
        setError('Contraseña incorrecta. Verifica e intenta de nuevo.')
        setShaking(true)
        setPassword('')
        setTimeout(() => setShaking(false), 600)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    } catch {
      setError('Error al verificar la contraseña.')
    } finally {
      setChecking(false)
    }
  }

  if (unlocked) {
    return (
      <AnimatePresence>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#001818] overflow-hidden">
      <CircuitBackdrop className="opacity-20" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(13,115,119,0.25) 0%, transparent 70%)' }}
      />

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-teal-400/30 floating-animation"
          style={{
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            left: `${10 + i * 11}%`,
            top: `${15 + (i * 13) % 65}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm px-4"
      >
        <div className="rounded-2xl border border-teal-800/60 bg-[#022a2a]/90 p-8 shadow-[0_0_60px_rgba(13,115,119,0.25)] backdrop-blur-md">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center gap-3">
            <img
              src="/justo-hacker-logo.png"
              alt="Justo Hacker"
              className="h-16 w-auto object-contain logo-glow"
            />
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/80">
                Acceso restringido
              </p>
              <h1 className="mt-1 text-xl font-bold text-white">
                Programa <span className="text-accent">RiskProof</span>
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-teal-700/60 to-transparent" />

          {/* Badge */}
          <div className="mb-5 flex items-center justify-center gap-2 rounded-lg border border-teal-700/40 bg-teal-900/30 px-3 py-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-teal-400" />
            <span className="text-xs text-teal-300/90">
              Propuesta comercial confidencial
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-teal-300/70">
                Contraseña de acceso
              </label>
              <motion.div
                animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-500/60" />
                <input
                  ref={inputRef}
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  className="w-full rounded-lg border border-teal-700/60 bg-[#001818]/80 py-2.5 pl-10 pr-10 text-sm text-white placeholder:text-teal-600/60 outline-none transition-all duration-200 focus:border-teal-400 focus:shadow-[0_0_12px_rgba(45,212,191,0.25)]"
                  placeholder="Introduce la contraseña"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-500/60 hover:text-teal-300 transition-colors"
                  aria-label={showPw ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-400"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={checking || !password.trim()}
              className="group relative w-full overflow-hidden rounded-lg bg-primary py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Sweep effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">
                {checking ? 'Verificando…' : 'Acceder'}
              </span>
            </button>
          </form>

          <p className="mt-5 text-center text-[11px] text-teal-600/60">
            Si no tienes acceso, contacta a{' '}
            <a
              href="mailto:hola@justohacker.com"
              className="text-teal-400/80 hover:text-accent underline"
            >
              hola@justohacker.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default PasswordGate
