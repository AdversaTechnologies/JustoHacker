import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Brain, Cpu, Moon, Radio } from 'lucide-react'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const icons = [Moon, Cpu, Radio, Brain]

function AiNeverSleepsSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).ai247
  const bullets = useMemo(() => {
    const cards = pickMessages(locale).ai247.cards
    return cards.map((c, i) => ({ ...c, icon: icons[i] }))
  }, [locale])

  return (
    <motion.section
      id="ia-247"
      className="section-band-teal border-y border-teal-900/50 py-20 md:py-28"
      {...fadeUpProps}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{m.kicker}</p>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            {m.title} <span className="text-accent">{m.titleAccent}</span>
          </h2>
          <p className="text-lg text-teal-100/90 md:text-xl">{m.intro}</p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {bullets.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(45, 212, 191, 0.45)' }}
                className="rounded-xl border border-teal-800/80 bg-[#001818]/70 p-6 shadow-lg backdrop-blur-sm"
              >
                <Icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-2 text-xl font-semibold text-white">{b.title}</h3>
                <p className="leading-relaxed text-teal-100/85">{b.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AiNeverSleepsSection
