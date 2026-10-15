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
    <div v-for="link in links" :key="link.url" class="ico">
      <a :href="link.url" :title="link.title" target="_blank" rel="noopener">
        <i :class="link.ico" v-if="link.title != 'Lattes'"></i>
        <Lattes v-if="link.title == 'Lattes'" />
        <label>{{ link.title }}</label>
      </a>
    </div>
  </div>
</template>
<style scoped>
.icogrp {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.ico a {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--on-panel);
  font-family: var(--mono);
  font-size: 0.85rem;
  text-decoration: none;
  background-color: var(--panel);
  border: 2px solid var(--border);
  box-shadow: var(--shadow-sm);
  padding: 0.5rem 0.8rem;
  transition: transform 0.15s ease, background-color 0.2s ease, color 0.2s ease;
}

.ico a:hover {
  color: var(--bg);
  background-color: var(--accent-2);
  transform: translate(-2px, -2px);
}

.ico a i {
  font-size: 1.05rem;
  line-height: 1;
}

.ico a label {
  cursor: pointer;
}

.ico svg {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
}
</style>
