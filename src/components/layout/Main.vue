<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Main extends Vue {}
</script>