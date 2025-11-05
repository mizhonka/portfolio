<script setup lang="ts">
</script>

<template>
  <body>
    <div class="tagline">
        <h1>Miranda Honkanen</h1>
        <h2>artist and game developer</h2>
    </div>
    <img src="./assets/icons/spider.png"></img>
    <div class="h-[30rem]"></div>
    <About v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"></About>
  </body>
</template>

<style scoped></style>
