<template>
  <aside class="relative flex h-screen w-64 flex-col items-center border-r border-gray-900 bg-[#090c13] text-white">
    <img :src="logoIcon" alt="logoIcon" class="mt-4 h-14 w-14" />

    <Button type="button" icon="pi pi-plus" :label="t('sidebar.newCampaign')"
      class="mt-4 flex h-12 items-center gap-2 rounded-md bg-[#5b2eff] px-4 py-2 font-semibold text-white hover:bg-[#784DFF]" />

    <nav class="flex-1 overflow-y-auto mt-8 flex w-full flex-col items-center gap-2">
      <Button v-for="item in navItems" :key="item.value" type="button" :icon="item.icon" :label="t(item.label)" text
        :class="[
          'flex h-10 w-[90%] items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold transition',
          selectedTab === item.value
            ? 'bg-[#5B2EFF]/20 text-white'
            : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10',
        ]" @click="navigate(item)" />
    </nav>

    <div class="shrink-0 flex h-20 w-full border-t border-gray-900 p-2">
      <img :src="userAvatar" alt="avatar" class="h-16 w-16 rounded-full object-cover" />
      <div class="ml-5 flex flex-col justify-center">
        <p class="font-semibold">{{ t('sidebar.userName') }}</p>
        <p class="text-sm text-gray-400">{{ t('sidebar.administrator') }}</p>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import logoIcon from '~/assets/LogoIcon.png'
import userAvatar from '~/assets/UserAvatar.jpg'

const { t } = useI18n()
const route = useRoute()

const navItems = [
  { value: 'dashboard', path: '/', label: 'sidebar.dashboard', icon: 'pi pi-home' },
  { value: 'campaigns', path: '/campaign', label: 'sidebar.campaigns', icon: 'pi pi-calendar-plus' },
  { value: 'creators', path: '/creators', label: 'sidebar.creators', icon: 'pi pi-users' },
  { value: 'tasks', path: '/tasks', label: 'sidebar.tasks', icon: 'pi pi-list-check' },
  { value: 'calendar', path: '/calendar', label: 'sidebar.calendar', icon: 'pi pi-calendar' },
  { value: 'payments', path: '/payments', label: 'sidebar.payments', icon: 'pi pi-credit-card' },
  { value: 'documents', path: '/documents', label: 'sidebar.documents', icon: 'pi pi-briefcase' },
  { value: 'notes', path: '/notes', label: 'sidebar.notes', icon: 'pi pi-align-left' },
  { value: 'settings', path: '/settings', label: 'sidebar.settings', icon: 'pi pi-cog' },
]

const selectedTab = computed(() => {
  const active = navItems.find((item) => item.path === route.path)
  return active?.value ?? 'dashboard'
})

function navigate(item: (typeof navItems)[number]) {
  void navigateTo(item.path)
}
</script>
