<script setup lang="ts">
import ApiService from '/@src/service/api'

interface OfferData {
  id: string
  logo: string
  title: string
  location: string
  duration: string
  requirements: string
}

const page = ref(1)
const filters = ref('')
const offersList = ref<OfferData[]>([])

async function fetchData() {
  try {
    const response = await ApiService.getCollect()
    console.log('stories', response)
    const selectedData = response.data.data.map((item: any) => ({
      id: selectedData.id,
      logo: selectedData.id,
      title: selectedData.sender_first_name,
      location: selectedData.sender_last_name ,
      duration: selectedData.sender_number,
      requirements: item.requirements,
    }))
    offersList.value = selectedData
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
})

const filteredData = computed(() => {
  if (!filters.value) {
    return offersList.value
  } else {
    const filterRe = new RegExp(filters.value, 'i')
    return offersList.value.filter((item) => {
      return (
        item.title.match(filterRe) ||
        item.duration.match(filterRe) ||
        item.location.match(filterRe) ||
        item.requirements.match(filterRe)
      )
    })
  }
})
</script>

<!-- Votre template reste inchangé -->


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

      <VButtons>
        <VButton
          color="primary"
          icon="fas fa-arrow-alt-circle-down"
        >
          Télécharger
        </VButton>
      </VButtons>
    </div>
    <div class="datatable-wrapper">
      <div class="table-container">
        <table class="table datatable-table is-fullwidth">
          <thead>
            <th>Id</th>
            <th>Offer</th>
            <th>Location</th>
            <th>Duration</th>
            <th>Requirements</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr
              v-for="offer in filteredData"
              :key="offer.id"
            >
              <td>{{ offer.id }}</td>
              <td>
                <div class="flex-media">
                  <VAvatar
                    :picture="offer.logo"
                    alt="Avatar"
                  />
                  <div class="meta">
                    <h3>{{ offer.title }}</h3>
                  </div>
                </div>
              </td>
              <td>{{ offer.location }}</td>
              <td>{{ offer.duration }}</td>
              <td>{{ offer.requirements }}</td>
              <td>
                <VAction>Apply Now</VAction>
              </td>
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

    <!--Table Pagination-->
    <VFlexPagination
      v-if="filteredData.length > 5"
      v-model:current-page="page"
      :item-per-page="10"
      :total-items="873"
      :max-links-displayed="7"
      no-router
      class="mt-4"
    />
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
