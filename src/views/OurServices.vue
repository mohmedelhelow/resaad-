<template>
  <div class="max-w-[1400px] mx-auto" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="min-h-screen text-slate-800">
      <!-- Hero Title -->
      <div class="max-w-[1400px] mx-auto pt-16 px-2 pb-14">
        <div
          class="relative w-full rounded-2xl overflow-hidden mb-8 flex items-center justify-center"
          style="min-height: 260px"
        >
          <img
            src="/images/ourservices img.png"
            :alt="$t('services.heroAlt')"
            class="about-image w-full h-full object-cover relative"
            style="z-index: 99"
          />
          <h1
            class="about-title absolute z-[100] left-1/2 -translate-x-1/2 font-extrabold text-black
                   text-[2.6rem] md:text-[7.5rem] uppercase tracking-[0.3em] leading-none text-center select-none"
            style="top: 15%; width: 100%"
          >
            {{ $t('ourServices') }}
          </h1>
        </div>
      </div>

      <main
        class="w-full max-w-[1400px] mx-auto px-4 pb-24"
        :class="isRTL ? 'text-right' : 'text-left'"
      >
        <section v-for="(block, idx) in blockKeys" :key="`${block}-${idx}`" class="mt-12">
          <div class="grid gap-6 lg:grid-cols-3">
            <div class="lg:col-span-3">
              <!-- Kicker -->
              <h3 class="text-base md:text-lg font-semibold uppercase tracking-wider text-amber-700">
                {{ $t(`${block}.kicker`) }}
              </h3>

              <!-- Title -->
              <h2 class="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold">
                {{ $t(`${block}.title`) }}
              </h2>

              <!-- Description -->
              <p class="mt-4 max-w-4xl text-[15px] md:text-base leading-7 text-slate-600">
                {{ $t(`${block}.description`) }}
              </p>
            </div>
          </div>

          <!-- Cards -->
          <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="(it, i) in tm(`${block}.items`)"
              :key="`${block}-item-${i}`"
              class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 transition"
            >
              <h4 class="text-lg md:text-xl font-semibold">
                {{ it.title }}
              </h4>
              <p class="mt-3 text-sm md:text-[15px] leading-6 text-slate-600">
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

const { locale, tm } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

// مفاتيح الأقسام بدل هاردكود
const blockKeys = ['services.banking', 'services.audit', 'services.safety', 'services.it']
</script>

<style scoped>
article:hover {
  transform: translateY(-2px);
  transition: transform 180ms ease;
}
</style>
