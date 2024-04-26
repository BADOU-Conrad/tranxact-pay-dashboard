<script setup lang="ts">
const openSubsidebarLinks = ref('')
const emit = defineEmits(['close'])
const activate = localStorage.getItem('activate')
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <ProjectsQuickDropdown />

      <h3 class="no-mb">
        Transactions
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
          <div v-if="!activate">
            <RouterLink to="/sidebar/layouts/profile-notifications">
              Comptes
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink to="/sidebar/layouts/grid-cards-3">
              Comptes
            </RouterLink>
          </div>
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
          <div v-if="!activate">
            <RouterLink
              to="/sidebar/layouts/profile-notifications"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt"
              />
              <span>Collecter</span>
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink
              to="/sidebar/layouts/list-view-4"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt"
              />
              <span>Collecter</span>
            </RouterLink>
          </div>
          <div v-if="!activate">
            <RouterLink
              to="/sidebar/layouts/profile-notifications"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt"
              />
              <span>Historique de Collecte</span>
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink
              to="/sidebar/layouts/list-datatable-3"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt"
              />
              <span>Historique de Collecte</span>
            </RouterLink>
          </div>
         
          <RouterLink
            to="/sidebar/layouts/list-view-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>Retirer (PayOut)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-datatable-1"
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
          <RouterLink to="/sidebar/layouts/list-datatable-2">
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
