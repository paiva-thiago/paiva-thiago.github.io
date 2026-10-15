<script>
export default {
  name: 'TheFooter',
  props: {
    info: String
  }
}
</script>
<template>
  <footer><span class="copyleft">©</span> {{info}}</footer>
</template>
<style scoped>
.copyleft {
  display: inline-block;
  transform: rotateY(180deg);
}
footer {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 3px dashed var(--border);
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--text-soft);
  text-align: center;
}
</style>
