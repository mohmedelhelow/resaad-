<template>
  <div class="mx-auto max-w-[1400px]" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Hero Section -->
    <section class="section1 pb-16 pt-28">
      <div class="relative mx-auto min-h-[calc(100vh-7rem-4rem)] max-w-[90vw] overflow-hidden rounded-3xl shadow-xl">
        <img src="https://res.cloudinary.com/dawdmbyro/image/upload/v1755675265/homepage1_zwpvij.png" class="absolute inset-0 h-full w-full object-cover" loading="lazy" alt="Background image" />
        <div class="absolute inset-0 flex items-start justify-center bg-black bg-opacity-5 px-6 pt-32 md:justify-start">
          <div
            :class="[
              'max-w-2xl text-center text-white', // دايمًا في النص على الموبايل
              isRTL ? 'md:text-right' : 'md:text-left', // وعلى الشاشات الكبيرة ياخد RTL/LTR
            ]"
          >
            <h1 class="text-[clamp(3rem,15vw,12rem)] font-extrabold leading-tight" data-aos="fade-up" data-aos-delay="200">
              {{ $t('Crafting') }}
            </h1>
            <h2 class="m-10 mt-0.5 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl" data-aos="fade-up" data-aos-delay="1000">
              {{ $t('blueprint') }}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-white px-4 py-24" style="animation-delay: 0.15s">
      <div class="mx-auto grid max-w-[90vw] items-center gap-16 lg:grid-cols-2">
        <div class="order-2 lg:order-1">
          <img src="/images/riyadh.jpg" alt="Expo 2030" class="mx-auto max-h-[500px] w-full rounded-3xl object-cover shadow-xl" loading="lazy" data-aos="fade-right" data-aos-delay="200" />
        </div>
        <div class="order-1 lg:order-2" :class="isRTL ? 'text-right' : 'text-left'">
          <h2 class="text-black-900 mb-4 text-sm font-semibold tracking-wider" data-aos="fade-left" data-aos-delay="200">
            {{ $t('Contribution') }}
          </h2>
          <h1 class="mb-6 text-5xl font-extrabold leading-tight text-[#e4ae65] sm:text-7xl" data-aos="fade-left" data-aos-delay="800">
            {{ $t('expoContribution') }}
          </h1>
          <p class="text-lg leading-relaxed text-gray-700 sm:text-xl" data-aos="fade-left" data-aos-delay="1200">
            {{ $t('expoParagraph') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Vision Alignment Section -->
    <section class="bg-white px-4 py-24">
      <div class="mx-auto grid max-w-[90vw] items-center gap-16 lg:grid-cols-2">
        <div class="order-2 lg:order-1" :class="isRTL ? 'text-right' : 'text-left'">
          <h2 class="text-black-900 mb-4 text-sm font-semibold tracking-wider" data-aos="fade-right" data-aos-delay="200">
            {{ $t('Contribution') }}
          </h2>
          <h1 class="mb-6 text-5xl font-extrabold leading-tight text-[#e4ae65] sm:text-7xl" data-aos="fade-right" data-aos-delay="800">
            {{ $t('visionAlignment') }}
          </h1>
          <p class="text-lg leading-relaxed text-gray-700 sm:text-xl" data-aos="fade-right" data-aos-delay="1200">
            {{ $t('visionParagraph') }}
          </p>
        </div>
        <div class="order-1 lg:order-2">
          <img src="/images/2030new.png" alt="Expo 2030" class="mx-auto max-h-[500px] w-full rounded-3xl object-cover shadow-xl" loading="lazy" data-aos="fade-left" data-aos-delay="200" />
        </div>
      </div>
    </section>

    <!-- About Us Big Section -->
    <section class="px-4 py-16 md:py-20" style="animation-delay: 0.35s" dir="ltr">
      <div class="mx-auto max-w-[90vw]">
        <div class="flex flex-col items-stretch gap-6 overflow-hidden rounded-3xl p-4 md:p-10 lg:min-h-[700px] lg:flex-row">
          <!-- Left Content -->
          <div class="flex flex-col justify-center rounded-2xl bg-gradient-to-r from-[#e6b064] to-white p-5 sm:p-8 md:p-10 lg:w-1/2" :class="isRTL ? 'text-right' : 'text-left'">
            <div class="w-full max-w-[520px] space-y-4 md:max-w-[620px] md:space-y-6" :class="isRTL ? 'ml-auto' : ''">
              <h2 class="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl lg:text-7xl">
                {{ $t('aboutUs') }}
              </h2>

              <h3 class="whitespace-pre-line text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
                {{ $t('aboutTagline') }}
              </h3>

              <p class="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                {{ $t('aboutParagraph') }}
              </p>

              <router-link to="/about" class="mt-6 block w-fit rounded-full border border-black px-6 py-2 text-black transition hover:bg-black hover:text-white md:mt-10 lg:mt-12">
                {{ $t('seeMore') }}
              </router-link>
            </div>
          </div>

          <!-- Right Image -->
          <div class="overflow-hidden rounded-2xl shadow-md lg:w-1/2">
            <img src="/images/neom-xXqWVUvf_Gw-unsplash.jpg" alt="Desert Landscape" loading="lazy" class="h-64 w-full object-cover md:h-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="px-4 py-20" style="animation-delay: 0.45s">
      <div class="mx-auto max-w-[1400px]">
        <div class="space-y-8 rounded-3xl bg-[#f6f6f6] p-4 shadow-xl md:p-10" :class="isRTL ? 'text-right' : 'text-left'">
          <div class="mb-6">
            <h2 class="mb-2 text-3xl font-extrabold leading-tight text-black md:text-4xl" data-aos="fade-up" data-aos-delay="200">
              {{ $t('missionVisionTitle') }}
            </h2>
            <p class="text-base font-semibold leading-tight text-black md:text-lg" data-aos="fade-up" data-aos-delay="800">
              {{ $t('missionVisionSubtitle') }}
            </p>
          </div>

          <!-- Mission Card -->
          <div class="relative flex h-[320px] w-full items-center overflow-hidden rounded-2xl shadow-md md:h-[400px]">
            <img src="https://i.postimg.cc/pL6xtrTv/shutterstock-2496010827.jpg" loading="lazy" alt="Mission" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" :class="isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'"></div>
            <div class="relative z-10 p-8">
              <h3 class="mb-2 text-5xl font-extrabold text-white md:text-6xl" data-aos="fade-up" data-aos-delay="200">
                {{ $t('mission') }}
              </h3>
              <p class="max-w-[600px] text-sm font-normal leading-relaxed text-white drop-shadow-md md:text-base" data-aos="fade-up" data-aos-delay="800">
                {{ $t('missionParagraph') }}
              </p>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="relative flex h-[320px] w-full items-center overflow-hidden rounded-2xl shadow-md md:h-[400px]">
            <img src="/images/shutterstock_2405956819.jpg" alt="Vision" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0" :class="isRTL ? 'bg-gradient-to-l from-black/90 to-transparent' : 'bg-gradient-to-r from-black/90 to-transparent'"></div>
            <div class="relative z-10 p-8">
              <h3 class="mb-2 text-5xl font-extrabold text-white md:text-6xl" data-aos="fade-up" data-aos-delay="200">
                {{ $t('vision') }}
              </h3>
              <p class="max-w-[600px] text-sm font-normal leading-relaxed text-white drop-shadow-md md:text-base" data-aos="fade-up" data-aos-delay="800">
                {{ $t('visionParagraphCard') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section  -->
    <section class="py-16" style="animation-delay: 0.55s">
      <div class="mx-auto w-full max-w-[1400px] px-2 sm:px-6" :class="isRTL ? 'text-right' : 'text-left'">
        <h2 class="mb-4 truncate whitespace-nowrap text-2xl font-bold sm:text-3xl md:text-4xl">
          {{ $t('coreValuesTitle') }}
        </h2>
        <p class="mb-12 text-xl text-gray-600">{{ $t('coreValuesSubtitle') }}</p>

        <!-- Desktop Grid -->
        <div class="hidden grid-cols-2 gap-8 md:grid">
          <!-- Integrity -->
          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.6s">
            <div class="mb-4 text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4l7 4v4.36c0 4.418-3.134 8.418-7 9.64-3.866-1.222-7-5.222-7-9.64V8l7-4z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('integrityTitle') }}</h3>
            <p class="text-gray-600">{{ $t('integrityText') }}</p>
          </div>

          <!-- Innovation -->
          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.7s">
            <div class="mb-4 text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m10-8h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m0-13.08l1.42 1.42M17.66 17.66l1.42 1.42" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('innovationTitle') }}</h3>
            <p class="text-gray-600">{{ $t('innovationText') }}</p>
          </div>

          <!-- Excellence -->
          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.8s">
            <div class="mb-4 text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.75l-5.42 3.53 1.63-6.33L3 10.47l6.53-.57L12 4.25l2.47 5.65 6.53.57-5.21 4.48 1.63 6.33z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('excellenceTitle') }}</h3>
            <p class="text-gray-600">{{ $t('excellenceText') }}</p>
          </div>

          <!-- Client Centric -->
          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.9s">
            <div class="mb-4 text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="12" r="3" stroke-linecap="round" stroke-linejoin="round" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m10-8h-2M4 12H2" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('clientCentricTitle') }}</h3>
            <p class="text-gray-600">{{ $t('clientCentricText') }}</p>
          </div>
        </div>

        <!-- Mobile Carousel -->
        <div class="overflow-x-auto scroll-smooth pb-4 md:hidden">
          <div class="flex snap-x snap-mandatory gap-4 px-4">
            <div class="min-h-[300px] w-[85vw] max-w-[340px] flex-shrink-0 snap-center rounded-xl bg-white p-6 shadow-md" style="animation-delay: 0.6s">
              <h3 class="mb-2 text-xl font-bold">{{ $t('integrityTitle') }}</h3>
              <p class="text-gray-600">{{ $t('integrityText') }}</p>
            </div>
            <div class="min-h-[300px] w-[85vw] max-w-[340px] flex-shrink-0 snap-center rounded-xl bg-white p-6 shadow-md" style="animation-delay: 0.7s">
              <h3 class="mb-2 text-xl font-bold">{{ $t('innovationTitle') }}</h3>
              <p class="text-gray-600">{{ $t('innovationText') }}</p>
            </div>
            <div class="min-h-[300px] w-[85vw] max-w-[340px] flex-shrink-0 snap-center rounded-xl bg-white p-6 shadow-md" style="animation-delay: 0.8s">
              <h3 class="mb-2 text-xl font-bold">{{ $t('excellenceTitle') }}</h3>
              <p class="text-gray-600">{{ $t('excellenceText') }}</p>
            </div>
            <div class="min-h-[300px] w-[85vw] max-w-[340px] flex-shrink-0 snap-center rounded-xl bg-white p-6 shadow-md" style="animation-delay: 0.9s">
              <h3 class="mb-2 text-xl font-bold">{{ $t('clientCentricTitle') }}</h3>
              <p class="text-gray-600">{{ $t('clientCentricText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="mx-auto flex max-w-[1400px] flex-col items-start justify-start bg-white px-8 py-10" style="animation-delay: 1s" :class="isRTL ? 'text-right' : 'text-left'">
      <h1 class="mb-12 text-4xl font-bold">{{ $t('ourServices') }}</h1>

      <div class="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2">
        <!-- Banking -->
        <div class="flex min-h-[170px] items-center justify-between rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm transition hover:shadow-lg">
          <div class="whitespace-pre-line text-2xl font-bold leading-tight md:text-2xl">
            {{ $t('serviceBanking') }}
          </div>
          <button class="flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:bg-gray-800" aria-label="Go">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7 w-7 text-yellow-400" :class="isRTL ? 'rotate-180' : ''">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Audit -->
        <div class="flex min-h-[170px] items-center justify-between rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm transition hover:shadow-lg">
          <div class="whitespace-pre-line text-2xl font-bold leading-tight md:text-2xl">
            {{ $t('serviceAudit') }}
          </div>
          <button class="flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:bg-gray-800" aria-label="Go">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7 w-7 text-yellow-400" :class="isRTL ? 'rotate-180' : ''">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Safety -->
        <div class="flex min-h-[170px] items-center justify-between rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm transition hover:shadow-lg">
          <div class="whitespace-pre-line text-2xl font-bold leading-tight md:text-2xl">
            {{ $t('serviceSafety') }}
          </div>
          <button class="flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:bg-gray-800" aria-label="Go">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7 w-7 text-yellow-400" :class="isRTL ? 'rotate-180' : ''">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- IT -->
        <div class="flex min-h-[170px] items-center justify-between rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm transition hover:shadow-lg">
          <div class="whitespace-pre-line text-2xl font-bold leading-tight md:text-2xl">
            {{ $t('serviceIT') }}
          </div>
          <button class="flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:bg-gray-800" aria-label="Go">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7 w-7 text-yellow-400" :class="isRTL ? 'rotate-180' : ''">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  if (window?.AOS?.init) {
    AOS.init({
      disable: () => isMobile, // عطّل AOS على الموبايل
      once: true,
      duration: 600,
      easing: 'ease-out',
    })
  }
})
</script>

<style>
/* عطّل أي أنيميشن AOS على الموبايل وتفادي فلاش العناصر */
@media (max-width: 767px) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
