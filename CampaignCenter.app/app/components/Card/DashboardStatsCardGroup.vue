<template>
  <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <StatCard
      color="#8B5CF628"
      icon="pi-folder"
      icon-color="#8B5CF6"
      :count="6"
      :title="t('stats.myCampaigns')"
      :uphill-text="t('stats.inProgress')"
    />
    <StatCard
      color="#22C55E28"
      icon="pi-users"
      icon-color="#22C55E"
      :count="27"
      :title="t('stats.creatorsInCampaigns')"
      :uphill-text="t('stats.newThisMonth')"
    />
    <StatCard
      color="#F59E0B28"
      icon="pi-list-check"
      icon-color="#F59E0B"
      :count="12"
      :title="t('stats.activeTasks')"
      :uphill-text="t('stats.needAttention')"
    />
    <StatCard
      color="#0EA5E928"
      icon="pi-check-circle"
      icon-color="#0EA5E9"
      :count="8"
      :title="t('stats.tasksToday')"
      :uphill-text="t('stats.planned')"
    />
  </div>
</template>

<script setup lang="ts">
import StatCard from './StatCard.vue'

const { t } = useI18n()
</script>
