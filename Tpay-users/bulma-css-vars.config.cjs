const { hsl } = require('@cssninja/bulma-css-vars')

module.exports = {
  sassEntryFile: 'src/scss/main.scss',
  jsOutputFile: 'src/scss/bulma-generated/bulma-colors.ts',
  sassOutputFile: 'src/scss/bulma-generated/generated-vars.sass',
  cssFallbackOutputFile: 'src/scss/bulma-generated/generated-fallback.css',
  colorDefs: {
    white: '#fff',
    primary:  '#0055ff',
    dark: '#283252',
    link: '#1a32af',
    info: '#94c5ff',
    success: '#0092ff',
    warning: '#faae42',
    danger: '#e62965',
  },
  transition: null,
}
