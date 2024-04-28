<script setup lang="ts">
//const openSubsidebarLinks = ref('')
const emit = defineEmits(['close'])
const activate = localStorage.getItem('activate')
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <ProjectsQuickDropdown />

      <h3 class="no-mb">
        Tableau de bord
      </h3>
      <div
        class="panel-close"
        tabindex="0"
        role="button"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:x"
        />
      </div>
    </div>
    <div
      class="inner"
      data-simplebar
    >
      <ul>
        <li>
          <RouterLink
            :to="activate ? '/sidebar/dashboards/banking-2' : '/sidebar/layouts/profile-notifications'"
          >
            Tableau de bord
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>