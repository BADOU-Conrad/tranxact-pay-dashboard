/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/auth': RouteRecordInfo<'/auth', '/auth', Record<never, never>, Record<never, never>>,
    '/auth/login': RouteRecordInfo<'/auth/login', '/auth/login', Record<never, never>, Record<never, never>>,
    '/auth/signup-1': RouteRecordInfo<'/auth/signup-1', '/auth/signup-1', Record<never, never>, Record<never, never>>,
    '/components': RouteRecordInfo<'/components', '/components', Record<never, never>, Record<never, never>>,
    '/components/': RouteRecordInfo<'/components/', '/components', Record<never, never>, Record<never, never>>,
    '/components/accordion/': RouteRecordInfo<'/components/accordion/', '/components/accordion', Record<never, never>, Record<never, never>>,
    '/components/accordion/image': RouteRecordInfo<'/components/accordion/image', '/components/accordion/image', Record<never, never>, Record<never, never>>,
    '/components/avatar/': RouteRecordInfo<'/components/avatar/', '/components/avatar', Record<never, never>, Record<never, never>>,
    '/components/avatar/stack': RouteRecordInfo<'/components/avatar/stack', '/components/avatar/stack', Record<never, never>, Record<never, never>>,
    '/components/block': RouteRecordInfo<'/components/block', '/components/block', Record<never, never>, Record<never, never>>,
    '/components/breadcrumb': RouteRecordInfo<'/components/breadcrumb', '/components/breadcrumb', Record<never, never>, Record<never, never>>,
    '/components/card/': RouteRecordInfo<'/components/card/', '/components/card', Record<never, never>, Record<never, never>>,
    '/components/card/action': RouteRecordInfo<'/components/card/action', '/components/card/action', Record<never, never>, Record<never, never>>,
    '/components/card/advanced': RouteRecordInfo<'/components/card/advanced', '/components/card/advanced', Record<never, never>, Record<never, never>>,
    '/components/card/media': RouteRecordInfo<'/components/card/media', '/components/card/media', Record<never, never>, Record<never, never>>,
    '/components/card/social': RouteRecordInfo<'/components/card/social', '/components/card/social', Record<never, never>, Record<never, never>>,
    '/components/collapse': RouteRecordInfo<'/components/collapse', '/components/collapse', Record<never, never>, Record<never, never>>,
    '/components/content': RouteRecordInfo<'/components/content', '/components/content', Record<never, never>, Record<never, never>>,
    '/components/flex': RouteRecordInfo<'/components/flex', '/components/flex', Record<never, never>, Record<never, never>>,
    '/components/flextable/': RouteRecordInfo<'/components/flextable/', '/components/flextable', Record<never, never>, Record<never, never>>,
    '/components/flextable/columns': RouteRecordInfo<'/components/flextable/columns', '/components/flextable/columns', Record<never, never>, Record<never, never>>,
    '/components/flextable/render': RouteRecordInfo<'/components/flextable/render', '/components/flextable/render', Record<never, never>, Record<never, never>>,
    '/components/flextable/slots': RouteRecordInfo<'/components/flextable/slots', '/components/flextable/slots', Record<never, never>, Record<never, never>>,
    '/components/flextable/wrapper/': RouteRecordInfo<'/components/flextable/wrapper/', '/components/flextable/wrapper', Record<never, never>, Record<never, never>>,
    '/components/flextable/wrapper/async': RouteRecordInfo<'/components/flextable/wrapper/async', '/components/flextable/wrapper/async', Record<never, never>, Record<never, never>>,
    '/components/grid': RouteRecordInfo<'/components/grid', '/components/grid', Record<never, never>, Record<never, never>>,
    '/components/icon-box': RouteRecordInfo<'/components/icon-box', '/components/icon-box', Record<never, never>, Record<never, never>>,
    '/components/icon-wrap': RouteRecordInfo<'/components/icon-wrap', '/components/icon-wrap', Record<never, never>, Record<never, never>>,
    '/components/markdown-editor': RouteRecordInfo<'/components/markdown-editor', '/components/markdown-editor', Record<never, never>, Record<never, never>>,
    '/components/markdown-preview': RouteRecordInfo<'/components/markdown-preview', '/components/markdown-preview', Record<never, never>, Record<never, never>>,
    '/components/pagination': RouteRecordInfo<'/components/pagination', '/components/pagination', Record<never, never>, Record<never, never>>,
    '/components/placeholder-page': RouteRecordInfo<'/components/placeholder-page', '/components/placeholder-page', Record<never, never>, Record<never, never>>,
    '/components/placeholder-section': RouteRecordInfo<'/components/placeholder-section', '/components/placeholder-section', Record<never, never>, Record<never, never>>,
    '/components/plugins/billboard-js': RouteRecordInfo<'/components/plugins/billboard-js', '/components/plugins/billboard-js', Record<never, never>, Record<never, never>>,
    '/components/plugins/notif': RouteRecordInfo<'/components/plugins/notif', '/components/plugins/notif', Record<never, never>, Record<never, never>>,
    '/components/plugins/photos-swipe': RouteRecordInfo<'/components/plugins/photos-swipe', '/components/plugins/photos-swipe', Record<never, never>, Record<never, never>>,
    '/components/plugins/plyr': RouteRecordInfo<'/components/plugins/plyr', '/components/plugins/plyr', Record<never, never>, Record<never, never>>,
    '/components/plugins/tippy': RouteRecordInfo<'/components/plugins/tippy', '/components/plugins/tippy', Record<never, never>, Record<never, never>>,
    '/components/snack': RouteRecordInfo<'/components/snack', '/components/snack', Record<never, never>, Record<never, never>>,
    '/components/table': RouteRecordInfo<'/components/table', '/components/table', Record<never, never>, Record<never, never>>,
    '/components/tabs': RouteRecordInfo<'/components/tabs', '/components/tabs', Record<never, never>, Record<never, never>>,
    '/components/tag': RouteRecordInfo<'/components/tag', '/components/tag', Record<never, never>, Record<never, never>>,
    '/elements': RouteRecordInfo<'/elements', '/elements', Record<never, never>, Record<never, never>>,
    '/elements/': RouteRecordInfo<'/elements/', '/elements', Record<never, never>, Record<never, never>>,
    '/elements/action': RouteRecordInfo<'/elements/action', '/elements/action', Record<never, never>, Record<never, never>>,
    '/elements/addons/calendar': RouteRecordInfo<'/elements/addons/calendar', '/elements/addons/calendar', Record<never, never>, Record<never, never>>,
    '/elements/addons/ckeditor': RouteRecordInfo<'/elements/addons/ckeditor', '/elements/addons/ckeditor', Record<never, never>, Record<never, never>>,
    '/elements/addons/credit-card': RouteRecordInfo<'/elements/addons/credit-card', '/elements/addons/credit-card', Record<never, never>, Record<never, never>>,
    '/elements/addons/filepond': RouteRecordInfo<'/elements/addons/filepond', '/elements/addons/filepond', Record<never, never>, Record<never, never>>,
    '/elements/addons/imask-input': RouteRecordInfo<'/elements/addons/imask-input', '/elements/addons/imask-input', Record<never, never>, Record<never, never>>,
    '/elements/addons/vueform-multiselect': RouteRecordInfo<'/elements/addons/vueform-multiselect', '/elements/addons/vueform-multiselect', Record<never, never>, Record<never, never>>,
    '/elements/addons/vueform-slider': RouteRecordInfo<'/elements/addons/vueform-slider', '/elements/addons/vueform-slider', Record<never, never>, Record<never, never>>,
    '/elements/animated-checkbox': RouteRecordInfo<'/elements/animated-checkbox', '/elements/animated-checkbox', Record<never, never>, Record<never, never>>,
    '/elements/button': RouteRecordInfo<'/elements/button', '/elements/button', Record<never, never>, Record<never, never>>,
    '/elements/checkbox': RouteRecordInfo<'/elements/checkbox', '/elements/checkbox', Record<never, never>, Record<never, never>>,
    '/elements/colors': RouteRecordInfo<'/elements/colors', '/elements/colors', Record<never, never>, Record<never, never>>,
    '/elements/dropdown': RouteRecordInfo<'/elements/dropdown', '/elements/dropdown', Record<never, never>, Record<never, never>>,
    '/elements/forms/addons': RouteRecordInfo<'/elements/forms/addons', '/elements/forms/addons', Record<never, never>, Record<never, never>>,
    '/elements/forms/control': RouteRecordInfo<'/elements/forms/control', '/elements/forms/control', Record<never, never>, Record<never, never>>,
    '/elements/forms/field': RouteRecordInfo<'/elements/forms/field', '/elements/forms/field', Record<never, never>, Record<never, never>>,
    '/elements/forms/file': RouteRecordInfo<'/elements/forms/file', '/elements/forms/file', Record<never, never>, Record<never, never>>,
    '/elements/forms/inputs': RouteRecordInfo<'/elements/forms/inputs', '/elements/forms/inputs', Record<never, never>, Record<never, never>>,
    '/elements/forms/range-rating': RouteRecordInfo<'/elements/forms/range-rating', '/elements/forms/range-rating', Record<never, never>, Record<never, never>>,
    '/elements/forms/selects': RouteRecordInfo<'/elements/forms/selects', '/elements/forms/selects', Record<never, never>, Record<never, never>>,
    '/elements/forms/textarea': RouteRecordInfo<'/elements/forms/textarea', '/elements/forms/textarea', Record<never, never>, Record<never, never>>,
    '/elements/helpers': RouteRecordInfo<'/elements/helpers', '/elements/helpers', Record<never, never>, Record<never, never>>,
    '/elements/icon-button': RouteRecordInfo<'/elements/icon-button', '/elements/icon-button', Record<never, never>, Record<never, never>>,
    '/elements/icons/font-awesome': RouteRecordInfo<'/elements/icons/font-awesome', '/elements/icons/font-awesome', Record<never, never>, Record<never, never>>,
    '/elements/icons/iconify': RouteRecordInfo<'/elements/icons/iconify', '/elements/icons/iconify', Record<never, never>, Record<never, never>>,
    '/elements/icons/line-icons-light': RouteRecordInfo<'/elements/icons/line-icons-light', '/elements/icons/line-icons-light', Record<never, never>, Record<never, never>>,
    '/elements/icons/line-icons-regular': RouteRecordInfo<'/elements/icons/line-icons-regular', '/elements/icons/line-icons-regular', Record<never, never>, Record<never, never>>,
    '/elements/loader': RouteRecordInfo<'/elements/loader', '/elements/loader', Record<never, never>, Record<never, never>>,
    '/elements/message': RouteRecordInfo<'/elements/message', '/elements/message', Record<never, never>, Record<never, never>>,
    '/elements/modal': RouteRecordInfo<'/elements/modal', '/elements/modal', Record<never, never>, Record<never, never>>,
    '/elements/placeload/': RouteRecordInfo<'/elements/placeload/', '/elements/placeload', Record<never, never>, Record<never, never>>,
    '/elements/placeload/avatar': RouteRecordInfo<'/elements/placeload/avatar', '/elements/placeload/avatar', Record<never, never>, Record<never, never>>,
    '/elements/placeload/text': RouteRecordInfo<'/elements/placeload/text', '/elements/placeload/text', Record<never, never>, Record<never, never>>,
    '/elements/progress': RouteRecordInfo<'/elements/progress', '/elements/progress', Record<never, never>, Record<never, never>>,
    '/elements/radio': RouteRecordInfo<'/elements/radio', '/elements/radio', Record<never, never>, Record<never, never>>,
    '/elements/switch-block': RouteRecordInfo<'/elements/switch-block', '/elements/switch-block', Record<never, never>, Record<never, never>>,
    '/elements/switch-segment': RouteRecordInfo<'/elements/switch-segment', '/elements/switch-segment', Record<never, never>, Record<never, never>>,
    '/elements/tooltip': RouteRecordInfo<'/elements/tooltip', '/elements/tooltip', Record<never, never>, Record<never, never>>,
    '/error': RouteRecordInfo<'/error', '/error', Record<never, never>, Record<never, never>>,
    '/error/page-1': RouteRecordInfo<'/error/page-1', '/error/page-1', Record<never, never>, Record<never, never>>,
    '/error/page-2': RouteRecordInfo<'/error/page-2', '/error/page-2', Record<never, never>, Record<never, never>>,
    '/error/page-3': RouteRecordInfo<'/error/page-3', '/error/page-3', Record<never, never>, Record<never, never>>,
    '/error/page-4': RouteRecordInfo<'/error/page-4', '/error/page-4', Record<never, never>, Record<never, never>>,
    '/error/page-5': RouteRecordInfo<'/error/page-5', '/error/page-5', Record<never, never>, Record<never, never>>,
    '/inbox': RouteRecordInfo<'/inbox', '/inbox', Record<never, never>, Record<never, never>>,
    '/marketing-1': RouteRecordInfo<'/marketing-1', '/marketing-1', Record<never, never>, Record<never, never>>,
    '/marketing-2': RouteRecordInfo<'/marketing-2', '/marketing-2', Record<never, never>, Record<never, never>>,
    '/marketing-3': RouteRecordInfo<'/marketing-3', '/marketing-3', Record<never, never>, Record<never, never>>,
    '/messaging-v1': RouteRecordInfo<'/messaging-v1', '/messaging-v1', Record<never, never>, Record<never, never>>,
    '/messaging-v2': RouteRecordInfo<'/messaging-v2', '/messaging-v2', Record<never, never>, Record<never, never>>,
    '/navbar': RouteRecordInfo<'/navbar', '/navbar', Record<never, never>, Record<never, never>>,
    '/roadmap': RouteRecordInfo<'/roadmap', '/roadmap', Record<never, never>, Record<never, never>>,
    '/sidebar': RouteRecordInfo<'/sidebar', '/sidebar', Record<never, never>, Record<never, never>>,
    '/sidebar/': RouteRecordInfo<'/sidebar/', '/sidebar', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards': RouteRecordInfo<'/sidebar/dashboards', '/sidebar/dashboards', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/': RouteRecordInfo<'/sidebar/dashboards/', '/sidebar/dashboards', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/analytics': RouteRecordInfo<'/sidebar/dashboards/analytics', '/sidebar/dashboards/analytics', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/banking-1': RouteRecordInfo<'/sidebar/dashboards/banking-1', '/sidebar/dashboards/banking-1', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/banking-2': RouteRecordInfo<'/sidebar/dashboards/banking-2', '/sidebar/dashboards/banking-2', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/banking-3': RouteRecordInfo<'/sidebar/dashboards/banking-3', '/sidebar/dashboards/banking-3', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/charts-apex': RouteRecordInfo<'/sidebar/dashboards/charts-apex', '/sidebar/dashboards/charts-apex', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/charts-billboardsjs': RouteRecordInfo<'/sidebar/dashboards/charts-billboardsjs', '/sidebar/dashboards/charts-billboardsjs', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/company': RouteRecordInfo<'/sidebar/dashboards/company', '/sidebar/dashboards/company', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/course': RouteRecordInfo<'/sidebar/dashboards/course', '/sidebar/dashboards/course', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/ecommerce-1': RouteRecordInfo<'/sidebar/dashboards/ecommerce-1', '/sidebar/dashboards/ecommerce-1', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/flights': RouteRecordInfo<'/sidebar/dashboards/flights', '/sidebar/dashboards/flights', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/food-delivery': RouteRecordInfo<'/sidebar/dashboards/food-delivery', '/sidebar/dashboards/food-delivery', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/health': RouteRecordInfo<'/sidebar/dashboards/health', '/sidebar/dashboards/health', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/hobbies': RouteRecordInfo<'/sidebar/dashboards/hobbies', '/sidebar/dashboards/hobbies', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/human-ressources': RouteRecordInfo<'/sidebar/dashboards/human-ressources', '/sidebar/dashboards/human-ressources', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/influencer': RouteRecordInfo<'/sidebar/dashboards/influencer', '/sidebar/dashboards/influencer', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/jobs': RouteRecordInfo<'/sidebar/dashboards/jobs', '/sidebar/dashboards/jobs', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/personal-2': RouteRecordInfo<'/sidebar/dashboards/personal-2', '/sidebar/dashboards/personal-2', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/personal-3': RouteRecordInfo<'/sidebar/dashboards/personal-3', '/sidebar/dashboards/personal-3', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/sales': RouteRecordInfo<'/sidebar/dashboards/sales', '/sidebar/dashboards/sales', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/soccer': RouteRecordInfo<'/sidebar/dashboards/soccer', '/sidebar/dashboards/soccer', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/stocks': RouteRecordInfo<'/sidebar/dashboards/stocks', '/sidebar/dashboards/stocks', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/video': RouteRecordInfo<'/sidebar/dashboards/video', '/sidebar/dashboards/video', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/widgets-sample-creative': RouteRecordInfo<'/sidebar/dashboards/widgets-sample-creative', '/sidebar/dashboards/widgets-sample-creative', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/widgets-sample-list': RouteRecordInfo<'/sidebar/dashboards/widgets-sample-list', '/sidebar/dashboards/widgets-sample-list', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/widgets-sample-stats': RouteRecordInfo<'/sidebar/dashboards/widgets-sample-stats', '/sidebar/dashboards/widgets-sample-stats', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/widgets-sample-ui': RouteRecordInfo<'/sidebar/dashboards/widgets-sample-ui', '/sidebar/dashboards/widgets-sample-ui', Record<never, never>, Record<never, never>>,
    '/sidebar/dashboards/writer': RouteRecordInfo<'/sidebar/dashboards/writer', '/sidebar/dashboards/writer', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts': RouteRecordInfo<'/sidebar/layouts', '/sidebar/layouts', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/': RouteRecordInfo<'/sidebar/layouts/', '/sidebar/layouts', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/action-page-1': RouteRecordInfo<'/sidebar/layouts/action-page-1', '/sidebar/layouts/action-page-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/action-page-2': RouteRecordInfo<'/sidebar/layouts/action-page-2', '/sidebar/layouts/action-page-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/form-layouts-1': RouteRecordInfo<'/sidebar/layouts/form-layouts-1', '/sidebar/layouts/form-layouts-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/form-layouts-2': RouteRecordInfo<'/sidebar/layouts/form-layouts-2', '/sidebar/layouts/form-layouts-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/form-layouts-3': RouteRecordInfo<'/sidebar/layouts/form-layouts-3', '/sidebar/layouts/form-layouts-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/form-layouts-4': RouteRecordInfo<'/sidebar/layouts/form-layouts-4', '/sidebar/layouts/form-layouts-4', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/form-layouts-5': RouteRecordInfo<'/sidebar/layouts/form-layouts-5', '/sidebar/layouts/form-layouts-5', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-cards-1': RouteRecordInfo<'/sidebar/layouts/grid-cards-1', '/sidebar/layouts/grid-cards-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-cards-2': RouteRecordInfo<'/sidebar/layouts/grid-cards-2', '/sidebar/layouts/grid-cards-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-cards-3': RouteRecordInfo<'/sidebar/layouts/grid-cards-3', '/sidebar/layouts/grid-cards-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-cards-4': RouteRecordInfo<'/sidebar/layouts/grid-cards-4', '/sidebar/layouts/grid-cards-4', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-tiles-1': RouteRecordInfo<'/sidebar/layouts/grid-tiles-1', '/sidebar/layouts/grid-tiles-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-tiles-2': RouteRecordInfo<'/sidebar/layouts/grid-tiles-2', '/sidebar/layouts/grid-tiles-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-tiles-3': RouteRecordInfo<'/sidebar/layouts/grid-tiles-3', '/sidebar/layouts/grid-tiles-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-users-1': RouteRecordInfo<'/sidebar/layouts/grid-users-1', '/sidebar/layouts/grid-users-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-users-2': RouteRecordInfo<'/sidebar/layouts/grid-users-2', '/sidebar/layouts/grid-users-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-users-3': RouteRecordInfo<'/sidebar/layouts/grid-users-3', '/sidebar/layouts/grid-users-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/grid-users-4': RouteRecordInfo<'/sidebar/layouts/grid-users-4', '/sidebar/layouts/grid-users-4', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/kanban-board': RouteRecordInfo<'/sidebar/layouts/kanban-board', '/sidebar/layouts/kanban-board', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-datatable-1': RouteRecordInfo<'/sidebar/layouts/list-datatable-1', '/sidebar/layouts/list-datatable-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-datatable-2': RouteRecordInfo<'/sidebar/layouts/list-datatable-2', '/sidebar/layouts/list-datatable-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-datatable-3': RouteRecordInfo<'/sidebar/layouts/list-datatable-3', '/sidebar/layouts/list-datatable-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-flex-1': RouteRecordInfo<'/sidebar/layouts/list-flex-1', '/sidebar/layouts/list-flex-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-flex-2': RouteRecordInfo<'/sidebar/layouts/list-flex-2', '/sidebar/layouts/list-flex-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-flex-3': RouteRecordInfo<'/sidebar/layouts/list-flex-3', '/sidebar/layouts/list-flex-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-view-2': RouteRecordInfo<'/sidebar/layouts/list-view-2', '/sidebar/layouts/list-view-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-view-3': RouteRecordInfo<'/sidebar/layouts/list-view-3', '/sidebar/layouts/list-view-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/list-view-4': RouteRecordInfo<'/sidebar/layouts/list-view-4', '/sidebar/layouts/list-view-4', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/onboarding-page-1': RouteRecordInfo<'/sidebar/layouts/onboarding-page-1', '/sidebar/layouts/onboarding-page-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/onboarding-page-2': RouteRecordInfo<'/sidebar/layouts/onboarding-page-2', '/sidebar/layouts/onboarding-page-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/onboarding-page-3': RouteRecordInfo<'/sidebar/layouts/onboarding-page-3', '/sidebar/layouts/onboarding-page-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/onboarding-page-4': RouteRecordInfo<'/sidebar/layouts/onboarding-page-4', '/sidebar/layouts/onboarding-page-4', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/onboarding-page-5': RouteRecordInfo<'/sidebar/layouts/onboarding-page-5', '/sidebar/layouts/onboarding-page-5', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/onboarding-welcome': RouteRecordInfo<'/sidebar/layouts/onboarding-welcome', '/sidebar/layouts/onboarding-welcome', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/placeload-1': RouteRecordInfo<'/sidebar/layouts/placeload-1', '/sidebar/layouts/placeload-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/placeload-2': RouteRecordInfo<'/sidebar/layouts/placeload-2', '/sidebar/layouts/placeload-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/placeload-3': RouteRecordInfo<'/sidebar/layouts/placeload-3', '/sidebar/layouts/placeload-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/placeload-4': RouteRecordInfo<'/sidebar/layouts/placeload-4', '/sidebar/layouts/placeload-4', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-edit': RouteRecordInfo<'/sidebar/layouts/profile-edit', '/sidebar/layouts/profile-edit', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-edit/': RouteRecordInfo<'/sidebar/layouts/profile-edit/', '/sidebar/layouts/profile-edit', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-edit/experience': RouteRecordInfo<'/sidebar/layouts/profile-edit/experience', '/sidebar/layouts/profile-edit/experience', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-edit/settings': RouteRecordInfo<'/sidebar/layouts/profile-edit/settings', '/sidebar/layouts/profile-edit/settings', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-edit/skills': RouteRecordInfo<'/sidebar/layouts/profile-edit/skills', '/sidebar/layouts/profile-edit/skills', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-notifications': RouteRecordInfo<'/sidebar/layouts/profile-notifications', '/sidebar/layouts/profile-notifications', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-settings': RouteRecordInfo<'/sidebar/layouts/profile-settings', '/sidebar/layouts/profile-settings', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/profile-view': RouteRecordInfo<'/sidebar/layouts/profile-view', '/sidebar/layouts/profile-view', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/projects-details': RouteRecordInfo<'/sidebar/layouts/projects-details', '/sidebar/layouts/projects-details', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/projects-projects-1': RouteRecordInfo<'/sidebar/layouts/projects-projects-1', '/sidebar/layouts/projects-projects-1', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/projects-projects-2': RouteRecordInfo<'/sidebar/layouts/projects-projects-2', '/sidebar/layouts/projects-projects-2', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/projects-projects-3': RouteRecordInfo<'/sidebar/layouts/projects-projects-3', '/sidebar/layouts/projects-projects-3', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/saas-billing': RouteRecordInfo<'/sidebar/layouts/saas-billing', '/sidebar/layouts/saas-billing', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/search-empty': RouteRecordInfo<'/sidebar/layouts/search-empty', '/sidebar/layouts/search-empty', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/search-results': RouteRecordInfo<'/sidebar/layouts/search-results', '/sidebar/layouts/search-results', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/utility-account-confirm': RouteRecordInfo<'/sidebar/layouts/utility-account-confirm', '/sidebar/layouts/utility-account-confirm', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/utility-invoice': RouteRecordInfo<'/sidebar/layouts/utility-invoice', '/sidebar/layouts/utility-invoice', Record<never, never>, Record<never, never>>,
    '/sidebar/layouts/utility-promotion': RouteRecordInfo<'/sidebar/layouts/utility-promotion', '/sidebar/layouts/utility-promotion', Record<never, never>, Record<never, never>>,
    '/sidebar/maps-1': RouteRecordInfo<'/sidebar/maps-1', '/sidebar/maps-1', Record<never, never>, Record<never, never>>,
    '/sidebar/maps-2': RouteRecordInfo<'/sidebar/maps-2', '/sidebar/maps-2', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-1': RouteRecordInfo<'/starters/navbar-blank-page-1', '/starters/navbar-blank-page-1', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-2': RouteRecordInfo<'/starters/navbar-blank-page-2', '/starters/navbar-blank-page-2', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-3': RouteRecordInfo<'/starters/navbar-blank-page-3', '/starters/navbar-blank-page-3', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-4': RouteRecordInfo<'/starters/navbar-blank-page-4', '/starters/navbar-blank-page-4', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-5': RouteRecordInfo<'/starters/navbar-blank-page-5', '/starters/navbar-blank-page-5', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-6': RouteRecordInfo<'/starters/navbar-blank-page-6', '/starters/navbar-blank-page-6', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-7': RouteRecordInfo<'/starters/navbar-blank-page-7', '/starters/navbar-blank-page-7', Record<never, never>, Record<never, never>>,
    '/starters/navbar-blank-page-8': RouteRecordInfo<'/starters/navbar-blank-page-8', '/starters/navbar-blank-page-8', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-1': RouteRecordInfo<'/starters/sidebar-blank-page-1', '/starters/sidebar-blank-page-1', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-2': RouteRecordInfo<'/starters/sidebar-blank-page-2', '/starters/sidebar-blank-page-2', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-3': RouteRecordInfo<'/starters/sidebar-blank-page-3', '/starters/sidebar-blank-page-3', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-4': RouteRecordInfo<'/starters/sidebar-blank-page-4', '/starters/sidebar-blank-page-4', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-5': RouteRecordInfo<'/starters/sidebar-blank-page-5', '/starters/sidebar-blank-page-5', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-6': RouteRecordInfo<'/starters/sidebar-blank-page-6', '/starters/sidebar-blank-page-6', Record<never, never>, Record<never, never>>,
    '/starters/sidebar-blank-page-7': RouteRecordInfo<'/starters/sidebar-blank-page-7', '/starters/sidebar-blank-page-7', Record<never, never>, Record<never, never>>,
    '/starters/sideblock-blank-page-1': RouteRecordInfo<'/starters/sideblock-blank-page-1', '/starters/sideblock-blank-page-1', Record<never, never>, Record<never, never>>,
    '/starters/sideblock-blank-page-2': RouteRecordInfo<'/starters/sideblock-blank-page-2', '/starters/sideblock-blank-page-2', Record<never, never>, Record<never, never>>,
    '/starters/sideblock-blank-page-3': RouteRecordInfo<'/starters/sideblock-blank-page-3', '/starters/sideblock-blank-page-3', Record<never, never>, Record<never, never>>,
    '/starters/sideblock-blank-page-4': RouteRecordInfo<'/starters/sideblock-blank-page-4', '/starters/sideblock-blank-page-4', Record<never, never>, Record<never, never>>,
    '/status': RouteRecordInfo<'/status', '/status', Record<never, never>, Record<never, never>>,
    '/wizard-v1': RouteRecordInfo<'/wizard-v1', '/wizard-v1', Record<never, never>, Record<never, never>>,
    '/wizard-v1/': RouteRecordInfo<'/wizard-v1/', '/wizard-v1', Record<never, never>, Record<never, never>>,
    '/wizard-v1/project-details': RouteRecordInfo<'/wizard-v1/project-details', '/wizard-v1/project-details', Record<never, never>, Record<never, never>>,
    '/wizard-v1/project-files': RouteRecordInfo<'/wizard-v1/project-files', '/wizard-v1/project-files', Record<never, never>, Record<never, never>>,
    '/wizard-v1/project-info': RouteRecordInfo<'/wizard-v1/project-info', '/wizard-v1/project-info', Record<never, never>, Record<never, never>>,
    '/wizard-v1/project-review': RouteRecordInfo<'/wizard-v1/project-review', '/wizard-v1/project-review', Record<never, never>, Record<never, never>>,
    '/wizard-v1/project-team': RouteRecordInfo<'/wizard-v1/project-team', '/wizard-v1/project-team', Record<never, never>, Record<never, never>>,
    '/wizard-v1/project-tools': RouteRecordInfo<'/wizard-v1/project-tools', '/wizard-v1/project-tools', Record<never, never>, Record<never, never>>,
    '/wizard-v1/success': RouteRecordInfo<'/wizard-v1/success', '/wizard-v1/success', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
