<template>
  <footer><span class="copyleft">©</span> Thiago Paiva 2024</footer>
</template>
<style>
.copyleft {
  display: inline-block;
  transform: rotateY(180deg);
}
footer {
  border-top: 1px solid #9300ff;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  text-align: center;
  display: block;
  margin-top: 100px;
}
@media (max-width: 550px) {
  footer {
    padding: 0;
    margin: 0;
    margin-left: -30px;
  }
}
</style>
