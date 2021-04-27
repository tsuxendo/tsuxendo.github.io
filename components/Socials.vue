<template>
  <v-card
    class="py-3"
    flat
  >
    <v-card-actions>
      <v-spacer />

      <v-btn
        v-for="social of socials"
        :key="social.name"
        :href="social.url"
        icon
      >
        <v-icon v-text="social.icon" />
      </v-btn>

      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        {
          name: 'GitHub',
          icon: 'fab fa-github-square',
          url: 'https://github.com/tsuxendo'
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter-square',
          url: 'https://twitter.com/tsuxendo'
        },
        {
          name: 'FaceBook',
          icon: 'fab fa-facebook-square',
          url: 'https://facebook.com/tsuxendo'
        },
        {
          name: 'Mail',
          icon: 'fas fa-envelope-square',
          url: 'mailto:tsux@tsux.me'
        }
      ]
    }
  }
}
</script>
