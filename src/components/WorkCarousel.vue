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
<style scoped>
.crsl {
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
}

.sld {
  background-color: var(--panel);
  color: var(--text);
  border: 3px solid var(--border);
  box-shadow: var(--shadow);
  padding: 2rem 2rem 3rem;
  min-height: 24em;
}

.sld div {
  display: grid;
  grid-template-columns: 100%;
  gap: 0.55rem;
  justify-items: center;
  text-align: center;
}

.sld h2 {
  font-family: var(--c64);
  font-size: 1.5rem;
  color: var(--accent);
}

.sld h3 {
  font-family: var(--c64);
  font-size: 1.1rem;
}

.sld h4 {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--text-soft);
}

.sld h5 {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent-2);
  margin-top: 0.5rem;
}

.sld .description {
  font-family: var(--sans);
  font-weight: normal;
  width: 100%;
  color: var(--text);
  text-align: left;
  line-height: 1.65;
}

.crsl :deep(button.carousel__next),
.crsl :deep(button.carousel__prev) {
  background-color: var(--accent);
  color: var(--bg);
  border: 2px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.crsl :deep(button.carousel__next:hover),
.crsl :deep(button.carousel__prev:hover) {
  background-color: var(--accent-2);
}

.crsl :deep(.carousel__pagination-button) {
  background-color: var(--text-soft);
}

.crsl :deep(.carousel__pagination-button--active) {
  background-color: var(--accent);
}

@media (max-width: 550px) {
  .sld {
    padding: 1.25rem 1.25rem 3rem;
    min-height: 32em;
  }
  .hidmob {
    display: none;
  }
}
</style>
