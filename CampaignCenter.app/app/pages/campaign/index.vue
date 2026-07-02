<template>
  <div>
    <div class="mb-2 flex h-[7%] items-center justify-between px-6 pt-4">
      <div>
        <p class="text-3xl font-medium">{{ t('campaignPage.title') }}</p>
        <p class="mt-1 text-gray-400">{{ t('campaignPage.subtitle') }}</p>
      </div>

      <div class="flex items-center gap-4">
        <div
          class="relative flex h-9 w-50 items-center rounded-md border border-zinc-700 bg-zinc-800 text-sm text-white shadow transition-all focus-within:w-100"
        >
          <i class="pi pi-search pointer-events-none absolute left-3 text-zinc-400" />
          <InputText
            v-model="search"
            spellcheck="false"
            name="text"
            :placeholder="t('searchPlaceholder')"
            class="h-full w-full bg-transparent py-1.5 pl-10 pr-3 text-white outline-none transition-all placeholder:text-zinc-400"
          />
        </div>

        <Button
          type="button"
          icon="pi pi-bell"
          text
          rounded
          class="h-10 w-10 text-white hover:bg-white/10"
          aria-label="Notifications"
        />

        <LanguageSwitch />
      </div>
    </div>

    <CampaignStatCardGroup class="w-full px-6" />

    <div class="ml-6 mr-8 mt-3 flex items-center justify-between gap-8 border-b border-white/5">
      <div class="flex items-center justify-center">
        <Button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          text
          class="mx-4 flex items-center justify-between rounded-none pb-3 text-sm font-semibold transition"
          :class="filterTab === tab.value
            ? 'border-b-2 border-[#8B5CF6] text-white'
            : 'border-b-2 border-transparent text-slate-400 hover:text-white'"
          @click="filterTab = tab.value"
        >
          <span>{{ tab.label }}</span>
          <span class="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#151821]">
            {{ tab.count }}
          </span>
        </Button>
      </div>

      <Select
        v-model="selectedFilterSort"
        :options="sortOptions"
        option-label="label"
        option-value="value"
        :placeholder="t('campaignPage.chooseOption')"
        class="flex h-10 w-70 cursor-pointer items-center justify-between rounded-md border border-[#2A2F3D] p-1 text-lg text-slate-400 outline-none backdrop-blur-md hover:bg-slate-900/80 focus:border-white/25 focus:bg-slate-900/90"
        :pt="{
          root: { class: 'relative flex items-center justify-between bg-transparent' },
          label: { class: 'flex flex-1 items-center px-2 text-slate-400' },
          dropdown: { class: 'flex h-full w-8 shrink-0 items-center justify-center text-slate-400' },
          overlay: { class: 'rounded-md border border-[#2A2F3D] bg-[#151821] text-slate-300' },
          option: { class: 'px-3 py-2 hover:bg-[#5B2EFF]/10' },
        }"
      />
    </div>

    <div class="mt-2 flex-1 px-8">
      <CampaignDataTable class="h-full w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CampaignDataTable from '~/components/Card/campaign/CampaignDataTable.vue'
import CampaignStatCardGroup from '~/components/Card/campaign/CampaignStatCardGroup.vue'

const { t } = useI18n()
const filterTab = ref('all')
const selectedFilterSort = ref('')
const search = ref('')

const tabs = computed(() => [
  { label: t('common.all'), value: 'all', count: '24' },
  { label: t('campaigns.inProgress'), value: 'inProgress', count: '8' },
  { label: t('campaigns.planned'), value: 'planned', count: '6' },
  { label: t('campaigns.closed'), value: 'closed', count: '10' },
  { label: t('campaignPage.stopped'), value: 'stopped', count: '2' },
  { label: t('campaignPage.archived'), value: 'archived', count: '3' },
])

const sortOptions = computed(() => [
  { label: t('campaignPage.sortNewest'), value: 'newest' },
  { label: t('campaignPage.sortOldest'), value: 'oldest' },
  { label: t('campaignPage.sortAZ'), value: 'alphAscending' },
  { label: t('campaignPage.sortZA'), value: 'alphDescending' },
])
</script>
