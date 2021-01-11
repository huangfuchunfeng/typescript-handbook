<template>
  <template v-for="submenu in menuNames" :key="submenu.name">
    <el-submenu v-if="submenu.children" :index="submenu.name">
      <template #title>{{submenu.meta&&submenu.meta.title||submenu.name}}</template>
      <MenuNode :menuNames="submenu.children"></MenuNode>
    </el-submenu>
    <template v-else>
      <li class="el-menu-item" v-if="submenu?.meta?.externalLink">
        <a
          :href="submenu?.meta?.externalLink"
          target="_blank"
          referrer="no-referrer"
        >{{submenu?.meta?.title||submenu.name}}</a>
      </li>
      <el-menu-item :index="submenu.name" v-else>{{submenu?.meta?.title||submenu.name}}</el-menu-item>
    </template>
  </template>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
@Options({
  name: 'MenuNode',
  props: {
    menuNames: {
      default: [],
    },
  },
})
export default class MenuNode extends Vue {
  mounted() {
    // console.log(this.menuNames)
  }
}
</script>
<style lang="scss">
</style>