export const state = () => ({
  user: null
})

export const mutations = {
  user (state, user) { state.user = user }
}

export const getters = {
  user: state => state.user,
  isAuthenticated: state => !!state.user?.uid
}

export const actions = {
  async setUser (context, user) {
    context.commit('user', user ? { uid: user.uid } : null)
  },
  async login (_, payload) {
    await this.$firebase.$auth.signInWithEmailAndPassword(...payload)
  },
  async logout () {
    await this.$firebase.$auth.signOut()
  }
}
