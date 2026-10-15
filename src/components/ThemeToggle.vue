<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')

function applyTheme(next) {
  theme.value = next
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  theme.value =
    document.documentElement.getAttribute('data-theme') || 'light'
})
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggleTheme"
  >
    <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
    <span>{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--text);
  background-color: var(--panel);
  border: 2px solid var(--border);
  box-shadow: var(--shadow-sm);
  padding: 0.45rem 0.7rem;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.2s ease, color 0.2s ease;
}

.theme-toggle:hover {
  color: var(--bg);
  background-color: var(--accent);
  transform: translate(-2px, -2px);
}
</style>
