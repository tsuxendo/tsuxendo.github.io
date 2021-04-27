<template>
  <page-wrapper :loading="loading">
    <div v-if="siteData.isAdmin && !isAuthenticated">
      <markdown code="> 現在管理者のみがアクセスできます。" />
    </div>

    <div v-else>
      <markdown :code="siteData.code" />
    </div>
  </page-wrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      loading: false
    }
  },
  head () {
    return {
      titleTemplate: '%s'
    }
  },
  async created () {
    this.loading = true
    if (!this.siteData.id) {
      await this.getSiteData()
    }
    this.loading = false
  },
  methods: {
    ...mapActions('data', ['getSiteData', 'getArticle', 'setSiteData', 'setArticle'])
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuthenticated']),
    ...mapGetters('data', ['siteData', 'article'])
  }
}
</script>
