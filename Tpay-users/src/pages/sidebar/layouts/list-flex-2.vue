<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Webhook')

useHead({
  title: 'Webhook - Tranxact',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FlexListV2 :active-tab="activeTab" />
    </div>
  </div>
</template>
