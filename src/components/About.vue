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
        <img src="../assets/images/GrokeDress.png" />
      </div>
      <div class="colum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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
  margin-right: 5rem;
  flex: 1;
}

.image {
  flex: 1;
}

.image img {
  display: block;
  padding: 5px;
}
</style>
