import { defineConfigWithTheme } from 'vitepress'
import { searchForWorkspaceRoot } from 'vite'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import { nav } from './theme/components/constants'

export const sidebar = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        { text: '快速起步', link: '/guide/startup' },
        { text: '配置', link: '/guide/config' },
        { text: 'API', link: '/guide/api' }
      ]
    },
    {
      text: '官方插件',
      items: [
        { text: 'rtmp', link: '/guide/plugins/rtmp' },
        { text: 'rtsp', link: '/guide/plugins/rtsp' },
        { text: 'hdl', link: '/guide/plugins/hdl' },
        { text: 'hls', link: '/guide/plugins/hls' },
        { text: 'gb28181', link: '/guide/plugins/gb28181' },
        { text: 'record', link: '/guide/plugins/record' },
        { text: 'debug', link: '/guide/plugins/debug' },
        { text: 'jessica', link: '/guide/plugins/jessica' },
        { text: 'logrotate', link: '/guide/plugins/logrotate' },
        { text: 'hook', link: '/guide/plugins/hook' },
        { text: 'room', link: '/guide/plugins/room' },
        { text: 'webrtc', link: '/guide/plugins/webrtc' },
        { text: 'webtransport', link: '/guide/plugins/webtransport' },
      ]
    },
    {
      text: '升级日志',
      items: [{ text: 'v4', link: '/guide/v4' }]
    }
  ],
  '/devel/': [
    {
      text: '开发',
      items: [
        { text: '准备', link: '/devel/startup' },
        { text: '定义插件', link: '/devel/plugins' },
        { text: '插件接口', link: '/devel/api' },
        { text: '发布者', link: '/devel/publisher' },
        { text: '拉流者', link: '/devel/puller' },
        { text: '订阅者', link: '/devel/subscriber' },
        { text: '推流者', link: '/devel/pusher' },
      ]
    }
  ],
  '/about/': [
    {
      text: '关于',
      items: [
        { text: 'FAQ', link: '/about/faq' },
        { text: '开发团队', link: '/about/team' },
        { text: '诞生故事', link: '/about/born' },
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-zh',
  title: 'Monibuca',
  description: 'Monibuca - 定制化流媒体开发框架',
  srcDir: 'src',
  scrollOffset: 'header',
  lastUpdated: true,

  head: [
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: '开源,流媒体,Golang,Flv,HLS,RTMP,GB28181,RTSP,WebRTC,RTP,HDL,H265',
      }
    ],
    [
      'meta',
      {
        name: 'description',
        content: '开源的Go语言实现的流媒体服务器开发框架',
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/Monibuca/' }],

    editLink: {
      repo: 'Monibuca/docs',
      text: 'Edit this page on GitHub'
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },


  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        allow: [
          // search up for workspace root
          searchForWorkspaceRoot(process.cwd())
        ]
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
