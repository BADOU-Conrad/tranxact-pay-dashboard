<template>
  <div class="standard-onboarding">
    <div class="title-wrap">
      <h2>Bienvenue sur TPAY</h2>
      <p>
        Ceci est votre compte test. Vous pouvez choisir une des options ci-dessous pour activer votre 
        compte et commencer à collecter<br> et retirer de l'argent à partir de votre tableau de bord
        ou obtenir vos clés d'API pour intégrer votre application immédiatemment
      </p>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/User_02.png"
            alt=""
          >
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-1-dark.svg"
            alt=""
          >
          <h3>Passer en mode Live</h3>
          <p>
            Faite vérifier votre compte en fournissant les informations supplémentaires et commencer à pleinement utiliser notre solution 
          </p>
          <div class="button-wrap">
            <RouterLink to="/sidebar/layouts/form-layouts-5">
              <VButton
                color="primary"
                outlined
                rounded
                raised
              >
                Commencer
              </VButton>
            </Routerlink>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/Map.png"
            alt=""
          >
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-2-dark.svg"
            alt=""
          >
          <h3>Tour guidé du Dashboard</h3>
          <p>
            Faites un tour guider de notre dashboard afin de découvrir nos fonctionalités et la flexibilité de notre solution
          </p>
          <div class="button-wrap">
            <RouterLink to="/sidebar/layouts/form-layouts-5">
              <VButton
                color="primary"
                outlined
                rounded
                raised
              >
                Commencer
              </VButton>
            </RouterLink>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/Window_Terminal.png"
            alt=""
          >
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-3-dark.svg"
            alt=""
          >
          <h3>Intégrer l'API de Tpay</h3>
          <p>
            Faites l'intégration de notre API dans votre application web et/ou mobile et commencer à utiliser notre solution pour une meilleur expérience financiaire
          </p>
          <div class="button-wrap">
            <RouterLink to="/sidebar/layouts/form-layouts-5">
              <VButton
                color="primary"
                outlined
                rounded
                raised
              >
                Commencer
              </VButton>
            </Routerlink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .standard-onboarding {
    margin-top: 20px;
  }
}

.standard-onboarding {
  padding: 20px 0;

  .title-wrap {
    text-align: center;

    h2 {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 3.4rem;
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

.is-dark {
  .standard-onboarding {
    .title-wrap {
      h2 {
        color: var(--dark-dark-text);
      }
    }

    .onboarding-wrap {
      .onboarding-wrap-inner {
        .onboarding-card {
          @include vuero-card--dark;

          h3 {
            color: var(--dark-dark-text);
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
        max-width: 280px;
        margin: 0 auto;
      }
    }
  }
}
</style>
