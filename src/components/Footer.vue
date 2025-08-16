<template>
  <section id="contact" class="contact-area border-b border-[#353C46] bg-[#1A1E25] text-[#868c96] py-12 sm:py-16 lg:py-[60px]">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex justify-center">
        <div class="w-full max-w-screen-sm md:max-w-lg text-center">
          <a href="#" class="inline-block">
            <img src="/images/Resaad Colored.png" alt="resaad logo" class="max-w-[180px] sm:max-w-[210px] w-full h-auto mx-auto" />
          </a>

          <p class="text-[14px] sm:text-[15px] mt-[30px] mb-[60px] relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[30px] after:w-[90%] sm:after:w-[80%] after:h-px after:bg-[#353C46] after:-translate-x-1/2 px-2">
            {{ $t("footer.description") }}
          </p>

          <h6 class="text-[#8b9199] text-[14px] sm:text-[15px] font-normal mb-[10px] leading-relaxed px-2">
            {{ $t("footer.addressOS") }}
          </h6>

          <h6 class="text-[#8b9199] text-[14px] sm:text-[15px] font-normal mb-[10px] leading-relaxed px-2">
            info@resaad.com
            <span class="mx-[10px] text-[#353c47]">|</span>
            {{ $t("footer.phone") }}
          </h6>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-[#1A1E25] text-[#868c96]">
    <p class="py-8 sm:py-10 text-center px-4">
      Copyright &copy; 2025
      <img src="/images/Resaad Colored.png" alt="resaad logo" class="w-[36px] sm:w-[44px] inline-block align-middle mx-1" />
      All Rights Reserved.
    </p>
  </footer>
</template>
