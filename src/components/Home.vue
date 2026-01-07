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
    <Transition name="slide" appear>
      <div>
      <img style="margin: auto;" src="../assets/icons/spider.png" h="450px" width="450px"></img>
    </div>
    </Transition>
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

.slide-enter-active, .slide-leave-active {
  transition: opacity 3s ease;
	transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

</style>
