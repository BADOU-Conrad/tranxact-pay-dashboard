<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import { useRouter } from 'vue-router'
import sleep from '/@src/utils/sleep'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import ApiService from '/@src/service/api'
import { ref, onMounted } from 'vue'

const router = useRouter()
const isUploading = ref(false)
const isLoading = ref(false)
//const skills = ref(['software', 'saas', 'engineering'])
//const skillsOptions = [
 // { value: 'software', label: 'Software' },
  //{ value: 'saas', label: 'SaaS' },
  //{ value: 'engineering', label: 'Engineering' },
//]

const countries = ref([]);
const accountTypes = ref([]);
interface AccountType {
  id: string;
  name: string;
  // ... autres propriétés
}
interface Country {
  id: string;
  name: string;
}
const fetchCountries = async () => {
  try {
    const response = await ApiService.getCountries();

    countries.value = response.data.data.map((country: Country) => ({
      label: country.name,
      value: country.id,
    }));
    console.log('response from countries', countries)
  } catch (error) {
    console.error('Erreur lors de la récupération des pays :', error);
  }
};

const fetchAccountTypes = async () => {
  try {
    const response = await ApiService.getAccountTypes();

    accountTypes.value = response.data.data.map((account_type: AccountType) => ({
      label: account_type.name,
      value: account_type.id,
    }));
    console.log('response from accountTypes', accountTypes)
  } catch (error) {
    console.error('Erreur lors de la récupération des types de compte :', error);
  }
};

const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

interface UserDataUpdate {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string,
  accountType: string,
  desc: string;
}

const userData = ref<UserDataUpdate>({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  country: '',
  accountType: '',
  desc: ''
})

const fetchUserDetails = async () => {
  try {
    const response = await ApiService.getUserdetails() 
    console.log('userData', response)
    const data = response.data.data
    userData.value.first_name = data.first_name
    userData.value.last_name = data.last_name
    userData.value.email = data.email
    userData.value.phone = data.phone
    userData.value.country = data.country.name
    userData.value.accountType = data.account_type.name
    userData.value.desc = data.desc

  } catch (error) {
    console.error('Error fetching user details:', error)
  }
}

onMounted(() => {
  fetchUserDetails() 
  fetchCountries();
  fetchAccountTypes();
})

const updateUser = async () => {
  try {
    isLoading.value = true 
    const response = await ApiService.updateUserDetails(userData.value)   
    if (response.data.status) {
        notyf.success(`Donnée de l'utilisateur changer avec succès`);
        router.push('/sidebar/layouts/profile-edit');
      } else {
        notyf.error('Erreur lors de la modification des données du user . Veuillez réessayer.');
      }
  } catch (error) {
    console.error('Error updating user details:', error)
    notyf.error('Failed to update user details. Please try again later.') 
  } finally {
    isLoading.value = false 
  }
}

const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
const onSave = async () => {
  await sleep()
  await updateUser() 
}

</script>

<template>
  <div class="account-box is-form is-footerless">
    <div
      class="form-head stuck-header"
      :class="[isScrolling && 'is-stuck']"
    >
      <div class="form-head-inner">
        <div class="left">
          <h3>Information Générale</h3>
          <p>Consulter et modifier vos données personnels</p>
        </div>
        <div class="right">
          <div class="buttons">
            <VButton
              to="/sidebar/layouts/profile-view"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
              Retour
            </VButton>
            <VButton
              color="primary"
              raised
              :loading="isLoading"
              tabindex="0"
              @keydown.space.prevent="onSave"
              @click="onSave"
            >
              Modifier
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Photo de Profile</h4>
          <p>Votre photo de profile</p>
        </div>

        <VAvatar
          size="xl"
          class="profile-v-avatar"
        >
          <template #avatar>
            <img
              v-if="!isUploading"
              class="avatar"
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="onceImageErrored(150)"
            >
            <VFilePond
              v-else
              class="profile-filepond"
              name="profile_filepond"
              :chunk-retry-delays="[500, 1000, 3000]"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
              :image-preview-height="140"
              :image-resize-target-width="140"
              :image-resize-target-height="140"
              image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle"
              style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom"
              style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom"
              @addfile="onAddFile"
              @removefile="onRemoveFile"
            />
            <VIconButton
              v-if="!isUploading"
              icon="feather:edit-2"
              class="edit-button is-edit"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = true"
              @click="isUploading = true"
            />
            <VIconButton
              v-else
              icon="feather:arrow-left"
              class="edit-button is-back"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = false"
              @click="isUploading = false"
            />
          </template>
        </VAvatar>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Personal Info</h4>
          <p>Others diserve to know you more</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput
                  v-model="userData.first_name"
                  type="text"
                  placeholder="First Name"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput
                  v-model="userData.last_name"
                  type="text"
                  placeholder="Last Name"
                  autocomplete="family-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:mail">
                <VInput
                  v-model="userData.email"
                  type="text"
                  placeholder="Email"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:phone">
                <VInput
                  v-model="userData.phone"
                  type="text"
                  placeholder="phone number"
                  autocomplete="family-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <Multiselect
                  v-model="userData.accountType"
                  :options="accountTypes"
                  track-by="value"
                  label="label"
                  placeholder="Type de compte"  
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <Multiselect
                  v-model="userData.country"
                  :options="countries"
                  track-by="value"
                  label="label"
                  placeholder="Pays de résidence" 
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VTextarea
                  v-model="userData.desc"
                  rows="4"
                  placeholder="About / Bio"
                  autocomplete="off"
                  autocapitalize="off"
                  spellcheck="true"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Information sur votre entreprise</h4>
          <p>This can help you to win some opportunities</p>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="experience"
                  :attrs="{ id }"
                  placeholder="Experience"
                  :options="['0-2 years', '2-5 years', '5-10 years', '10+ years']"
                />
              </VControl>
            </VField>
          </div>
        
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="firstJob"
                  :attrs="{ id }"
                  placeholder="Is this your first job?"
                  :options="['Yes', 'No']"
                />
              </VControl>
            </VField>
          </div>
          
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="flexibility"
                  :attrs="{ id }"
                  placeholder="Are you flexible?"
                  :options="['Yes', 'No']"
                />
              </VControl>
            </VField>
          </div>
         
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="remote"
                  :attrs="{ id }"
                  placeholder="Do you work remotely?"
                  :options="['Yes', 'No']"
                />
              </VControl>
            </VField>
          </div>
       
          <div class="column is-12">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="skills"
                  :attrs="{ id }"
                  mode="tags"
                  :searchable="true"
                  :create-tag="true"
                  :options="skillsOptions"
                  placeholder="Add tags"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>  
  

      <!--Fieldse
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Social Profiles</h4>
          <p>This can help others finding you on social media</p>
        </div>
        <div class="columns is-multiline">
          <!-Field->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-facebook-f">
                <VInput
                  type="text"
                  placeholder="Facebook URL"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!-Field->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-twitter">
                <VInput
                  type="text"
                  placeholder="Twitter URL"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!-Field->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-dribbble">
                <VInput
                  type="text"
                  placeholder="Dribbble URL"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          !--Field->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-instagram">
                <VInput
                  type="text"
                  placeholder="Instagram URL"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!-Field->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-github">
                <VInput
                  type="text"
                  placeholder="Github URL"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!-Field->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-gitlab">
                <VInput
                  type="text"
                  placeholder="Gitlab URL"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>
