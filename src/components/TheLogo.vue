<script>
export default {
  name: 'TheLogo',
  props: {
    thename: String
  }
}
</script>
<template>
  <h2 class="thelogo">{{ thename }}</h2>
</template>
<style scoped>
h2.thelogo {
  display: inline-block;
  color: var(--bg);
  background-color: var(--accent);
  border: 3px solid var(--border);
  box-shadow: var(--shadow-sm);
  padding: 0.35em 0.55em;
  font-family: var(--c64);
  font-size: clamp(1rem, 3.5vw, 1.5rem);
  letter-spacing: 0.03em;
  margin: 0 auto 2rem;
}
</style>
