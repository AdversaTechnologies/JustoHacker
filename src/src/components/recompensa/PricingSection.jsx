import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react'
import { fadeUpProps, staggerParent, staggerChild } from '@/components/sectionMotion.js'

const RETAINER_INCLUDES = [
  'Attack Surface Management (ASM) continuo',
  'Breach & Attack Simulation (BAS) mensual',
  'Threat Intelligence y monitorización OSINT',
  'Scanning continuo de vulnerabilidades en alcance',
  'Reporting ejecutivo mensual',
  'Canal dedicado de comunicación con el equipo JH',
  'Validación de remediaciones incluida',
  'Acumulación de conocimiento del entorno',
]

const BOUNTY_TABLE = [
  {
    tier: 'Critical Tier 1',
    desc: 'Compromiso institucional, domain admin, exfiltración masiva',
    range: '100 – 150 UF',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
  },
  {
    tier: 'Critical Tier 2',
    desc: 'Exposición masiva de datos, acceso sin autenticación a sistemas críticos',
    range: '60 – 100 UF',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    tier: 'Critical Tier 3',
    desc: 'RCE demostrable, persistencia silenciosa, compromiso de confianza',
    range: '30 – 60 UF',
    color: '#eab308',
    bg: 'rgba(234,179,8,0.08)',
  },
]

function AnimatedPrice({ text }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <span
      ref={ref}
      className="font-black tabular-nums transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'scale(1)' : 'scale(0.8)' }}
    >
      {text}
    </span>
  )
}

function PricingSection() {
  return (
    <section
      id="precios"
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #022a2a 0%, #001818 100%)' }}
    >
      {/* Subtle pulse badge */}
      <div className="pointer-events-none absolute right-8 top-8 hidden lg:block">
        <div className="pulse-animation rounded-full border border-green-500/40 bg-green-900/20 px-3 py-1.5 text-xs font-semibold text-green-400">
          Pago por impacto real
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <motion.div {...fadeUpProps} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-teal-700/50 bg-teal-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Modelo de precios
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
            Inversión y retorno
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100/65">
            Un modelo híbrido que alinea los incentivos de Justo Hacker con la seguridad real de tu organización.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Retainer */}
          <motion.div
            {...fadeUpProps}
            className="relative rounded-2xl border border-teal-700/50 bg-[#0a2a2a]/80 p-7 backdrop-blur-sm"
            style={{ boxShadow: '0 0 40px rgba(13,115,119,0.15)' }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-800/50 border border-teal-700/50">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-white">Retainer mensual base</h3>
                <p className="text-xs text-teal-400/70">Cobertura continua del entorno</p>
              </div>
            </div>

            <div className="mb-4 rounded-xl border border-teal-700/40 bg-[#001818]/60 p-4 text-center">
              <p className="text-xs text-teal-400/70 mb-1">Retainer mensual base</p>
              <p className="text-4xl font-black text-accent">
                <AnimatedPrice text="$0" />
              </p>
              <p className="mt-1 text-xs text-teal-400/60">sin costo fijo mensual · solo pagas el hallazgo</p>
            </div>

            <p className="mb-4 text-xs text-teal-400/60">Incluye:</p>
            <motion.ul {...staggerParent} className="space-y-2">
              {RETAINER_INCLUDES.map((item) => (
                <motion.li
                  key={item}
                  {...staggerChild}
                  className="flex items-start gap-2 text-sm text-teal-100/75"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-5 rounded-lg border border-teal-700/30 bg-teal-900/20 p-3 text-xs text-teal-300/70">
              Contrato mínimo anual. El valor del servicio aumenta con el conocimiento acumulativo del entorno del cliente.
            </p>
          </motion.div>

          {/* Right: Bounty table */}
          <motion.div
            {...fadeUpProps}
            transition={{ delay: 0.15 }}
            className="relative rounded-2xl border border-teal-700/50 bg-[#0a2a2a]/80 p-7 backdrop-blur-sm"
          >
            {/* Animated vertical divider visible only on large screens between cols — handled by gap */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-teal-700/50 bg-teal-800/50">
                <Zap className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Bono por hallazgo validado</h3>
                <p className="text-xs text-teal-400/70">Solo se activa con evidencia demostrada</p>
              </div>
            </div>

            <motion.div {...staggerParent} className="space-y-3">
              {BOUNTY_TABLE.map((row, i) => (
                <motion.div
                  key={row.tier}
                  {...staggerChild}
                  whileHover={{ x: 4 }}
                  className="group rounded-xl border p-4 transition-all duration-200"
                  style={{
                    background: row.bg,
                    borderColor: `${row.color}30`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className="text-xs font-black uppercase tracking-wider"
                          style={{ color: row.color }}
                        >
                          {row.tier}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-teal-100/60">{row.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-black text-white">
                        <AnimatedPrice text={row.range} />
                      </p>
                      <p className="text-[10px] text-teal-400/50">UF por hallazgo validado</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-5 rounded-lg border border-yellow-700/30 bg-yellow-900/10 p-3">
              <p className="text-xs text-yellow-300/70">
                <span className="font-semibold">Importante:</span> el bono se determina de forma conjunta en el proceso de validación final. Los rangos varían según el alcance del impacto demostrado y el contexto del cliente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ROI note */}
        <motion.div
          {...fadeUpProps}
          className="mt-8 rounded-xl border border-teal-800/40 bg-teal-900/10 p-5 text-center"
        >
          <p className="text-sm text-teal-100/70">
            Una sola brecha de datos universitaria cuesta de media{' '}
            <span className="font-bold text-accent">USD 3,86 millones</span> (IBM Cost of a Data Breach 2024).
            El Programa RiskProof no es un gasto — es la alternativa más barata al incidente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
