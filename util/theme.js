const light = Object.freeze({
  primary: '#00552e',
  secondary: '#009952',
  background: '#f4fff4',
  surface: '#fcfcfc'
})

const dark = Object.freeze({
  primary: '#009952',
  secondary: '#00552e',
  background: '#182c39',
  surface: '#102531'
})

export default Object.freeze({
  dark: false,
  themes: Object.freeze({
    dark,
    light
  })
})
