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
  <div class="description">
    {{ data.desc }}
  </div>
</template>
<style>
.description {
  box-sizing: border-box;
  color: #326273;
  padding: 1.5%;
  display: block;
  width: 100%;
  font-weight: 1000;
  font-family: monospace;
  font-size: 1pc;
  margin: 0 auto;
  margin-top: 35px;
}
</style>
