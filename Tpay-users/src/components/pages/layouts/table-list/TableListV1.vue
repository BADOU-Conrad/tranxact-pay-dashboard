<script setup lang="ts">
//import { userList } from '/@src/data/layouts/datatable-v1'
import { ref, onMounted, computed } from 'vue'
//import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
//const centeredActionsOpen = ref(false)
interface UserData {
  id: number;
  username: string;
  position: string;
  picture: string;
  location: string;
  industry: string;
  status: string;
}
import ApiService from '/@src/service/api'
//import { userList } from '/@src/data/layouts/datatable-v1';
//const page = ref(42)
const filters = ref('')
const disputedata = ref<DisputeData[]>([])
const user = ref<UserData[]>([])


interface DisputeData {
  id: number
  amount: string
  link: string
  date: string
  status: string
}
const fetchDispute = async () => {
  try {
    const response = await ApiService.getDispute()
    disputedata.value = response.data.data as DisputeData[]
    console.log(response)
    
  } catch (error) {
    console.error('Erreur lors de la récupération des disputes', error)
  }
}

onMounted(async () => {
  await fetchDispute()
    user.value = disputedata.value.map((dispute) => ({
      id: dispute.id,
      username: dispute.link,
      position: dispute.link,
      location: dispute.date,
      picture: '/images/avatars/dispute.jpg',
      industry: dispute.amount,
      status: dispute.status
  }))
})


const filteredData = computed(() => {
  if (!filters.value) {
    return user.value
  } else {
    const filterRe = new RegExp(filters.value, 'i')
    return user.value.filter((item) => {
      return (
        item.username.match(filterRe) ||
        item.position.match(filterRe) ||
        item.industry.match(filterRe) ||
        item.status.match(filterRe) ||
        item.location.match(filterRe)
      )
    })
  }
})


</script>

<template>
  <div>
    <div class="datatable-toolbar">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          >
        </VControl>
      </VField>
    </div>
    <div class="datatable-wrapper">
      <div class="table-container">
        <table class="table datatable-table is-fullwidth">
          <thead>
            <th>Lien</th>
            <th>Description</th>
            <th>Montant</th>
            <th>Statut</th>
          </thead>
          <tbody>
            <tr
              v-for="item in filteredData"
              :key="item.id"
            >
              <td>
                <div class="flex-media">
                  <VAvatar
                    :picture="item.picture"
                    alt="Avatar"
                  />
                  <div class="meta">
                    <h3>{{ item.username }}</h3>
                  </div>
                </div>
              </td>
              <td>{{ item.location }}</td>
              <td>{{ item.industry }}</td>
              <td>{{ item.status }}</td>
     
              <!--  <td>
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
                  <span>View</span>
                </VButton>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <VPlaceholderPage
        v-if="filteredData.length === 0"
        title="Nous n'avons pas trouver de résultats, vos données n'existent peut être pas encore"
        subtitle="Cela est peut être du a une erreur, mais nous faisons fasse à une erreur 404 en interne, vérifier si vos données existent réellement. Merci "
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-7.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-7-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>
    </div>

    <!--Table Pagination
    <VFlexPagination
      v-if="filteredData.length > 3"
      v-model:current-page="page"
      :item-per-page="5"
      :total-items="10"
      :max-links-displayed="3"
      no-router
      class="mt-4"
    />
    <VModal 
      :open="centeredActionsOpen" 
      actions="center" 
      title="Détails de la Dispute"
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
    </VModal>-->
  </div>
</template>

<style lang="scss" scoped>
.is-navbar {
  .datatable-toolbar {
    padding-top: 30px;
  }
}

.datatable-toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &.is-reversed {
    flex-direction: row-reverse;
  }

  .field {
    margin-bottom: 0;

    .control {
      .button {
        color: var(--light-text);

        &:hover,
        &:focus {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--primary--color-invert);
        }
      }
    }
  }

  .buttons {
    margin-left: auto;
    margin-bottom: 0;

    .v-button {
      margin-bottom: 0;
    }
  }
}

.is-dark {
  .datatable-toolbar {
    .field {
      .control {
        .button {
          background: var(--dark-sidebar) !important;
          color: var(--light-text);

          &:hover,
          &:focus {
            background: var(--primary) !important;
            border-color: var(--primary) !important;
            color: var(--smoke-white) !important;
          }
        }
      }
    }
  }
}

.datatable-wrapper {
  width: 100%;

  .datatable-container {
    background: var(--white);
    border: none !important;
    overflow-x: auto;

    .table,
    table {
      width: 100%;
    }

    &::-webkit-scrollbar {
      height: 8px !important;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px !important;
      background: rgb(0 0 0 / 20%) !important;
    }
  }
}

.datatable-table {
  border: 1px solid var(--fade-grey);
  border-collapse: collapse;
  border-radius: 0.75rem;

  th {
    padding: 16px 20px;
    font-family: var(--font-alt);
    font-size: 0.8rem;
    color: var(--dark-text);
    text-transform: uppercase;
    border: 1px solid var(--fade-grey);
    font-weight: 600;

    &:last-child {
      text-align: right;
    }
  }

  td {
    font-family: var(--font);
    vertical-align: middle;
    padding: 12px 20px;
    border-bottom: 1px solid var(--fade-grey);

    &:last-child {
      text-align: right;
    }

    &.datatables-empty {
      opacity: 0;
    }
  }

  .light-text {
    color: var(--light-text);
  }

  .flex-media {
    display: flex;
    align-items: center;

    .meta {
      margin-left: 10px;
      line-height: 1.3;

      span {
        display: block;
        font-size: 0.8rem;
        color: var(--light-text);
        font-family: var(--font);

        &:first-child {
          font-family: var(--font-alt);
          color: var(--dark-text);
        }
      }
    }
  }

  .row-action {
    display: flex;
    justify-content: flex-end;
  }

  .checkbox {
    padding: 0;
  }

  .product-photo {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .file-icon {
    width: 46px;
    height: 46px;
    object-fit: contain;
  }

  .drinks-icon {
    display: block;
    max-width: 48px;
    border-radius: var(--radius-rounded);
    border: 1px solid var(--fade-grey);
  }

  .negative-icon,
  .positive-icon {
    svg {
      height: 16px;
      width: 16px;
    }
  }

  .positive-icon {
    .iconify {
      color: var(--success);

      * {
        stroke-width: 4px;
      }
    }
  }

  .negative-icon {
    &.is-danger {
      .iconify {
        color: var(--danger) !important;
      }
    }

    .iconify {
      color: var(--light-text);

      * {
        stroke-width: 4px;
      }
    }
  }

  .price {
    color: var(--dark-text);
    font-weight: 500;

    &::before {
      content: '$';
    }

    &.price-free {
      color: var(--light-text);
    }
  }

  .status {
    display: flex;
    align-items: center;

    &.is-available {
      i {
        color: var(--success);
      }
    }

    &.is-busy {
      i {
        color: var(--danger);
      }
    }

    &.is-offline {
      i {
        color: var(--light-text);
      }
    }

    i {
      margin-right: 8px;
      font-size: 8px;
    }

    span {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--light-text);
    }
  }
}

.is-dark {
  .datatable-wrapper {
    .datatable-container {
      border-color: var(--dark-sidebar-light-12);
      background: var(--dark-sidebar-light-6);
    }
  }

  .datatable-table {
    border-color: var(--dark-sidebar-light-12);

    th,
    td {
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);
    }

    .drinks-icon {
      border-color: var(--dark-sidebar-light-12);
    }
  }
}
</style>
