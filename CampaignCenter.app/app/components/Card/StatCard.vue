<template>
  <Card
    :pt="{
      root: {
        class:
          'flex h-full min-h-[112px] w-full flex-col justify-between rounded-2xl border border-white/6 bg-[#151821] px-4 py-3 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.95)]',
      },
      body: { class: 'flex h-full flex-col justify-between p-0' },
      content: { class: 'flex h-full flex-col justify-between p-0' },
    }"
  >
    <template #content>
      <div class="flex items-start gap-3">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/8"
          :style="{ backgroundColor: color }"
        >
          <i :class="['pi text-2xl', icon]" :style="{ color: iconColor }" />
        </div>
        <div class="min-w-0">
          <p class="text-sm font-medium leading-5 text-slate-300">{{ title }}</p>
          <p class="mt-1 text-2xl font-semibold leading-none text-[#F5F6FA]">{{ count }}</p>
        </div>
      </div>
      <div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
        <i class="pi pi-arrow-up h-4 w-4 shrink-0 text-sm text-slate-400" />
        <p class="truncate">{{ uphillText }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  icon: string
  iconColor: string
  title: string
  count: number
  uphillText: string
}>()
</script>
