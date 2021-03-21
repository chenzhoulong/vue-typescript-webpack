<template>
  <div id="footer">
    Footer
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
#footer {
  height: 50px;
  background: aqua;
}
</style>