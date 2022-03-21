import { defineNuxtConfig } from 'nuxt3'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  mode: 'universal',
  meta: {
    title: 'm7s 4.0',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: '流媒体,Golang,Flv,HLS,RTMP,GB28181,RTSP,WebRTC,RTP,HDL,H265',
      },
      {
        name: 'description',
        content:
          '一个开源的Go语言实现的流媒体服务器开发框架,Monibuca 引擎 + 插件 = 定制化流媒体服务器',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type: 'text/javascript',
        src: 'https://m7s.live/js/flexible.js',
      },
      {
        type: 'text/javascript',
        src: 'https://cloudfront.loggly.com/js/loggly.tracker-latest.min.js',
        async: true,
      },
    ],
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['element-plus'],
    },
  },
})
