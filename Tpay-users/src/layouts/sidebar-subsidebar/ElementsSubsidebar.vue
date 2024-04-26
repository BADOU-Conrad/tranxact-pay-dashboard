<script setup lang="ts">
const openSubsidebarLinks = ref('')
const activate = localStorage.getItem('activate')
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">
        Services
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
          <div v-if="!activate">
            <RouterLink
              to="/sidebar/layouts/profile-notifications"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>Api keys</span>
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink
              to="/sidebar/layouts/list-view-3"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>Api keys</span>
            </RouterLink>
          </div>
          <div v-if="!activate">
            <RouterLink
              to="/sidebar/layouts/profile-notifications"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>WebHook</span>
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink
              to="/sidebar/layouts/list-flex-2"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>WebHook</span>
            </RouterLink>
          </div>
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
          <div v-if="!activate">
            <RouterLink
              to="/sidebar/layouts/profile-notifications"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>MarketPlace </span>
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink
              to="/sidebar/layouts/list-flex-1"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>MarketPlace </span>
            </RouterLink>
          </div>
          <div v-if="!activate">
            <RouterLink
              to="/sidebar/layouts/profile-notifications"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>Cashout Page builder</span>
            </RouterLink>
          </div>
          <div v-if="activate">
            <RouterLink
              to="/sidebar/layouts/list-flex-2"
              class="is-submenu"
            >
              <i
                aria-hidden="true"
                class="lnil lnil-list-alt-1"
              />
              <span>Cashout Page builder</span>
            </RouterLink>
          </div>
        </VCollapseLinks>
        <li>
          <RouterLink to="/elements/helpers">
            Documentation
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
