import './assets/main.css'
import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { STORAGE_KEY } from './i18n'
import './overrides.css'

const app = createApp(App)
app.use(i18n)
app.use(router)

function lockLightTheme() {
  const root = document.documentElement
  root.classList.remove('dark')
  root.classList.add('light')
  root.style.colorScheme = 'light'
  root.setAttribute('data-theme', 'light')
}

function updateDir(lang) {
  const rtl = ['ar', 'he', 'fa', 'ur']
  document.documentElement.setAttribute('dir', rtl.includes(lang) ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', lang)
}

function updateTitle(route) {
  const { t, locale } = i18n.global
  const lang = typeof locale === 'object' ? locale.value : locale
  const key = route.name ? `title.${route.name}` : null
  const site = t('siteName') || (lang === 'ar' ? 'رصّاد' : 'Ressad')
  const page = key ? t(key) : ''
  document.title = page ? `${page} — ${site}` : site
}

const currentLocale = i18n.global.locale.value
lockLightTheme()
updateDir(currentLocale)

router.isReady().then(() => {
  updateTitle(router.currentRoute.value)
})

router.afterEach((to) => {
  updateTitle(to)
})

watch(() => i18n.global.locale.value, (newLang) => {
  localStorage.setItem(STORAGE_KEY, newLang)
  updateDir(newLang)
  lockLightTheme()
  updateTitle(router.currentRoute.value)
})

app.mount('#app')
