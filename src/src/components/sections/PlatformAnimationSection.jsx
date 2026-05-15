import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import HackingAnimation from '@/components/HackingAnimation.jsx'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

function PlatformAnimationSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).platform

  return (
    <motion.section id="demo" className="py-20 md:py-28" {...fadeUpProps}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {m.title} <span className="text-accent">{m.titleAccent}</span>
          </h2>
          <p className="text-lg text-teal-100/90">{m.intro}</p>
        </div>
        <HackingAnimation />
      </div>
    </motion.section>
  )
}

export default PlatformAnimationSection
