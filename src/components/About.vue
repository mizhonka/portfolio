<script setup lang="ts"></script>

<template>
  <body>
    <!--
    Source - https://stackoverflow.com/a
    Posted by Dhaval Jardosh
    Retrieved 2025-12-29, License - CC BY-SA 4.0
    -->
    <div class="container">
      <div class="image">
        <img src="../assets/images/portrait.jpg" />
      </div>
      <div class="colum">
        <p>
          Ever since I was a kid, I've been interested in various art forms; music, writing,
          drawing, 3D sculpting...I also enjoyed playing video games, and got inspired by many indie
          game developers.<br /><br />
          I wish to make art that let's me experiment with different skills, and offers the viewer
          immersion in an interactive setting. <br /><br />
          I am a soon to be Bachelor of Science (University of Helsinki), majoring in computer
          science. I wrote my bachelor's thesis about
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
