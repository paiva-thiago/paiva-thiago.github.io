<script>
export default {
  name: 'HeaderLogo',
  props: {
    thename: String
  }
}
</script>
<template>
  <h1>{{ thename }}</h1>
</template>
<style scoped>
h1 {
  display: inline-block;
  color: var(--text);
  background-color: var(--panel);
  border: 3px solid var(--border);
  box-shadow: var(--shadow);
  padding: 0.4em 0.6em;
  font-family: var(--c64);
  font-size: clamp(1.7rem, 7vw, 3.4rem);
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
}
</style>
