import app from '~/util/app'
import text from '~/util/text'
import theme from '~/util/theme'

export default (context, inject) => {
  const util = Object.freeze({
    $app: app,
    $text: text,
    $theme: theme
  })
  inject('util', util)
}
