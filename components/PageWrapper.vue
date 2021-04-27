<template>
  <div>
    <navigation-menu
      v-model="nav"
      :navItems="siteData.sitemap"
    />

    <app-bar
      v-if="!nav"
      @click:menu="nav = true"
    />

    <v-overlay
      v-if="loading"
      absolute
    >
      <v-progress-circular indeterminate />
    </v-overlay>

    <v-card
      v-else
      class="pa-6"
      flat
    >
      <slot />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      nav: true
    }
  },
  created () {
    this.nav = !this.xs
  },
  watch: {
    xs () { this.nav = !this.xs }
  },
  computed: {
    xs () { return this.$vuetify.breakpoint.name === 'xs' },
    ...mapGetters('auth', ['user', 'isAuthenticated']),
    ...mapGetters('data', ['siteData'])
  }
}
</script>
