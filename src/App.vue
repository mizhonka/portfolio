<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
</script>

<template>
  <body>
    <div class="navBar">
      <Tabs value="0">
        <TabList>
          <Tab class="tabColorPink" value="0">Home</Tab>
          <Tab class="tabColorBlue" value="1">About</Tab>
          <Tab class="tabColorPink" value="2">Artwork</Tab>
          <Tab class="tabColorBlue" value="3">Games</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="tagline">
              <h1>Miranda Honkanen</h1>
              <h2>artist and game developer</h2>
            </div>
          </TabPanel>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <img src="./assets/icons/spider.png"></img>
    <div class="h-[30rem]"></div>
    <About v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"></About>
  </body>
</template>

<style scoped></style>
