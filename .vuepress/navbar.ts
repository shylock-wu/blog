import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  {
    text: '博客',
    link: '/blog/',
    activeMatch: '^/(blog|article)/',
    icon: 'material-symbols:menu-book',
  },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    items: [
      {
        text: 'Vite',
        icon: 'vscode-icons:file-type-vite',
        link: 'https://vitejs.cn/',
      },
    ],
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    items: [
      {
        text: '前端面试',
        icon: 'codicon:comment-unresolved',
        link: '/interview-question/',
        activeMatch: '^/note/interview-question/',
      },
    ],
  },
])
