<template>
  <page-wrapper :loading="loading">
    <div v-if="articleData.isAdmin && !isAuthenticated">
      <markdown code="> 現在管理者のみがアクセスできます。" />
    </div>

    <div v-else>
      <markdown :code="articleData.code" />
    </div>
  </page-wrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      loading: false,
      articleData: {}
    }
  },
  head () {
    return {
      title: this.articleData.title
    }
  },
  async created () {
    this.loading = true
    const id = this.$route.params.id
    if (!this.siteData.id) {
      await this.getSiteData()
    }
    if (!this.article(id)?.id) {
      await this.getArticle(id)
    }
    this.articleData = this.article(id)
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
