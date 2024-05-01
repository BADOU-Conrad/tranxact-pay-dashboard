<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Equipe')

useHead({
  title: 'Equipe - Tranxact',
})

</script>

<template>
  <div class="page-content-inner">
    <FlexListV1 />
  </div>
</template>
