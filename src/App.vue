<template>
  <Box />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Box from "./components/layout/Box.vue"

@Component({
  components:{
    Box
  }
})
export default class App extends Vue {}
</script>

<style>
html, body, #app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
