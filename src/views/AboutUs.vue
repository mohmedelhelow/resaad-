<template>
  <div class="max-w-[1400px] mx-auto" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="max-w-[1400px] mx-auto pt-16 px-2 pb-14">
      <!-- صورة بانورامية مع العنوان فوقها -->
      <div class="relative w-full rounded-2xl overflow-hidden mb-8 flex items-center justify-center" style="min-height: 220px">
        <img
          src="/images/aboutus3.png"
          :alt="$t('riyadhAlt')"
          class="about-image w-full h-full object-cover relative"
          style="z-index: 199"
        />
        <!-- العنوان فوق الصورة -->
        <h1
          class="about-title absolute top-[15%] left-1/2 -translate-x-1/2 z-[100] font-extrabold text-black text-[2.5rem] md:text-[8rem] uppercase tracking-[0.3em] leading-none select-none text-center whitespace-nowrap"
        >
          {{ $t('aboutUs') }}
        </h1>
      </div>

      <!-- النصوص -->
      <div class="about-text mt-2 px-4 md:px-0 space-y-4" :class="isRTL ? 'text-right' : 'text-left'">
        <p class="text-2xl md:text-3xl font-bold mb-2">
          <span class="font-extrabold">{{ $t('siteName') }},</span>
          <span class="text-base font-normal align-middle text-gray-800">
            {{ $t('aboutParagraph') }}
          </span>
        </p>
        <p class="text-gray-700 text-base mb-4">
          {{ $t('aboutParagraph2') }}
        </p>
      </div>
    </div>

    <!-- Mission & Vision Section -->
    <section class="py-20 px-4" style="animation-delay: 0.45s">
      <div class="max-w-[1400px] mx-auto" :class="isRTL ? 'text-right' : 'text-left'">
        <div class="bg-[#f6f6f6] rounded-3xl shadow-xl p-4 md:p-10 space-y-8">
          <div class="mb-6">
            <h2 class="text-3xl md:text-4xl font-extrabold text-black mb-2 leading-tight" data-aos="fade-up" data-aos-delay="200">
              {{ $t('missionVisionTitle') }}
            </h2>
            <p class="text-black font-semibold text-base md:text-lg leading-tight" data-aos="fade-up" data-aos-delay="800">
              {{ $t('missionVisionSubtitle') }}
            </p>
          </div>

          <!-- Mission Card -->
          <div class="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-md flex items-center">
            <img
              src="https://i.postimg.cc/pL6xtrTv/shutterstock-2496010827.jpg"
              :alt="$t('mission')"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 from-black/90 to-transparent"
              :class="isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'"
            ></div>
            <div class="relative z-10 p-8">
              <h3 class="text-3xl md:text-4xl font-extrabold mb-2 text-white" data-aos="fade-up" data-aos-delay="1500">
                {{ $t('mission') }}
              </h3>
              <p class="text-white text-sm md:text-base max-w-[600px] leading-relaxed font-normal drop-shadow-md" data-aos="fade-up" data-aos-delay="2000">
                {{ $t('missionParagraph') }}
              </p>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-md flex items-center">
            <img
              src="/images/shutterstock_2405956819.jpg"
              :alt="$t('vision')"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 from-black/90 to-transparent"
              :class="isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'"
            ></div>
            <div class="relative z-10 p-8">
              <h3 class="text-3xl md:text-4xl font-extrabold mb-2 text-white" data-aos="fade-up" data-aos-delay="2500">
                {{ $t('vision') }}
              </h3>
              <p class="text-white text-sm md:text-base max-w-[600px] leading-relaxed font-normal drop-shadow-md" data-aos="fade-up" data-aos-delay="3000">
                {{ $t('visionParagraphCard') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


<!-- Core Values Section  -->
    <section class="py-16" style="animation-delay: 0.55s;">
      <div class="max-w-[1400px] w-full mx-auto px-2 sm:px-6" :class="isRTL ? 'text-right' : 'text-left'">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 whitespace-nowrap truncate">{{ $t('coreValuesTitle') }}</h2>
        <p class="text-xl text-gray-600 mb-12">{{ $t('coreValuesSubtitle') }}</p>

        <!-- Desktop Grid -->
        <div class="hidden md:grid grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.6s;">
            <div class="text-indigo-600 text-4xl mb-4">
              <!-- Integrity Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4l7 4v4.36c0 4.418-3.134 8.418-7 9.64-3.866-1.222-7-5.222-7-9.64V8l7-4z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('integrityTitle') }}</h3>
            <p class="text-gray-600">{{ $t('integrityText') }}</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.7s;">
            <div class="text-indigo-600 text-4xl mb-4">
              <!-- Innovation Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m10-8h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m0-13.08l1.42 1.42M17.66 17.66l1.42 1.42"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('innovationTitle') }}</h3>
            <p class="text-gray-600">{{ $t('innovationText') }}</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.8s;">
            <div class="text-indigo-600 text-4xl mb-4">
              <!-- Excellence Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.75l-5.42 3.53 1.63-6.33L3 10.47l6.53-.57L12 4.25l2.47 5.65 6.53.57-5.21 4.48 1.63 6.33z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('excellenceTitle') }}</h3>
            <p class="text-gray-600">{{ $t('excellenceText') }}</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.9s;">
            <div class="text-indigo-600 text-4xl mb-4">
              <!-- Client Centric Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#e4ae65]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m10-8h-2M4 12H2"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('clientCentricTitle') }}</h3>
            <p class="text-gray-600">{{ $t('clientCentricText') }}</p>
          </div>
        </div>

        <!-- Mobile Carousel -->
        <div class="md:hidden overflow-x-auto scroll-smooth pb-4">
          <div class="flex gap-4 px-4 snap-x snap-mandatory">
            <div class="snap-center flex-shrink-0 w-[85vw] max-w-[340px] bg-white p-6 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.6s;">
              <h3 class="text-xl font-bold mb-2">{{ $t('integrityTitle') }}</h3>
              <p class="text-gray-600">{{ $t('integrityText') }}</p>
            </div>
            <div class="snap-center flex-shrink-0 w-[85vw] max-w-[340px] bg-white p-6 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.7s;">
              <h3 class="text-xl font-bold mb-2">{{ $t('innovationTitle') }}</h3>
              <p class="text-gray-600">{{ $t('innovationText') }}</p>
            </div>
            <div class="snap-center flex-shrink-0 w-[85vw] max-w-[340px] bg-white p-6 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.8s;">
              <h3 class="text-xl font-bold mb-2">{{ $t('excellenceTitle') }}</h3>
              <p class="text-gray-600">{{ $t('excellenceText') }}</p>
            </div>
            <div class="snap-center flex-shrink-0 w-[85vw] max-w-[340px] bg-white p-6 rounded-xl shadow-md min-h-[300px]" style="animation-delay: 0.9s;">
              <h3 class="text-xl font-bold mb-2">{{ $t('clientCentricTitle') }}</h3>
              <p class="text-gray-600">{{ $t('clientCentricText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Our Team -->
    <section class="py-20 px-4">
      <div class="max-w-[1400px] mx-auto" :class="isRTL ? 'text-right' : 'text-center'">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">{{ $t('ourTeamTitle') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center overflow-hidden h-96 w-full cursor-pointer transition-all duration-500">
            <div class="flex flex-col items-center w-full z-10 transition-all duration-500 group-hover:-translate-y-24 group-hover:opacity-0">
              <img src="/images/SULAIMAN ALABBAD.png" alt="Sulaiman Alabbad" class="rounded-full w-[15rem] h-[15rem] object-cover mb-4" />
              <div class="font-bold text-lg mb-1">Sulaiman Alabbad</div>
              <div class="text-sm text-gray-500 mb-2">{{ $t('team.ceo') }}</div>
            </div>
            <div class="absolute left-0 bottom-0 w-full px-6 py-8 bg-yellow-100 rounded-b-2xl shadow-inner opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col items-center justify-center h-full">
              <div class="font-bold text-xl mb-1 text-brown-800">Sulaiman Alabbad</div>
              <div class="text-sm text-yellow-900 font-semibold mb-4">{{ $t('team.ceo') }}</div>
              <div class="text-base md:text-lg font-bold text-brown-700 leading-relaxed text-center">
                {{ $t('team.sulaiman.bio') }}
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center overflow-hidden h-96 w-full cursor-pointer transition-all duration-500">
            <div class="flex flex-col items-center w-full z-10 transition-all duration-500 group-hover:-translate-y-24 group-hover:opacity-0">
              <img src="/images/MARK TREVOR.png" alt="Mark Trevor" class="rounded-full w-[15rem] h-[15rem] object-cover mb-4" />
              <div class="font-bold text-lg mb-1">Mark Trevor</div>
              <div class="text-sm text-gray-500 mb-2">{{ $t('team.coFounder') }}</div>
            </div>
            <div class="absolute left-0 bottom-0 w-full px-6 py-8 bg-yellow-100 rounded-b-2xl shadow-inner opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col items-center justify-center h-full">
              <div class="font-bold text-xl mb-1 text-brown-800">Mark Trevor</div>
              <div class="text-sm text-yellow-900 font-semibold mb-4">{{ $t('team.coFounder') }}</div>
              <div class="text-base md:text-lg font-bold text-brown-700 leading-relaxed text-center">
                {{ $t('team.mark.bio') }}
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center overflow-hidden h-96 w-full cursor-pointer transition-all duration-500">
            <div class="flex flex-col items-center w-full z-10 transition-all duration-500 group-hover:-translate-y-24 group-hover:opacity-0">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Dr Anne Lewis" class="rounded-full w-[15rem] h-[15rem] object-cover mb-4" />
              <div class="font-bold text-lg mb-1">Dr Anne Lewis</div>
              <div class="text-sm text-gray-500 mb-2">{{ $t('team.coFounder') }}</div>
            </div>
            <div class="absolute left-0 bottom-0 w-full px-6 py-8 bg-yellow-100 rounded-b-2xl shadow-inner opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col items-center justify-center h-full">
              <div class="font-bold text-xl mb-1 text-brown-800">Dr Anne Lewis</div>
              <div class="text-sm text-yellow-900 font-semibold mb-4">{{ $t('team.coFounder') }}</div>
              <div class="relative w-full flex flex-col items-center">
                <div class="text-[12px] md:text-sm text-brown-700 leading-relaxed text-center font-normal max-h-40 overflow-y-scroll pr-1 bio-scroll">
                  {{ $t('team.anne.bio') }}
                </div>
                <!-- Scroll with bouncing black arrow -->
                <div class="mt-3 flex flex-col items-center">
                  <div class="animate-bounce">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :class="isRTL ? 'rotate-180' : ''">
                      <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="text-black text-xs font-bold tracking-wide select-none mt-1">
                    {{ $t('team.scroll') }}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> <!-- grid -->
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
      start: 'top 80%'
    }
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
      start: 'top 80%'
    }
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
      start: 'top 85%'
    }
  })
})
</script>
