<script setup>
import { RouterView } from 'vue-router'
import AsideNav from './components/AsideNav.vue'
</script>

<template>
  <AsideNav />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

main {
  width: 100%;
  padding: 16px;
}

</style>
