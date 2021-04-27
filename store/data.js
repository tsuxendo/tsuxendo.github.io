const VERSION = process.env.VERSION

export const state = () => ({
  site: {},
  articles: {}
})

export const getters = {
  siteData: state => state.site || {},
  article: state => id => state.articles[id] || {}
}

export const mutations = {
  siteData (state, result) { state.site = { ...state.site, ...result } },
  article (state, result) { state.articles[result.id] = { ...state.articles[result.id], ...result } }
}

export const actions = {
  async getSiteData (context) {
    const doc = await this.$firebase.$firestore.doc(`/versions/${VERSION}/`).get()
    const result = doc.exists ? { id: doc.id, ...doc.data() } : {}
    context.commit('siteData', result)
  },
  async getArticle (context, id) {
    const doc = await this.$firebase.$firestore.doc(`/versions/${VERSION}/articles/${id}`).get()
    const result = doc.exists ? { id: doc.id, ...doc.data() } : {}
    context.commit('article', result)
  },
  async setSiteData (_, payload) {
    const { merge = true, ...request } = payload
    await this.$firebase.$firestore.doc(`/versions/${VERSION}/`).set(request, { merge })
  },
  async setArticle (_, payload) {
    const { id, merge = true, ...request } = payload
    await this.$firebase.$firestore.doc(`/versions/${VERSION}/articles/${id}/`).set(request, { merge })
  }
}
