import { useEffect } from 'react'
import { useI18n } from '@/i18n/I18nContext.jsx'

/** Syncs document title with selected locale. */
function DocumentTitle() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t('meta.title')
  }, [t])

  return null
}

export default DocumentTitle
