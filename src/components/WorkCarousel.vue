<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'WorkCarousel',
  props: {
    jobs: Array
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
}
</script>

<template>
  <carousel :items-to-show="1" :itemsToScroll="1" class="crsl">
    <slide v-for="job in jobs" :key="job" class="sld">
      <div>
        <h2>{{ job.title }}</h2>
        <h3>{{ job.company }}</h3>
        <h4>{{ job.from }} - {{ job.to }}</h4>
        <div class="description" v-html="job.txt"></div>
        <h5>{{ job.techs }}</h5>
      </div>
    </slide>

    <template #addons>
      <navigation class="hidmob" />
      <pagination class="hidmob" />
    </template>
  </carousel>
</template>
<style>
.crsl {
  width: 80em;
  margin-left: 0;
  margin-right: auto;
}
.sld {
  background-color: #aaa;
  color: #9300ff;
  width: 60em;
  height: 30em;
}
.sld div {
  display: grid;
  grid-template-columns: 100%;
}
.sld h2,
.sld h3,
.sld h4 {
  font-family: 'Raleway';
  display: block;
}
.sld h5 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
}
.sld .description {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  width: 75%;
  color: #14091b;
  text-align: left;
}
button.carousel__next,
button.carousel__prev {
  background-color: #99f !important;
}
@media (max-width: 550px) {
  .csrl {
    width: 30em !important;
    margin: 0;
    margin-left: -50px !important;
  }
  .sld {
    width: 25em !important;
    height: 60em;
    margin-left: -50px !important;
  }
  .hidmob {
    display: none;
  }
}
</style>
