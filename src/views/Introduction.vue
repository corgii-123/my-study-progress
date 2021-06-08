<template>
  <div class="introduction" v-loading="isLoading">
    <div v-html="description"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "@vue/runtime-core";
import { ref } from 'vue';
import { getArticle } from '../utils/request'

export default defineComponent({
  name: 'Introduction',
  setup() {
    const description = ref<string>('')
    const isLoading = ref<boolean>(false)
    
    watchEffect(async () => {
      isLoading.value = true
      try {
        const { data } = await getArticle(0)
        description.value = data.data
        isLoading.value = false
      } catch(err) {
        description.value = err.response.data.message
        isLoading.value = false
      }
    })

    return {
      description,
      isLoading
    }
  }
})
</script>

<style lang="scss" scoped>
  .introduction {
    padding: 0 5vw;
    border-radius: 2px
  }
</style>