<script setup lang="ts">
import { useNavBarStore } from "@/stores/navBar";
import NavBarLink from "@/components/NavBarLink.vue";

const navBarStore = useNavBarStore();

const pages = [
  { text: "Home", url: "index.html" },
  { text: "Algorithms", url: "algorithms.html" },
  { text: "Visualization", url: "visualization.html" },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg" :class="navBarStore.getNavBarStyle">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand" href="#">Sorting Algorithms</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <NavBarLink
            :page="page"
            :isActive="navBarStore.activePage === index"
            @click.prevent="navBarStore.changePage(index)">
          </NavBarLink>
        </li>
      </ul>

      <form class="d-flex">
        <label class="switch">
          <input type="checkbox" @click="navBarStore.changeNavbarMode()" />
          <span class="slider round"></span>
        </label>
      </form>
    </div>
  </nav>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
