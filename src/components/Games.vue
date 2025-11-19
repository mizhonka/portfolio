<script setup lang="ts">
import { Card } from 'primevue'
</script>

<template>
  <Card style="width: 50%; margin: auto; margin-bottom: 2rem; margin-top: 2rem; padding: 1rem">
    <template #title>
      <h2>Go Fish (In Space)</h2>
      <p>2021 - 2022</p>
      <p>Programming, artwork & sound effects by me.</p>
      <a href="https://mega.nz/file/KjwgUIqR#H4BYv7LE0evpjguPlPksRaEbAMNLK1pM44RUlq2kBkY"
        >Mega Download >></a
      >
    </template>
    <template #content>
        <img class="thumbnail" src="../assets/thumbnails/gofish-thumb.png" width="800px" height="450px" ></img>
      <p class="m-0">Simple game of 'Go Fish' against the computer.</p>
    </template>
  </Card>
</template>

<style scoped>
.thumbnail:hover{
    scale: 90%;
    cursor: pointer;
}
</style>
