<script setup>
import HeaderLogo from './HeaderLogo.vue'
</script>
<script>
export default {
  props: {
    data: {}
  }
}
</script>
<template>
  <HeaderLogo :thename="data.name" />
  <p class="description">
    {{ data.desc }}
  </p>
</template>
<style scoped>
.description {
  max-width: 56ch;
  margin: 0 auto;
  color: var(--text-soft);
  font-family: var(--sans);
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;
}
</style>
