<template>
  <el-menu @select="select" :default-active="defaultActive">
    <c-menu-node :menuNames="menuNames"></c-menu-node>
  </el-menu>
</template>

<script lang="ts">
import TypeScriptRouters from '@/router/typescript-router'
import CMenuNode from './menu-node.vue'
import { Vue,Options } from 'vue-class-component'
@Options({
components:{
  CMenuNode
}
})
export default class CMenu extends Vue {
  defaultActive: unknown
  menuNames = TypeScriptRouters[0].children
  created() {
    this.defaultActive = this.$route.name
  }
  select(index: string) {
    this.$router.push({ name: index })
  }
}
</script>
<style lang="scss">
</style>