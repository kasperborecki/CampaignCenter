import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthHolderStore = defineStore('authHolder', () => {
  const token = ref<string | null>(null)
  const isAuthenticated = computed(() => !!token.value)

  function init() {
    if (import.meta.client) {
      token.value = localStorage.getItem('token')
    }
  }

  function setToken(newToken: string | null) {
    token.value = newToken

    if (!import.meta.client) return

    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  }

  function logout() {
    setToken(null)
  }

  return { token, isAuthenticated, init, setToken, logout }
})
