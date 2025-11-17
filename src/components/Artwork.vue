<script setup lang="ts">
import Galleria from 'primevue/galleria'
import { ref } from 'vue'

import crawfishThumb from '../assets/images/crawfish-thumb.png'
import shackThumb from '../assets/images/shack-thumb.png'
import grokeDress from '../assets/images/GrokeDress.png'

const images = [
  { imageItem: crawfishThumb, alt: 'Crawfish Idle', title: '3D Model, 2023' },
  {
    imageItem: shackThumb,
    alt: 'Sea Shack (Following a Tutorial by Grant Abbitt)',
    title: '3D Model, 2023',
  },
  { imageItem: grokeDress, alt: 'Groke Dress', title: 'Digital Painting, 2022' },
]

const activeIndex = ref(0)
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
])
const displayCustom = ref(false)

const imageClick = (index: number) => {
  activeIndex.value = index
  displayCustom.value = true
}
</script>

<template>
  <body>
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="7"
      containerStyle="max-width: 850px"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.imageItem"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.imageItem" :alt="slotProps.item.alt" style="display: block" />
      </template>
      <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
      </template>
    </Galleria>

    <div v-if="images" class="grid grid-cols-12 gap-4" style="max-width: 400px">
      <div v-for="(image, index) of images" :key="index" class="col-span-4">
        <img
          :src="image.imageItem"
          :alt="image.alt"
          style="cursor: pointer"
          @click="imageClick(index)"
        />
      </div>
    </div>
  </body>
</template>

<style scoped></style>
