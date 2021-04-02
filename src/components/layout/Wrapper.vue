<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Navigation :isCollapse="isCollapse" />
    </div>
    <div class="main-container">
      <Navbar @collapseChange="collapseChange" :isCollapse="isCollapse" />
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Navbar from "./Navbar.vue";
import Navigation from "./Navigation.vue";
import Main from "./Main.vue";

@Component({
  components:{
    Navbar,
    Navigation,
    Main,
  }
})

export default class Wrapper extends Vue {
  private isCollapse: boolean = false

  private collapseChange(isCollapse: boolean): void {
    this.isCollapse = isCollapse
  }
}
</script>