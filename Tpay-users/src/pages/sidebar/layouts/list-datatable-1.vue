<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Disputes')

useHead({
  title: 'Disputes - Tranxact',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV1 />
  </div>
</template>
