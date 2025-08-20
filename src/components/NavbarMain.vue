<template>
  <header>
    <nav class="fixed left-0 top-0 z-[1000] w-full border-gray-200 bg-white dark:border-gray-600">
      <div class="mx-auto max-w-[1350px]">
        <div class="relative mx-auto flex max-w-[85vw] items-center justify-between py-8">
          <!-- Logo -->
          <a class="logo block w-[80px]" href="#">
            <img src="https://res.cloudinary.com/dawdmbyro/image/upload/f_auto,q_auto,dpr_auto,w_220,c_scale/v1755652630/Resaad_Colored_fmxp0s.png" alt="Resaad Logo" width="220" height="56" class="h-auto w-[220px]" />
          </a>
          <!-- Mobile toggle -->
          <input type="checkbox" id="check" ref="menuCheck" class="hidden" />
          <label for="check" class="open-menu cursor-pointer select-none text-2xl">≡</label>
          <!-- Menu -->
          <ul class="menu flex items-center [&>li>a]:relative [&>li>a]:text-center [&>li>a]:text-lg [&>li>a]:font-medium [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li]:ps-8">
            <li>
              <RouterLink to="/" @click="closeMenu">{{ $t('home') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" @click="closeMenu">{{ $t('about') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/services" @click="closeMenu">{{ $t('services2') }}</RouterLink>
            </li>
            <li>
              <!-- تم تعديل المفتاح هنا -->
              <RouterLink to="/contact" @click="closeMenu">{{ $t('titleContact') }}</RouterLink>
            </li>

            <li style="color: #e4ae65 !important; font-weight: bold !important">
              <button
                @click="
                  () => {
                    toggleLang()
                    closeMenu()
                  }
                "
              >
                {{ switchLabel }}
              </button>
            </li>
            <li class="md:hidden"><label for="check" class="close-menu cursor-pointer text-2xl">×</label></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed, onMounted, watch, ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()

const langCode = computed(() => (locale.value || '').slice(0, 2).toLowerCase())
const switchLabel = computed(() => (langCode.value === 'en' ? 'عربي' : 'English'))
const isRTL = computed(() => langCode.value === 'ar')

const toggleLang = () => {
  locale.value = isRTL.value ? 'en' : 'ar'
}

// RTL/LTR على <html>
const applyDir = () => {
  document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr'
  document.documentElement.lang = langCode.value
}
onMounted(applyDir)
watch(locale, applyDir)

// اقفال منيو الموبايل
const menuCheck = ref(null)
const closeMenu = () => {
  if (menuCheck.value) menuCheck.value.checked = false
}

// اقفلها بعد أي انتقال روت
router.afterEach(() => closeMenu())

// اختياري: زر Esc يقفلها
const onEsc = (e) => {
  if (e.key === 'Escape') closeMenu()
}
onMounted(() => window.addEventListener('keydown', onEsc))
onBeforeUnmount(() => window.removeEventListener('keydown', onEsc))
</script>

<style>
/* أزرار الموبايل */
.open-menu,
.close-menu {
  position: absolute;
  display: none;
  line-height: 1;
}

/* الوضع العادي (LTR) */
.open-menu {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
.close-menu {
  top: 20px;
  right: 20px;
}

/* RTL */
html[dir='rtl'] .open-menu {
  right: auto;
  left: 20px;
}
html[dir='rtl'] .close-menu {
  right: auto;
  left: 20px;
}

/* موبايل */
@media (max-width: 800px) {
  .open-menu,
  .close-menu {
    display: block;
  }

  .menu {
    position: fixed;
    inset-block-start: 0;
    width: 73%;
    height: 100vh;
    z-index: 100;
    background: #000;
    color: #fff;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    font-size: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* LTR: تدخل من اليمين */
  .menu {
    right: -100%;
  }
  #check:checked ~ .open-menu ~ .menu,
  #check:checked ~ .menu {
    right: 0;
  }

  /* RTL: تدخل من اليسار */
  html[dir='rtl'] .menu {
    right: auto;
    left: -100%;
  }
  html[dir='rtl'] #check:checked ~ .open-menu ~ .menu,
  html[dir='rtl'] #check:checked ~ .menu {
    left: 0;
  }

  .menu li {
    margin-top: 40px;
  }
  .menu li a {
    padding: 10px;
  }
}

/* تأثيرات عامة */
.menu li a {
  transition: color 0.3s ease;
}
.menu li a:hover {
  color: #e4ae65;
}
.router-link-active {
  color: #e4ae65 !important;
  font-weight: bold !important;
}
</style>
