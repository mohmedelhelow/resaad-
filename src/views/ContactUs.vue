<template>
  <div class="max-w-[1400px] mx-auto pt-16 px-2 pb-14">
    <!-- صورة وعنوان -->
    <div class="relative w-full rounded-2xl overflow-hidden mb-8 flex items-center justify-center" style="min-height: 220px">
      <img src="/images/contact-US.png" :alt="$t('riyadhAlt2')" class="about-image w-full h-full object-cover relative" style="z-index: 199" />
      <h1 class="about-title absolute top-[15%] left-1/2 -translate-x-1/2 z-[100] font-extrabold text-black text-[2.5rem] md:text-[8rem] uppercase tracking-[0.3em] leading-none select-none text-center whitespace-nowrap">
        {{ $t("titlecontact.contact") }}
      </h1>
    </div>

    <!-- سكشن التواصل -->
    <section class="bg-white py-16">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="grid gap-12 lg:grid-cols-2 items-start">
          <!-- Left: Text -->
          <div>
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              {{ $t("contactus.heading") }}
            </h2>

            <p class="mt-6 text-lg text-gray-700 max-w-prose" v-html="$t('contactus.description')"></p>

            <div class="mt-10 grid gap-10 sm:grid-cols-2">
              <!-- Address + Email -->
              <div class="space-y-8">
                <div>
                  <h3 class="text-xl font-semibold text-black">
                    {{ $t("contactus.addressLabel") }}
                  </h3>
                  <ul class="mt-3 list-disc pl-5 text-gray-800 leading-relaxed">
                    <li>{{ $t("footer.addressOS") }}</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-black">
                    {{ $t("contactus.emailLabel") }}
                  </h3>
                  <ul class="mt-3 list-disc pl-5 text-gray-800">
                    <li>
                      <a :href="`mailto:${$t('contactus.email')}`" class="underline decoration-gray-300 hover:decoration-black">
                        {{ $t("contactus.email") }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Phone -->
              <div>
                <h3 class="text-xl font-semibold text-black">
                  {{ $t("contactus.phoneLabel") }}
                </h3>
                <ul class="mt-3 list-disc pl-5 text-gray-800">
                  <li>
                    <a :href="`tel:${$t('footer.phone')}`" class="underline decoration-gray-300 hover:decoration-black">
                      {{ $t("footer.phone") }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right: Map -->
          <div class="relative overflow-hidden rounded-[32px] shadow-xl">
            <div class="pt-[66%]"></div>
            <iframe class="absolute inset-0 w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.681919003866!2d46.615!3d24.740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAl%20Aqiq%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v0000000000"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
