<template>
  <Card
    :pt="{
      root: { class: 'h-full w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20' },
      body: { class: 'h-full p-0' },
      content: { class: 'h-full p-0' },
    }"
  >
    <template #content>
      <div class="flex items-center justify-between">
        <p class="text-[18px] font-medium">{{ t('campaigns.myCampaigns') }}</p>
        <Button
          type="button"
          text
          :label="t('common.seeAll')"
          icon="pi pi-arrow-right"
          icon-pos="right"
          class="text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
        />
      </div>

      <div class="mt-3 flex items-center gap-8 border-b border-white/5">
        <Button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          text
          :label="tab.label"
          class="rounded-none pb-3 text-sm font-semibold transition"
          :class="filter === tab.value
            ? 'border-b-2 border-[#8B5CF6] text-white'
            : 'border-b-2 border-transparent text-slate-400 hover:text-white'"
          @click="filter = tab.value"
        />
      </div>

      <div
        v-for="campaign in filteredCampaigns"
        :key="campaign.id"
        class="grid grid-cols-[52px_1.5fr_90px_110px_120px_120px_70px_32px] items-center gap-4 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"
      >
        <img v-if="campaign.image" :src="campaign.image" alt="" class="h-12 w-12 rounded-lg object-cover" />
        <div
          v-else
          class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white"
        >
          {{ campaign.title.replace(/\d/g, '') }}
        </div>

        <div class="min-w-0">
          <p class="truncate text-sm font-bold text-white">{{ campaign.title }}</p>
          <p class="truncate text-xs font-medium text-slate-400">{{ campaign.brand }}</p>
        </div>

        <Tag
          :value="campaign.statusLabel"
          class="flex h-7 w-fit items-center justify-center rounded-md px-3 text-xs font-bold"
          :style="statusStyle(campaign.status)"
        />

        <p class="text-sm font-medium text-slate-300">
          {{ t('campaigns.creators', campaign.creators) }}
        </p>

        <ProgressBar
          :value="(campaign.creators.current / campaign.creators.total) * 100"
          :show-value="false"
          class="h-2 w-28 rounded-full bg-[#223041]"
          :pt="{ value: { class: 'rounded-full bg-[#8B5CF6]' } }"
        />

        <div class="flex items-center">
          <Avatar
            v-for="avatar in 3"
            :key="avatar"
            :image="userAvatar"
            shape="circle"
            class="-ml-2 h-8 w-8 border-2 border-[#151821] object-cover first:ml-0"
          />

          <span v-if="campaign.extraCreators > 0" class="ml-2 text-xs font-semibold text-slate-300">
            +{{ campaign.extraCreators }}
          </span>
        </div>

        <div class="flex items-center gap-1 text-sm font-semibold text-slate-300">
          <i class="pi pi-comments text-base text-slate-300" />
          {{ campaign.messagesCount }}
        </div>

        <Button
          type="button"
          icon="pi pi-ellipsis-h"
          text
          rounded
          class="flex h-8 w-8 items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white"
          aria-label="Campaign menu"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { campaigns } from '~/fakeData/campaignData'
import userAvatar from '~/assets/UserAvatar.jpg'
import { computed, ref } from 'vue'

const { t } = useI18n()
const filter = ref('all')

const tabs = computed(() => [
  { label: t('common.all'), value: 'all' },
  { label: t('campaigns.inProgress'), value: 'inProgress' },
  { label: t('campaigns.planned'), value: 'planned' },
  { label: t('campaigns.closed'), value: 'closed' },
])

const filteredCampaigns = computed(() => {
  if (filter.value === 'all') return campaigns
  return campaigns.filter((campaign) => campaign.status === filter.value)
})

function statusStyle(status: string) {
  const styles = {
    inProgress: { backgroundColor: '#8B5CF628', color: '#8B5CF6' },
    planned: { backgroundColor: '#0EA5E928', color: '#0EA5E9' },
    closed: { backgroundColor: '#EF444428', color: '#EF4444' },
  }

  return styles[status as keyof typeof styles] ?? {}
}
</script>
