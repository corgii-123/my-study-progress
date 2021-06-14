<template>
  <div class="block">
    <div>
      <el-date-picker
        v-model="weekValue"
        type="week"
        format="gggg ww 周"
        :placeholder="`👉 第${getWeek(new Date())}周`"
        @change="handleChange"
        style="font-size: 12px; width: 120px;"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'WeekSelect',
  setup() {
    const weekValue = ref<string>('')
    const getWeek = inject('getWeek', (date: Date): number => 0)
    const setWeek = inject('setWeek', (week: number) => {})
    
    const handleChange = (date: Date) => {
      setWeek(getWeek(date))     
    }

    watchEffect(() => {
      setWeek(getWeek(new Date()))
    })

    return {
      isPhone: inject('isPhone'),
      weekValue,
      handleChange,
      getWeek
    }
  }
})
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  align-items: center;
}

:deep() ::placeholder {
  color: #EB7F00;
  opacity: 1;
}

@media screen and (max-width: 500px) {
  .block {
    position: relative;
  }
}
</style>