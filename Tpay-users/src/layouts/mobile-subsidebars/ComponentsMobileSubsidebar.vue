<script setup lang="ts">
const activate = localStorage.getItem('activate')
</script>

<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Clients</h3>
      </div>

      <ul class="submenu">
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
