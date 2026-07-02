import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@primevue/nuxt-module', '@nuxtjs/i18n'],

  css: ['~/assets/main.css', 'primeicons/primeicons.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  primevue: {
    options: {
      ripple: true,
      unstyled: true,
    },
  },

  i18n: {
    defaultLocale: 'pl',
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      {
        code: 'pl',
        name: 'Polski',
        file: 'pl.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
  },
})