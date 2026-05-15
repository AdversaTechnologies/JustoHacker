import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { Globe2, Lock, Radar, Sparkles } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const icons = [Radar, Globe2, Lock, Sparkles]

function NoctisgridSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).noctisgrid
  const cards = m.cards.map((c, i) => ({ ...c, icon: icons[i] }))

  return (
    <motion.section
      id="noctisgrid"
      className="border-y border-teal-900/50 bg-gradient-to-b from-[#022a2a] via-[#001818] to-[#022a2a] py-20 md:py-28"
      {...fadeUpProps}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 font-mono text-sm tracking-[0.25em] text-accent">{m.kicker}</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            NOCTIS<span className="text-accent">GRID</span>
          </h2>
          <p className="text-xl text-teal-100/90 md:text-2xl">{m.lead}</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-amber-900/40 bg-amber-950/20 p-4 text-center text-sm leading-relaxed text-amber-100/90">
          <strong className="text-amber-200">{m.legalBold}</strong> {m.legalRest}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-teal-800/70 bg-[#0a2f2f]/60 p-6 backdrop-blur-sm"
              >
                <Icon className="mb-4 h-9 w-9 text-accent" />
                <h3 className="mb-2 text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed text-teal-100/85">{c.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default NoctisgridSection
