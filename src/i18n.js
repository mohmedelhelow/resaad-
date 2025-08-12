
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

export const STORAGE_KEY = 'app_locale'

function getInitialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'ar' || saved === 'en') return saved
  return navigator.language?.startsWith('ar') ? 'ar' : 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: { en, ar }
})

export default i18n
