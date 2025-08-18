<template>
  <div class="mx-auto max-w-[1400px]" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="min-h-screen text-slate-800">
      <!-- Hero Title -->
      <div class="mx-auto max-w-[1400px] px-2 pb-14 pt-16">
        <div class="relative mb-8 flex min-h-[260px] w-full items-center justify-center overflow-hidden rounded-2xl">
          <!-- Overlay -->
          <div class="absolute inset-0 z-[90]"></div>

          <img src="/images/ourservices img.png" :alt="te('services.heroAlt') ? t('services.heroAlt') : 'Services'" class="about-image relative z-[95] h-full w-full object-cover" />

          <h1 class="about-title absolute left-1/2 top-[15%] z-[100] w-full -translate-x-1/2 select-none text-center text-[2.6rem] font-extrabold leading-none tracking-[0.3em] text-black md:text-[7.5rem]">
            {{ te('ourServices') ? t('ourServices') : 'Our Services' }}
          </h1>
        </div>
      </div>

      <main class="mx-auto w-full max-w-[1400px] px-4 pb-24 text-start">
        <section v-for="(block, idx) in blockKeys" :key="`${block}-${idx}`" class="mt-12">
          <div class="grid gap-6 lg:grid-cols-3">
            <div class="lg:col-span-3">
              <!-- Kicker -->
              <h3 class="text-base font-semibold tracking-wider  md:text-lg">
                {{ te(`${block}.kicker`) ? t(`${block}.kicker`) : '' }}
              </h3>

              <!-- Title -->
              <h2 class="mt-2 text-3xl font-extrabold md:text-4xl lg:text-5xl" style="color: #e4ae65 !important; font-weight: bold !important">
                {{ te(`${block}.title`) ? t(`${block}.title`) : '' }}
              </h2>

              <!-- Description -->
              <p class="mt-4 max-w-4xl text-[15px] leading-7 text-slate-600 md:text-base">
                {{ te(`${block}.description`) ? t(`${block}.description`) : '' }}
              </p>
            </div>
          </div>

          <!-- Cards -->
          <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article v-for="(it, i) in getItems(block)" :key="`${block}-item-${i}`" class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
              <h4 class="text-lg font-semibold md:text-xl">
                {{ it.title }}
              </h4>
              <p class="mt-3 text-sm leading-6 text-slate-600 md:text-[15px]">
                {{ it.body }}
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, te, tm, locale } = useI18n({ useScope: 'global' })

// دعم ar و ar-EG
const isRTL = computed(() => locale.value?.startsWith('ar'))

const getItems = (block) => {
  const val = tm(`${block}.items`)
  return Array.isArray(val) ? val : []
}

const blockKeys = ['services.banking', 'services.audit', 'services.safety', 'services.it']
</script>
