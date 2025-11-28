<script setup lang="ts">
import { Card } from 'primevue'
import Dialog from 'primevue/dialog'

import { ref } from 'vue'
const fishVisible = ref(false)
const trenchesVisible = ref(false)
</script>

<template>
  <body>
    <Dialog v-model:visible="fishVisible" modal header="Go Fish - Demo">
      <video width="640" height="360" controls>
        <source src="../assets/videos/gofish-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Dialog>

    <Dialog v-model:visible="trenchesVisible" modal header="The Trenches - Demo">
      <video width="640" height="360" controls>
        <source src="../assets/videos/trenches-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Dialog>

    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          @click="fishVisible = true"
          class="thumbnail"
          alt="user header"
          src="../assets/thumbnails/gofish-thumb.png"
        />
      </template>
      <template #title><h2>Go Fish - In Space!</h2></template>
      <template #subtitle>
        <p>2021 - 2022</p>
        <a href="https://mega.nz/file/KjwgUIqR#H4BYv7LE0evpjguPlPksRaEbAMNLK1pM44RUlq2kBkY"
          >Mega Download >></a
        ></template
      >
      <template #content>
        <p class="m-0">
          A simple game of Go Fish against the computer. Programming, artwork and sound effects by
          me.
        </p>
      </template>
    </Card>

    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          @click="trenchesVisible = true"
          class="thumbnail"
          alt="user header"
          src="../assets/thumbnails/trenches-thumb.png"
        />
      </template>
      <template #title><h2>The Trenches</h2></template>
      <template #subtitle>
        <p>2022 -</p>
      </template>
      <template #content>
        <p class="m-0">Unfinished game project. Programming and 3D graphics by me.</p>
      </template>
    </Card>
  </body>
</template>

<style scoped>
.thumbnail:hover {
  scale: 90%;
  cursor: pointer;
}
</style>
