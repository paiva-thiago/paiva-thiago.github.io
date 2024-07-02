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
<style>
h1 {
  color: #dadada;
  border: 3px solid #000;
  background-color: #9300ff;
  padding: 1%;
  width: fit-content;
  height: fit-content;
  font-weight: 900;
  font-family: 'Maven Pro', sans-serif;
  font-size: 3pc;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
@media (max-width: 550px) {
  h1 {
    font-size: 2pc !important;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
