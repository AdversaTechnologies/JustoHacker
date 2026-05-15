import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { CalendarClock, GitBranch, RefreshCw, ShieldCheck } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const stepIcons = [CalendarClock, GitBranch, ShieldCheck, RefreshCw]

function ContinuousProtectionSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).continuous
  const steps = useMemo(
    () =>
      m.steps.map((s, i) => ({
        n: String(i + 1).padStart(2, '0'),
        title: s.title,
        desc: s.desc,
        icon: stepIcons[i],
      })),
    [locale],
  )

  return (
    <motion.section id="continuo" className="section-band-dark py-20 md:py-28" {...fadeUpProps}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {m.title} <span className="text-accent">{m.titleAccent}</span>
          </h2>
          <p className="text-lg text-teal-100/90">{m.intro}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {m.rows.map((row) => (
              <div
                key={row.before}
                className="grid gap-3 rounded-xl border border-teal-900/60 bg-[#022a2a]/80 p-4 md:grid-cols-2 md:items-center"
              >
                <div className="text-sm text-teal-200/70">
                  <span className="font-semibold text-teal-400/90">{m.beforeLabel}</span>
                  <p className="mt-1 text-teal-100/85">{row.before}</p>
                </div>
                <div className="text-sm text-accent">
                  <span className="font-semibold">{m.afterLabel}</span>
                  <p className="mt-1 text-teal-50">{row.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl border border-teal-800/70 bg-gradient-to-b from-[#0a3d3d]/40 to-[#001818] p-6 md:p-8">
            <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-accent/10 via-accent/50 to-accent/10 md:left-10" />
            <div className="space-y-8">
              {steps.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex gap-4 pl-8 md:pl-12"
                  >
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-[#001818] text-xs font-bold text-accent md:left-2">
                      {s.n}
                    </div>
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-teal-100/85">{s.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContinuousProtectionSection
