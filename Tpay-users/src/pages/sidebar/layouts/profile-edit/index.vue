<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Paramètres')

useHead({
  title: 'Paramètres - Sidebar - Tranxact',
})
</script>

<template>
  <EditProfileGeneral />
</template>
