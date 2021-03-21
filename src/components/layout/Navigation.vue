<template>
  <div id="navigation">
    <div class="navigation-top"></div>
    <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
          <el-menu-item index="/home">选项1</el-menu-item>
          <el-menu-item index="/home1">选项2</el-menu-item>
          <el-menu-item >选项3</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {

  private isCollapse: boolean = false

  private handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }

  private handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>

<style>
#navigation {
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: #304156;
}
#navigation .el-menu-vertical {
  background-color: #304156;
  border-right-color: #304156;
}
#navigation .el-submenu__title:hover, #navigation .el-menu-item:hover, #navigation .el-menu-item:focus{
  background-color: #263445!important;
}
#navigation .el-submenu .el-menu-item:hover, #navigation .el-submenu>.el-submenu__title:hover {
  background-color: #001528!important;
}
#navigation .el-menu.el-menu--inline {
  background-color: #1f2d3d;
}
#navigation .el-menu-item.is-active {
  color: #1890ff;
}
#navigation .el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  flex: 1;
}
#navigation .navigation-top {
  height: 50px;
}
#navigation .el-menu-item, #navigation .el-submenu__title{
  color: rgb(191, 203, 217);
}
</style>