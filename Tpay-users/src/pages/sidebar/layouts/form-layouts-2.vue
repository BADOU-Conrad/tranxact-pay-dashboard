<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Retrait')

useHead({
  title: 'Retrait - Sidebar - Tranxact',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutSplit />
  </div>
</template>
