<script setup lang="ts">
//const companySize = ref('')
//const businessType = ref('')
const productToDemo = ref('')
const date = ref(new Date())
import sleep from '/@src/utils/sleep'
import { useRouter } from 'vue-router'
import { useNotyf } from '/@src/composable/useNotyf'
import ApiService from '/@src/service/api'


const router = useRouter()
const notyf = useNotyf()
const { y } = useWindowScroll()
const isLoading = ref(false)  
const isStuck = computed(() => {
  return y.value > 30
})


const formData = {
    name_link:'',
    click_number: 0,
    amount: 0,
    desc: '',
  };

const onSubmit = async () => {
  if (!isLoading.value) {
    try {
      
      const linkData = {
        name_link: formData.name_link,
        click_number: formData.click_number,
        amount: formData.amount,
        desc: formData.desc
      };

      const response = await ApiService.storeLink(linkData);
      console.log(response.data);
      isLoading.value = true;
      await sleep(2000);
      
      notyf.dismissAll();
      if (response.data.status) {
        notyf.success(`Lien créé avec succès`);
        router.push('/sidebar/layouts/list-view-4');
      } else {
        notyf.error('Erreur lors de la création du lien. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  console.log('Form submitted!', formData);
};

</script>

<template>
  <form
    method="post"
    novalidate
    class="form-layout"
    @submit.prevent="onSubmit"
  >
    <div class="form-outer">
      <div
        :class="[isStuck && 'is-stuck']"
        class="form-header stuck-header"
      >
        <div class="form-header-inner">
          <div class="left">
            <h3>Creer un lien de payement</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-left rem-100"
                to="/sidebar/layouts/list-view-4"
                light
                dark-outlined
              >
                Retour
              </VButton>
              <VButton
                type="submit"
                color="primary"
                raised
              >
                Creer
              </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Information du lien de paiement</h4>
            <p>Entrer les Informations relatives au lien de paiement</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <VLabel>Nom du lien</VLabel>
                <VControl icon="lnir lnir-link">
                  <VInput
                    v-model="formData.name_link"
                    type="text"
                    placeholder=""
                    autocomplete="given_name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>Limite d'utilisation du lien</VLabel>
                <VControl icon="lnil lnil-top-arrow-box">
                  <VInput
                    v-model="formData.click_number"
                    type="number"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>Description</VLabel>
                <VControl>
                  <VTextarea
                    v-model="formData.desc"
                    class="textarea"
                    rows="4"
                    placeholder="Decriver nous ce pourquoi le lien sera utiliser ..."
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
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Information de la page de paiement</h4>
            <p>Entrer les informations relatives à la page de paiement, ou choisissez une page existante </p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-12">
              <VField v-slot="{ id }">
                <VLabel>Choisir une page existante</VLabel>
                <VControl>
                  <Multiselect
                    v-model="productToDemo"
                    :attrs="{ id }"
                    placeholder="Choisir la page"
                    :options="['Tickets Events', 'Boutique en ligne', 'prestation']"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>Nom de l'entreprise</VLabel>
                <VControl icon="feather:briefcase">
                  <VInput
                    type="text"
                    placeholder=""
                    autocomplete="organization"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>Contact de l'entreprise</VLabel>
                <VControl icon="feather:phone">
                  <VInput
                    type="tel"
                    placeholder=""
                    autocomplete="tel"
                    inputmode="tel"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField grouped>
                <VControl>
                  <div class="file has-name">
                    <label class="file-label">
                      <input
                        class="file-input"
                        type="file"
                        name="resume"
                      >
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-cloud-upload-alt" />
                        </span>
                        <span class="file-label"> Choisir un fichier </span>
                      </span>
                      <span class="file-name light-text"> Logo de l'entreprise </span>
                    </label>
                  </div>
                </VControl>
              </VField>
            </div>
            
            <div class="column is-12">
              <VField>
                <VLabel>Email de l'entreprise</VLabel>
                <VControl icon="feather:mail">
                  <VInput
                    type="email"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Information relatives au paiement</h4>
            <p>Paiement</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <VLabel>Montant du paiement</VLabel>
                <VControl icon="lnil lnil-wallet">
                  <VInput
                    v-model="formData.amount"
                    type="number"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <ClientOnly>
                <VDatePicker
                  v-model="date"
                  color="blue"
                  trim-weeks
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VLabel>Date de limute de paiement</VLabel>
                      <VControl icon="feather:calendar">
                        <input
                          class="input v-input"
                          type="text"
                          placeholder="Select a date"
                          :value="inputValue"
                          v-on="inputEvents"
                        >
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </ClientOnly>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>Description du paiement</VLabel>
                <VControl>
                  <VTextarea
                    class="textarea"
                    rows="4"
                    placeholder="Expliquer l'objet du paiement ..."
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="true"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.form-layout {
  max-width: 740px;
  margin: 0 auto;
}
</style>
