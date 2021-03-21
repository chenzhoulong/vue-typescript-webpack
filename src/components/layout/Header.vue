<template>
  <div id="header">
    Header
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped>
  #header {
    height: 50px;
    background: aqua;
  }
</style>