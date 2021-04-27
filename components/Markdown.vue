<template>
  <div
    class="markdown"
    v-html="markdown"
  />
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
export default {
  props: {
    code: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      markdown: null
    }
  },
  fetch() {
    marked.setOptions({
      breaks: true,
      langPrefix: '',
      highlight (code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })
    this.render()
  },
  methods: {
    render () {
      this.markdown = marked(this.code || '**ページ内容がありません**')
    }
  },
  watch: {
    code () { this.render() }
  }
}
</script>

<style>
@import '~/assets/css/markdown';
</style>
