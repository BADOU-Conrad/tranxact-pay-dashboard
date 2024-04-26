<script setup lang="ts">
import ApiService from '/@src/service/api'
import { ref, onMounted, computed } from 'vue'

const centeredActionsOpen = ref(false)
const selectedLinkId = ref<number | null>(null)
const links = ref<LinkData[]>([]) 

interface LinkData {
  name_link: string; 
  amount: number
  click_number: number
  desc: string
  click: number
  format_link: string
  id: number 
}

const deleteConfirmationOpen = ref(false);
let linkToDeleteId: string | null = null;


const fetchLinks = async () => {
  try {
    const response = await ApiService.getLink()
    console.log(response)
    links.value = response.data.data as LinkData[]
  } catch (error) {
    console.error('Erreur lors de la récupération des liens :', error)
  }
}

const fetchLinkDetails = async (linkId: number) => {      
  try {
    const response = await ApiService.getLinkDetails(`${linkId}`)
    updateLinkDetails(response.data)
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du lien :', error)
  }
}

const updateLinkDetails = (linkDetails: any) => {
  const selectedLinkIndex = links.value.findIndex(link => link.id === selectedLinkId.value)
  if (selectedLinkIndex !== -1) {
    links.value[selectedLinkIndex] = { ...links.value[selectedLinkIndex], ...linkDetails }
  }
}

const filteredLinkDetails = computed(() => {
  if (selectedLinkId.value !== null) {
    return filteredLinks.value.find(link => link.id === selectedLinkId.value)
  }
  return null
})

onMounted(fetchLinks)

const openLinkDetailsModal = (linkId: number) => {
  centeredActionsOpen.value = true
  selectedLinkId.value = linkId
  fetchLinkDetails(linkId)
}

const filteredLinks = computed(() => {
  return links.value.filter(link => link.id !== null)
})

const deleteLinkConfirmed = async () => {
  try {
    if (linkToDeleteId !== null) {
      await ApiService.deleteLink(linkToDeleteId);
      await fetchLinks();
      deleteConfirmationOpen.value = false;
    }
  } catch (error) {
    console.error('Erreur lors de la suppression du lien :', error);
    deleteConfirmationOpen.value = false;
  }
}


const deleteLink = async (linkId: string) => {
  deleteConfirmationOpen.value = true;
  linkToDeleteId = linkId;
}
</script>

<template>
  <div class="list-flex-toolbar flex-list-v1">
    <VButtons>
      <VButton
        to="/sidebar/layouts/form-layouts-1"
        color="primary"
        icon="fas fa-plus"
        elevated
      >
        Créer un nouveau lien de paiement
      </VButton>
    </VButtons>
  </div>

  <!--List-->
  <div class="list-view list-view-v4"> 
    <div class="list-view-inner">
      <TransitionGroup
        name="list-complete"
        tag="div"
      >
        <!--Item-->
        <div
          v-for="(link, index) in links"
          :key="index"
          class="list-view-item"
        >
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3>{{ link.name_link }}</h3>
            </div>
              
            <div class="meta-left">
              <h3>
                <span>{{ link.desc }}</span>
              </h3>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:archive"
                />
                <span>{{ link.click_number }}</span>
                <i
                  aria-hidden="true"
                  class="fas fa-circle icon-separator"
                />
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:clock"
                />
                <span>{{ link.amount }}</span>
                <i
                  aria-hidden="true"
                  class="fas fa-circle icon-separator"
                />
                  
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <VButton
                  bold
                  @click="openLinkDetailsModal"
                >
                  <span class="icon">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:eye"
                    />
                  </span>
                  <span>View</span>
                </VButton>
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Delete"
                  @click="deleteLink(`${link.id}`)"
                >
                  <span class="icon is-small">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:delete"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <VModal 
      :open="centeredActionsOpen" 
      actions="center" 
      title="Détails du Lien"
      @close="centeredActionsOpen = false"
    >
      <template #content>
        <div v-if="selectedLinkId !== null">
          <div
            v-for="(filteredLink, index) in filteredLinks"
            :key="index"
          >
            <VField>
              <VLabel>Nom du lien</VLabel>
              <VControl>
                <VInput
                  v-model="filteredLink.name_link"
                  type="text"
                  placeholder="john.doe"
                  readonly
                />
              </VControl>
            </VField>
            <VField>
              <VLabel>Format du lien</VLabel>
              <VControl>
                <VInput
                  v-model="filteredLink.format_link"
                  type="text"
                  placeholder="john.doe"
                  readonly
                />
              </VControl>
            </VField>
            <VField>
              <VLabel>Nombre Max de Click</VLabel>
              <VControl>
                <VInput
                  v-model="filteredLink.click_number"
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
                  v-model="filteredLink.desc"
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
                  v-model="filteredLink.amount"
                  type="text"
                  placeholder="john.doe"
                  readonly
                />
              </VControl>
            </VField>
            <VField>
              <VLabel>Montant collecter</VLabel>
              <VControl>
                <VInput
                  v-model="filteredLink.amount"
                  type="text"
                  placeholder="john.doe"
                  readonly
                />
              </VControl>
            </VField>
            <VField>
              <VLabel>Nombre de Click effectuer</VLabel>
              <VControl>
                <VInput
                  v-model="filteredLink.click"
                  type="text"
                  placeholder="john.doe"
                  readonly
                />
              </VControl>
            </VField>
          </div>
        </div>
        <div v-else>
          <p>Aucun lien sélectionné.</p>
        </div>
      </template>
    </VModal>
    <VModal 
      :open="deleteConfirmationOpen" 
      actions="center" 
      title="Confirmer la suppression"
      @close="deleteConfirmationOpen = false"
    >
      <template #content>
        <p>Êtes-vous sûr de vouloir supprimer ce lien ?</p>
        <div class="buttons">
          <VButton
            color="danger"
            @click="deleteLinkConfirmed"
          >
            Oui
          </VButton>
          <VButton
            color="primary"
            @click="deleteConfirmationOpen = false"
          >
            Non
          </VButton>
        </div>
      </template>
    </VModal>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-view-v4 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      .pre-meta {
        margin-inline-end: 16px;
        width: 160px;

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-size: 1rem;
          font-weight: 600;
          max-width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      > img {
        width: 100%;
        max-width: 60px;
        min-width: 60px;
        max-height: 60px;
        min-height: 60px;
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey);
      }

      .meta-left {
        margin-inline-start: 16px;

        h3 {
          display: flex;
          align-items: center;
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--dark-text);
          font-size: 0.75rem;
          line-height: 1;

          .avatar {
            display: block;
            height: 18px;
            width: 18px;
            border-radius: var(--radius-rounded);
            margin-inline-end: 6px;
          }
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            position: relative;
            top: 1px;
            height: 12px;
            width: 12px;
            margin-inline-end: 0.25rem;
          }

          .icon-separator {
            position: relative;
            top: -3px;
            font-size: 5px;
            color: var(--light-text);
            padding: 0 8px;
          }
        }
      }

      .meta-right {
        margin-inline-start: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .network {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 145px;
          margin-inline-end: 30px;

          > span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
            margin-inline-start: 6px;
          }
        }

        .buttons {
          margin-bottom: 0;
          margin-inline-end: 10px;

          .button {
            margin-bottom: 0;

            &:nth-child(2) {
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                background: var(--white);
                border: 1px solid var(--fade-grey-dark-3);
                box-shadow: var(--light-box-shadow);
                color: var(--danger);
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .list-view-v4 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .pre-meta {
          h3 {
            color: var(--dark-dark-text);
          }
        }

        > img {
          border-color: var(--dark-sidebar-light-12);
        }

        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:nth-child(2) {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
                transition:
                  color 0.3s,
                  background-color 0.3s,
                  border-color 0.3s,
                  height 0.3s,
                  width 0.3s;

                &:hover,
                &:focus {
                  border-color: var(--danger);
                  color: var(--danger);
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .list-view-v4 {
    .list-view-item {
      position: relative;
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        .pre-meta {
          margin: 0 0 16px;

          h3 {
            text-align: center;
          }
        }

        > img {
          max-width: 90px;
          min-width: 90px;
          max-height: 90px;
          min-height: 90px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-inline-start: 0;

          h3 {
            justify-content: center;
            margin-bottom: 6px;
          }

          > span {
            margin-bottom: 16px;
          }

          .icon-list {
            flex-wrap: wrap;

            > span {
              flex-direction: column;
              text-align: center;
              margin: 10px;
              width: calc(33.3% - 20px);

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          width: 100%;

          .network {
            justify-content: flex-start;
          }

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 100%;
              margin: 10px 0;

              &:first-child {
                width: 100%;
                max-width: 240px;
                margin: 10px auto;
              }

              &:nth-child(2) {
                position: absolute;
                top: 0;
                inset-inline-end: 10px;
                max-width: 35px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .list-view-v4 {
    .list-view-inner {
      display: flex;
      flex-wrap: wrap;
    }

    .list-view-item {
      position: relative;
      margin: 10px;
      width: calc(50% - 20px);
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        .pre-meta {
          margin: 0 0 16px;

          h3 {
            margin-inline-end: 0;
            text-align: center;
          }
        }

        > img {
          max-width: 90px;
          min-width: 90px;
          max-height: 90px;
          min-height: 90px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-inline-start: 0;

          h3 {
            justify-content: center;
            margin-bottom: 6px;
          }

          > span {
            margin-bottom: 16px;
          }

          .icon-list {
            flex-wrap: wrap;

            > span {
              flex-direction: column;
              text-align: center;
              margin: 10px;
              width: calc(33.3% - 20px);

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          width: 100%;
          justify-content: space-between;

          .network {
            justify-content: flex-start;
            margin: 0;
          }

          .buttons {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 0 0 0 16px;

            .button {
              width: 100%;

              &:first-child {
                width: 100%;
                max-width: 240px;
                margin: 0 auto;
              }

              &:nth-child(2) {
                position: absolute;
                top: 10px;
                inset-inline-end: 10px;
                max-width: 35px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
