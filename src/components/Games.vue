<script setup lang="ts">
import GameCard from './GameCard.vue'
</script>

<template>
  <body>
    <GameCard
      thumbnail="../assets/thumbnails/cards-thumb.jpg"
      title="Cartographers Card Drawer"
      year="2023"
      description="Card drawer / point calculator for the board game Cartographers. Programming and UI
          design by me."
      videoTitle="Cartographers Card Drawer - Demo"
      video="../assets/videos/cart-demo.mp4"
    />

    <GameCard
      thumbnail="../assets/thumbnails/gofish-thumb.png"
      title="Go Fish - In Space!"
      year="2022"
      description="A simple game of Go Fish against the computer. Programming, artwork and sound effects by
          me."
      link="https://mega.nz/file/KjwgUIqR#H4BYv7LE0evpjguPlPksRaEbAMNLK1pM44RUlq2kBkY"
      videoTitle="Go Fish - Demo"
      video="../assets/videos/gofish-demo.mp4"
    />

    <GameCard
      thumbnail="../assets/thumbnails/trenches-thumb.png"
      title="The Trenches"
      year="2022 -"
      description="Unfinished game project. Programming and 3D graphics by me."
      videoTitle="The Trenches - Demo"
      video="../assets/videos/trenches-demo.mp4"
    />
  </body>
</template>

<style scoped></style>
