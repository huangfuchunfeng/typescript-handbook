<template>
  <div class="getting_started">
    <el-card header="声明式渲染和事件绑定">
      <p>Counter: {{ counter }}</p>
      <p>
        <button @click="stopTimer">Stop timer</button>
      </p>
    </el-card>

    <el-card header="绑定元素">
      <p v-bind:title="message()">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </p>
    </el-card>
    <el-card header="双向绑定">
      <p>{{ helleVue }}</p>
      <p>
        <el-input v-model="helleVue"></el-input>
      </p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </el-card>
    <el-card header="条件和循环">
      <!--  -->
      <span v-if="seen">Now you see me</span>
      <p>
        <button @click="seen=!seen">隐藏/显示</button>
      </p>
      <ol>
        <li v-for="todo in todos" :key="todo" :ref="setItemRef">{{ todo.text }}</li>
      </ol>
    </el-card>
    <!-- <el-card></el-card> -->
  </div>
</template>

<script lang="ts">
import { nextTick, VNode } from 'vue'
import { Vue } from 'vue-class-component'
export default class GettingStarted extends Vue {
  name = 'GettingStarted'
  counter = 10
  timer = 0
  helleVue = 'Hello Vue.js!'
  seen = true
  todos = [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' },
  ]
  message() {
    return 'You loaded this page on ' + new Date().toLocaleString()
  }
  reverseMessage() {
    //
    this.helleVue = this.helleVue.split('').reverse().join('')
  }
  beforeCreate() {
    //
  }
  created() {
    //
    // console.log(this)
  }
  setItemRef(el: VNode) {
    console.log(el)
  }
  async mounted() {
    //
    // this.timer = setInterval(() => {
    //   this.counter++
    // }, 1000)
    console.log(1)
    await nextTick(() => {
      console.log(2)
    })
    console.log(3)
  }
  stopTimer() {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.getting_started /deep/ .el-card {
  margin-bottom: 20px;
}
p {
  margin-bottom: 10px;
}
section {
  display: block;
  margin-bottom: 30px;
}
</style>