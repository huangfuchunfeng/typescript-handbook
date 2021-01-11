<template>
  <div class="code-wrapper">
    <code class="code hljs" ref="code">
      <slot></slot>
    </code>
    <el-button size="mini" class="btn-copy">
      <img src="@/assets/images/clippy.svg" class="image-copy" @click="copy" />
    </el-button>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component'
import ClipboardJS from '@/plugins/clipboard/clipboard'
export default class CodeComponent extends Vue {
  clipboard = new ClipboardJS()
  copy() {
    const codeElem = this.$refs['code'] as HTMLElement
    if (codeElem && codeElem.innerText) {
      this.$notify({
        title: '成功',
        message: '拷贝成功',
        type: 'success',
      })
      this.clipboard.copy(codeElem.innerText)
    }
  }
  //   parents(dom: HTMLElement, selector: string): HTMLElement | null {
  //   const parentElement = dom.parentElement
  //   if (parentElement) {
  //     if (parentElement.classList.contains(selector)) {
  //       return parentElement
  //     } else {
  //       return this.parents(parentElement, selector)
  //     }
  //   } else {
  //     return null
  //   }
  // }
  // childFind(dom: HTMLElement, selector: string): HTMLElement | null {
  //   let child: HTMLElement
  //   if (dom.children.length) {
  //     for (let i = 0; i < dom.children.length; i++) {
  //       child = dom.children[i] as HTMLElement
  //       if (child.classList.contains(selector)) {
  //         return child
  //       } else {
  //         if (child.children.length) {
  //           return this.childFind(child, selector)
  //         }
  //       }
  //     }
  //   }
  //   return null
  // }
  // getCodeInnerText(dom: HTMLElement) {
  //   return new Promise((resolve, reject) => {
  //     const parentDom = this.parents(dom, 'code-wrapper')
  //     if (parentDom) {
  //       const codeDom = this.childFind(parentDom, 'code')
  //       if (codeDom) {
  //         resolve(codeDom.innerText)
  //       }
  //     } else {
  //       reject('')
  //     }
  //   })
  // }
  // copy(e: MouseEvent) {
  //   const target = e.target as HTMLElement
  //   if (target.classList.contains('image-copy')) {
  //     this.getCodeInnerText(target).then((code) => {
  //       if (code) {
  //         this.$notify({
  //           title: '成功',
  //           message: '拷贝成功',
  //           type: 'success',
  //         })
  //       }
  //       this.clipboard.copy(code as string)
  //     })
  //   }
  // }
}
</script>