<template>
  <el-menu @select="select" :default-active="defaultActive" unique-opened>
    <el-submenu index="guide">
      <template v-slot:title>
        <i class="el-icon-document"></i>vue3.0 指南
      </template>
      <el-menu-item index="GettingStarted">入门指南</el-menu-item>
      <el-menu-item index="Home">首页</el-menu-item>
      <el-menu-item index="About">关于</el-menu-item>
      <el-menu-item index="ElementDome">Demo</el-menu-item>
    </el-submenu>
    <el-submenu index="ts">
      <template v-slot:title>
        <i class="el-icon-document"></i>TypeScript
      </template>
      <el-menu-item index="BaseType">基础类型</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component'

export default class CMenu extends Vue {
  defaultActive: unknown
  defaultOpeneds: unknown[] = []
  created() {
    this.defaultActive = this.$route.name
    // if (this.$route.meta.parentMenu) {
    //   this.defaultOpeneds = [this.$route.meta.parentMenu]
    // }
  }
  select(index: string) {
    this.$router.push({ name: index })
  }
}
</script>