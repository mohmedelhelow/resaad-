<template>
  <div class="mx-auto max-w-[1400px]" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- زودنا الـpadding-top للموبايل عشان الـnav الثابت -->
    <div class="mx-auto max-w-[1400px] px-2 pb-14 pt-28 md:pt-16">
      <!-- صورة بانورامية مع العنوان فوقها -->
      <div class="relative mb-8 flex w-full items-center justify-center overflow-hidden rounded-2xl" style="min-height: 220px">
        <img src="https://res.cloudinary.com/dawdmbyro/image/upload/v1755675251/aboutus_img2_wss4py.png" :alt="$t('riyadhAlt')" class="about-image relative h-full w-full object-cover" style="z-index: 199" />
        <!-- العنوان فوق الصورة -->
        <h1 class="about-title absolute left-1/2 top-[15%] z-[100] -translate-x-1/2 select-none whitespace-nowrap text-center text-[2rem] font-extrabold leading-none text-black md:text-[6rem] lg:text-[8rem]" :class="isRTL ? 'uppercase:!normal-case tracking-normal' : 'uppercase tracking-[0.3em]'">
          {{ $t('aboutUs') }}
        </h1>
      </div>

      <!-- النصوص -->
      <div class="about-text mt-2 space-y-4 px-4 md:px-0" :class="isRTL ? 'text-right' : 'text-left'">
        <p class="mb-2 text-2xl font-bold md:text-3xl">
          <span class="font-extrabold">{{ $t('siteName') }},</span>
          <span class="align-middle text-base font-normal text-gray-800">
            {{ $t('aboutParagraph') }}
          </span>
        </p>
        <p class="mb-4 text-base text-gray-700">
          {{ $t('aboutParagraph2') }}
        </p>
      </div>
    </div>

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
            <img src="https://i.postimg.cc/pL6xtrTv/shutterstock-2496010827.jpg" alt="Mission" class="absolute inset-0 h-full w-full object-cover" />
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
            <img src="/images/shutterstock_2405956819.jpg" alt="Vision" class="absolute inset-0 h-full w-full object-cover" />
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
          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.6s">
            <div class="mb-4 text-4xl text-indigo-600">
              <!-- Integrity Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4l7 4v4.36c0 4.418-3.134 8.418-7 9.64-3.866-1.222-7-5.222-7-9.64V8l7-4z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('integrityTitle') }}</h3>
            <p class="text-gray-600">{{ $t('integrityText') }}</p>
          </div>

          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.7s">
            <div class="mb-4 text-4xl text-indigo-600">
              <!-- Innovation Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m10-8h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m0-13.08l1.42 1.42M17.66 17.66l1.42 1.42" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('innovationTitle') }}</h3>
            <p class="text-gray-600">{{ $t('innovationText') }}</p>
          </div>

          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.8s">
            <div class="mb-4 text-4xl text-indigo-600">
              <!-- Excellence Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.75l-5.42 3.53 1.63-6.33L3 10.47l6.53-.57L12 4.25l2.47 5.65 6.53.57-5.21 4.48 1.63 6.33z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ $t('excellenceTitle') }}</h3>
            <p class="text-gray-600">{{ $t('excellenceText') }}</p>
          </div>

          <div class="min-h-[300px] rounded-xl bg-white p-8 shadow-md" style="animation-delay: 0.9s">
            <div class="mb-4 text-4xl text-indigo-600">
              <!-- Client Centric Icon -->
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

    <!-- Our Team -->
    <section class="px-4 py-20">
      <div class="mx-auto max-w-[1400px]" :class="isRTL ? 'text-right' : 'text-center'">
        <h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">{{ $t('ourTeamTitle') }}</h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1 -->
          <div class="group relative flex h-96 w-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-500">
            <div class="z-10 flex w-full flex-col items-center transition-all duration-500 group-hover:-translate-y-24 group-hover:opacity-0">
              <img src="/images/SULAIMAN ALABBAD.png" alt="Sulaiman Alabbad" class="mb-4 h-[15rem] w-[15rem] rounded-full object-cover" />
              <div class="mb-1 text-lg font-bold">{{ $t('SulaimanـAlabbad') }}</div>
              <div class="mb-2 text-sm text-gray-500">{{ $t('teamCeo') }}</div>
            </div>
            <div class="absolute bottom-0 left-0 z-20 flex h-full w-full translate-y-16 flex-col items-center justify-center rounded-b-2xl bg-yellow-100 bg-gradient-to-r from-[#e6b064] to-white px-6 py-8 opacity-0 shadow-inner transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div class="text-brown-800 mb-1 text-xl font-bold">{{ $t('SulaimanـAlabbad') }}</div>
              <div class="mb-4 text-sm font-semibold text-yellow-900">{{ $t('teamCeo') }}</div>
              <div class="relative flex w-full flex-col items-center">
                <div class="text-brown-700 bio-scroll max-h-40 overflow-y-scroll pr-1 text-center text-[12px] font-normal leading-relaxed md:text-sm">
                  {{ $t('teamSulaimanBio') }}
                </div>
                <!-- Scroll with bouncing black arrow -->
                <div v-if="!isRTL" class="mt-3 flex flex-col items-center">
                  <div class="animate-bounce">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :class="isRTL ? 'rotate-180' : ''">
                      <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="mt-1 select-none text-xs font-bold tracking-wide text-black">
                    {{ $t('teamScroll') }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group relative flex h-96 w-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-500">
            <div class="z-10 flex w-full flex-col items-center transition-all duration-500 group-hover:-translate-y-24 group-hover:opacity-0">
              <img src="/images/MARK TREVOR.png" alt="Mark Trevor" class="mb-4 h-[15rem] w-[15rem] rounded-full object-cover" />
              <div class="mb-1 text-lg font-bold">{{ $t('MarkـTrevor') }}</div>
              <div class="mb-2 text-sm text-gray-500">{{ $t('teamCoFounder') }}</div>
            </div>
            <div class="absolute bottom-0 left-0 z-20 flex h-full w-full translate-y-16 flex-col items-center justify-center rounded-b-2xl bg-yellow-100 bg-gradient-to-r from-[#e6b064] to-white px-6 py-8 opacity-0 shadow-inner transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div class="text-brown-800 mb-1 text-xl font-bold">{{ $t('MarkـTrevor') }}</div>
              <div class="mb-4 text-sm font-semibold text-yellow-900">{{ $t('teamCoFounder') }}</div>
              <div class="relative flex w-full flex-col items-center">
                <div class="text-brown-700 bio-scroll max-h-40 overflow-y-scroll pr-1 text-center text-[12px] font-normal leading-relaxed md:text-sm">
                  {{ $t('teamMarkBio') }}
                </div>
                <!-- Scroll with bouncing black arrow -->
                <div v-if="!isRTL" class="mt-3 flex flex-col items-center">
                  <div class="animate-bounce">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :class="isRTL ? 'rotate-180' : ''">
                      <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="mt-1 select-none text-xs font-bold tracking-wide text-black">
                    {{ $t('teamScroll') }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group relative flex h-96 w-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-500">
            <div class="z-10 flex w-full flex-col items-center transition-all duration-500 group-hover:-translate-y-24 group-hover:opacity-0">
              <img src="/images/DR ANNE LEWIS.png" alt="Dr Anne Lewis" class="mb-4 h-[15rem] w-[15rem] rounded-full object-cover" />
              <div class="mb-1 text-lg font-bold">{{ $t('DrـAnneـLewis') }}</div>
              <div class="mb-2 text-sm text-gray-500">{{ $t('teamCoFounder') }}</div>
            </div>
            <div class="absolute bottom-0 left-0 z-20 flex h-full w-full translate-y-16 flex-col items-center justify-center rounded-b-2xl bg-yellow-100 bg-gradient-to-r from-[#e6b064] to-white px-6 py-8 opacity-0 shadow-inner transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div class="text-brown-800 mb-1 text-xl font-bold">{{ $t('DrـAnneـLewis') }}</div>
              <div class="mb-4 text-sm font-semibold text-yellow-900">
                {{ $t('teamCoFounder') }}
              </div>
              <div class="relative flex w-full flex-col items-center">
                <div class="text-brown-700 bio-scroll max-h-40 overflow-y-scroll pr-1 text-center text-[12px] font-normal leading-relaxed md:text-sm">
                  {{ $t('teamAnneBio') }}
                </div>
                <!-- Scroll with bouncing black arrow -->
                <div v-if="!isRTL" class="mt-3 flex flex-col items-center">
                  <div class="animate-bounce">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :class="isRTL ? 'rotate-180' : ''">
                      <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="mt-1 select-none text-xs font-bold tracking-wide text-black">
                    {{ $t('teamScroll') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- grid -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

onMounted(() => {
  // العنوان
  gsap.from('.about-title', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%',
    },
  })

  // الصورة
  gsap.from('.about-image', {
    scale: 1.1,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
    delay: 0.2,
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%',
    },
  })

  // النصوص
  gsap.from('.about-text p', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-text',
      start: 'top 85%',
    },
  })
})
</script>
