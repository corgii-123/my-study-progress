<template>
  <div class="my-progress">
    <TimeLine />
    <div class="progress-content">
      <div>
        <strong>{{week ? `已选择为${week}周` : '未选择具体周'}}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
import TimeLine from '../components/TimeLine/index.vue'

export default defineComponent({
  name: 'Progress',
  components: {
    TimeLine
  },
  setup() {
    const week = inject('week')
    return {
      week
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
      margin: 5vh;
    }
  }
</style>