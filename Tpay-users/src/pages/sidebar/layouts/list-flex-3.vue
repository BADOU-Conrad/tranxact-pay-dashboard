<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List Flex 3')

useHead({
  title: 'List Flex 3 - Tranxact',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FlexListV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
