<script setup lang="ts">
import Galleria from 'primevue/galleria'
import { ref } from 'vue'

const images = [
  {
    imageItem: '../assets/images/portrait.jpg',
    thumbnail: '../assets/thumbnails/portrait-thumb.jpg',
    alt: 'A Burlesque Self Portrait',
    title: 'Ballpoint Pen and Pencil, 2025',
  },
  {
    imageItem: '../assets/videos/crayfishidle.gif',
    thumbnail: '../assets/thumbnails/CrawfishThumb.png',
    alt: 'Crayfish Idle',
    title: '3D Model, 2023',
  },
  {
    imageItem: '../assets/videos/shack0001-0240.gif',
    thumbnail: '../assets/thumbnails/SeaShackThumb.png',
    alt: 'Sea Shack (Following a Tutorial by Grant Abbitt)',
    title: '3D Model, 2023',
  },
  {
    imageItem: '../assets/images/GrokeDress.png',
    thumbnail: '../assets/thumbnails/GrokeDressThumb.png',
    alt: 'Groke Dress',
    title: 'Digital Painting, 2022',
  },
]

const activeIndex = ref(0)
const displayCustom = ref(false)

const imageClick = (index: number) => {
  activeIndex.value = index
  displayCustom.value = true
}

function imageUrl(imageSrc: string) {
  return new URL(imageSrc, import.meta.url).href
}
</script>

<template>
  <body>
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :numVisible="7"
      containerStyle="max-width: 850px"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="imageUrl(slotProps.item.imageItem)"
          :alt="slotProps.item.alt"
          style="display: block; width: 100%"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="imageUrl(slotProps.item.thumbnail)"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
      <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
      </template>
    </Galleria>

    <div
      v-if="images"
      class="grid grid-cols-12 gap-4"
      style="max-width: 800px; margin: auto; margin-top: 2rem"
    >
      <div v-for="(image, index) of images" :key="index" class="col-span-4">
        <img
          class="hover:scale-120"
          :src="imageUrl(image.thumbnail)"
          :alt="image.alt"
          style="cursor: pointer"
          @click="imageClick(index)"
        />
      </div>
    </div>
  </body>
</template>

<style scoped></style>
