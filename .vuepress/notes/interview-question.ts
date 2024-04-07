import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  link: '/interview-question/',
  dir: '面试',
  sidebar: [
    {
      dir: 'HTML',
      items: [
        'HTML5',
      ],
    },
    {
      dir: 'CSS',
      items: [
        '盒模型',
        '属性值的计算过程',
      ],
    },
    {
      dir: 'JavaScript',
      items: [
        '闭包',
        'Promise',
      ],
    },
    {
      dir: '浏览器',
      items: [
        '对浏览器的理解',
        '浏览器内核',
        '浏览器渲染原理',
        '浏览器存储',
        '内存泄露',
        '事件循环',
      ],
    },
    {
      dir: '计算机网络',
      items: [
        'HTTP协议',
        'TCP协议',
        'UDP协议',
        'DNS',
        'CDN',
      ],
    },
    {
      dir: '算法',
      items: [
        {
          dir: '排序',
          text: '排序算法',
          items: [
            '冒泡排序',
            '快速排序',
          ],
        },
      ],
    },
    {
      dir: 'PDF',
      items: [
        '资料',
      ],
    },
  ],
})
