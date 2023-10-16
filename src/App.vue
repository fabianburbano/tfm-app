<template>
  <div id="app">
    <CrudTfm/>
  </div>
</template>

<script>
import CrudTfm from './components/CrudTfm.vue'

export default {
  name: 'App',
  components: {
    CrudTfm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.w100, .w100 input {
    width: 100% !important;
}


</style>
