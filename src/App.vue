<script setup>
import WorkCarousel from './components/WorkCarousel.vue'
import WorkList from './components/WorkList.vue'
import TheHeader from './components/TheHeader.vue'
import TheLogo from './components/TheLogo.vue'
import TheFooter from './components/TheFooter.vue'
import LinkCollection from './components/LinkCollection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import data from './data/info.js'
</script>

<template>
  <ThemeToggle />
  <main>
    <header class="hero">
      <TheHeader :data="data.headerData" />
      <LinkCollection :links="data.headerData.links" />
    </header>

    <section class="timeline">
      <TheLogo thename="Professional Timeline" />
      <WorkCarousel :jobs="data.jobs" class="hiddenMobile" />
      <WorkList :jobs="data.jobs" class="mobile" />
    </section>

    <TheFooter />
  </main>
</template>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.timeline {
  text-align: center;
}

.mobile {
  display: block;
}
.hiddenMobile {
  display: none;
}

@media (min-width: 1024px) {
  .mobile {
    display: none;
  }
  .hiddenMobile {
    display: block;
  }
}
</style>
