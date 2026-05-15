import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { fadeUpProps } from '@/components/sectionMotion.js'

const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  size: 4 + (i % 3) * 3,
  left: `${10 + i * 11}%`,
  top: `${20 + (i * 13) % 55}%`,
  delay: `${i * 0.45}s`,
  duration: `${3.2 + (i % 3) * 0.6}s`,
}))

function CtaRecompensa({ onOpenLead }) {
  return (
    <section
      id="contacto-riskproof"
      className="relative overflow-hidden py-28"
      style={{ background: 'linear-gradient(180deg, #001818 0%, #022a2a 50%, #001818 100%)' }}
    >
      {/* Animated cyber grid */}
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-teal-400/25 floating-animation"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, #0d7377 0%, transparent 65%)' }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div {...fadeUpProps} className="mb-3">
          <span className="inline-block rounded-full border border-teal-700/50 bg-teal-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Próximo paso
          </span>
        </motion.div>

        <motion.h2
          {...fadeUpProps}
          transition={{ delay: 0.1 }}
          className="mb-5 text-4xl font-extrabold leading-tight text-white md:text-5xl"
        >
          ¿Listo para conocer tu{' '}
          <span className="bg-gradient-to-r from-teal-300 via-accent to-teal-400 bg-clip-text text-transparent">
            riesgo real?
          </span>
        </motion.h2>

        <motion.p
          {...fadeUpProps}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-4 max-w-xl text-lg text-teal-100/70"
        >
          No cobramos por PDFs de vulnerabilidades. Cobramos cuando demostramos riesgo real explotable.
        </motion.p>

        <motion.p
          {...fadeUpProps}
          transition={{ delay: 0.25 }}
          className="mx-auto mb-10 max-w-lg text-sm italic text-teal-400/60"
        >
          La propuesta incluye un análisis preliminar de la superficie de exposición de tu institución, sin coste.
        </motion.p>

        <motion.div
          {...fadeUpProps}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => onOpenLead?.(true)}
            className="group relative overflow-hidden rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-primary/90 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              Solicitar propuesta personalizada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          {/* Secondary: email */}
          <a
            href="mailto:hola@justohacker.com?subject=Programa%20RiskProof%20-%20Consulta"
            className="flex items-center gap-2 rounded-lg border border-teal-600/60 px-6 py-3.5 text-base font-semibold text-teal-300 transition-all hover:border-accent hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            hola@justohacker.com
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUpProps}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-teal-500/60"
        >
          {[
            'Sin compromiso de permanencia en la propuesta',
            'Respuesta en menos de 24h',
            'NDA previo a cualquier propuesta',
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-teal-500/40" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CtaRecompensa
