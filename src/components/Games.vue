<script setup lang="ts">
import GameCard from './GameCard.vue'

import fishThumb from '../assets/thumbnails/gofish-thumb.png'
import trenchesThumb from '../assets/thumbnails/trenches-thumb.png'
import cardsThumb from '../assets/thumbnails/cards-thumb.jpg'

import fishVideo from '../assets/videos/gofish-demo.mp4'
import trenchesVideo from '../assets/videos/trenches-demo.mp4'
import cartVideo from '../assets/videos/cart-demo.mp4'
</script>

<template>
  <body>
    <GameCard
      :thumbnail="cardsThumb"
      title="Cartographers Card Drawer"
      year="2023"
      description="Card drawer / point calculator for the board game Cartographers. Programming and UI
          design by me."
      videoTitle="Cartographers Card Drawer - Demo"
      :video="cartVideo"
    />

    <GameCard
      :thumbnail="fishThumb"
      title="Go Fish - In Space!"
      year="2022"
      description="A simple game of Go Fish against the computer. Programming, artwork and sound effects by
          me."
      link="https://mega.nz/file/KjwgUIqR#H4BYv7LE0evpjguPlPksRaEbAMNLK1pM44RUlq2kBkY"
      videoTitle="Go Fish - Demo"
      :video="fishVideo"
    />

    <GameCard
      :thumbnail="trenchesThumb"
      title="The Trenches"
      year="2022 -"
      description="Unfinished game project. Programming and 3D graphics by me."
      videoTitle="The Trenches - Demo"
      :video="trenchesVideo"
    />
  </body>
</template>

<style scoped></style>
