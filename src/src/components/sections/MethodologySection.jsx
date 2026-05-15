import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { FileCheck2, FlaskConical, Search, ShieldCheck } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const phaseIcons = [Search, FlaskConical, FileCheck2, ShieldCheck]

function MethodologySection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).methodology
  const phases = useMemo(
    () => {
      const ph = pickMessages(locale).methodology.phases
      return ph.map((p, i) => ({ ...p, icon: phaseIcons[i] }))
    },
    [locale],
  )

  return (
    <motion.section id="metodologia" className="section-band-teal py-20 md:py-28" {...fadeUpProps}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">{m.title}</h2>
          <p className="text-lg text-teal-100/90">{m.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative overflow-hidden rounded-xl border border-teal-800/70 bg-[#001818]/75 p-6"
              >
                <div className="mb-3 text-4xl font-black text-accent/30">{String(i + 1).padStart(2, '0')}</div>
                <Icon className="mb-3 h-8 w-8 text-accent" />
                <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-teal-100/85">{p.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default MethodologySection
