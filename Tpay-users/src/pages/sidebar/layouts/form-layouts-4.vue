<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Complèter et Vérifier son profile')

useHead({
  title: 'Complèter et Vérifier son profile - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStacked />
  </div>
</template>
