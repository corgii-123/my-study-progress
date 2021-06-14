<template>
  <div class="introduction" v-loading="isLoading">
    <div ref="introduction" v-html="description" style="word-wrap:break-word;"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, watch, watchEffect } from "@vue/runtime-core";
import { ref } from 'vue';
import { getArticle } from '../utils/request'

export default defineComponent({
  name: 'Introduction',
  setup() {
    const description = ref<string>('')
    const isLoading = ref<boolean>(false)
    const introduction = ref<HTMLElement>()

    watch(() => {
      return description.value
    }, async () => {
      await nextTick()
      const imgs = introduction.value?.getElementsByTagName('img')
      if(imgs) {
        for(let i = 0; i < imgs.length; i++) {
          imgs[i].style.maxWidth = '75vw'
        }
      }
    })
    
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
      isLoading,
      introduction
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