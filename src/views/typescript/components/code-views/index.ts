import { defineComponent, h } from 'vue'
import _ from 'lodash'
import './style.scss'
const CodeWrapper = defineComponent({
  name: 'CodeWrapper',
  render() {
    return h('div', {
      class: 'code-wrapper'
    }, this.$slots.default())
  },
})
const clt = defineComponent({
  name: 'let',
  render() {
    return h('span', {
      class: 'clt'
    }, this.$slots?.default?.() || 'let')
  },
})
const cln = defineComponent({
  name: 'cln',
  render() {
    return h('span', {
      class: 'cln'
    }, [
      ...this.$slots?.default?.(),
      this.$slots.lsp && h('span', {
        class: 'cln-lsp'
      }, this.$slots.lsp?.())
    ])
  },
})
const clc = defineComponent({
  name: 'clc',
  render() {
    return h('span', {
      style: {
        color: '#008000',
        fontSize: '12px'
      }
    }, this.$slots?.default?.())
  },
})
const lsp = defineComponent({
  name: 'lsp',
  render() {
    const defaults = this.$slots?.default?.()
    if (defaults) {
      for (let i = 0; i < defaults.length; i++) {
        const n = defaults[i]?.props?.name
        if (n) {
          defaults[i] = h('span',
            { class: 'cln' },
            [n])
          defaults[i].children = defaults[i].children.concat(h('span', { class: 'cln-lsp' }, _.cloneDeep(defaults)))
          break
        }
      }
    }
    return h('span', defaults)
  }
})
const err = defineComponent({
  render() {
    return h('span', {
      class: 'code-error'
    }, [this.$slots?.default?.()])
  }
})
const tip = defineComponent({
  render() {
    return h('span', {
      class: 'code-tip'
    }, [...this.$slots?.default?.(), h('span', { class: 'code-tip-content' }, this.$slots?.content?.())])
  }
})
export default {
  CodeWrapper, clt, cln, clc, lsp, err, tip
}