<template>
  <div class="main-area">
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane label="项目进度" name="first">   
        <el-scrollbar height="70vh">
          <Progress />
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="项目概述" name="second">
        <Introduction />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Introduction from '../../views/Introduction.vue'
import Progress from '../../views/Progress.vue'

export default defineComponent({
  name: 'MainStory',
  components: {
    Introduction,
    Progress
  },
  setup() {
    const activeName = ref('first')
    return {
      activeName
    }
  }
})
</script>

<style>
  .main-area {
    height: 80vh;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  @media screen and (max-width: 500px) {
    .main-area {
      overflow-y: scroll;
    }
  }
</style>