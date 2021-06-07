<template>
  <el-input v-model="inputContent" placeholder="搜索文档"></el-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      inputContent: ref('')
    }
  }
})
</script>