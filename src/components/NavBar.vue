<script setup lang="ts">

const links = ['Home', 'Algorithms', 'Visualization']
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand" href="#">Sorting Algorithms</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="link in links" class="nav-item">
          <a class="nav-link" href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
