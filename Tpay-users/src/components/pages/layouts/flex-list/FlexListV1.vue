<script setup lang="ts">

import { useRouter } from 'vue-router'
import ApiService from '/@src/service/api'
import sleep from '/@src/utils/sleep'
import { useNotyf } from '/@src/composable/useNotyf'
import { ref, onMounted, computed } from 'vue'

const smallFormOpen = ref(false)
const router = useRouter()
const notyf = useNotyf()
const isLoading = ref(false)
const customOptions = [
  { value: 'ADMIN', label: 'Administrateur' },
  { value: 'DEV', label: 'Développeur' },
  { value: 'MANAGER', label: 'Financier' },
];

interface UserData {
  id: number;
  username: string;
  position: string;
  picture: string;
  location: string;
  industry: string;
  status: string;
}

interface GuessData {
  id: number
  guestName: string
  email: string
  role: string
  status: string
  created_at: string
}

const page = ref(1)
const filters = ref('')
const guessdata = ref<GuessData[]>([])
const user = ref<UserData[]>([])

const columns = {
  username: {
    label: 'Nom et Rôle',
    grow: true,
    media: true,
  },
  location: 'email',
  industry: 'Date Invitation',
  status: 'Statut',
  actions: {
    label: 'Actions',
    align: 'end',
  },
} as const


const deleteConfirmationOpen = ref(false);
let guessToDeleteId: string | null = null;

const fetchGuess = async () => {
  try {
    const response = await ApiService.getGuessall()
    guessdata.value = response.data.data as GuessData[]
    console.log(response)
    
  } catch (error) {
    console.error('Erreur lors de la récupération des membres:', error)
  }
}

onMounted(async () => {
  await fetchGuess()
    user.value = guessdata.value.map((guess) => ({
      id: guess.id,
      username: guess.guestName,
      position: guess.role,
      location: guess.email,
      picture: '/images/avatars/picture.jpg',
      industry: guess.created_at,
      status: guess.status
  }))
})
const formData = {
      name: '',
      email: '',
      role: ''
    };
const createGuess = async () => {
  try {
  
    const response = await ApiService.storeGuess(formData);
    if (response.data.status) {
      notyf.success('Membre créé avec succès');
      smallFormOpen.value = false;
      await fetchGuess();
    } else {
      notyf.error('Erreur lors de la création du membre. Veuillez réessayer.');
    }
  } catch (error) {
    console.error('Erreur lors de la création du membre :', error);
  }
}

const onSubmit = async () => {
  if (!isLoading.value) {
    await createGuess();
  }
}

const deleteBeneficiaryConfirmed = async () => {
  try {
    if (guessToDeleteId !== null) {
      await ApiService.deleteBeneficiary(guessToDeleteId);
      
      deleteConfirmationOpen.value = false;
      smallFormOpen.value = false; 
      await fetchGuess();
    }
  } catch (error) {
    console.error('Erreur lors de la suppression du lien :', error);
    deleteConfirmationOpen.value = false;
  }
}

const deleteLink = async (beneficiaryId: string) => {
  deleteConfirmationOpen.value = true;
  guessToDeleteId = beneficiaryId;
  await fetchGuess();
}


const filteredData = computed(() => {
  if (!filters.value) {
    return user.value;
  } else {
    const filterRe = new RegExp(filters.value, 'i');
    return user.value.filter((item) => {
      return (
        item.username.match(filterRe) ||
        item.position.match(filterRe) ||
        item.industry.match(filterRe) ||
        item.status.match(filterRe) ||
        item.location.match(filterRe)
      );
    });
  }
});
</script>

<template>
  <div>
    <div class="list-flex-toolbar flex-list-v1">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          >
        </VControl>
      </VField>

      <VButtons>
        <VButton
          bold 
          color="primary"
          icon="fas fa-plus"
          elevated
          @click="smallFormOpen = true"
        >
          Inviter un nouveau membre
        </VButton>
      </VButtons>
    </div>

    <div class="page-content-inner">
      <div class="flex-list-wrapper flex-list-v1">
        <!--List Empty Search Placeholder -->
        <VPlaceholderPage
          v-if="!filteredData.length"
          title="We couldn't find any matching results."
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

        <VFlexTable
          v-if="filteredData.length"
          :data="filteredData"
          :columns="columns"
          compact
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
                <VFlexTableCell
                  :column="{ media: true, grow: true }"
                  data-th="Label"
                >
                  <VAvatar
                    :picture="item.picture"
                    :badge="item.badge"
                    :color="item.color"
                    :initials="item.initials"
                    size="medium"
                  />
                  <div>
                    <span class="item-name dark-inverted">{{ item.username }}</span>
                    <span class="item-meta">
                      <span>{{ item.position }}</span>
                    </span>
                  </div>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.location }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.industry }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <VTag
                    v-if="item.status === 'ACCEPTED'"
                    color="success"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'PENDING'"
                    color="info"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'REJECTED'"
                    color="danger"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'Offline'"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                </VFlexTableCell>
                
                <VFlexTableCell>
                  <button
                    class="button is-light is-circle hint--bubble hint--warning hint--top"
                    data-hint="Delete"
                    @click="deleteLink(`${item.id}`)"
                  >
                    <span class="icon is-small">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:delete"
                      />
                    </span>
                  </button>
                </VFlexTableCell>
              </div>
            </TransitionGroup>
          </template>
        </VFlexTable>

        <!--Table Pagination-->
        <VFlexPagination
          v-if="filteredData.length > 5"
          v-model:current-page="page"
          :item-per-page="5"
          :total-items="10"
          :max-links-displayed="5"
          no-router
        />
        <VModal
          is="form"
          :open="smallFormOpen"
          title="Invitez un nouveau membre"
          size="large"
          actions="right"
          @submit.prevent="onSubmit"
          @close="smallFormOpen = false"
        >
          <template #content>
            <div class="modal-form">
              <div class="field">
                <label>Nom *</label>
                <div class="control">
                  <input
                    v-model="formData.name"
                    type="text"
                    class="input"
                    placeholder="Le Nom de votre Inviter"
                  >
                </div>
              </div>
              <div class="field">
                <label>Email *</label>
                <div class="control">
                  <input
                    v-model="formData.email"
                    type="text"
                    class="input"
                    placeholder="Email Address"
                  >
                </div>
              </div>
              <div class="field">
                <Multiselect
                  v-model="formData.role"
                  :options="customOptions"
                  placeholder="Rôle"
                  :max-height="145"
                />
              </div>
              <VCard
                radius="small"
                color="primary"
              >    
                <div class="column is-11 is-offset-1">
                  <div class="columns">
                    <div class="column">
                      <h3 class="title is-6 mb-2">
                        Administrateur
                      </h3>
                      <p>
                        L'administrateur à tout les droits sur la plateforme autant que vous
                      </p>
                    </div>
                    <div
                      class="is-divider-vertical"
                      data-content="OU"
                    />
                    <div class="column">
                      <h3 class="title is-6 mb-2">
                        Développeur
                      </h3>
                      <p>
                        Le développeur n'a accès qu'aux options développeur sur la plateforme
                      </p>
                    </div>
                    <div
                      class="is-divider-vertical"
                      data-content="OU"
                    />
                    <div class="column">
                      <h3 class="title is-6 mb-2">
                        Financier
                      </h3>
                      <p>
                        Le Financier n'a accès qu'au option concernat la finance sur la plateforme
                      </p>
                    </div>
                  </div>
                </div>
              </vcard>
            </div>
          </template>
          <template #action>
            <VButton
              type="submit"
              color="primary"
              raised
            >
              Inviter
            </VButton>
          </template>
        </VModal>
        <VModal 
          :open="deleteConfirmationOpen" 
          actions="center" 
          title="Confirmer la suppression"
          @close="deleteConfirmationOpen = false"
        >
          <template #content>
            <p>Êtes-vous sûr de vouloir supprimer ce Bénéficiaire ?</p>
            <div class="buttons">
              <VButton
                color="danger"
                @click="deleteBeneficiaryConfirmed"
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
