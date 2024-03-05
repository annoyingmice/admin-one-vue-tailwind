import { reactive } from 'vue'
import { defineStore } from 'pinia'
import c from '@/data/data'

export const useMainStore = defineStore('main', () => {
  const clients = reactive(c)

  return { 
    clients,
   }
})
