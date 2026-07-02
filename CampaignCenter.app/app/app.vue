<template>
  <div class="app-dark min-h-screen bg-[#090c13] text-white">
    <NuxtRouteAnnouncer />

    <ClientOnly>
      <div v-if="isAuthenticated" class="flex max-h-screen">
        <SideBarComponent class="shrink-0" />
        <main class="min-h-screen flex-1 overflow-auto">
          <NuxtPage />
        </main>
      </div>

      <div v-else class="min-h-screen">
        <LanguageSwitch class="absolute right-4 top-4 z-20" />
        <AuthPage />
      </div>

      <template #fallback>
        <div class="min-h-screen bg-[#090c13]" />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AuthPage from './pages/auth/index.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'
import SideBarComponent from './components/Sidebar/SideBarComponent.vue'
import { useAuthHolderStore } from './stores/authHolder'

const authStore = useAuthHolderStore()
authStore.init()

const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>
