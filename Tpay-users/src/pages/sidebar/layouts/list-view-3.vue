<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('API KEYS ')

useHead({
  title: 'API KEYS - Tranxact',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <ViewListV3 />
    </div>
  </div>
</template>
