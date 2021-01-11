<template>
  <router-view />
</template>

 
 <script lang="ts">
import { Vue } from 'vue-class-component'
export default class App extends Vue {
  mounted() {
    if (process.env.NODE_ENV === 'production') {
      document.dispatchEvent(new Event('render-event'))
    }
  }
}
</script>
 