<script setup lang="ts">
import Card from 'primevue/card'

import 'primeicons/primeicons.css'
</script>

<template>
  <body>
    <Card style="width: 50%; margin: auto; margin-bottom: 2rem; margin-top: 2rem; padding: 1rem">
      <template #title>
        <h2>GitHub</h2>
        <a href="https://github.com/mizhonka"> github.com/mizhonka</a>
      </template>
      <template #content>
        <p class="m-0">Coding projects, including the source code for this website.</p>
      </template>
    </Card>

    <Card style="width: 50%; margin: auto; padding: 1rem">
      <template #title>
        <h2>ArtStation</h2>
        <a href="https://www.artstation.com/mizhonka"> artstation.com/mizhonka</a>
      </template>
      <template #content>
        <p class="m-0">More artwork and higher quality videos.</p>
      </template>
    </Card>
  </body>
</template>

<style scoped>
.logo {
  font-size: 1.5rem;
  color: #ceb5d4;
}
</style>
