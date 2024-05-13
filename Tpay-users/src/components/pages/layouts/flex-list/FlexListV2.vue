<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as listData from '/@src/data/layouts/flex-list-v2'
import { ref } from 'vue'
const smallFormOpen = ref(false)
const smallFormOpen1 = ref(false)

export interface ProjectData {
  id: number
  name: string
  customer: string
  duration: string
  picture: string
  industry: string
  status: string
  team: VAvatarProps[]
}

const projects = listData.projects as ProjectData[]

const props = withDefaults(
  defineProps<{
    activeTab?: 'active' | 'closed'
  }>(),
  {
    activeTab: 'active',
  }
)

const filters = ref('')
const tab = ref(props.activeTab)

const columns = {
  picture: {
    label: 'Url',
    grow: true,
    media: false,
  },
  customer: 'Date de création',
  industry: 'Dernière modification',
  status: 'Statut',
  actions: {
    label: 'Actions',
    align: 'end',
  },
} as const

const filteredData = computed(() => {
  if (!filters.value) {
    return projects
  } else {
    const filterRe = new RegExp(filters.value, 'i')

    return projects.filter((item) => {
      return (
        item.name.match(filterRe) ||
        item.customer.match(filterRe) ||
        item.industry.match(filterRe) ||
        item.status.match(filterRe) ||
        item.duration.match(filterRe)
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-flex-toolbar is-reversed">
      <VButtons>
        <VButton
          color="primary"
          icon="feather:plus"
          elevated
          bold 
          @click="smallFormOpen1 = true"
        >
          Créer un nouveau Webhook
        </vbutton>
      </vbuttons>
    </div>

    <div class="flex-list-wrapper flex-list-v2">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        v-if="tab === 'active' && filteredData.length === 0"
        title="Nous n'avons pas trouver de résultats, vos données n'existent peut être pas encore"
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-4.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div
        v-if="tab === 'active'"
        class="tab-content is-active"
      >
        <VFlexTable
          v-if="filteredData.length"
          :data="filteredData"
          :columns="columns"
          rounded
        >
          <template #body>
            <TransitionGroup
              name="list"
              tag="div"
              class="flex-list-inner"
            >
              <!--Table item-->
              <div
                v-for="item in filteredData"
                :key="item.id"
                class="flex-table-item"
              >
                <VFlexTableCell :column="{ media: true, grow: true }">
                  <i
                    class="lnir lnir-link"
                    aria-hidden="true"
                  />
                  <div>
                    <span class="item-name dark-inverted">{{ item.name }}</span>
                  </div>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.customer }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.industry }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <VTag
                    v-if="item.status === 'Activer'"
                    color="success"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'Désactiver'"
                    color="danger"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                </VFlexTableCell>
               
                <VFlexTableCell :column="{ align: 'end' }">
                  <VButton
                    bold 
                    @click="smallFormOpen = true"
                  >
                    <span class="icon">
                      <i     
                        class="iconify"
                        data-icon="feather:edit" 
                        aria-hidden="true"
                      />
                    </span>
                  </VButton>
                </VFlexTableCell>
              </div>
            </TransitionGroup>
          </template>
        </VFlexTable>

        <VModal
          is="form"
          :open="smallFormOpen1"
          title="Créer un nouveau webhook"
          size="small"
          actions="right"
          @submit.prevent="smallFormOpen1 = false"
          @close="smallFormOpen1 = false"
        >
          <template #content>
            <div class="modal-form">
              <div class="field">
                <label>URL *</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="htpps://"
                  >
                </div>
              </div>
              <div class="field">
                <label>Description</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="Votre description..."
                  />
                </div>
              </div>
              <div class="field">
                <VField v-slot="{ id }">
                  <VLabel>Type d'évenements</VLabel>
                  <VControl>
                    <Multiselect
                      v-model="productToDemo"
                      :attrs="{ id }"
                      placeholder="Choisir une option"
                      :options="['Events Sport', 'Boutique en ligne', 'prestation']"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
          </template>
          <template #action>
            <VButton
              type="submit"
              color="primary"
              raised
            >
              Creer
            </VButton>
          </template>
        </VModal>

        <VModal
          is="form"
          :open="smallFormOpen"
          title="Détail du Webhook"
          size="small"
          actions="right"
          @submit.prevent="smallFormOpen = false"
          @close="smallFormOpen = false"
        >
          <template #content>
            <div class="modal-form">
              <div class="field">
                <label>URL *</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="htpps://"
                  >
                </div>
              </div>
              <div class="field">
                <label>Description</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="Votre description..."
                  />
                </div>
              </div>
              <div class="field">
                <VField v-slot="{ id }">
                  <VLabel>Type d'évenements</VLabel>
                  <VControl>
                    <Multiselect
                      v-model="productToDemo"
                      :attrs="{ id }"
                      placeholder="Choisir une option"
                      :options="['Events Sport', 'Boutique en ligne', 'prestation']"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
          </template>
          <template #action>
            <VButton
              type="submit"
              color="primary"
              raised
            >
              Modifier
            </VButton>
          </template>
        </VModal>
        <!--Table Pagination-->
        <VFlexPagination
          v-if="filteredData.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-inline-end: auto;
    margin-inline-start: auto;
  }
}
</style>
