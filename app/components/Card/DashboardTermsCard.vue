<template>
  <Card
    :pt="{
      root: { class: 'h-full w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20' },
      body: { class: 'h-full p-0' },
      content: { class: 'h-full p-0' },
    }"
  >
    <template #content>
      <div class="mb-2 flex items-center justify-between">
        <div class="flex">
          <div class="mr-2 mt-1 flex h-8 w-8 flex-col items-center justify-center rounded-xl bg-[#EF444428]">
            <i class="pi pi-calendar text-sm text-[#EF4444]" />
          </div>
          <div>
            <p class="text-[18px] font-medium">{{ t('deadlines.title') }}</p>
            <p class="text-[12px] font-medium text-slate-400">{{ t('deadlines.subtitle') }}</p>
          </div>
        </div>

        <Button
          type="button"
          text
          :label="t('common.seeAll')"
          icon="pi pi-arrow-right"
          icon-pos="right"
          class="text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
        />
      </div>

      <div
        v-for="deadline in deadlines"
        :key="deadline.id"
        class="flex items-center justify-between gap-2 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"
      >
        <div class="flex items-center justify-center">
          <div class="flex h-12 w-12 flex-col items-center rounded-xl bg-[#2A2F3D89]">
            <p class="text-[18px] font-semibold">{{ deadline.day }}</p>
            <p class="text-[12px] text-slate-400">{{ deadline.month }}</p>
          </div>
          <div class="ml-2 mr-3 h-10 w-1 rounded-full bg-[#8B5CF6]" />
          <div>
            <p class="text-[15px] font-medium">{{ deadline.title }}</p>
            <p class="text-[12px] font-medium text-slate-400">{{ deadline.subtitle }}</p>
          </div>
        </div>
        <p class="text-[16px] text-slate-400">
          {{ formatDeadlineTime(deadline.datetime, deadline.endDatetime) }}
        </p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { deadlines } from '~/fakeData/calendarData'

const { t, locale } = useI18n()

function formatDeadlineTime(datetime: string, endDateTime?: string | null) {
  const language = locale.value === 'pl' ? 'pl-PL' : 'en-US'
  const start = new Date(datetime)
  const startTime = start.toLocaleTimeString(language, {
    hour: '2-digit',
    minute: '2-digit',
  })

  if (!endDateTime) return startTime

  const end = new Date(endDateTime)
  const endTime = end.toLocaleTimeString(language, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return `${startTime} - ${endTime}`
}
</script>
