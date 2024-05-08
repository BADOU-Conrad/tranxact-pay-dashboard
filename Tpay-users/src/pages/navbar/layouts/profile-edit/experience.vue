<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Equipe')

useHead({
  title: 'Equipe - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileExperience />
</template>
