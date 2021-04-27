import theme from './util/theme'
import app from './util/app'

export default {
  ssr: false,
  target: 'static',
  head: {
    title: app.title,
    titleTemplate: app.titleTemplate,
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/7f10171cec.js',
        crossorigin: 'anonymous'
      }
    ]
  },
  css: [
  ],
  plugins: [
    '~/plugins/firebase',
    '~/plugins/helpers',
    '~/plugins/slack'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/components'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-gtag',
      {
        id: process.env.MEASUREMENT_ID,
        debug: true
      }
    ]
  ],
  axios: {},
  pwa: {
    meta: {
      description: app.description,
      lang: app.lang,
      name: app.name,
      nativeUI: true,
      ogDescription: app.description,
      ogHost: process.env.SITE_URL,
      ogImage: app.ogpimage,
      ogTitle: app.title,
      theme_color: app.color,
      twitterCard: app.twittercard
    },
    manifest: {
      description: app.description,
      display: app.display,
      lang: app.lang,
      name: app.name,
      short_name: app.name,
      theme_color: app.color
    }
  },
  vuetify: {
    customVariables: [
      '~/assets/scss/variables'
    ],
    icons: {
      iconfont: [
        'fa'
      ]
    },
    theme
  },
  env: {
    VERSION: process.env.VERSION,
    SLACK_API_URL: process.env.SLACK_API_URL,
    FIREBASE_CONFIG: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BACKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    }
  }
}
