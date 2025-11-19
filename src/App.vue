<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Artwork from './components/Artwork.vue'
import Socials from './components/Socials.vue'
</script>

<template>
  <body>
    <div class="navBar">
      <Tabs value="0">
        <TabList style="margin: auto">
          <Tab class="tabColorPink" value="0">Home</Tab>
          <Tab class="tabColorBlue" value="1">About</Tab>
          <Tab class="tabColorPink" value="2">Artwork</Tab>
          <Tab class="tabColorBlue" value="3">Games</Tab>
          <Tab class="tabColorPink" value="4">Socials</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <Home></Home>
          </TabPanel>
          <TabPanel value="1">
            <About></About>
          </TabPanel>
          <TabPanel value="2">
            <Artwork></Artwork>
          </TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4">
            <Socials></Socials>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </body>
</template>

<style scoped></style>
