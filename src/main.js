// src/main.js
import './assets/main.css'
import './overrides.css'
import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { STORAGE_KEY } from './i18n'

const app = createApp(App)

// 1) ثبّت i18n قبل الراوتر
app.use(i18n)
app.use(router)

// 2) إجبار الثيم الفاتح (اختياري حسب مشروعك)
function lockLightTheme() {
  const root = document.documentElement
  root.classList.remove('dark')
  root.classList.add('light')
  root.style.colorScheme = 'light'
  root.setAttribute('data-theme', 'light')
}

// 3) تحديث اتجاه الصفحة والـlang
function updateDir(lang) {
  const rtl = ['ar', 'he', 'fa', 'ur']
  document.documentElement.setAttribute('dir', rtl.includes(lang) ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', lang)
}

// 4) تحديث عنوان الصفحة مع فحص وجود المفاتيح
function updateTitle(route) {
  const { t, te, locale } = i18n.global
  const lang = typeof locale === 'object' ? locale.value : locale

  const site = te('siteName') ? t('siteName') : (lang === 'ar' ? 'رصّاد' : 'Resaad')

  // جرّب عنوان مبني على اسم الراوت (title.home, title.about, ...)
  const key = route?.name ? `title.${route.name}` : null

  let page = ''
  if (key && te(key)) {
    page = t(key)
  } else if (route?.meta?.title) {
    page = route.meta.title
  }

  document.title = page ? `${page} — ${site}` : site
}

// 5) تهيئة أولية
const currentLocale = (typeof i18n.global.locale === 'object' && i18n.global.locale?.value)
  ? i18n.global.locale.value
  : i18n.global.locale

lockLightTheme()
updateDir(currentLocale)

// 6) حدّث العنوان عند أول تحميل وبعد كل تنقّل
router.isReady().then(() => {
  updateTitle(router.currentRoute.value)
})
router.afterEach((to) => {
  updateTitle(to)
})

// 7) راقب تغيير اللغة وطبّق التحديثات
// (لو ظهرت تحذيرات، انقل الـwatch بعد mount داخل queueMicrotask كما بالأسفل)
watch(
  () => (typeof i18n.global.locale === 'object' ? i18n.global.locale.value : i18n.global.locale),
  (newLang) => {
    try { localStorage.setItem(STORAGE_KEY, newLang) } catch {
      return 'en'
    }
    updateDir(newLang)
    lockLightTheme()
    updateTitle(router.currentRoute.value)
  }
)

app.mount('#app')

// بديل آمن لو الـwatch برا دورة حياة كومبوننت يطلع تحذير:
// queueMicrotask(() => {
//   watch(() => i18n.global.locale.value, (newLang) => {
//     try { localStorage.setItem(STORAGE_KEY, newLang) } catch {}
//     updateDir(newLang)
//     lockLightTheme()
//     updateTitle(router.currentRoute.value)
//   })
// })
