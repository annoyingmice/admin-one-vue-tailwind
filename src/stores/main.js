import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const data = reactive({
    user: null,
    accessToken: null
  })

  const setUser = payload => Object.assign(data, { user: payload })
  const setAccessToken = payload => Object.assign(data, { accessToken: payload })

  return { 
    data,
    setUser,
    setAccessToken
  }
})
