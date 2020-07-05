import api from '@/api'

export default {
  async searchUser ({ commit }, { username }) {
    try {
      const user = await api.searchUser(username)
      commit('setUser', user)
    } catch (e) {
      console.error(e)
    }
  }
}
