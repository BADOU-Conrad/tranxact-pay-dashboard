<script setup lang="ts">
const openSubsidebarLinks = ref('')
const activate = localStorage.getItem('activate')
</script>

<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Transactions</h3>
      </div>

      <ul class="submenu">
        <li>
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/grid-cards-3' : '/sidebar/layouts/profile-notifications'"
          >
            Comptes
          </RouterLink>
        </li>
        <VCollapseLinks
          v-model:open="openSubsidebarLinks"
          collapse-id="lists"
        >
          <template #header>
            Type Transactions
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-view-4' : '/sidebar/layouts/profile-notifications'"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>Collecter</span>
          </RouterLink>
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-datatable-3' : '/sidebar/layouts/profile-notifications'"
    
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>Historique de Collecte</span>
          </RouterLink>
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-view-2' : '/sidebar/layouts/profile-notifications'"
         
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>Retirer (PayOut)</span>
          </RouterLink>
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-datatable-1' : '/sidebar/layouts/profile-notifications'"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>Dispute</span>
          </RouterLink>
        </VCollapseLinks>

        <li>
          <RouterLink
            
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-datatable-2' : '/sidebar/layouts/profile-notifications'"
          >
            Bénéficiaire courant
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
