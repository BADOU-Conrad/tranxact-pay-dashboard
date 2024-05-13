<script setup lang="ts">
import type { VAvatarProps, VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'
import { projects } from '/@src/data/layouts/card-grid-v3'
import { ref } from 'vue'
const centeredActionsOpen = ref(false)
const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return projects
  } else {
    return projects.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.remaining.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'Bénin',
  'Togo',
  'Ghana',
  'Côte Ivoire',
  
]

const valueSingle1 = ref(0)
const optionsSingle1 = [
  'Actif',
  'Non actif',

]

function getAvatarData(user: any): VAvatarProps {
  return {
    picture: user?.picture,
    initials: user?.initials,
    color: user?.color as VAvatarColor,
  }
}
</script>

<template>
  <div>
    <div class="card-grid-toolbar">
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        >
      </VControl>

      <div class="buttons">
        <VField class="h-hidden-mobile">
          <VControl>
            <Multiselect
              v-model="valueSingle1"
              :options="optionsSingle1"
              :max-height="145"
              placeholder="Filtre par compte"
            />
          </VControl>
        </VField>
        <VField class="h-hidden-mobile">
          <VControl>
            <Multiselect
              v-model="valueSingle"
              :options="optionsSingle"
              :max-height="145"
              placeholder="Filtre par pays"
            />
          </VControl>
        </VField>
      </div>
    </div>

    <div class="card-grid card-grid-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="Nous n'avons pas trouver de résultats, vos données n'existent peut être pas encore"
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>

      <!--Card Grid v3-->
      <TransitionGroup
        name="list"
        tag="div"
        class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
      >
        <!--Grid Item-->
        <div
          v-for="item in filteredData"
          :key="item.id"
          class="column is-4"
        >
          <div class="card-grid-item">
            <label
              v-if="item.lockable"
              class="h-toggle"
            >
              <input
                type="checkbox"
                :checked="item.locked"
              >
              <span class="toggler">
                <span class="active">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:lock"
                  />
                </span>
                <span class="inactive">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  />
                </span>
              </span>
            </label>
            <VAvatar
              size="large"
              :picture="item.image"
              :badge="item.badge"
              squared
            />
            <h3 class="dark-inverted">
              {{ item.name }}
            </h3>
            <p>{{ item.remaining }} remaining</p>
            <div class="description">
              <p>{{ item.description }}</p>
            </div>
            <div class="people">
              <VAvatar
                v-for="user in item.team"
                :key="user.id"
                size="small"
                v-bind="getAvatarData(user)"
              />
            </div>
            <VButton
              bold
              @click="centeredActionsOpen = true"
            >
              <span class="icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:eye"
                />
              </span>
              <span>Voir</span>
            </VButton>
          </div>
        </div>
      </TransitionGroup>

      

      <VModal 
        :open="centeredActionsOpen" 
        actions="center" 
        title="Détails du compte"
        @close="centeredActionsOpen = false"
      >
        <template #content>
          <VField>
            <VLabel>Nom</VLabel>
            <VControl>
              <VInput
                v-model="input"
                type="text"
                placeholder="john.doe"
                readonly
              />
            </VControl>
          </VField>
          <VField>
            <VLabel>Client</VLabel>
            <VControl>
              <VInput
                v-model="input"
                type="text"
                placeholder="john.doe"
                readonly
              />
            </VControl>
          </VField>
          <VField>
            <VLabel>Type de Dispute</VLabel>
            <VControl>
              <VInput
                v-model="input"
                type="text"
                placeholder="john.doe"
                readonly
              />
            </VControl>
          </VField>
          <VField>
            <VLabel>Description</VLabel>
            <VControl>
              <VTextarea
                v-model="textarea"
                rows="4"
                placeholder="A longer message..."
                readonly
              />
            </VControl>
          </VField>
          <VField>
            <VLabel>Montant</VLabel>
            <VControl>
              <VInput
                v-model="input"
                type="text"
                placeholder="john.doe"
                readonly
              />
            </VControl>
          </VField>
          <VField>
            <VLabel>Status</VLabel>
            <VControl>
              <VInput
                v-model="input"
                type="text"
                placeholder="john.doe"
                readonly
              />
            </VControl>
          </VField>
        </template>
      </VModal>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.card-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v3 {
  .card-grid-item {
    @include vuero-s-card;

    position: relative;
    text-align: center;
    padding: 30px;

    .h-toggle {
      position: absolute;
      top: 28px;
      inset-inline-end: 10px;
      transform: scale(0.85);
    }

    > .v-avatar {
      display: block;
      margin: 0 auto 10px;
      border-radius: 16px;

      .avatar {
        object-fit: cover;
        border: 1px solid var(--fade-grey-dark-4);
        box-shadow: var(--light-box-shadow);
      }

      .badge {
        bottom: 22px;
        inset-inline-end: -12px;
      }
    }

    > h3 {
      font-size: 1.1rem;
      font-weight: 600;
      font-family: var(--font-alt);
      color: var(--dark-text);
    }

    > p {
      font-size: 0.9rem;
    }

    .description {
      padding: 12px 0;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px;

      .v-avatar {
        margin: 0 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .button {
        width: calc(50% - 4px);
        color: var(--light-text);

        &:hover,
        &:focus {
          border-color: var(--fade-grey-dark-4);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v3 {
    .card-grid-item {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .card-grid-v3 .card-grid-item > h3 {
    font-size: 1rem;
  }
}
</style>
