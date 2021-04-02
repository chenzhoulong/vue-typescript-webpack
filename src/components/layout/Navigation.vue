<template>

    <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
      <el-menu-item index="/home">
        <i class="el-icon-s-home" />
        <span slot="title">home</span>
      </el-menu-item>
      <el-submenu index="/demo">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">submenu-1</span>
        </template>
          <el-menu-item index="/demo/helloWorld">submenu-1-1</el-menu-item>
          <el-menu-item index="/submenu-1/submenu-1-2">submenu-1-2</el-menu-item>
          <el-menu-item index="/submenu-1/submenu-1-3">submenu-1-3</el-menu-item>
        <el-submenu index="/submenu-1/submenu-1-4">
          <span slot="title">submenu-1-4</span>
          <el-menu-item index="/submenu-1/submenu-1-4/submenu-1-4-1">submenu-1-4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="submenu-2">
        <i class="el-icon-menu"></i>
        <span slot="title">submenu-2</span>
      </el-menu-item>
      <el-menu-item index="submenu-3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">submenu-3</span>
      </el-menu-item>
      <el-menu-item index="submenu-4">
        <i class="el-icon-setting"></i>
        <span slot="title">submenu-4</span>
      </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {

  @Prop(Boolean) private isCollapse!: Boolean

  private handleOpen(key, keyPath){
    console.log(key, keyPath);
  }

  private handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>