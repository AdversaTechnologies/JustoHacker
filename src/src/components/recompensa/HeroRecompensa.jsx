import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import CircuitBackdrop from '@/components/CircuitBackdrop.jsx'

/** Animated counter from 0 to target when in view */
function AnimatedNumber({ target, suffix = '', duration = 1500 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * ease))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{value}{suffix}</span>
}

function HeroRecompensa({ onOpenLead }) {
  return (
    <section
      id="hero-riskproof"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(145deg, #001818 0%, #022a2a 50%, #0a3d3d 100%)' }}
    >
      <CircuitBackdrop />

      {/* Radial glow accent */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[600px] w-[600px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #0d7377 0%, transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #2dd4bf 0%, transparent 65%)' }}
      />

      {/* Scan line */}
      <div
        className="scan-line-sweep pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2"
        >
          <span className="pulse-animation inline-flex items-center gap-2 rounded-full border border-teal-600/50 bg-teal-900/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Gray-Box · Hallazgos Validados · Pago por Impacto Real
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Programa{' '}
          <span className="bg-gradient-to-r from-teal-300 via-accent to-teal-400 bg-clip-text text-transparent">
            RiskProof
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mx-auto mb-3 max-w-2xl text-lg text-teal-100/80 md:text-xl"
        >
          Pentesting continuo gray-box · Solo pagas el riesgo real demostrado
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mx-auto mb-10 max-w-xl text-sm text-teal-400/70 italic"
        >
          "No cobramos por PDFs. Cobramos cuando demostramos que tu organización puede ser comprometida."
        </motion.p>

        {/* KPI cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mb-10 flex flex-wrap justify-center gap-4"
        >
          {[
            { value: 5, suffix: '', label: 'niveles de criticidad evaluados', highlight: true },
            { value: 0, suffix: ' €', label: 'por hallazgos teóricos sin evidencia', highlight: false },
            { value: 24, suffix: '/7', label: 'validación adversarial continua', highlight: true },
          ].map(({ value, suffix, label, highlight }) => (
            <div
              key={label}
              className={`rounded-xl border px-6 py-4 text-center backdrop-blur-sm ${
                highlight
                  ? 'border-teal-600/50 bg-teal-900/30'
                  : 'border-teal-800/40 bg-[#001818]/60'
              }`}
            >
              <div className={`text-3xl font-black ${highlight ? 'text-accent' : 'text-white'}`}>
                <AnimatedNumber target={value} suffix={suffix} />
              </div>
              <div className="mt-1 text-xs text-teal-300/70">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => onOpenLead?.(true)}
            className="group relative overflow-hidden rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              Solicitar propuesta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <a
            href="#como-funciona"
            className="rounded-lg border border-teal-600/60 px-6 py-3 text-sm font-semibold text-teal-300 transition-all hover:border-accent hover:text-accent"
          >
            Ver cómo funciona
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
      >
        <div className="h-8 w-px animate-bounce bg-gradient-to-b from-teal-400/60 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-teal-500/60">Explorar</span>
      </motion.div>
    </section>
  )
}

export default HeroRecompensa
