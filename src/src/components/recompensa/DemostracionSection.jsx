import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shuffle, FileDigit, Shield } from 'lucide-react'
import { fadeUpProps, staggerParent, staggerChild } from '@/components/sectionMotion.js'

const PROOFS = [
  {
    icon: Terminal,
    title: 'Proof of Access',
    subtitle: 'Acceso demostrado y controlado',
    desc: 'Se obtiene un shell controlado o acceso a panel de administración del sistema objetivo. Se documenta la sesión con capturas de pantalla firmadas y video. No se ejecutan comandos destructivos.',
    detail: 'Ejemplo: shell reverso a servidor de producción desde IP de auditoría acordada, con grabación de sesión.',
    dotColor: '#ef4444',
    pattern: 'radial-gradient(circle at 20% 80%, rgba(239,68,68,0.08) 0%, transparent 60%)',
  },
  {
    icon: Shuffle,
    title: 'Proof of Impact',
    subtitle: 'Demostración de alcance real',
    desc: 'Se realiza un pivot controlado hacia sistemas de mayor valor para demostrar el alcance del compromiso. Se utiliza una cuenta señuelo o registro dummy para modificación de datos.',
    detail: 'Ejemplo: modificación de nota académica en cuenta señuelo creada para la auditoría, sin afectar datos reales.',
    dotColor: '#f97316',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 60%)',
  },
  {
    icon: FileDigit,
    title: 'Evidencia criptográfica',
    subtitle: 'Trazabilidad e integridad',
    desc: 'Toda la evidencia se sella con hash SHA-256 con timestamp externo verificable. Los videos de sesión se firman digitalmente. El informe incluye la cadena de custodia completa.',
    detail: 'Ejemplo: hash de captura de pantalla registrado en blockchain público en el momento de la obtención.',
    dotColor: '#2dd4bf',
    pattern: 'radial-gradient(circle at 20% 20%, rgba(45,212,191,0.08) 0%, transparent 60%)',
  },
  {
    icon: Shield,
    title: 'Entorno seguro',
    subtitle: 'Nunca datos reales, nunca destrucción',
    desc: 'Todas las pruebas de impacto se realizan sobre cuentas señuelo, entornos sandbox o registros dummy creados exclusivamente para la auditoría. Se evita cualquier impacto operativo.',
    detail: 'Principio absoluto: si no se puede demostrar sin riesgo de daño, no se demuestra.',
    dotColor: '#22c55e',
    pattern: 'radial-gradient(circle at 80% 80%, rgba(34,197,94,0.08) 0%, transparent 60%)',
  },
]

function DemostracionSection() {
  return (
    <section
      id="demostracion"
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #001818 0%, #022a2a 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div {...fadeUpProps} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-teal-700/50 bg-teal-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Evidencia controlada
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
            Cómo demostramos el hallazgo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100/65">
            Cada hallazgo requiere evidencia verificable. Nunca datos reales, nunca destrucción.
          </p>
        </motion.div>

        <motion.div
          {...staggerParent}
          className="grid gap-6 sm:grid-cols-2"
        >
          {PROOFS.map((proof) => {
            const Icon = proof.icon
            return (
              <motion.div
                key={proof.title}
                {...staggerChild}
                whileHover={{ borderColor: '#2dd4bf80' }}
                className="group relative overflow-hidden rounded-xl border border-teal-800/50 p-6 transition-all duration-300"
                style={{ background: `#0a2a2a ${proof.pattern}` }}
              >
                {/* Floating icon */}
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className="floating-animation flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `${proof.dotColor}14`,
                      border: `1px solid ${proof.dotColor}40`,
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: proof.dotColor }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{proof.title}</h3>
                    <p className="text-xs text-teal-400/70">{proof.subtitle}</p>
                  </div>
                </div>

                <p className="mb-3 text-sm leading-relaxed text-teal-100/70">{proof.desc}</p>

                {/* Detail callout */}
                <div
                  className="rounded-lg p-3 text-xs text-teal-100/55 italic"
                  style={{
                    background: `${proof.dotColor}0a`,
                    borderLeft: `2px solid ${proof.dotColor}50`,
                  }}
                >
                  {proof.detail}
                </div>

                {/* Hover border bottom */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${proof.dotColor}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key principle */}
        <motion.div
          {...fadeUpProps}
          className="mt-10 rounded-xl border border-teal-700/40 bg-teal-900/20 p-6 text-center"
        >
          <p className="text-sm font-medium text-teal-100/80">
            Principio absoluto del programa:{' '}
            <span className="font-bold text-accent">
              si no se puede demostrar sin riesgo de daño, no se demuestra.
            </span>
          </p>
          <p className="mt-2 text-xs text-teal-400/60">
            Esto protege al cliente, garantiza la validez legal del hallazgo y mantiene la integridad del proceso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DemostracionSection
