import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs.locale('zh-cn')

export const getWeek = (time: Date) => dayjs(time).week()
