<script setup lang="ts">
const openSubsidebarLinks = ref('')
const activate = localStorage.getItem('activate')
</script>

<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Services</h3>
      </div>

      <ul class="submenu">
        <VCollapseLinks
          v-model:open="openSubsidebarLinks"
          collapse-id="lists"
        >
          <template #header>
            Développeur
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
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-view-3' : '/sidebar/layouts/profile-notifications'"

            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>Api keys</span>
          </RouterLink>
    
       
         
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-flex-2' : '/sidebar/layouts/profile-notifications'"
         
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>WebHook</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks
          v-model:open="openSubsidebarLinks"
          collapse-id="flex-lists"
        >
          <template #header>
            Tranxact Hub
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
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-flex-1' : '/sidebar/layouts/profile-notifications'"
         
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>MarketPlace </span>
          </RouterLink>
         
          
 
          <RouterLink
             
            :to="Number(activate) === 1 ? '/sidebar/layouts/list-flex-2' : '/sidebar/layouts/profile-notifications'"

            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>Cashout Page builder</span>
          </RouterLink>
        </VCollapseLinks>
        <li>
          <RouterLink to="/elements/helpers">
            Documentation
          </RouterLink>
        </li>
      </ul>
      <div class="bottom-action" />
    </div>
  </div>
</template>
<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
