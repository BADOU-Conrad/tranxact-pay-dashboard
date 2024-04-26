<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Mon Profile')

useHead({
  title: 'Profile - Sidebar - Tranxact',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewProfile />
  </div>
</template>
