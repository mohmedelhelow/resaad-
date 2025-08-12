// src/i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

export const STORAGE_KEY = 'app_locale'

/**
 * @returns {'ar' | 'en'}
 */
function safeGetLocale() {
  try {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (saved === 'ar' || saved === 'en') return saved
    const lang = typeof navigator !== 'undefined' ? navigator.language : 'en'
    return lang && lang.startsWith('ar') ? 'ar' : 'en'
  } catch  {
    return 'en'
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: safeGetLocale(),
  fallbackLocale: 'en',
  messages: { en, ar }
})

/**
 * غيّر اللغة برمجيًا (اختياري)
 * @param {'ar'|'en'} locale
 */
export function setLocale(locale) {
  const l = i18n.global.locale
  if (typeof l === 'object' && 'value' in l) {
    l.value = locale
  } else {
    i18n.global.locale = locale
  }
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch  {
  return 'en'
  }
}

export default i18n
