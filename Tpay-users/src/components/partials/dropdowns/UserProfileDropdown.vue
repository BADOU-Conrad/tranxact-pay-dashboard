<script setup lang="ts">
import { useUserSession } from '/@src/stores/userSession'

const userSession = useUserSession()
const router = useRouter()
const fullName = localStorage.getItem('fullName')
const email = localStorage.getItem('email')
function logout() {
  userSession.logoutUser()
  router.push('/auth/login')
}
</script>

<template>
  <VDropdown
    right
    spaced
    class="user-dropdown profile-dropdown"
  >
    <template #button="{ toggle }">
      <a
        role="button"
        tabindex="0"
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @keydown.space.prevent="toggle"
        @click="toggle"
      >
        <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <VAvatar
          size="large"
          picture="/images/avatars/svg/vuero-1.svg"
        />

        <div class="meta">
          <span>{{ fullName }}</span>
          <span>{{ email }}</span>
        </div>
      </div>

      

      <a
        href="/sidebar/layouts/list-flex-1"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-users-alt"
          />
        </div>
        <div class="meta">
          <span>Equipe</span>
          <span>Gerer les membres</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="/sidebar/layouts/profile-edit"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cog"
          />
        </div>
        <div class="meta">
          <span>Paramètres</span>
          <span>Paramètres de compte</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <div class="dropdown-item is-button">
        <VButton
          class="logout-button"
          icon="feather:log-out"
          color="primary"
          role="menuitem"
          raised
          fullwidth
          @click="logout"
        >
          Logout
        </VButton>
      </div>
    </template>
  </VDropdown>
</template>
