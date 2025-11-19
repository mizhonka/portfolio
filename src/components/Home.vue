<script setup lang="ts">
</script>

<template>
  <body>
    <Transition name="fade" appear>
        <div class="tagline">
        <h1>Miranda Honkanen</h1>
        <h2>artist and game developer</h2>
    </div>
    </Transition>
    <img style="margin: auto;" src="../assets/icons/spider.png" h="550px" width="550px"></img>
  </body>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
