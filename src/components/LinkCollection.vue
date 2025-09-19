<script setup>
import Lattes from './icons/Lattes.vue'
</script>
<script>
export default {
  props: {
    links: Array
  }
}
</script>
<template>
  <div class="icogrp">
    <span v-for="link in links" :key="link">
      <div class="ico">
        <a :href="link.url" :title="link.title" target="_blank">
          <i :class="link.ico" v-if="link.title != 'Lattes'"></i>
          <Lattes v-if="link.title == 'Lattes'" />
          <label>{{ link.title }}</label>
        </a>
      </div>
    </span>
  </div>
</template>
<style>
.icogrp {
  margin-left: 33%;
  position: absolute;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 25% 25% 25% 25%;
}
.ico a {
  color: #444;
  font-size: 46px;
  float: left !important;
  margin-left: 5% !important;
  margin-right: 5% !important;
  height: 90%;
}
.ico a label {
  display: none !important;
}
.ico a:hover {
  color: #0c0411;
}
.icogrp .ico {
  box-sizing: border-box;
  padding: 0.5%;
  display: inline !important;
  width: 100%;
  font-size: 1pc;
  margin: 0 auto;
  margin-top: 35px;
}
.ico a {
  color: #444;
  font-size: 64px;
  text-decoration: none;
}
.ico a label {
  display: none;
}
@media (max-width: 550px) {
  .icogrp {
    display: grid;
    position: relative;
    grid-template-columns: 100%;
  }
  .ico a {
    width: 80%;
  }
}
</style>
