<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const menuItems = ref([
  {
    label: 'Home',
  },
  {
    label: 'About',
  },
  {
    label: 'Artwork',
  },
  {
    label: 'Games',
  },
])
</script>

<template>
  <body>
    <div class="navBar">
      <Menubar :model="menuItems"></Menubar>
    </div>
    <div class="tagline">
      <h1>Miranda Honkanen</h1>
      <h2>artist and game developer</h2>
    </div>
  </body>
</template>

<style scoped></style>
