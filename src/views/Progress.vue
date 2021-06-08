<template>
  <div class="my-progress">
    <TimeLine />
    <div class="progress-content" v-loading="isLoading">
      <div v-if="week">
        <h2 style="color: ">已选择第<strong style="color: #E6A23C; font-size: 40px">{{week}}</strong>周</h2>
        <div v-html="article"></div>
      </div>
      <div v-else>
        <h2>请选择周次</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref, watchEffect } from "@vue/runtime-core";
import { ref } from 'vue';
import TimeLine from '../components/TimeLine/index.vue'
import { getArticle } from '../utils/request'

export default defineComponent({
  name: 'Progress',
  components: {
    TimeLine
  },
  setup() {
    const week = inject('week') as Ref
    const article = ref<string>('')
    const isLoading = ref<boolean>(false)

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

    return {
      week,
      article,
      isLoading
    }
  }
})
</script>

<style lang="scss" scoped>
  .my-progress {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .progress-content {
      flex: 1;
      margin-left: 5vh;
      padding-left: 10vh;
      border-left: 2px solid silver;
    }
  }

  @media screen and (max-width: 500px) {
    .my-progress {
    .progress-content {
      padding: 3vh;
      margin: 2vh;
      border-top: 2px solid silver;
      border-left: unset;
    }
  }
  }
</style>