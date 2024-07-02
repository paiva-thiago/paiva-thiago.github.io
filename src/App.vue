<script setup>
import WorkCarousel from './components/WorkCarousel.vue'
import WorkList from './components/WorkList.vue'
import TheHeader from './components/TheHeader.vue'
import TheLogo from './components/TheLogo.vue'
import TheFooter from './components/TheFooter.vue'
import LinkCollection from './components/LinkCollection.vue'
import data from './data/info.js'
</script>

<template>
  <main>
    <TheHeader :data="data.headerData" />
    <TheLogo thename="Professional Timeline" />
    <WorkCarousel :jobs="data.jobs" class="hiddenMobile" />
    <WorkList :jobs="data.jobs" class="mobile" />
    <LinkCollection :links="data.headerData.links" />
    <TheFooter />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.mobile {
  display: block;
}
.hiddenMobile {
  display: none;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .mobile {
    display: none;
  }
  .hiddenMobile {
    display: block;
  }
}
</style>
