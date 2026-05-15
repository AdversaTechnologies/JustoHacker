import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { UserCheck, Bot, Scale, LineChart, Shield } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

function HumanAiSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).humanAi

  return (
    <motion.section id="humano-ia" className="py-20 md:py-28" {...fadeUpProps}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            <span className="text-accent">{m.title}</span> {m.titleMid}
          </h2>
          <p className="text-lg text-teal-100/90">{m.intro}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="rounded-2xl border border-teal-700/60 bg-[#022a2a]/90 p-8 shadow-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/30">
                <UserCheck className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-300/90">{m.humanLabel}</p>
                <h3 className="text-2xl font-bold text-white">{m.humanTitle}</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {m.humanItems.map((text) => (
                <li key={text} className="flex gap-3 text-teal-100/90">
                  <Scale className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="rounded-2xl border border-accent/35 bg-[#001818]/90 p-8 shadow-xl ring-1 ring-accent/20"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                <Bot className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{m.aiLabel}</p>
                <h3 className="text-2xl font-bold text-white">{m.aiTitle}</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {m.aiItems.map((text) => (
                <li key={text} className="flex gap-3 text-teal-100/90">
                  <LineChart className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 rounded-lg border border-teal-800/60 bg-teal-950/40 p-3 text-sm text-teal-100/80">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{m.footnote}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HumanAiSection
