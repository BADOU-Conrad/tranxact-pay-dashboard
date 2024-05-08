<script setup lang="ts">
const activate = localStorage.getItem('activate')
</script>
<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Tableau de bord</h3>
      </div>

      <ul
        class="submenu"
        data-simplebar
      >
        <li>
          <RouterLink
            :to="Number(activate) === 1 ? '/sidebar/dashboards/banking-2' : '/sidebar/layouts/profile-notifications'"
          >
            Tableau de bord
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
