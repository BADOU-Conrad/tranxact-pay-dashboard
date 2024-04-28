const { hsl } = require('@cssninja/bulma-css-vars')
module.exports = {
  sassEntryFile: 'src/scss/main.scss',
  jsOutputFile: 'src/scss/bulma-generated/bulma-colors.ts',
  sassOutputFile: 'src/scss/bulma-generated/generated-vars.sass',
  cssFallbackOutputFile: 'src/scss/bulma-generated/generated-fallback.css',
  colorDefs: {
    white: '#fff',
    primary: hsl(210, 60, 42), // '#29AB8D',
    dark: hsl(226, 34, 24), // '#283252',
    link: hsl(229, 53, 53), // '#485FC7',
    info: hsl(200, 97, 45), // '#039BE5',
    success: hsl(164, 95, 43), // '#06D6A0',
    warning: hsl(35, 95, 62), // '#FAAE42',
    danger: hsl(341, 79, 53), // '#E62965',
  },
  transition: null,
}
