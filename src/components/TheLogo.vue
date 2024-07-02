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
<style>
h2.thelogo {
  color: #9300ff;
  border: 3px solid #000;
  background-color: transparent;
  padding: 1%;
  width: fit-content;
  height: fit-content;
  font-weight: 900;
  font-family: 'Maven Pro', sans-serif;
  font-size: 2pc;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
@media (max-width: 550px) {
  h2.thelogo {
    font-size: 1pc !important;
  }
}
</style>
