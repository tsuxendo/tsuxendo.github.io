import text from './text'

export default Object.freeze({
  color: '#ffffff',
  description: text.app.description,
  display: 'standalone',
  lang: 'ja',
  name: text.app.name,
  ogpimage: 'ogp.png',
  title: text.app.title,
  titleTemplate: `%s | ${text.app.title}`,
  twittercard: 'summary'
})
