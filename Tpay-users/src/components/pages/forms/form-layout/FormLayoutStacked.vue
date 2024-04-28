<script setup lang="ts">
//import { popovers } from '/@src/data/users/userPopovers'
//const smallFormOpen = ref(false)
const smallFormOpen2 = ref(false)
//const selectedColor = ref('')
//const calendarTarget = ref('')
//const notificationMedium = ref('')
//const notificationTarget = ref('')
//const date = ref({
//  start: new Date(),
 // end: new Date(),
//})
import { useRouter } from 'vue-router'
import ApiService from '/@src/service/api'
import { useNotyf } from '/@src/composable/useNotyf'
import { ref } from 'vue'

const router = useRouter()
const notyf = useNotyf()

const isLoading = ref(false)
const onAddImage = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error);
    return;
  }
  const file = fileInfo.file as File;
  console.log(file);
  if (file) {
    formData.identity_pic = file.name;
    console.log(file);
  }
}

const onRemoveImage = () => {
  formData.identity_pic = null;
}

const formData = {
  phone_number: '',
  identity_pic: null as File | null,
  doc_path_all: null as File | null,
  address: '',
  num_cn: '',
  num_ifu: '',
  num_rccm: ''
};
const handlePDFChange = (event: any) => {
  console.log(event);
  const file = event.target.files[0]; 
  formData.doc_path_all = file.name; 
}
const completeProfile = async () => {
  try {
  
    const response = await ApiService.userVerify(formData);
    if (response.data.status) {
      notyf.success('Demande envoyer avec succès');

    } else {
      notyf.error('Erreur lors de la demande. Veuillez réessayer.');
    }
  } catch (error) {
    console.error('Erreur lors de la demande', error);
  }
}

const onSubmit = async () => {
  if (!isLoading.value) {
    await completeProfile();
  }
}


//const selectedOption = ref(null); 
const options1 = ref([ 
  { value: 'Etablissement', label: 'Etablissement et entreprise Individuel ' },
  { value: 'ONG', label: 'ONG' },
  { value: 'Entreprise', label: 'Entreprise publique et Structure étatique' },
  { value: 'Consultant', label: 'Consultant Individuel' },
]);


const selectedOption1 = ref(null); 

const options2 = ref([ 
  { value: '1', label: 'CIP' },
  { value: '2', label: 'Passe Port' },
  { value: '3', label: 'Carte d,identiter ' },
]);


const selectedOption2 = ref(null); 

//const options = ref([
  //{ value: 'ADMIN', label: 'Administrateur' },
 // { value: 'DEV', label: 'Développeur' },
 // { value: 'MANAGER', label: 'Financier' },
//]);
</script>

<template>
  <div class="standard-onboarding">
    <div class="title-wrap">
      <h2>Validation de compte</h2>
    </div>
    <!--<VBlock
      title="Informations Personelles"
      subtitle="Les informations personnelles du gérant de votre entreprise"
    >
      <template #icon>
        <VIconBox
          color="primary"
          rounded
        >
          <i
            class="iconify"
            data-icon="feather:check" 
          />
        </VIconBox>
      </template>
      <template #action>
        <VButton
          color="primary"
          elevated
          @click="smallFormOpen = true"
        >
          Commencer
        </VButton>
      </template>
    </VBlock>
    VBlock
      title="Team Tasks"
      subtitle="View all tasks"
    >
      <template #icon>
        <VIconBox
          color="primary"
          rounded
        >
          <i
            class="iconify"
            data-icon="feather:check" 
          />
        </VIconBox>
      </template>
      <template #action>
        <VButton
          color="primary"
          elevated
          @click="smallFormOpen1 = true"
        >
          Commencer
        </VButton>
      </template>
    </!--VBlock -->
    <VBlock
      title="Informations su votre entreprise "
      subtitle="Raison sociale, secteur d'activité et Documents administratif"
    >
      <template #icon>
        <VIconBox
          color="primary"
          rounded
        >
          <i
            class="iconify"
            data-icon="feather:check" 
          />
        </VIconBox>
      </template>
      <template #action>
        <VButton
          color="primary"
          elevated
          @click="smallFormOpen2 = true"
        >
          Commencer
        </VButton>
      </template>
    </VBlock>
    <VButton
      color="primary"
      elevated
      @click="onSubmit"
    >
      Envoyer la demande de vérification
    </VButton>
    <!--  <VModal
      is="form"
      :open="smallFormOpen"
      title="Informaations Personnelles"
      size="standart"
      actions="right"
      @submit.prevent="smallFormOpen = false"
      @close="smallFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <p>Modifier ou Remplir les champs manquants</p>
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="field">
                <label>Nom </label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Votre nom"
                  >
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Prénoms</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Vos prénoms"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="field">
                <label>Email</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Votre addresse mail"
                  >
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Téléphone</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Votre numéro de téléphone"
                  >
                </div>
              </div>
            </div>
          </div>
      
          <div class="field">
            <Multiselect
              v-model="selectedOption" 
              :options="options"
              placeholder="Rôle"
              :max-height="145"
            />
          </div>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
          Valider
        </VButton>
      </template>
    </VModal>
   VModal
      is="form"
      :open="smallFormOpen1"
      title="Information sur votre entreprise"
      size="standart"
      actions="right"
      @submit.prevent="smallFormOpen1 = false"
      @close="smallFormOpen1 = false"
    >
      <template #content>
        <div class="form-section-inner">
          <div class="options"> 
            <VField class="option">
              <VInput
                raw
                type="checkbox"
              />
              <div class="indicator">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check"
                />
              </div>
              <div class="option-inner">
                <h4>Etablissement et entreprise Individuel</h4>
                <p>Dedicated agent</p>
              </div>
            </VField>

            <VField class="option">
              <VInput
                raw
                type="checkbox"
              />
              <div class="indicator">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check"
                />
              </div>
              <div class="option-inner">
                <h4>ONG</h4>
                <p>Level 1-3 goods</p>
              </div>
            </VField>

            <VField class="option">
              <VInput
                raw
                type="checkbox"
              />
              <div class="indicator">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check"
                />
              </div>
              <div class="option-inner">
                <h4>Entreprise publique et Structure étatique</h4>
                <p>License extension</p>
              </div>
            </VField>

           
            <VField class="option">
              <VInput
                raw
                type="checkbox"
              />
              <div class="indicator">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check"
                />
              </div>
              <div class="option-inner">
                <h4>Consultant Individuel</h4>
                <p>Setup live metrics</p>
              </div>
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
          Valider
        </VButton>
      </template>
    </!--VModal -->
    <VModal
      is="form"
      :open="smallFormOpen2"
      title="Information sur votre entreprise"
      size="standart"
      actions="right"
      @submit.prevent="smallFormOpen2 = false"
      @close="smallFormOpen2 = false"
    >
      <template #content>
        <div class="modal-form">
          <p>Remplir les champs manquants</p>
          <div class="field">
            <label>Type d'entreprise </label>
            <Multiselect
              v-model="selectedOption1" 
              :options="options1"
              placeholder="Etablissement et entreprise Individuel"
              :max-height="145"
            />
          </div>
          <div v-if="selectedOption1 === 'Etablissement' || selectedOption1 === 'Consultant'">
            <div class="columns is-multiline">
              <div class="column is-6">
                <div class="field">
                  <label>Numéro IFU</label>
                  <div class="control">
                    <input
                      v-model="formData.num_ifu"
                      type="text"
                      class="input"
                      placeholder="Numéro IFU"
                    >
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <div class="control">
                    <p>
                      Fusionner et compresser les fichiers suivant ; Certificat IFU et RCCM et Pièce d'Identiter <a href="https://www.example.com">Cliquez ici</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedOption1 === 'Etablissement'">
            <div class="columns is-multiline">
              <div class="column is-6">
                <div class="field">
                  <label>Numéro RCCM </label>
                  <div class="control">
                    <input
                      v-model="formData.num_rccm"
                      type="text"
                      class="input"
                      placeholder="Numéro RCCM"
                    >
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <VField grouped>
                  <VControl>
                    <div class="field">
                      <label>Ajouter le fichier fussionner</label>
                      <div class="file has-name">
                        <label class="file-label">
                          <input
                            
                            class="file-input"
                            type="file"
                            name="resume"
                            @change="handlePDFChange"
                          >
                          <span class="file-cta">
                            <span class="file-icon">
                              <i class="fas fa-cloud-upload-alt" />
                            </span>

                          </span>
                          <span class="file-name light-text"> Ajouter le fichier </span>
                        </label>
                      </div>
                    </div>
                  </VControl>
                </VField>
              </div>
            </div>  
          </div>
          
          <div v-if="selectedOption1 === 'ONG'">
            <div class="field">
              <div class="field">
                <label>Fusionner et compresser le procès verbal de l'AG constitutif et le récipissé de déclaration de l'association</label>
                <div class="file has-name">
                  <a href="https://www.example.com">Cliquez ici</a>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedOption1 === 'ONG'">
            <div class="field">
              <div class="field">
                <label>Ajouter le document fusionner </label>
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

                    </span>
                    <span class="file-name light-text"> Ajouter le fichier </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedOption1 === 'Entreprise'">
            <div class="field">
              <div class="field">
                <label>Fusionner et compresser le décret de création de la structure et le décret nominant le directeur actuel </label>
                <div class="file has-name">
                  <a href="https://www.example.com">Cliquez ici</a>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedOption1 === 'Consultant'">
            <div class="field">
              <div class="field">
                <label>Date de Naissance </label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Date de Naissance"
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedOption1 === 'Consultant'">
            <div class="field">
              <div class="field">
                <label>Attestation de résidence</label>
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

                    </span>
                    <span class="file-name light-text"> Télécharger le document </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedOption1 === 'Entreprise'">
            <div class="field">
              <div class="field">
                <label>Ajouter le document Fusionner </label>
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

                    </span>
                    <span class="file-name light-text"> Télécharger le document </span>
                  </label>
                </div>
              </div>
            </div>
          </div> 
          <div class="field">
            <label>Pièce d'identiter du promoteur</label>
            <Multiselect 
              v-model="selectedOption2" 
              :options="options2"
              placeholder="Pièce Identiter"
              :max-height="145"
            />
          </div>
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="field">
                <label>Numéro de la pièce</label>
                <div class="control">
                  <input
                    v-model="formData.num_cn"
                    type="text"
                    class="input"
                    placeholder="Numéro de la pièce"
                  >
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Adresse</label>
                <div class="control">
                  <input
                    v-model="formData.address"
                    type="text"
                    class="input"
                    placeholder="Votre Adresse"
                  >
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Numéro de téléphone</label>
                <div class="control">
                  <input
                    v-model="formData.phone_number"
                    type="text"
                    class="input"
                    placeholder="Votre Numéro de téléphone"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="field">
              <label>Photo du President</label>
              <div class="control">
                <VControl>
                  <VFilePond
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
                    @addfile="onAddImage"
                    @removefile="onRemoveImage"
                  />
                </VControl>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
          Valider
        </VButton>
      </template>
    </VModal>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.options {
        display: flex;
        flex-wrap: wrap;
        margin-inline-start: -0.5rem;
        margin-inline-end: -0.5rem;

        .option {
          position: relative;
          width: calc(103.3% - 4rem);
          margin: 0.5rem;

          &:focus-within {
            border-radius: 4px;
            outline-offset: var(--accessibility-focus-outline-offset);
            outline-width: var(--accessibility-focus-outline-width);
            outline-style: var(--accessibility-focus-outline-style);
            outline-color: var(--accessibility-focus-outline-color);
          }

          input {
            position: absolute;
            top: 0;
            inset-inline-start: 0;
            height: 100%;
            width: 100%;
            z-index: 1;
            opacity: 0;
            cursor: pointer;

            &:checked {
              ~ .indicator {
                transform: scale(1);
              }

              ~ .option-inner {
                border-color: var(--primary);
                box-shadow: var(--dark-box-shadow);

                i {
                  color: var(--primary);
                }
              }
            }
          }

          .indicator {
            position: absolute;
            top: 1rem;
            inset-inline-end: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            width: 20px;
            color: var(--dark);
            background: var(--primary);
            border-radius: 50%;
            transform: scale(0);
            transition: transform 0.3s;

            svg {
              height: 14px;
              width: 14px;
              stroke-width: 3px;
            }
          }

          .option-inner {
            padding: 1.5rem;
            background: var(--dark);
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            transition:
              border 0.3s,
              box-shadow 0.3s;

            h4 {
              color: var(--dark-text);
              font-weight: 600;
              font-family: var(--font-alt);
            }

            p {
              font-size: 0.9rem;
            }

            i {
              font-size: 2.25rem;
              color: var(--dark-text);
              margin-bottom: 0.25rem;
            }
          }
        }
      }

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  &.is-stacked {
    .form-outer {
      .form-body {
        padding: 0;

        .form-section {
          padding: 40px;
          border-bottom: 1px solid var(--fade-grey-dark-4);

          &.is-grey {
            background: #fafafa;
          }

          .form-section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--fade-grey-dark-4);
            padding-bottom: 20px;
            margin-bottom: 30px;

            .left {
              h3 {
                font-family: var(--font-alt);
                font-weight: 600;
                color: var(--dark-text);
              }
            }
          }

          .form-section-inner {
            &.is-horizontal {
              max-width: 540px;
            }

            .field {
              &.is-horizontal {
                .field-label {
                  padding-top: 0.75em;
                }
              }
            }
          }

          .columns {
            .column {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
          }

          .field {
            .control {
              .checkbox {
                padding: 0;
                padding-inline-end: 10px;
                font-size: 0.9rem;
              }
            }
          }

          .participants {
            display: flex;
            padding-bottom: 10px;

            .v-avatar {
              margin-inline-end: 8px;
            }

            .add-participant {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              width: 40px;
              min-width: 40px;
              border-radius: var(--radius-rounded);
              border: 1.6px dashed var(--light-text);
              color: var(--light-text);
              padding: 0;
              background: none;
              margin-inline-start: 4px;
              cursor: pointer;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                border: 1.6px solid var(--primary);
                color: var(--primary);
              }

              &:focus-visible {
                outline-offset: var(--accessibility-focus-outline-offset);
                outline-width: var(--accessibility-focus-outline-width);
                outline-style: var(--accessibility-focus-outline-style);
                outline-color: var(--accessibility-focus-outline-color);
              }

              svg {
                height: 16px;
                width: 16px;
              }
            }
          }

          .color-codes {
            display: flex;
            align-items: center;
            height: 38px;

            .color-code {
              height: 14px;
              width: 14px;
              border-radius: var(--radius-rounded);
              background: var(--white);
              margin-inline-end: 10px;
              border: 3px solid var(--light-text);
              cursor: pointer;
              opacity: 0.6;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                opacity: 1;
              }

              &:focus-visible {
                outline-offset: var(--accessibility-focus-outline-offset);
                outline-width: var(--accessibility-focus-outline-width);
                outline-style: var(--accessibility-focus-outline-style);
                outline-color: var(--accessibility-focus-outline-color);
              }

              &.is-primary {
                border-color: var(--primary);

                &.is-active {
                  background: var(--primary);
                }
              }

              &.is-secondary {
                border-color: var(--secondary);

                &.is-active {
                  background: var(--secondary);
                }
              }

              &.is-info {
                border-color: var(--info);

                &.is-active {
                  background: var(--info);
                }
              }

              &.is-success {
                border-color: var(--success);

                &.is-active {
                  background: var(--success);
                }
              }

              &.is-purple {
                border-color: var(--purple);

                &.is-active {
                  background: var(--purple);
                }
              }
            }
          }

          .add-link {
            display: inline-block;
            padding: 4px 0;
            font-family: var(--font);
            font-weight: 500;
            font-size: 0.9rem;
            color: var(--primary);
          }
        }
      }
    }
  }
}

.is-dark {
  .form-layout {
    &.is-stacked {
      .form-outer {
        .form-body {
          .form-section {
            border-color: var(--dark-sidebar-light-12);

            &.is-grey {
              background: var(--dark-sidebar-light-4);
            }

            .form-section-header {
              border-color: var(--dark-sidebar-light-12);

              .left {
                h3 {
                  color: var(--dark-dark-text);
                }
              }
            }

            .form-section-inner {
              .add-link {
                color: var(--primary);
              }

              .color-codes {
                .color-code {
                  background: var(--dark-sidebar-light-6);

                  &.is-primary {
                    border-color: var(--primary);
                  }
                }
              }

              .participants {
                .add-participant {
                  &:hover {
                    border: 1.6px solid var(--primary);
                    color: var(--primary);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.standard-onboarding {
  padding: 20px 0;

  .title-wrap {
    text-align: center;

    h2 {
      font-family: var(--font-alt);
      font-weight: 300;
      font-size: 2.4rem;
      color: var(--dark-text);
    }

    p {
      font-family: var(--font);
      font-size: 1.05rem;
    }
  }

  .onboarding-wrap {
    padding: 30px 0;

    .onboarding-wrap-inner {
      display: flex;
      max-width: 880px;
      margin: 0 auto;

      .onboarding-card {
        @include vuero-r-card;

        margin: 8px;
        width: calc(33.3% - 16px);
        text-align: center;

        > img {
          display: block;
          width: 100%;
          max-width: 140px;
          margin: 0 auto;
        }

        h3 {
          font-family: var(--font-alt);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark-text);
          margin-bottom: 12px;
        }

        p {
          font-family: var(--font);
          font-size: 0.95rem;
        }

        .button-wrap {
          text-align: center;
          padding: 30px 0 20px;

          .button {
            min-width: 140px;
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .onboarding-wrapper {
    .standard-onboarding {
      padding: 20px 0;
    }

    .title-wrap {
      h2 {
        max-width: 280px;
        margin: 0 auto;
      }
    }

    .onboarding-wrap {
      .onboarding-wrap-inner {
        flex-wrap: wrap;

        .onboarding-card {
          min-width: calc(100% - 16px) !important;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .standard-onboarding {
    padding: 20px 0;

    .title-wrap {
      h2 {
        max-width: 180px;
        margin: 0 auto;
      }
    }
  }
}
</style>
