<script setup lang="ts">
  import { Image } from '@imagekit/vue'
</script>

<template>
  <body>
    <div class="container">
      <div class="image">
        <Image 
        url-endpoint="https://ik.imagekit.io/usgzwcpk4"
        src="/Artwork/portrait.jpg"
        width="600"
        heigth="800"
        alt="Self Portrait"
        />
      </div>
      <div class="colum">
        <p>
          Ever since I was a kid, I've been interested in various art forms; music, writing,
          drawing, 3D sculpting...I also enjoyed playing video games, and got inspired by many indie
          game developers.<br /><br />
          I make art with both traditional (e.g. pencil and ink) and digital (e.g. games and websites) mediums.  <br /><br />
          I have graduated from University of Helsinki as a Bachelor of Computer Science. I wrote my bachelor's thesis about
          <i>Procedural dungeon generation using genetic algorithms.</i>
        </p>
      </div>
    </div>
  </body>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  border: 2px solid #18181b;
  border-radius: 20px;
  background: #18181b;
  margin: auto;
}

.colum {
  flex-direction: column;
  margin: auto;
  flex: 1;
  padding-right: 5rem;
}

.image {
  flex: 1;
}

.image img {
  display: block;
  padding: 5px;
}
</style>
