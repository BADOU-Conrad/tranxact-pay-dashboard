<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Tableau de Bord')

useHead({
  title: 'Banking 2 - Sidebar - Tranxact',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV2 />
  </div>
</template>
