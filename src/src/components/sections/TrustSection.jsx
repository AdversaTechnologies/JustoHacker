import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { Monitor } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

function TrustSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).trust

  return (
    <motion.section id="confianza" className="section-band-teal py-20 md:py-28" {...fadeUpProps}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {m.title} <span className="text-accent">{m.titleAccent}</span>
          </h2>
          <p className="text-lg text-teal-100/90">{m.intro}</p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-teal-800/70 bg-[#001818]/80 p-8 backdrop-blur-sm md:p-10"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-accent">{m.blockTitle}</h3>
              <ul className="space-y-4 text-teal-100/90">
                {m.bullets.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.6)] ${
                        ['bg-emerald-400', 'bg-sky-400', 'bg-amber-400', 'bg-rose-400'][idx]
                      }`}
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-teal-800/60 bg-[#022a2a]/60 p-8">
              <div className="text-center">
                <Monitor className="mx-auto mb-4 h-16 w-16 text-accent" />
                <div className="text-2xl font-bold text-white">{m.socTitle}</div>
                <p className="mt-2 text-sm text-teal-200/80">{m.socSub}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg border border-teal-800/50 bg-[#001818]/80 p-3">
                    <div className="text-lg font-bold text-accent">24/7</div>
                    <div className="text-teal-300/80">{m.cov}</div>
                  </div>
                  <div className="rounded-lg border border-teal-800/50 bg-[#001818]/80 p-3">
                    <div className="text-lg font-bold text-emerald-400">{m.active}</div>
                    <div className="text-teal-300/80">{m.state}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TrustSection
