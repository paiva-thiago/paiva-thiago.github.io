<script>
export default {
  name: 'WorkList',
  props: {
    jobs: Array
  }
}
</script>

<template>
  <div class="worklist">
    <div v-for="job in jobs" :key="job" class="work">
      <div>
        <h2>{{ job.title }}</h2>
        <h3>{{ job.company }}</h3>
        <h4>{{ job.from }} - {{ job.to }}</h4>
        <div class="workDescription" v-html="job.txt"></div>
        <h5>{{ job.techs }}</h5>
      </div>
    </div>
  </div>
</template>
<style scoped>
.worklist {
  max-width: 740px;
  margin: 0 auto;
}

.work {
  background-color: var(--panel);
  border: 3px solid var(--border);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.work div {
  display: grid;
  grid-template-columns: 100%;
  gap: 0.4rem;
}

.work h2 {
  font-family: var(--c64);
  font-size: 1.25rem;
  color: var(--accent);
}

.work h3 {
  font-family: var(--c64);
  font-size: 1rem;
}

.work h4 {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--text-soft);
}

.work h5 {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--accent-2);
}

.workDescription {
  font-family: var(--sans);
  font-weight: normal;
  color: var(--text);
  text-align: left;
  line-height: 1.65;
}
</style>
