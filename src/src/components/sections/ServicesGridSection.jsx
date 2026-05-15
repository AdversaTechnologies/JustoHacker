import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { fadeUpProps } from '@/components/sectionMotion.js'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Target, Eye, Brain, Network, FileBarChart, RefreshCw } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const serviceIcons = [Network, Eye, Brain, Target, FileBarChart, RefreshCw]

function ServicesGridSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).services
  const services = useMemo(
    () => {
      const items = pickMessages(locale).services.items
      return items.map((item, i) => ({ ...item, icon: serviceIcons[i] }))
    },
    [locale],
  )

  return (
    <motion.section id="servicios" className="section-band-dark py-20 md:py-28" {...fadeUpProps}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {m.title} <span className="text-accent">{m.titleAccent}</span>
          </h2>
          <p className="text-lg text-teal-100/90">{m.intro}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full border-teal-800/80 bg-card/50 backdrop-blur-sm transition-colors hover:border-accent/40">
                  <CardHeader>
                    <Icon className="mb-3 h-11 w-11 text-accent" />
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="font-semibold text-primary">{service.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-teal-100/85">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-teal-100/80">{m.footnote}</p>
      </div>
    </motion.section>
  )
}

export default ServicesGridSection
