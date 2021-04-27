<template>
  <v-card flat>
    <v-list-group @click="show = !show">
      <template v-slot:activator>
        <v-list-item>
          <v-list-item-title v-text="'CONTACT'" />
        </v-list-item>
      </template>
    </v-list-group>

    <v-form
      v-show="show"
      class="pa-3"
      ref="contactForm"
      :disabled="loading"
      @submit.prevent
    >
      <v-textarea
        v-model="message"
        class="caption"
        label="ご用件（お名前・ご連絡先）"
        hide-details="auto"
        :messages="['どんなことでもどうぞ']"
        outlined
        no-resize
      />

      <v-btn
        :disabled="!message"
        :loading="loading"
        block
        outlined
        @click="submitForm"
        v-text="'送信'"
      />
    </v-form>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      show: false,
      message: null
    }
  },
  methods: {
    async submitForm () {
      this.loading = true
      await this.$slack(this.message)
      this.message = null
      this.show = false
      alert('送信しました')
      this.loading = false
    }
  }
}
</script>
