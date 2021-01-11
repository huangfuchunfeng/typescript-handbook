<template>
  <span class="anchor-wraper" :id="id">
    <a :href="`#`+id" class="anchor">
      <i class="el-icon-link"></i>
    </a>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
@Options({
  props: {
    id: {
      default: '',
    },
  },
})
export default class Anchor extends Vue {}
</script>
<style lang="scss">
.anchor-wraper {
  cursor: pointer;
  position: relative;
  .anchor {
    position: absolute;
    left: -1em;
    top: 0.1em;
    font-size: 0.8em;
    display: none;
    color: inherit;
  }
  &:hover {
    .anchor {
      display: block;
    }
  }
}
</style>