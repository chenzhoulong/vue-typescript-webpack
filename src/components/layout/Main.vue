<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Main extends Vue {}
</script>

<style scoped>
#main {
  flex: 1;
}
</style>