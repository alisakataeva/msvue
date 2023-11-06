<script setup>
  import { useAppStateStore } from '@/stores/appState'

  const appStateStore = useAppStateStore()
  appStateStore.setCurrentPage("calendar")

</script>

<template>
  <div class="calendar">
    this is calendar
  </div>
</template>