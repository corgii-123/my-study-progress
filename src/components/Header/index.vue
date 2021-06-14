<template>
  <div class="my-header">
    <el-row class="header-row">
      <el-col :span="14" class="title-wrapper">
        <div>
          <el-image
            :src="logoUrl"
            fit="cover"
            class="logo"
          >
          </el-image>
          <span class="title">桩筒复合基础项目 | 日记本📒</span>
        </div>
      </el-col>
      <el-col :span="8" style="display: flex; justify-content: flex-start; align-items: center">
        <strong style="margin-right: 5px; color: #F3FFE2;" v-if="!isPhone">点击👉</strong>
        <WeekSelect></WeekSelect>
      </el-col>
      <el-col :span="2" style="display: flex; align-items: center">
        <div class="avatar-wrapper" v-if="!isPhone">
          <a 
            href="https://github.com/corgii-123"
          >
            <el-avatar :src="avatarUrl" fit="cover" style="width: 3vh; height: 3vh; background-color: #F3FFE2;"></el-avatar>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "@vue/runtime-core";
import WeekSelect from '../WeekSelect/index.vue'
import logoUrl from '/src/assets/logo/logo.svg'
import avatarUrl from '/src/assets/avatar/github.svg'

export default defineComponent({
  name: 'Header',
  components: {
    WeekSelect
  },
  setup() {

    return {
      logoUrl,
      avatarUrl,
      isPhone: inject('isPhone'),
    }
  }
})
</script>

<style lang="scss" scoped>
  .my-header {
    height: 100%;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-left: 2px solid #F3FFE2;
    background: #225378;
    .header-row {
      height: 100%;
      .title-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .logo {
          vertical-align: bottom;
          width: 40px;
          height: 40px;
        }
        .title {
          width: 100%;
          font-weight: bold;
          font-size: 28px;
          margin: 12px;
          color: #F3FFE2;
        }
      }
    }
    .avatar-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 12px;
    }
  }

  @media screen and (max-width: 500px) {
  .my-header {
    .header-row {
      .title-wrapper {
        .logo {
          vertical-align: bottom;
          width: 20px;
          height: 20px;
        }
        .title {
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
}
</style>