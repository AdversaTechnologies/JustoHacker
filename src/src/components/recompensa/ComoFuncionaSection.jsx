import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, SearchCode, FlaskConical, BadgeCheck } from 'lucide-react'
import { fadeUpProps, staggerParent, staggerChild } from '@/components/sectionMotion.js'

const STEPS = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Declaración de activos',
    desc: 'El cliente entrega el inventario de activos que desea evaluar: dominios externos, IPs internas, aplicaciones web, entornos cloud o segmentos de red. Tú defines el alcance; nosotros atacamos dentro de él.',
    color: '#2dd4bf',
  },
  {
    icon: SearchCode,
    num: '02',
    title: 'Validación adversarial continua',
    desc: 'Justo Hacker ejecuta técnicas reales de ataque (reconocimiento, explotación, post-explotación) sobre los activos declarados de forma ininterrumpida, simulando un adversario persistente.',
    color: '#0d7377',
  },
  {
    icon: FlaskConical,
    num: '03',
    title: 'Demostración controlada',
    desc: 'Cada hallazgo crítico se demuestra de forma controlada y no destructiva: capturas de evidencia, acceso limitado a entornos señuelo, sin exposición de datos reales ni interrupción de servicios.',
    color: '#5eead4',
  },
  {
    icon: BadgeCheck,
    num: '04',
    title: 'Facturación por impacto real',
    desc: 'Solo se factura el bono adicional si el hallazgo supera el umbral de criticidad acordado en el contrato y es validado de forma conjunta. Cero pago por vulnerabilidades teóricas o no explotables.',
    color: '#2dd4bf',
  },
]

function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #022a2a 0%, #001818 100%)' }}
    >
      {/* Background grid subtle */}
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.div {...fadeUpProps} className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-teal-700/50 bg-teal-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Metodología gray-box
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
            Cómo funciona
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100/70">
            Un proceso diseñado para que solo pagues cuando demostramos riesgo real y explotable en tu organización.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-teal-400/60 via-teal-600/30 to-transparent md:left-1/2 md:block"
            style={{ transformOrigin: 'top center' }}
          />

          <motion.div
            {...staggerParent}
            className="space-y-12"
          >
            {STEPS.map((step, idx) => {
              const Icon = step.icon
              const isRight = idx % 2 === 0
              return (
                <motion.div
                  key={step.num}
                  {...staggerChild}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step card */}
                  <div className={`flex-1 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="rounded-xl border border-teal-800/50 bg-[#0a2a2a]/80 p-6 backdrop-blur-sm"
                      style={{ boxShadow: `0 0 0 1px ${step.color}18` }}
                    >
                      <div className={`mb-3 flex items-center gap-3 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                        <span
                          className="text-xs font-black uppercase tracking-widest"
                          style={{ color: step.color }}
                        >
                          Paso {step.num}
                        </span>
                        <div
                          className="h-px flex-1 opacity-40"
                          style={{ background: step.color }}
                        />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-teal-100/65">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center icon node */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    className="relative z-10 hidden shrink-0 flex-col items-center md:flex"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2"
                      style={{
                        borderColor: step.color,
                        background: '#022a2a',
                        boxShadow: `0 0 20px ${step.color}44`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: step.color }} />
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaSection
