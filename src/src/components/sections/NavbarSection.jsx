import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import { useI18n, pickMessages } from '@/i18n/I18nContext.jsx'
import { Link } from 'react-router-dom'

function NavbarSection({ onOpenLead }) {
  const [open, setOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()
  const navLinks = pickMessages(locale).navLinks

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 z-50 w-full border-b border-teal-900/60 bg-[#001818]/92 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <img
            src="/justo-hacker-logo.png"
            alt=""
            className="h-10 w-auto object-contain md:h-11"
            width={120}
            height={44}
          />
          <span className="hidden text-lg font-bold tracking-tight sm:inline">
            <span className="text-white">JUSTO</span>
            <span className="text-accent">HACKER</span>
          </span>
        </a>

        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex max-w-3xl flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-teal-100/85 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* RiskProof private page link */}
          <Link
            to="/programa-recompensa"
            className="hidden items-center gap-1.5 rounded-md border border-teal-600/50 bg-teal-900/30 px-2.5 py-1 text-xs font-semibold text-teal-300 transition-all hover:border-accent hover:text-accent lg:flex"
          >
            RiskProof
            <span className="rounded bg-teal-700/60 px-1 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal-200">
              Privado
            </span>
          </Link>
          <div className="mr-1 flex items-center rounded-md border border-teal-800/80 bg-[#022a2a]/80 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLocale('es')}
              className={`rounded px-2 py-1 transition-colors ${
                locale === 'es' ? 'bg-primary text-white' : 'text-teal-200/90 hover:text-accent'
              }`}
            >
              {t('nav.langEs')}
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded px-2 py-1 transition-colors ${
                locale === 'en' ? 'bg-primary text-white' : 'text-teal-200/90 hover:text-accent'
              }`}
            >
              {t('nav.langEn')}
            </button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="hidden border-accent/60 text-accent hover:bg-accent/15 sm:inline-flex"
            onClick={() => onOpenLead(true)}
          >
            {t('nav.demo')}
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#contacto">{t('nav.contact')}</a>
          </Button>
          <button
            type="button"
            className="rounded-md p-2 text-teal-100 lg:hidden"
            aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-teal-900/50 bg-[#022a2a]/98 px-4 py-4 lg:hidden">
          <div className="mb-3 flex justify-center gap-2 text-xs font-semibold">
            <button
              type="button"
              className={`rounded px-3 py-1 ${locale === 'es' ? 'bg-primary text-white' : 'border border-teal-700 text-teal-100'}`}
              onClick={() => setLocale('es')}
            >
              {t('nav.langEs')}
            </button>
            <button
              type="button"
              className={`rounded px-3 py-1 ${locale === 'en' ? 'bg-primary text-white' : 'border border-teal-700 text-teal-100'}`}
              onClick={() => setLocale('en')}
            >
              {t('nav.langEn')}
            </button>
          </div>
          <div className="flex max-h-[70vh] flex-col gap-2 overflow-y-auto text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md py-2 text-teal-50 hover:bg-teal-900/40 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/programa-recompensa"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-md py-2 text-teal-300 hover:bg-teal-900/40 hover:text-accent"
            >
              <span>Programa RiskProof</span>
              <span className="rounded bg-teal-700/60 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal-200">
                Privado
              </span>
            </Link>
            <Button
              className="mt-2 w-full bg-primary"
              onClick={() => {
                setOpen(false)
                onOpenLead(true)
              }}
            >
              {t('nav.requestDemo')}
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default NavbarSection
