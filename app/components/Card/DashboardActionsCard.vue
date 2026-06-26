<template>
  <Card :pt="{
    root: {
      class:
        'h-full w-full rounded-2xl bg-[#151821] px-5 py-4 text-white shadow-xl shadow-black/20 overflow-hidden',
    },
    body: { class: 'h-full p-0' },
    content: { class: 'flex h-full flex-col p-0' },
  }">
    <template #content>
      <div class="shrink-0">
        <p class="text-[18px] font-semibold leading-none">
          {{ t('actions.title') }}
        </p>
      </div>

      <div class="grid flex-1 grid-cols-5 items-center gap-3 pt-3">
        <Button v-for="action in actions" :key="action.label" type="button" text
          class="group flex h-full min-w-0 flex-col items-center justify-center gap-2 rounded-xl px-1 py-1 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          :aria-label="t(action.label)">
          <span
            class="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
            :style="{ backgroundColor: action.background }">
            <i :class="['pi text-4xl', action.icon]" :style="{ color: action.color }" />
          </span>

          <span class="min-h-[34px] max-w-[92px] text-center text-[14px] leading-[17px] text-sky-200">
            {{ t(action.label) }}
          </span>
        </Button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
const { t } = useI18n()

const actions = [
  { label: 'actions.addCreator', icon: 'pi-users', background: '#8B5CF628', color: '#8B5CF6' },
  { label: 'actions.createCampaign', icon: 'pi-calendar-plus', background: '#0EA5E928', color: '#0EA5E9' },
  { label: 'actions.createTask', icon: 'pi-list-check', background: '#22C55E28', color: '#22C55E' },
  { label: 'actions.uploadFiles', icon: 'pi-upload', background: '#F59E0B28', color: '#F59E0B' },
  { label: 'actions.newNote', icon: 'pi-align-left', background: '#2A2F3D80', color: '#F5F6FA80' },
]
</script>
