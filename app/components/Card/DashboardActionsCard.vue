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
        <p class="text-[18px] font-medium">{{ t('actions.title') }}</p>
      </div>

      <div class="mt-3 flex justify-between px-8">
        <Button
          v-for="action in actions"
          :key="action.label"
          type="button"
          text
          class="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white"
          :aria-label="t(action.label)"
        >
          <span
            class="mr-2 flex h-18 w-18 items-center justify-center rounded-xl"
            :style="{ backgroundColor: action.background }"
          >
            <i :class="['pi text-4xl', action.icon]" :style="{ color: action.color }" />
          </span>
          <span class="max-w-20 whitespace-normal text-center text-[14px] leading-tight">
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
