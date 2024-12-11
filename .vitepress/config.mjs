import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Pome-blog/",
  title: "Pome-lz",
  description: "个人技术分享",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    outline: [2, 6],
    logo: "/logo.png",
    // 搜索框
   // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '分享', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开篇',
        collapsed: true, // 初始状态可以设置为折叠（如果想初始展开则设为 false）
        items: [
          { text: '心路历程一', link: '/markdown-examples' },
          { text: '心路历程二', link: '/api-examples' }
        ]
      },
      {
        text: '项目',
        collapsed: true, // 初始状态可以设置为折叠（如果想初始展开则设为 false）
        items: [
          { text: '项目一', link: '/front_eg/eg/pql.md' },
          { text: '项目二', link: '/front_eg/eg/mnz.md' }
        ]
      }
    ],

    // 自动生成侧边栏
    // sidebar: { "/front_eg": set_sidebar("/front_eg/eg") },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
