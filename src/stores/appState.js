import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', () => {
  let currentPage = ref('home')

  function setCurrentPage(page) {
    currentPage.value = page
  }

  return { currentPage, setCurrentPage }
})