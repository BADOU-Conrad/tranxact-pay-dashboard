<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Historique de collecte')

useHead({
  title: 'Historique de collecte - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV3 />
  </div>
</template>
