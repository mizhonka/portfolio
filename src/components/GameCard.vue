<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { ref } from 'vue'

const dialogVisible = ref(false)
let demoTitle = ''

function displayVideo(title: string, demo: any) {
  demoTitle = title
}

function imageUrl(imageSrc: string) {
  return new URL(imageSrc, import.meta.url).href
}
</script>

<script lang="ts">
export default {
  props: ['thumbnail', 'title', 'year', 'description', 'link', 'videoTitle', 'video'],
}
</script>

<template>
  <body>
    <Dialog v-model:visible="dialogVisible" modal :header="demoTitle">
      <video width="640" height="360" controls>
        <source :src="imageUrl(video)" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Dialog>

    <!--
    Source - https://stackoverflow.com/a
    Posted by Dhaval Jardosh
    Retrieved 2025-12-29, License - CC BY-SA 4.0
    -->
    <div class="container">
      <div class="image">
        <img
          :src="imageUrl(thumbnail)"
          width="400px"
          height="400px"
          @click="(displayVideo(videoTitle, video), (dialogVisible = true))"
        />
      </div>
      <div class="colum">
        <h2>{{ title }}</h2>
        <p>{{ year }}</p>
        <a v-if="link" :href="link">Mega Download >></a>
        <p>{{ description }}</p>
      </div>
    </div>
  </body>
</template>

<style scoped>
.container {
  display: flex;
  width: 70%;
  height: 400px;
  border: 2px solid #18181b;
  border-radius: 20px;
  background: #18181b;
  margin: auto;
  margin-top: 2rem;
}

.colum {
  flex-direction: column;
  margin: auto;
  flex: 1;
  text-align: center;
  padding-right: 5rem;
}

.image {
  flex: 1;
}

.image img {
  display: block;
  padding: 5px;
}

.image :hover {
  scale: 90%;
  cursor: pointer;
}
</style>
