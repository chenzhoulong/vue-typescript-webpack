<template>
  <div id="box">
    <div class="box-left">
      <Navigation />
    </div>
    <div class="box-right">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue";

@Component({
  components:{
    Header,
    Navigation,
    Main,
    Footer
  }
})
export default class Box extends Vue {}
</script>

<style scoped>
  #box {
    display: flex;
    height: 100%;
  }
  .box-left, .box-right {
    height: 100%;
  }
  .box-right {
    flex: 1;
    display: flex;
    flex-flow: column;
  }
</style>