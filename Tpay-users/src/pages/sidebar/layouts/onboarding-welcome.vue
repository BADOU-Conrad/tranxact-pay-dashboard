<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Bienvenue sur votre dashboard test')

useHead({
  title: 'Bienvenue sur votre dashboard test - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingStandard />
  </div>
</template>
