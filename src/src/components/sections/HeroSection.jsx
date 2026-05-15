import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Clock, Target, CheckCircle, AlertTriangle } from 'lucide-react'
import CircuitBackdrop from '@/components/CircuitBackdrop.jsx'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const statIcons = [Clock, Target, CheckCircle, AlertTriangle]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function HeroSection({ onOpenLead }) {
  const { locale } = useI18n()
  const m = pickMessages(locale).hero
  const stats = m.stats.map((label, i) => ({
    number: ['24/7', '<0.5%', '99.5%', '20%+'][i],
    label,
    icon: statIcons[i],
  }))
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 cyber-grid opacity-25" />
      <CircuitBackdrop />

      <motion.div
        className="pointer-events-none absolute left-[10%] top-28 h-0.5 w-32 bg-accent/50 scan-line-sweep"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 py-12 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.div variants={item}>
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
                {m.badge}
              </Badge>
            </motion.div>
            <motion.h1
              variants={item}
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[2.75rem] xl:text-5xl"
            >
              {m.titleBefore}{' '}
              <span className="text-accent">{m.titleAccent1}</span> {m.titleMid}{' '}
              <span className="text-primary">{m.titleAccent2}</span>
            </motion.h1>
            <motion.p variants={item} className="mb-8 max-w-2xl text-lg text-teal-100/90 md:text-xl">
              {m.subtitle}
            </motion.p>
            <motion.div variants={item} className="mb-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#servicios">{m.ctaServices}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-50 hover:bg-teal-900/50"
                onClick={() => onOpenLead(true)}
              >
                {m.ctaDemo}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="floating-animation relative w-full max-w-md md:max-w-xl lg:max-w-4xl">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-t from-teal-900/30 to-transparent blur-2xl" />
              <img
                src="/justo-hacker-logo.png"
                alt={m.imgAlt}
                className="logo-glow relative z-10 mx-auto h-auto w-full max-w-[min(100%,42rem)] object-contain drop-shadow-lg md:max-w-[min(100%,48rem)]"
                width={900}
                height={600}
                fetchPriority="high"
              />
              <motion.div
                className="pointer-events-none absolute left-[18%] top-[38%] h-1 w-[22%] rounded-full bg-accent/90 blur-[1px]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
              <motion.div
                className="pointer-events-none absolute right-[18%] top-[38%] h-1 w-[22%] rounded-full bg-accent/90 blur-[1px]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className={`border-teal-800/80 bg-card/40 backdrop-blur-sm transition-all duration-500 ${
                  currentStat === index ? 'neon-glow scale-[1.02] border-accent/40' : ''
                }`}
              >
                <CardContent className="p-4 text-center">
                  <Icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <div className="mb-1 text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-xs text-teal-100/80">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
