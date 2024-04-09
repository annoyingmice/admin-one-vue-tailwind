import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useErrorStore = defineStore('error', () => {
  const data = reactive({
    error: null
  })

  const setError = payload => Object.assign(data, { error: payload });

  return { 
    data,
    setError
  }
})
