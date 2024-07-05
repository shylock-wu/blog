import { plumeTheme } from 'vuepress-theme-plume'
import navbar from './navbar.js'
import notes from './notes'

export default plumeTheme({
  logo: '/images/avatar.jpg',
  hostname: 'https://blog.jsfather.cn',
  docsRepo: 'https://github.com/shylock-wu/blog',
  docsDir: 'src',
  contributors: false,

  navbar,
  notes,

  profile: {
    avatar: '/images/avatar.jpg',
    name: 'Shylock',
    description: '不求有功于社稷 但求无过于本心',
    circle: true, // 是否为圆形头像
    location: '杭州，中国',
    organization: 'xxx公司',
  },
  social: [{ icon: 'github', link: 'https://github.com/shylock-wu' }],
  footer: { copyright: 'Copyright © 2024-present shylock' },

  plugins: {
    comment: {
      // 服务提供商
      provider: 'Giscus',
      // 是否默认启用评论
      comment: true,
      repo: 'shylock-wu/blog',
      repoId: 'R_kgDOLpOSPQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOLpOSPc4CebZq',
      mapping: 'pathname',
    },
    markdownPower: {
      pdf: true,
    },
  },
})
