<script setup>
  import { useAppStateStore } from '@/stores/appState'

  const appStateStore = useAppStateStore()
  appStateStore.setCurrentPage("library")

</script>

<template>
  <div class="library">
    this is library
  </div>
</template>