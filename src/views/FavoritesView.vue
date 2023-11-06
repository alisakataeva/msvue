<script setup>
  import { useAppStateStore } from '@/stores/appState'

  const appStateStore = useAppStateStore()
  appStateStore.setCurrentPage("favorites")

</script>

<template>
  <div class="favorites">
    this is favorites
  </div>
</template>