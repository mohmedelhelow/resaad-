<template>
  <div class="mx-auto max-w-[1400px] px-2 pb-14 pt-16">
    <!-- صورة وعنوان -->
    <div class="relative mb-8 flex w-full items-center justify-center overflow-hidden rounded-2xl" style="min-height: 220px">
      <img src="/images/contact-US.png" :alt="$t('riyadhAlt2')" class="about-image relative h-full w-full object-cover" style="z-index: 199" />
      <h1 class="about-title absolute left-1/2 top-[15%] z-[100] -translate-x-1/2 select-none whitespace-nowrap text-center text-[2.5rem] font-extrabold uppercase leading-none tracking-[0.3em] text-black md:text-[8rem]">
        {{ $t('titleContact') }}
      </h1>
    </div>

    <!-- سكشن التواصل -->
    <section class="bg-white py-16">
      <div class="mx-auto max-w-[1400px] px-4">
        <div class="grid items-start gap-12 lg:grid-cols-2">
          <!-- Left: Text -->
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight text-black md:text-5xl"  style="color: #e4ae65 !important">
              {{ $t('contactHeading') }}
            </h2>

            <p class="mt-6 max-w-prose text-lg text-gray-700" v-html="$t('contactDescription')"></p>

            <div class="mt-10 grid gap-10 sm:grid-cols-2">
              <!-- Address + Email -->
              <div class="space-y-8">
                <div>
                  <h3 class="text-xl font-semibold text-black">
                    {{ $t('contactAddressLabel') }}
                  </h3>
                  <ul class="mt-3 list-disc pl-5 leading-relaxed text-gray-800">
                    <li>{{ $t('contactAddress') }}</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-black">
                    {{ $t('contactEmailLabel') }}
                  </h3>
                  <ul class="mt-3 list-disc pl-5 text-gray-800">
                    <li>
                      <a :href="`mailto:${$t('contactus.email')}`" class="underline decoration-gray-300 hover:decoration-black">
                        {{ $t('contactEmail') }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Phone -->
              <div>
                <h3 class="text-xl font-semibold text-black">
                  {{ $t('contactPhoneLabel') }}
                </h3>
                <ul class="mt-3 list-disc pl-5 text-gray-800">
                  <li>
                    <a :href="`tel:${$t('footer.phone')}`" class="underline decoration-gray-300 hover:decoration-black">
                      {{ $t('contactPhone') }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right: Map -->
          <div class="relative overflow-hidden rounded-[32px] shadow-xl">
            <div class="pt-[66%]"></div>
            <iframe class="absolute inset-0 h-full w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.681919003866!2d46.615!3d24.740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAl%20Aqiq%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v0000000000"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
