<script setup lang="ts">
const emit = defineEmits(['close'])
const activate = localStorage.getItem('activate')
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">
        Clients
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
            :to="Number(activate) === 1 ? '/components/' : '/sidebar/layouts/profile-notifications'"
          >
            Abonnements
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            :to="Number(activate) === 1 ? '/components/content' : '/sidebar/layouts/profile-notifications'"
          >
            Expiration
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="Number(activate) === 1 ? '/components/table' : '/sidebar/layouts/profile-notifications'">
            Renouvelement
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
