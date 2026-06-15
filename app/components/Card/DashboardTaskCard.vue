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
        <p class="text-[18px] font-medium">{{ t('tasks.title') }}</p>
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
        v-for="task in filteredTasks"
        :key="task.id"
        class="grid h-16 grid-cols-[4%_40%_28%_8%_10%] items-center gap-2 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"
      >
        <Checkbox
          v-model="checkedTasks"
          :value="task.id"
          class="h-5 w-5 rounded-md border border-slate-600 bg-transparent"
          :pt="checkboxPt"
        />
        <p class="text-[14px]">{{ task.title.slice(0, 40) }}</p>
        <div class="flex justify-end">
          <Tag
            :value="task.campaign"
            class="flex h-7 w-fit items-center justify-center rounded-md bg-[#2A2F3D80] px-3 text-xs font-bold text-slate-400"
          />
        </div>
        <Tag
          :value="task.priorityLabel"
          class="flex h-7 w-14 items-center justify-center rounded-md px-3 text-xs font-bold"
          :style="priorityStyle(task.priority)"
        />
        <p class="w-24 text-end">{{ task.dueDate }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { tasks } from '~/fakeData/tasksData'
import { computed, ref } from 'vue'

const { t } = useI18n()
const filter = ref('todo')
const checkedTasks = ref<number[]>([])

const checkboxPt = {
  root: { class: 'relative inline-flex h-5 w-5 items-center justify-center' },
  input: { class: 'absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0' },
  box: {
    class:
      'flex h-5 w-5 items-center justify-center rounded-md border border-slate-600 bg-transparent text-white',
  },
  icon: { class: 'text-[10px] text-white' },
}

const tabs = computed(() => [
  { label: t('tasks.todo'), value: 'todo' },
  { label: t('tasks.inProgress'), value: 'inProgress' },
  { label: t('tasks.closed'), value: 'closed' },
])

const filteredTasks = computed(() => tasks.filter((task) => task.status === filter.value))

function priorityStyle(priority: string) {
  const styles = {
    low: { backgroundColor: '#22C55E28', color: '#22C55E' },
    medium: { backgroundColor: '#F59E0B28', color: '#F59E0B' },
    high: { backgroundColor: '#EF444428', color: '#EF4444' },
  }

  return styles[priority as keyof typeof styles] ?? {}
}
</script>
