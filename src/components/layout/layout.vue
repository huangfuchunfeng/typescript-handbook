<template>
  <el-container>
    <el-header height="48px">
      <LayoutHeader>吖</LayoutHeader>
    </el-header>
    <el-container>
      <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <LayoutMenu></LayoutMenu>
      </el-aside>-->
      <el-main>
        <!-- <router-view v-slot="{ Component }">
          <transition name="content">
            <keep-alive>
              <component :is="Component" class="page" />
            </keep-alive>
          </transition>
        </router-view>-->
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import layoutMenu from './layoutMenu.vue'
import layoutHeader from './layoutHeader.vue'
import { Options, Vue } from 'vue-class-component'
@Options({
  components: {
    LayoutHeader: layoutHeader,
    LayoutMenu: layoutMenu,
  },
})
export default class CMenu extends Vue {}
</script>
<style lang="scss">
// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }
// .layout {
//   &_container {
//     min-height: 100vh;
//   }
//   &_header {
//     color: #fff;
//     text-align: center;
//     font-size: 18px;
//     font-weight: bolder;
//     line-height: 60px;
//   }
//   &_main_content {
//     position: relative;
//     overflow: hidden;
//     .page {
//       background-color: #fff;
//       width: 100%;
//       height: 100%;
//     }
//   }
// }
</style>