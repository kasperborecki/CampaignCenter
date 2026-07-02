<template>
  <div>
    <div class="w-[70%]">
        <div
        class="grid grid-cols-[112px_1.35fr_0.85fr_0.65fr_0.65fr_0.85fr_42px] items-center gap-5 border-b border-white/5 px-4 py-3 last:border-b-0 sm:px-6">
        <img v-if="campaign.imageUrl" :src="campaign.imageUrl" alt="campaign logo"
          class="h-19 w-19 rounded-lg object-cover" />
        <div v-else
          class="flex h-19 w-19 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white">
          {{ campaign.title.replace(/\d/g, '') }}
        </div>

        <div class="min-w-0">
          <div class="flex items-center gap-3">
            <p class="truncate text-base font-bold text-white">{{ campaign.title }}</p>
            <Tag :value="campaign.statusLabel"
              class="flex h-5 w-fit items-center justify-center rounded-md px-3 text-xs font-bold"
              :style="statusStyle(campaign.status)" />
          </div>
          <p class="mt-1 truncate text-xs font-medium text-slate-400">
            <i class="pi pi-building mr-1 text-[11px]" />{{ campaign.brand }}
          </p>
          <div class="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
            <span v-for="platform in campaign.platforms" :key="platform" class="truncate">
              <i class="pi pi-instagram mr-1 text-[#E879F9]" />{{ platform }}
            </span>
            <span class="flex h-6 items-center rounded-lg bg-[#090c13] px-2">
              <i :class="['pi mr-1 text-orange-400/70', campaign.budget.hidden ? 'pi-lock' : 'pi-lock-open']" />
              {{ t('campaignPage.budget') }}:
              {{ campaign.budget.hidden ? t('campaignPage.hidden') : `${campaign.budget.amount}
              ${campaign.budget.currency}` }}
            </span>
            <span class="flex h-6 items-center rounded-lg bg-[#090c13] px-2">
              <i class="pi pi-user mr-1 text-[#A78BFA]" />{{ t('campaignPage.guardian') }}:
              {{ campaign.guardian.name }}
            </span>
          </div>
          <div class="mt-2 flex gap-4 text-xs font-medium text-slate-500">
            <p>{{ t('campaignPage.created') }}: {{ formatDate(campaign.dates.createdAt) }}</p>
            <p>
              {{ campaign.dates.startsAt ? t('campaignPage.starts') : t('campaignPage.updated') }}:
              {{ formatDate(campaign.dates.startsAt ?? campaign.dates.updatedAt) }}
            </p>
          </div>
        </div>

        <div>
          <p class="text-xs text-slate-400">{{ t('campaignPage.creators') }}</p>
          <p class="mt-1 text-base font-semibold text-white">{{ campaign.creators.current }} / {{
            campaign.creators.total }}</p>
        </div>

        <div>
          <p class="text-xs text-slate-400">{{ t('campaignPage.tasks') }}</p>
          <p class="mt-1 text-base font-semibold text-white">{{ campaign.tasks.current }} / {{ campaign.tasks.total }}
          </p>
        </div>

        <div>
          <p class="text-xs text-slate-400">{{ t('campaignPage.progress') }}</p>
          <p class="mt-1 text-sm font-semibold text-white">{{ campaign.progress }}%</p>
          <ProgressBar :value="campaign.progress" :show-value="false" class="mt-1 h-2 w-28 rounded-full bg-[#223041]"
            :pt="{ value: { class: 'rounded-full bg-[#8B5CF6]' } }" />
        </div>

        <div>
          <p class="text-xs text-slate-400">
            {{ campaign.dates.startsAt ? t('campaignPage.starts') : t('campaignPage.reach') }}
          </p>
          <p class="mt-1 text-base font-semibold text-white">
            {{ campaign.dates.startsAt ? formatDate(campaign.dates.startsAt) : campaign.reach.formatted ?? '-' }}
          </p>
        </div>

        <Button type="button" icon="pi pi-ellipsis-h" text rounded
          class="flex h-8 w-8 items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white"
          aria-label="Campaign menu" />
    </div>
    </div>
    <div class="w-[70%]"></div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { campaignsResponse } from '~/fakeData/campaignsListData'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()

const campaign = campaignsResponse.campaigns?.find(
  x => x.id === route.params.id
)
if (!campaign) {
  console.log('Nie znaleziono kampanii')
}

function statusStyle(status: string) {
  const styles = {
    inProgress: { backgroundColor: '#8B5CF628', color: '#8B5CF6' },
    planned: { backgroundColor: '#0EA5E928', color: '#0EA5E9' },
    closed: { backgroundColor: '#EF444428', color: '#EF4444' },
  }

  return styles[status as keyof typeof styles] ?? {}
}

function formatDate(value?: string | null) {
  if (!value) return '-'
  return new Date(value).toLocaleDateString(locale.value === 'pl' ? 'pl-PL' : 'en-US')
}

</script>
