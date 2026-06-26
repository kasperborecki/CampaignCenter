<template>
  <div>
    <div class="mb-2 flex h-[7%] items-center justify-between px-6 pt-2">
      <div>
        <p class="text-3xl font-medium">{{ t('app.hello', { name: 'UserName' }) }}</p>
        <p class="mt-1 text-gray-400">{{ t('app.welcomeDashboard') }}</p>
      </div>

      <div class="-mt-6 flex items-center gap-4">
        <div
          class="relative flex h-9 w-50 items-center rounded-md border border-zinc-700 bg-zinc-800 text-sm text-white shadow transition-all focus-within:w-100">
          <i class="pi pi-search pointer-events-none absolute left-3 text-zinc-400" />
          <InputText v-model="search" spellcheck="false" name="text" :placeholder="t('searchPlaceholder')"
            class="h-full w-full bg-transparent py-1.5 pl-10 pr-3 text-white outline-none transition-all placeholder:text-zinc-400" />
        </div>

        <Button type="button" icon="pi pi-bell" text rounded class="h-10 w-10 text-white hover:bg-white/10"
          aria-label="Notifications" />

        <LanguageSwitch />
      </div>
    </div>

    <DashboardStatsCardGroup class="max-h-[13%] max-w-full px-6" />

    <div
      class="mx-8 mt-7 grid h-[calc(100vh-240px)] grid-cols-[3fr_2fr] grid-rows-7 items-stretch gap-6 overflow-hidden">
      <DashboardCampaignCard class="col-start-1 row-start-1 row-span-4 min-h-0 min-w-0" />

      <DashboardTaskCard class="col-start-2 row-start-1 row-span-5 min-h-0 min-w-0" />

      <DashboardTermsCard class="col-start-1 row-start-5 row-span-3 min-h-0 min-w-0" />

      <DashboardActionsCard class="col-start-2 row-start-6 row-span-2 min-h-0 min-w-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardActionsCard from '~/components/Card/DashboardActionsCard.vue'
import DashboardCampaignCard from '~/components/Card/DashboardCampaignCard.vue'
import DashboardStatsCardGroup from '~/components/Card/DashboardStatsCardGroup.vue'
import DashboardTaskCard from '~/components/Card/DashboardTaskCard.vue'
import DashboardTermsCard from '~/components/Card/DashboardTermsCard.vue'

const { t } = useI18n()
const search = ref('')
</script>
