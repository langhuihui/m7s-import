import './styles/index.css'
import './styles/iconfont/iconfont.css'
import { h, App } from 'vue'
import { VPTheme } from '@m7s/theme'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // 'sidebar-top': () => h()
    })
  },
  enhanceApp({ app }: { app: App }) {
  }
})
