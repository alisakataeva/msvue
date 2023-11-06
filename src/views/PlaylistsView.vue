<script setup>
  import { useAppStateStore } from '@/stores/appState'

  const appStateStore = useAppStateStore()
  appStateStore.setCurrentPage("playlists")

</script>

<template>
  <div class="playlists">
    this is playlists
  </div>
</template>