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
<style>
@media (min-width: 550px) {
  .workList {
    display: none;
  }
}
.workList {
  margin-left: 0;
  margin-right: auto;
  width: 55% !important;
  overflow: hidden;
  position: absolute;
}
.work {
  border-bottom: 1px solid #14091b;
}
.work div {
  display: grid;
  grid-template-columns: 100%;
}
.work h2,
.work h3,
.work h4 {
  font-family: 'Raleway';
  display: block;
}
.work h5 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
}
.workDescription {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  color: #14091b;
  text-align: left;
}
</style>
