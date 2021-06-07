<template>
  <layout />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import Layout from './layout/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  },
  setup() {
    provide('isPhone', window.innerWidth <= 500)
  }
})
</script>

<style>

</style>
