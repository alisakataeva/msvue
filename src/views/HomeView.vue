<script setup>
import { useAppStateStore } from '@/stores/appState'

const appStateStore = useAppStateStore()
appStateStore.setCurrentPage("home")

</script>

<template>
  <div class="welcome">
    <div class="img-list">
      <img src="../assets/img/music station web application.jpg" alt="">
      <img src="../assets/img/music station worldwide.jpg" alt="">
      <img src="../assets/img/music station.jpg" alt="">
    </div>
    <small>Special thanks to AI for generating these images</small>
    <h6>-----</h6>
    <h1>Welcome to MusicStation.</h1>
    <em>MuStat is an app that helps you manage data, creating playlists, see statistics about favourite music</em>
    <h6>-----</h6>
    <router-link to="/calendar">Calendar</router-link>
    - <router-link to="/gallery">Gallery</router-link>
    - <router-link to="/playlists">Playlists</router-link>
    - <router-link to="/favorites">Favorites</router-link>
  </div>
</template>

<style scoped>
.welcome {
  margin: 16em 2em;
}

.img-list img {
  max-width: 200px;
  margin: 1em;
}
</style>