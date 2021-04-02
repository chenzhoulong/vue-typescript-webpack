<template>
  <div class="navbar">
    <div class="hamburger-container" @click="collapseChange">
      <i :class="[ isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold', 'hamburger-icon']"  />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit} from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  @Prop(Boolean) private isCollapse!: boolean

  @Emit("collapseChange")
  private collapseChange(): boolean {
    return !this.isCollapse
  }

}
</script>

<style scoped>
  .hamburger-container{
    padding: 0px 15px;
    display: inline-block;
    cursor: pointer;
  }
  .hamburger-container .hamburger-icon{
    line-height: 50px;
    display: inline-block;
    vertical-align: middle;
    font-size: 25px;
    color: #4d4d4d;
  }
</style>