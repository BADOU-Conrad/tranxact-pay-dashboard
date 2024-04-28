<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Comptes')

useHead({
  title: 'Comptes - Tranxact',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV3 />
  </div>
</template>
