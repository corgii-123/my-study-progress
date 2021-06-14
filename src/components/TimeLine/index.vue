<template>
  <div class="block">
    <el-timeline v-loading="isLoading">
      <el-timeline-item 
        v-for="(timeLine, index) of timeLineData" 
        :key="index" 
        :timestamp="timeLine.timestamp" 
        placement="top"
        color="#EB7F00"
      >
        <el-card>
          <h4>{{timeLine.title}}</h4>
          <p style="word-wrap: break-word; width: 20vw;">{{timeLine.content}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from "@vue/runtime-core";
import { inject } from 'vue';
import { getTimeLineData } from '../../utils/request'

interface TimeLineType {
  timestamp: string,
  title: string,
  content: string
}

export default defineComponent({
  name: 'TimeLine',
  setup() {
    const timeLineData = ref<TimeLineType[]>([])
    const week = inject('week') as Ref
    const isLoading = ref<boolean>(false)
      const isPhone = inject('isPhone')

    watchEffect(async () => {
      isLoading.value = true
      try {
        const { data } = await getTimeLineData(week.value)
        timeLineData.value = data.data
        isLoading.value = false
      } catch(err) {
        timeLineData.value = [{
          timestamp: 'xx/xx/xx',
          title: err.response.data.message,
          content: err.response.data.message
        }]
        isLoading.value = false
      }
    })

    return {
      timeLineData,
      isLoading,
      isPhone
    }
  }
})
</script>

<style lang="scss" scoped>
  :deep() .el-timeline {
    padding: 10px;
  }

  @media screen and (max-width: 500px) {
    p {
      width: 60vw!important;
    }
  }

</style>