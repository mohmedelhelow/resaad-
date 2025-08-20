<template>
  <section class="mx-auto max-w-[1400px] bg-white px-2 pb-14 pt-16 text-[#0b0b0b] md:pt-16">
    <!-- Title -->
    <!-- صورة وعنوان -->
    <div class="relative mb-8 flex w-full items-center justify-center overflow-hidden rounded-2xl" style="min-height: 220px">
      <img src="https://res.cloudinary.com/dawdmbyro/image/upload/v1755675309/contact-US_wuwf61.png" :alt="$t('riyadhAlt2')" class="about-image relative h-full w-full object-cover" style="z-index: 199" />
      <h1 class="about-title absolute left-1/2 top-[15%] z-[100] -translate-x-1/2 select-none whitespace-nowrap text-center text-[2.2rem] font-extrabold uppercase leading-none tracking-[0.05em] text-black sm:text-[3.2rem] sm:tracking-[0.1em] md:text-[6rem] md:tracking-[0.2em] lg:text-[8rem]">
        {{ $t('ourServices') }}
      </h1>
    </div>
    <!-- Sections -->
    <div class="mx-auto max-w-[1400px] space-y-28 px-4 pb-20">
      <!-- Block -->
      <div v-for="(block, bi) in blocks" :key="bi" class="space-y-8">
        <!-- Header -->
        <div class="max-w-[900px]">
          <h2 class="mb-2 text-2xl font-extrabold text-[#e4ae65] md:text-[30px]">
            {{ $t(block.titleKey) }}
          </h2>
          <p class="mb-2 text-[13px] uppercase tracking-wide text-black/60">
            {{ $t(block.subtitleKey) }}
          </p>
          <p class="mb-6 text-[14px] leading-7 text-black/80 md:text-[15px] md:leading-8">
            {{ $t(block.introKey) }}
          </p>
        </div>

        <!-- Cards -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(c, ci) in block.cards" :key="ci" class="rounded-2xl border border-black/10 bg-white p-6 shadow-md transition hover:shadow-lg">
            <h3 class="mb-3 text-[15px] font-semibold">
              {{ $t(c.titleKey) }}
            </h3>
            <p class="text-[14px] leading-relaxed">
              {{ $t(c.textKey) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroSrc = '/images/our-services-hero.jpg'

const blocks = [
  {
    titleKey: 'bankingTitle',
    subtitleKey: 'bankingSubtitle',
    introKey: 'bankingIntro',
    cards: [
      { titleKey: 'bankingCard1Title', textKey: 'bankingCard1Text' },
      { titleKey: 'bankingCard2Title', textKey: 'bankingCard2Text' },
      { titleKey: 'bankingCard3Title', textKey: 'bankingCard3Text' },
      { titleKey: 'bankingCard4Title', textKey: 'bankingCard4Text' },
      { titleKey: 'bankingCard5Title', textKey: 'bankingCard5Text' },
      { titleKey: 'bankingCard6Title', textKey: 'bankingCard6Text' },
    ],
  },
  {
    titleKey: 'auditTitle',
    subtitleKey: 'auditSubtitle',
    introKey: 'auditIntro',
    cards: [
      { titleKey: 'auditCard1Title', textKey: 'auditCard1Text' },
      { titleKey: 'auditCard2Title', textKey: 'auditCard2Text' },
      { titleKey: 'auditCard3Title', textKey: 'auditCard3Text' },
      { titleKey: 'auditCard4Title', textKey: 'auditCard4Text' },
      { titleKey: 'auditCard5Title', textKey: 'auditCard5Text' },
      { titleKey: 'auditCard6Title', textKey: 'auditCard6Text' },
    ],
  },
  {
    titleKey: 'securityTitle',
    subtitleKey: 'securitySubtitle',
    introKey: 'securityIntro',
    cards: [
      { titleKey: 'securityCard1Title', textKey: 'securityCard1Text' },
      { titleKey: 'securityCard2Title', textKey: 'securityCard2Text' },
      { titleKey: 'securityCard3Title', textKey: 'securityCard3Text' },
      { titleKey: 'securityCard4Title', textKey: 'securityCard4Text' },
      { titleKey: 'securityCard5Title', textKey: 'securityCard5Text' },
      { titleKey: 'securityCard6Title', textKey: 'securityCard6Text' },
      { titleKey: 'securityCard7Title', textKey: 'securityCard7Text' },
      { titleKey: 'securityCard8Title', textKey: 'securityCard8Text' },
      { titleKey: 'securityCard9Title', textKey: 'securityCard9Text' },
      { titleKey: 'securityCard10Title', textKey: 'securityCard10Text' },
      { titleKey: 'securityCard11Title', textKey: 'securityCard11Text' },
    ],
  },
  {
    titleKey: 'itTitle',
    subtitleKey: 'itSubtitle',
    introKey: 'itIntro',
    cards: [
      { titleKey: 'itCard1Title', textKey: 'itCard1Text' },
      { titleKey: 'itCard2Title', textKey: 'itCard2Text' },
      { titleKey: 'itCard3Title', textKey: 'itCard3Text' },
      { titleKey: 'itCard4Title', textKey: 'itCard4Text' },
      { titleKey: 'itCard5Title', textKey: 'itCard5Text' },
      { titleKey: 'itCard6Title', textKey: 'itCard6Text' },
    ],
  },
]
</script>

<style scoped>
h1 {
  line-height: 1.3;
}
h2 {
  line-height: 1.4;
}
</style>
