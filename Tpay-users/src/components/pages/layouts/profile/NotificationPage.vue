<script>
export default {
  data() {
    return {
      currentDate: this.formatDate(new Date()),
      datecreate: this.formatDate(new Date(localStorage.getItem('datecreate')))
    };
  },
  methods: {
    formatDate(date) {
      const options = { day: '2-digit', month: 'long', year: 'numeric' };
      return new Date(date).toLocaleDateString('fr-FR', options); 
    },
    redirectToLive() {
      window.location.href = '/sidebar/layouts/form-layouts-4';
    }
  }
 
};

</script>

<template>
  <div class="timeline-wrapper">
    <div class="timeline-header" />
    <div class="timeline-wrapper-inner">
      <div class="timeline-container">
        <!--Timeline item-->
        <div class="timeline-item is-unread">
          <div class="date">
            <span>{{ datecreate }}</span>
          </div>
          <div class="dot is-info" />
          <div class="content-wrap">
            <div class="content-box">
              <div class="status" />
              <VAvatar picture="/demo/avatars/13.jpg" />

              <div class="box-text">
                <div class="meta-text">
                  <p>
                    <span>Tara S.</span> Vous avez créer votre compte ce jour.
                    <a>La création de compte vous donne accès au Tableau de bord mais vous ne pouvez rien faire encore </a>.
                  </p>
                  <span>11:42 am</span>
                </div>
              </div>
            <!--   <div class="box-end">
                <VAvatar
                  size="small"
                  picture="/images/avatars/svg/vuero-1.svg"
                />
              </div>-->
            </div>
          </div>
        </div>

        <!--Timeline item-->
        <div class="timeline-item is-unread">
          <div class="date">
            <span>{{ currentDate }}</span>
          </div>
          <div class="dot is-danger" />
          <div class="content-wrap">
            <div class="content-box">
              <div class="status" />
              <VAvatar picture="/demo/avatars/23.jpg" />

              <div class="box-text">
                <div class="meta-text">
                  <p>
                    <span>Irina V.</span> En ce jour, votre compte est toujours en mode <a>Test</a>, Vous devez passer en live?
                    <a>Pour passer en live Cliquer qsur le bouton ci-dessous</a>.
                  </p>
                  <span>9:18 am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="load-more-wrap has-text-centered">
        <VButton
          dark-outlined
          @click="redirectToLive"
        >
          Passer en live
        </VButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/@src/scss/abstracts/all';

/*
  1. Timeline
  2. Timeline Dark mode
  3. Media Queries
*/

/* ==========================================================================
1. Timeline
========================================================================== */
.timeline-wrapper {
  max-width: 940px;
  margin: 0 auto;

  .timeline-wrapper-inner {
    padding-top: 30px;

    .timeline-container {
      .timeline-item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        &::before {
          content: '';
          position: absolute;
          top: 46px;
          inset-inline-start: 111px;
          height: 100%;
          width: 2px;
          background: var(--placeholder);
          z-index: 0;
        }

        &:last-child {
          &::before {
            display: none;
          }
        }

        &.is-unread {
          .content-wrap {
            .content-box {
              .status {
                background: var(--red) !important;
              }
            }
          }
        }

        .date {
          width: 80px;
          font-family: var(--font);
          text-align: inset-inline-end;

          span {
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }

        .dot {
          position: relative;
          height: 14px;
          width: 14px;
          border-radius: var(--radius-rounded);
          border: 2.6px solid var(--primary);
          margin: 0 25px;
          z-index: 1;

          &.is-info {
            border-color: var(--info);
          }

          &.is-success {
            border-color: var(--success);
          }

          &.is-warning {
            border-color: var(--warning);
          }

          &.is-danger {
            border-color: var(--danger);
          }

          &.is-purple {
            border-color: var(--purple);
          }
        }

        .content-wrap {
          @include vuero-s-card;

          flex-grow: 2;

          .content-box {
            display: flex;
            align-items: center;

            .status {
              height: 8px;
              width: 8px;
              min-width: 8px;
              border-radius: var(--radius-rounded);
              background: var(--light-text-light-15);
              margin: 0 16px 0 0;
            }

            .box-text {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-inline-start: 12px;
              flex-grow: 2;

              .meta-text {
                line-height: 1.2;

                p {
                  color: var(--light-text-dark-10);

                  span {
                    font-family: var(--font-alt);
                    color: var(--dark-text);
                    font-weight: 600;
                  }

                  a {
                    color: var(--primary);
                  }

                  .tag {
                    position: relative;
                    top: -1px;
                    font-weight: 500;
                    line-height: 1.8;
                    height: 1.8em;
                    margin: 0 2px;
                  }
                }

                > span {
                  color: var(--light-text);
                  font-size: 0.9rem;
                }
              }
            }

            .box-end {
              margin-inline-start: auto;

              .v-avatar {
                margin: 0 2px;
              }
            }
          }

          .meta-content {
            padding-inline-start: 78px;
          }
        }
      }
    }

    .load-more-wrap {
      padding: 40px 0;

      .button {
        min-width: 240px;
        min-height: 50px;
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--light-text);
      }
    }
  }
}

/* ==========================================================================
2. Timeline Dark mode
========================================================================== */

.is-dark {
  .timeline-wrapper {
    .timeline-wrapper-inner {
      .timeline-container {
        .timeline-item {
          &::before {
            background: var(--dark-sidebar-light-20);
          }

          .content-wrap {
            @include vuero-card--dark;

            .content-box {
              .status {
                background: var(--dark-sidebar-light-20);
              }

              .box-text {
                .meta-text {
                  p {
                    span {
                      color: var(--dark-dark-text);
                    }

                    a {
                      color: var(--primary);
                    }
                  }
                }
              }
            }
          }
        }
      }

      .load-more-wrap {
        .button {
          background: var(--dark-sidebar-light-2) !important;
        }
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media only screen and (width <= 767px) {
  .timeline-wrapper {
    .timeline-wrapper-inner {
      padding-top: 0;

      .timeline-container {
        .timeline-item {
          flex-direction: column;

          &::before {
            display: none;
          }

          .dot {
            display: none;
          }

          .date {
            align-self: end;
            margin-bottom: 4px;
          }

          .content-wrap {
            .content-box {
              .box-end {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .timeline-wrapper {
    .timeline-wrapper-inner {
      padding-top: 0;

      .timeline-container {
        .timeline-item {
          flex-direction: column;

          &::before {
            display: none;
          }

          .dot {
            display: none;
          }

          .date {
            align-self: end;
            margin-bottom: 4px;
          }

          .content-wrap {
            .content-box {
              .box-end {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
