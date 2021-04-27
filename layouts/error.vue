<template>
  <v-app>
    <v-overlay opacity="0">
      <v-card
        light
        flat
      >
        <v-card-title
          class="justify-center"
          v-text="title"
        />

        <v-card-subtitle
          class="text--secondary text-center"
          v-text="subtitle"
        />

        <v-card-actions>
          <v-btn
            block
            rounded
            outlined
            @click="goNextPage"
          >
            <span v-text="buttonText" />
          </v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="caption text--secondary"
            text
            @click="slackReport"
          >
            <span v-text="$util.$text.layouts.error.reportButtonText" />
          </v-btn>

          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      title: null,
      subtitle: null,
      buttonText: null
    }
  },
  created () {
    if (this.error.statusCode === 404) {
      this.title = this.$util.$text.layouts.error.notFound
      this.subtitle = this.$util.$text.layouts.error.notFoundMessage
      this.buttonText = this.error.buttonText || this.$util.$text.layouts.error.backButtonText
    } else {
      this.title = this.error.statusCode || this.$util.$text.layouts.error.internalServerError
      this.subtitle = this.error.message || this.$util.$text.layouts.error.internalServerErrorMessage
      this.buttonText = this.error.buttonText || this.$util.$text.layouts.error.backButtonText
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    goNextPage () {
      const nextLocation = this.error.next || this.$nuxt.context.from || { path: '/' }
      const toSamePage = nextLocation.path === this.$route.path
      this.$router.push(nextLocation)
      if (toSamePage) {
        this.$router.go(0)
      }
    },
    async slackReport () {
      const prompt = window.prompt(this.$util.$text.layouts.error.reportPrompt)
      if (prompt) {
        await this.$slack(prompt)
        alert(this.$util.$text.layouts.error.sentReport)
      }
    }
  }
}
</script>
