<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Bénéficiaire Courant')

useHead({
  title: 'Bénéficiaire Courant - Sidebar - Tranxact',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV2 />
  </div>
</template>
