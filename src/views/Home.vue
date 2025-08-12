<template>
  <div class="max-w-[1400px] mx-auto" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Hero Section -->
    <section class="section1 pt-28 pb-16">
      <div class="relative max-w-[90vw] mx-auto rounded-3xl overflow-hidden shadow-xl min-h-[calc(100vh-7rem-4rem)]">
        <img src="/images/homepage1.png" class="absolute inset-0 w-full h-full object-cover" alt="Background image" />
        <div class="absolute inset-0 bg-black bg-opacity-5 flex items-start justify-center md:justify-start px-6 pt-32">
          <div :class="['text-white max-w-2xl md:ml-16', isRTL ? 'text-center md:text-right' : 'text-center md:text-left']">
            <h1 class="text-[clamp(3rem,15vw,12rem)] font-extrabold leading-tight" data-aos="fade-up" data-aos-delay="200">{{ $t('Crafting') }}</h1>
            <h2 class="m-10 mt-0.5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold" data-aos="fade-up" data-aos-delay="1000">{{ $t('blueprint') }}</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-white py-24 px-4" style="animation-delay: 0.15s;">
      <div class="max-w-[90vw] mx-auto grid lg:grid-cols-2 items-center gap-16">
        <div class="order-2 lg:order-1">
          <img src="/images/riyadh.jpg" alt="Expo 2030" class="w-full rounded-3xl shadow-xl object-cover max-h-[500px] mx-auto" data-aos="fade-right" data-aos-delay="200"/>
        </div>
        <div class="order-1 lg:order-2" :class="isRTL ? 'text-right' : 'text-left'">
          <h2 class="text-black-900 text-sm tracking-wider font-semibold mb-4" data-aos="fade-left" data-aos-delay="200">{{ $t('Contribution') }}</h2>
          <h1 class="text-5xl sm:text-7xl font-extrabold text-[#e4ae65] leading-tight mb-6" data-aos="fade-left" data-aos-delay="800">{{ $t('expoContribution') }}</h1>
          <p class="text-lg sm:text-xl text-gray-700 leading-relaxed" data-aos="fade-left" data-aos-delay="1200">{{ $t('expoParagraph') }}</p>
        </div>
      </div>
    </section>
    
    <!-- Vision Alignment Section -->
    <section class="bg-white py-24 px-4">
      <div class="max-w-[90vw] mx-auto grid lg:grid-cols-2 items-center gap-16">
        <div class="order-2 lg:order-1" :class="isRTL ? 'text-right' : 'text-left'">
          <h2 class="text-black-900 text-sm tracking-wider font-semibold mb-4" data-aos="fade-right" data-aos-delay="200">{{ $t('Contribution') }}</h2>
          <h1 class="text-5xl sm:text-7xl font-extrabold text-[#e4ae65] leading-tight mb-6" data-aos="fade-right" data-aos-delay="800">
            {{ $t('visionAlignment') }}
          </h1>
          <p class="text-lg sm:text-xl text-gray-700 leading-relaxed" data-aos="fade-right" data-aos-delay="1200">
            {{ $t('visionParagraph') }}
          </p>
        </div>
        <div class="order-1 lg:order-2">
          <img src="/images/2030new.png" alt="Expo 2030" class="w-full rounded-3xl shadow-xl object-cover max-h-[500px] mx-auto" data-aos="fade-left" data-aos-delay="200"/>
        </div>
      </div>
    </section>

    <!-- About Us Big Section -->
  <section class="py-20 px-4"style="animation-delay: 0.35s;" dir="ltr">
  <div class="max-w-[90vw] mx-auto">
    <div class="rounded-3xl p-4 md:p-10 flex flex-col lg:flex-row items-stretch overflow-hidden gap-6 min-h-[700px]">
      <div class="flex flex-col justify-center lg:w-1/2 bg-gradient-to-r from-[#fce7d8] to-white rounded-2xl p-6 md:p-10" :class="isRTL ? 'text-right' : 'text-left'">
        <div class="max-w-[400px] w-full space-y-6" :class="isRTL ? 'ml-auto' : ''">
          <h2 class="text-7xl font-extrabold text-black">{{ $t('aboutUs') }}</h2>
          <h3 class="text-5xl font-bold leading-tight text-black whitespace-pre-line">
            {{ $t('aboutTagline') }}
          </h3>
          <p class="text-gray-700 text-base md:text-lg">
            {{ $t('aboutParagraph') }}
          </p>
          <button class="w-fit px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
            {{ $t('seeMore') }}
          </button>
        </div>
      </div>
      <!-- Right Image -->
      <div class="lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
        <img src="/images/neom-xXqWVUvf_Gw-unsplash.jpg" alt="Desert Landscape" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</section>

    <!-- Mission & Vision Section -->
    <section class="py-20 px-4" style="animation-delay: 0.45s;">
      <div class="max-w-[1400px] mx-auto">
        <div class="bg-[#f6f6f6] rounded-3xl shadow-xl p-4 md:p-10 space-y-8" :class="isRTL ? 'text-right' : 'text-left'">
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
            <img src="https://i.postimg.cc/pL6xtrTv/shutterstock-2496010827.jpg" alt="Mission" class="absolute inset-0 w-full h-full object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" :class="isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'"></div>
            <div class="relative z-10 p-8">
              <h3 class="text-3xl md:text-4xl font-extrabold mb-2 text-white" data-aos="fade-up" data-aos-delay="1500">{{ $t('mission') }}</h3>
              <p class="text-white text-sm md:text-base max-w-[600px] leading-relaxed font-normal drop-shadow-md" data-aos="fade-up" data-aos-delay="2000">
                {{ $t('missionParagraph') }}
              </p>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-md flex items-center">
            <img src="/images/shutterstock_2405956819.jpg" alt="Vision" class="absolute inset-0 w-full h-full object-cover"/>
            <div class="absolute inset-0" :class="isRTL ? 'bg-gradient-to-l from-black/90 to-transparent' : 'bg-gradient-to-r from-black/90 to-transparent'"></div>
            <div class="relative z-10 p-8">
              <h3 class="text-3xl md:text-4xl font-extrabold mb-2 text-white" data-aos="fade-up" data-aos-delay="2500">{{ $t('vision') }}</h3>
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

    <!-- Services Section -->
    <div class="flex flex-col items-start justify-start bg-white px-8 py-10 max-w-[1400px] mx-auto" style="animation-delay: 1s;" :class="isRTL ? 'text-right' : 'text-left'">
      <h1 class="text-4xl font-bold mb-12">{{ $t('ourServices') }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1400px] mx-auto">
        <div class="flex justify-between items-center bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200 transition hover:shadow-lg min-h-[170px]">
          <div class="text-2xl md:text-2xl font-bold leading-tight whitespace-pre-line">
            {{ $t('serviceBanking') }}
          </div>
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <span class="text-2xl text-yellow-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" :class="isRTL ? 'rotate-180' : ''">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>

        <div class="flex justify-between items-center bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200 transition hover:shadow-lg min-h-[170px]">
          <div class="text-2xl md:text-2xl font-bold leading-tight whitespace-pre-line">
            {{ $t('serviceAudit') }}
          </div>
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <span class="text-2xl text-yellow-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" :class="isRTL ? 'rotate-180' : ''">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>

        <div class="flex justify-between items-center bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200 transition hover:shadow-lg min-h-[170px]">
          <div class="text-2xl md:text-2xl font-bold leading-tight whitespace-pre-line">
            {{ $t('serviceSafety') }}
          </div>
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <span class="text-2xl text-yellow-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" :class="isRTL ? 'rotate-180' : ''">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>

        <div class="flex justify-between items-center bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200 transition hover:shadow-lg min-h-[170px]">
          <div class="text-2xl md:text-2xl font-bold leading-tight whitespace-pre-line">
            {{ $t('serviceIT') }}
          </div>
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
            <span class="text-2xl text-yellow-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" :class="isRTL ? 'rotate-180' : ''">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

onMounted(() => {
  if (window?.AOS?.init) AOS.init()
})
</script>
