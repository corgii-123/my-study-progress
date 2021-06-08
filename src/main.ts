import { createApp } from 'vue'
import { ElButton, ElMain, ElContainer, ElHeader, ElCol, ElImage, ElRow, ElLink, ElInput, ElAvatar, ElDatePicker, ElTabs, ElTabPane, ElTimeline, ElTimelineItem, ElCard, ElScrollbar, ElLoading } from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'

locale.use(lang)

const components = [
  ElButton,
  ElMain,
  ElContainer,
  ElHeader,
  ElCol,
  ElImage,
  ElRow,
  ElLink,
  ElInput,
  ElAvatar,
  ElDatePicker,
  ElTabs,
  ElTabPane,
  ElTimeline,
  ElTimelineItem,
  ElCard,
  ElScrollbar
]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.use(ElLoading)

app.mount('#app')
