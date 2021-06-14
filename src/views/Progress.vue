<template>
  <div class="my-progress">
    <div style="flex: 1;">
      <TimeLine />
    </div>
    <div class="progress-content" v-loading="isLoading">
      <div v-if="week">
        <h2 style="color: ">已选择第<i style="color: #EB7F00; font-size: 40px; font-weight: bold; margin: 5px;">{{week}}</i>周</h2>
        <div v-html="article" ref="articleRef"></div>
      </div>
      <div v-else>
        <h2>请选择周次</h2>
      </div>
    </div>
    <div class="videos-wrapper" v-if="mediaPath.length">
      <h2>展示区域</h2>
      <video v-for="(path, index) of mediaPath" :key="index" controls width="300" preload="metadata" style="margin: 10px;">
        <source :src="path">
        您的浏览器不支持视频播放
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, Ref, watch, watchEffect } from "@vue/runtime-core";
import { ref } from 'vue';
import TimeLine from '../components/TimeLine/index.vue'
import { getArticle, getMediaPath } from '../utils/request'

export default defineComponent({
  name: 'Progress',
  components: {
    TimeLine
  },
  setup() {
    const week = inject('week') as Ref
    const article = ref<string>('')
    const isLoading = ref<boolean>(false)
    const mediaPath = ref<string[]>([])
    const articleRef = ref<HTMLElement>()
    const isPhone = inject('isPhone')

    watch(() => article.value, async () => {
      await nextTick()
      if(articleRef.value) {
        const imgs = Array.from(articleRef.value.getElementsByTagName('img'))
        imgs.forEach(img => {
          img.style.maxWidth = isPhone ? '75vw' : '50vw';
        })
      }
    })

    watchEffect(async () => {
      isLoading.value = true
      try {
        const { data } = await getArticle(week.value)
        article.value = data.data
        isLoading.value = false
      } catch(err) {
        article.value = err.response.data.message
        isLoading.value = false
      }
    })

    watchEffect(async () => {
      try {
        const { data } = await getMediaPath(week.value)
        mediaPath.value = data.data
      } catch(err) {
        console.log(err.response.data.message);
        mediaPath.value = []
      }
    })

    return {
      week,
      article,
      isLoading,
      mediaPath,
      articleRef
    }
  }
})
</script>

<style lang="scss" scoped>
  .my-progress {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .progress-content {
      flex: 1;
      margin: 0 5vh;
      padding: 0 5vh;
      border-left: 2px solid #EB7F00;
    }
    .videos-wrapper {
      border-left: 2px solid #EB7F00;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 500px) {
    .my-progress {
      flex-wrap: wrap;
      .progress-content {
        padding: 3vh;
        margin: 2vh;
        border-top: 2px solid #EB7F00;
        border-left: unset;
      }
      .videos-wrapper {
        flex: 1;
        border-left: unset;
        border-top: 2px solid #EB7F00;
      }
  }
  }
</style>