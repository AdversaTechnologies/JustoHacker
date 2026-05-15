import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

function FinalCtaSection({ onOpenLead }) {
  const { locale } = useI18n()
  const m = pickMessages(locale).cta

  return (
    <motion.section
      id="contacto"
      className="border-t border-teal-900/50 bg-gradient-to-b from-[#022a2a] to-[#001818] py-20 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          {m.title} <span className="text-accent">{m.titleAccent}</span>
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-teal-100/90">{m.intro}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={() => onOpenLead(true)}
          >
            {m.demo}
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/15" asChild>
            <a href="mailto:contacto@justohacker.com">{m.email}</a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

export default FinalCtaSection
