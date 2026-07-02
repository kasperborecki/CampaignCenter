<template>
  <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <StatCard
      color="#8B5CF628"
      icon="pi-folder"
      icon-color="#8B5CF6"
      :count="24"
      :title="t('campaignPage.allCampaigns')"
      :uphill-text="t('stats.newThisMonth').replace('5', '3')"
    />
    <StatCard
      color="#22C55E28"
      icon="pi-play-circle"
      icon-color="#22C55E"
      :count="8"
      :title="t('campaigns.inProgress')"
      uphill-text="2 więcej niż w zeszłym miesiącu"
    />
    <StatCard
      color="#0EA5E928"
      icon="pi-calendar"
      icon-color="#0EA5E9"
      :count="6"
      :title="t('campaigns.planned')"
      uphill-text="1 w tym miesiącu"
    />
    <StatCard
      color="#8B5CF628"
      icon="pi-check-circle"
      icon-color="#8B5CF6"
      :count="10"
      :title="t('campaigns.closed')"
      uphill-text="15% skuteczności średnio"
    />
  </div>
</template>

<script setup lang="ts">
import StatCard from '../StatCard.vue'

const { t } = useI18n()
</script>
