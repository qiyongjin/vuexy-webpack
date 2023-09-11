import { createI18n } from 'vue-i18n'

interface Messages {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// const messages = Object.fromEntries(
//   Object.entries(
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     import.meta.glob<{ default: any }>('./locales/*.json', { eager: true }))
//     .map(([key, value]) => [key.slice(10, -5), value.default]),
// )
// 创建一个上下文，用于导入匹配指定模式的文件
const filesContext = require.context('./locales', false, /\.json$/)

const messages: Messages = {}

// 遍历上下文中的所有匹配文件
filesContext.keys().forEach(key => {
  const fileName = key.slice(key.lastIndexOf('/') + 1, -5) // 提取文件名，去除扩展名
  const fileContent = filesContext(key)// 导入模块

  messages[fileName] = fileContent.default
})

console.log(messages)

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
