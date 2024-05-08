<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Mot de Passe')

useHead({
  title: 'Mot de Passe - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSettings />
</template>
