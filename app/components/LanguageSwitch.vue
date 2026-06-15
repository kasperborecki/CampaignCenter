<template>
  <Select
    v-model="selectedLocale"
    :options="options"
    option-label="label"
    option-value="value"
    class="flex h-9 w-24 items-center justify-between rounded-md border border-white/10 bg-[#151821]/80 text-xs font-bold text-white"
    :pt="{
      root: { class: 'relative flex h-9 w-24 items-center justify-between overflow-visible' },
      label: { class: 'flex h-full flex-1 items-center px-3 text-white' },
      dropdown: { class: 'flex h-full w-8 shrink-0 items-center justify-center text-slate-400' },
      overlay: { class: 'mt-1 overflow-hidden rounded-md border border-white/10 bg-[#151821] text-white shadow-xl shadow-black/30' },
      list: { class: 'py-1' },
      option: { class: 'cursor-pointer px-3 py-2 text-xs font-bold hover:bg-[#5b2eff]/20' },
    }"
    aria-label="Language"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { locale, setLocale } = useI18n()

const options = [
  { label: 'PL', value: 'pl' },
  { label: 'EN', value: 'en' },
] as const

const selectedLocale = computed({
  get: () => locale.value,
  set: (value: string) => {
    void setLocale(value)
  },
})
</script>
