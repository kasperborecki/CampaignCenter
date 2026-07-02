<template>
  <main class="grid h-screen overflow-hidden bg-[#090c13] text-white lg:grid-cols-2">
    <section class="relative hidden h-full overflow-hidden lg:block">
      <img :src="authBackground" alt="" class="h-full w-full object-cover" />
      <img :src="logo" alt="Campaign Center" class="absolute left-6 top-4 h-12 w-56 object-contain" />
      <div class="absolute left-10 top-16 w-[60%]">
        <p class="text-[42px] font-bold leading-tight">{{ t('auth.heroTitle') }}</p>
        <p class="mt-3 text-[18px] font-thin text-gray-300">
          {{ t('auth.heroSubtitle') }}
        </p>
      </div>
    </section>

    <section
      class="relative flex min-h-screen items-center justify-center overflow-hidden border-l border-gray-900 px-6 py-10 sm:px-10 lg:px-16"
    >
      <AuthComponent />
    </section>
  </main>
</template>

<script setup lang="ts">
import authBackground from '~/assets/AuthBackgroundTwo.png'
import logo from '~/assets/logo.png'
import AuthComponent from '~/components/Auth/AuthComponent.vue'

const { t } = useI18n()
</script>
