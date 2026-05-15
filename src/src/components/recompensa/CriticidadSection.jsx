import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X, CheckCircle2 } from 'lucide-react'
import { fadeUpProps, staggerParent, staggerChild } from '@/components/sectionMotion.js'

const LEVELS = [
  {
    tier: 1,
    label: 'Compromiso institucional total',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.35)',
    bg: 'rgba(239,68,68,0.08)',
    examples: [
      'Obtención de credenciales Domain Admin',
      'Bypass completo de MFA corporativo',
      'Ransomware viable en entorno de producción',
      'Exfiltración masiva de base de datos de alumnos',
    ],
    impact: 'Paralización total de operaciones, violación RGPD masiva, daño reputacional irreversible.',
  },
  {
    tier: 2,
    label: 'Exposición masiva de datos sensibles',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.35)',
    bg: 'rgba(249,115,22,0.08)',
    examples: [
      'Acceso a registros académicos de >10.000 alumnos',
      'Exfiltración de nóminas o expedientes de personal',
      'Exposición de datos PII sin cifrar en repositorios',
      'Acceso a investigaciones confidenciales',
    ],
    impact: 'Notificación obligatoria a AEPD, multas RGPD, pérdida de confianza institucional.',
  },
  {
    tier: 3,
    label: 'Ejecución remota de código (RCE)',
    color: '#eab308',
    glow: 'rgba(234,179,8,0.35)',
    bg: 'rgba(234,179,8,0.08)',
    examples: [
      'RCE en servidor web o aplicación institucional',
      'Webshell persistente en producción',
      'Explotación de vulnerabilidad CVE sin parchear',
      'RCE en sistema ERP o LMS',
    ],
    impact: 'Control del sistema comprometido, plataforma de pivoting hacia sistemas internos.',
  },
  {
    tier: 4,
    label: 'Persistencia silenciosa',
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,0.35)',
    bg: 'rgba(45,212,191,0.08)',
    examples: [
      'Golden Ticket / Silver Ticket en Kerberos',
      'Creación de shadow admin indetectable',
      'Backdoor en tarea programada o servicio',
      'Persistencia en GPO de dominio',
    ],
    impact: 'Acceso mantenido de larga duración sin detección; preparación para ataque mayor.',
  },
  {
    tier: 5,
    label: 'Compromiso de confianza institucional',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.35)',
    bg: 'rgba(59,130,246,0.08)',
    examples: [
      'Firma de certificados fraudulentos en CA interna',
      'Manipulación de notas académicas demostrable',
      'Phishing interno convincente desde dominio legítimo',
      'Defacement de portal institucional con acceso',
    ],
    impact: 'Pérdida de integridad de procesos académicos, fraude académico, crisis de reputación.',
  },
]

const EXCLUSIONS = [
  'Vulnerabilidades teóricas sin prueba de explotación',
  'Hallazgos de escáneres automáticos sin validación manual',
  'Problemas de configuración sin impacto real demostrable',
  'Vulnerabilidades en software fuera del alcance acordado',
  'Ataques de denegación de servicio (DoS/DDoS)',
  'Ingeniería social sin autorización explícita',
  'Vulnerabilidades en sistemas de terceros no gestionados',
]

function LevelRow({ level }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div {...staggerChild} className="overflow-hidden rounded-xl border border-[#1a3a3a] bg-[#0a2a2a]/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-teal-900/20"
      >
        {/* Tier number with glow */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-black"
          style={{
            background: level.bg,
            border: `1px solid ${level.color}40`,
            color: level.color,
            boxShadow: `0 0 12px ${level.glow}`,
          }}
        >
          {level.tier}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: level.color }}
            >
              Tier {level.tier}
            </span>
          </div>
          <p className="text-sm font-semibold text-white">{level.label}</p>
        </div>

        {/* Left color bar */}
        <div
          className="mr-2 h-8 w-1 shrink-0 rounded-full"
          style={{
            background: level.color,
            boxShadow: `0 0 8px ${level.glow}`,
          }}
        />

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="h-4 w-4 text-teal-400/70" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-teal-800/30 px-5 pb-5 pt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-400/80">
                    Ejemplos de hallazgos
                  </p>
                  <ul className="space-y-1.5">
                    {level.examples.map((ex) => (
                      <motion.li
                        key={ex}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-2 text-xs text-teal-100/70"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: level.color }} />
                        {ex}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-400/80">
                    Impacto potencial
                  </p>
                  <p
                    className="rounded-lg p-3 text-xs leading-relaxed text-white/80"
                    style={{ background: level.bg, borderLeft: `3px solid ${level.color}` }}
                  >
                    {level.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CriticidadSection() {
  return (
    <section
      id="criticidad"
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #022a2a 0%, #001818 100%)' }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div {...fadeUpProps} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-teal-700/50 bg-teal-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Modelo de severidad
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
            ¿Qué es un hallazgo crítico?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100/65">
            Solo se factura el bono si el hallazgo pertenece a uno de estos niveles y se puede demostrar de forma controlada.
          </p>
        </motion.div>

        {/* Levels accordion */}
        <motion.div {...staggerParent} className="mb-14 space-y-3">
          {LEVELS.map((level) => (
            <LevelRow key={level.tier} level={level} />
          ))}
        </motion.div>

        {/* Exclusions */}
        <motion.div
          {...fadeUpProps}
          className="rounded-xl border border-teal-800/40 bg-[#010f0f]/80 p-6"
        >
          <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-white">
            <X className="h-4 w-4 text-red-400" />
            Qué NO cuenta como hallazgo crítico
          </h3>
          <motion.ul {...staggerParent} className="grid gap-2 sm:grid-cols-2">
            {EXCLUSIONS.map((ex) => (
              <motion.li
                key={ex}
                {...staggerChild}
                className="flex items-start gap-2 text-sm text-teal-100/55"
              >
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500/70" />
                {ex}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}

export default CriticidadSection
