import api from '@/api'

export default {
  async searchUser ({ commit }, { userName }) {
    try {
      const user = await api.searchUser(userName)
      commit('setUser', user)
    } catch (e) {
      console.error(e)
    }
  }
}
