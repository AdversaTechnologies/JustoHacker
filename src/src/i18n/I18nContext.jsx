import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { messages } from '@/i18n/messages.js'

const STORAGE_KEY = 'jh-locale'

const I18nContext = createContext(null)

function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj)
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'es'
  })

  const setLocale = useCallback((next) => {
    const lng = next === 'en' ? 'en' : 'es'
    setLocaleState(lng)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lng)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'en' ? 'en' : 'es'
    }
  }, [locale])

  const t = useCallback(
    (path) => {
      const bundle = messages[locale] || messages.es
      const fallback = messages.es
      const value = getPath(bundle, path) ?? getPath(fallback, path)
      if (value === undefined || value === null) return path
      return value
    },
    [locale],
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}

export function pickMessages(locale) {
  return messages[locale] || messages.es
}
