import React from 'react'
import { Mail, Phone } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

function FooterSection() {
  const { locale } = useI18n()
  const m = pickMessages(locale).footer

  return (
    <footer className="border-t border-teal-900/60 bg-[#001010] py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/justo-hacker-logo.png" alt="" className="h-12 w-auto object-contain" width={100} height={40} />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-teal-200/80">{m.blurb}</p>
            <div className="space-y-2 text-sm text-teal-200/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+56 2 326 30660</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contacto@justohacker.com" className="hover:text-accent">
                  contacto@justohacker.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">{m.services}</h4>
            <ul className="space-y-2 text-sm text-teal-200/80">
              {m.serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">{m.explore}</h4>
            <ul className="space-y-2 text-sm text-teal-200/80">
              {m.exploreItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">{m.legal}</h4>
            <ul className="space-y-2 text-sm text-teal-200/80">
              {m.legalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-teal-900/50 pt-8 text-center text-sm text-teal-300/70">
          <p>
            &copy; 2026 Justo Hacker. {m.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
