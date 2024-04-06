import { getDirname, path } from 'vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './.vuepress/theme.js'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs)

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': { lang: 'zh-CN', title: 'Shylock', description: '热爱生活' },
  },
  dest: 'docs',
  public: resolve('public'),
  temp: resolve('.vuepress/.temp'),
  cache: resolve('.vuepress/.cache'),
  head: [
    ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.ico' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.ico' }],
  ],
  bundler: viteBundler(),

  theme,
})
