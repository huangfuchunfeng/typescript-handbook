<template>
  <el-container class="typescript layout">
    <el-header height="48px">
      <c-header></c-header>
    </el-header>
    <el-container>
      <el-aside>
        <CMenu></CMenu>
      </el-aside>
      <el-main>
        <h1 class="layout-title">{{layoutTitle}}</h1>
        <el-card>
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import '@/assets/style/typescript/typescript.scss'
import { Vue, Options } from 'vue-class-component'
import CHeader from './components/header.vue'
import CMenu from './components/menu.vue'
@Options({
  components: { CHeader, CMenu },
})
export default class TypeScript extends Vue {
  layoutTitle = ''
  beforeUpdate() {
    this.layoutTitle = this.$route?.meta?.title || this.$route.name
  }
  beforeCreate() {
    this.layoutTitle = this.$route?.meta?.title || this.$route.name
  }

  anchor() {
    // const target = e.target as HTMLElement
    // if (target?.dataset?.anchor) {
    //   const anchor = document.querySelector(
    //     target.dataset.anchor
    //   ) as HTMLElement
    //   this.$route.scrollBehavior({
    //   })
    //   // anchor?.scrollIntoView({
    //   //   behavior: 'smooth',
    //   //   inline: 'start',
    //   //   block: 'center',
    //   // })
    // }
  }
}
</script>