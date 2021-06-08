<template>
  <div class="layout-class">
    <el-container>
      <el-header height="10vh">
        <Header />
      </el-header>
      <el-main>
        <MainStory />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, readonly, ref } from "@vue/runtime-core";
import Header from '../components/Header/index.vue'
import MainStory from '../components/MainStory/index.vue'
import { getWeek } from '../utils/time'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    MainStory
  },
  setup() {
    const week = ref<number>()

    const setWeek = (newWeek: number) => {
      week.value = newWeek
    }

    provide('week', readonly(week))
    provide('getWeek', getWeek)
    provide('setWeek', setWeek)
  }
})
</script>

<style>

</style>