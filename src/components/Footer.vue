<template>
  <footer class="bg-gray-900" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Logo + Description -->
        <div>
          <div class="flex justify-center text-teal-300 sm:justify-start">
            <h1 class="w-[80px]">
              <img src="/images/Resaad Colored.png" alt="Resaad Logo" class="w-full h-auto" />
            </h1>
          </div>

          <p
            class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
          >
            {{ $t("footer.description") }}
          </p>

          <!-- Social Links -->
          <ul class="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
            <li v-for="(item, idx) in socialLinks" :key="idx">
              <a
                :href="item.url"
                rel="noopener noreferrer"
                target="_blank"
                class="text-teal-500 transition hover:text-teal-500/75"
              >
                <span class="sr-only">{{ item.name }}</span>
                <!-- استخدم component آمن أو SVG مباشرة -->
                <component :is="item.icon" class="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Columns -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-white">{{ $t("footer.aboutUs") }}</p>
            <nav class="mt-8">
              <ul class="space-y-4 text-sm">
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.history")
                  }}</a>
                </li>
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.team")
                  }}</a>
                </li>
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.handbook")
                  }}</a>
                </li>
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.careers")
                  }}</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-white">{{ $t("footer.services") }}</p>
            <nav class="mt-8">
              <ul class="space-y-4 text-sm">
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.webDev")
                  }}</a>
                </li>
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.webDesign")
                  }}</a>
                </li>
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.marketing")
                  }}</a>
                </li>
                <li>
                  <a class="text-white transition hover:text-white/75" href="/">{{
                    $t("footer.googleAds")
                  }}</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-white">{{ $t("footer.contactUs") }}</p>
            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="flex items-center justify-center sm:justify-start gap-1.5 group" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-white shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="text-white transition group-hover:text-white/75"
                    >info@resaad.com</span
                  >
                </a>
              </li>

              <li>
                <a class="flex items-center justify-center sm:justify-start gap-1.5 group" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-white shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span class="text-white transition group-hover:text-white/75"
                    >8336 226 11 966+</span
                  >
                </a>
              </li>

              <li class="flex items-start justify-center gap-1.5 sm:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-white shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address class="-mt-0.5 not-italic text-white">
                  {{ $t("footer.addressOS") }}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pt-6 mt-12 border-t border-gray-800">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
          <!-- <p class="text-sm text-gray-400">
            <span class="block sm:inline">{{ $t('footer.allRights') }}</span>
            <a class="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/">
              {{ $t('footer.terms') }}
            </a>
            <span>&middot;</span>
            <a class="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/">
              {{ $t('footer.privacy') }}
            </a>
          </p> -->
          <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0 text-center sm:text-left" > &copy; {{ new Date().getFullYear() }} <span class="font-semibold text-gray-700 dark:text-gray-200"> {{ $t("siteName") }} </span>.
            {{ $t("footer.allRights") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

// اتجاه الواجهة حسب اللغة
const { locale } = useI18n();
const isRTL = computed(() => locale.value === "ar");

// أيقونات كسيناريو بسيط (ممكن تستبدلها بمكونات SVG منفصلة)
const FacebookIcon = {
  template:
    '<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z\" clip-rule=\"evenodd\"/></svg>',
};
const InstagramIcon = {
  template:
    '<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z\" clip-rule=\"evenodd\"/></svg>',
};
const TwitterIcon = {
  template:
    '<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path d=\"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84\"/></svg>',
};
const GithubIcon = {
  template:
    '<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\" clip-rule=\"evenodd\"/></svg>',
};

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: FacebookIcon },
  { name: "Instagram", url: "https://instagram.com", icon: InstagramIcon },
  { name: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
  { name: "GitHub", url: "https://github.com", icon: GithubIcon },
];
</script>
