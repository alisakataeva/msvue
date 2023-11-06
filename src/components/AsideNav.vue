<script setup>
  import { ref, onMounted } from 'vue'
  import { useAppStateStore } from '@/stores/appState'
  import IconTabCalendar from '@/components/icons/IconTabCalendar.vue'
  import IconTabLibrary from '@/components/icons/IconTabLibrary.vue'
  import IconTabPlaylists from '@/components/icons/IconTabPlaylists.vue'
  import IconTabFavorites from '@/components/icons/IconTabFavorites.vue'
  import IconTabHome from '@/components/icons/IconTabHome.vue'

  const appStateStore = useAppStateStore()

</script>

<template>
  <aside>
    <div class="nav">

      <div class="nav-top">
        <div class="nav-link-wrapper">
          <router-link
            to="/calendar"
            class="nav-link calendar"
            :class="{'is-active': appStateStore.currentPage === 'calendar'}"
          >
            <IconTabCalendar />
          </router-link>
        </div>

        <div class="nav-link-wrapper">
          <router-link
            to="/library"
            class="nav-link library"
            :class="{'is-active': appStateStore.currentPage === 'library'}"
          >
            <IconTabLibrary />
          </router-link>
        </div>

        <div class="nav-link-wrapper">
          <router-link
            to="/playlists"
            class="nav-link playlists"
            :class="{'is-active': appStateStore.currentPage === 'playlists'}"
          >
            <IconTabPlaylists />
          </router-link>
        </div>

        <div class="nav-link-wrapper">
          <router-link
            to="/favorites"
            class="nav-link favorites"
            :class="{'is-active': appStateStore.currentPage === 'favorites'}"
          >
            <IconTabFavorites />
          </router-link>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-link-wrapper">
          <router-link
            to="/"
            class="nav-link home"
          >
            <IconTabHome />
          </router-link>
        </div>
      </div>

    </div>
  </aside>
</template>

<style scoped>

aside {
  width: 60px;
  border-right: 1px solid #eee;
}

.nav-link-wrapper {
  width: 60px;
  height: 60px;
  position: relative;
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-link {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: #ccc;
  font-weight: 900;
  text-decoration: none;
}
.nav-link.is-active {
  width: 84px;
  height: 84px;
  position: absolute;
  top: -12px;
  left: -12px;
  background-color: teal;
  color: #fff;
  border-radius: 50%;

}



</style>