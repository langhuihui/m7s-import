<script lang="ts" setup>
import hljs from 'highlight.js/lib/core'
import go from 'highlight.js/lib/languages/go'
import 'highlight.js/styles/github.css'
import Roles from '../../components/Roles.vue';
hljs.registerLanguage('go', go)
const showCode = ref(false)
onMounted(() => {
  hljs.highlightAll()
  showCode.value = true
})
</script>

<template>
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="intro">
          <div class="h2">Monibuca引擎+插件=定制化流媒体服务器</div>
          <div class="h3">GO语言开源插件式流媒体服务器开发框架</div>
        </div>
        <img class="img" src="~@/assets/img/m7s.png" />
      </div>
      <div class="more">
        <div class="item" v-show="showCode">
          <div class="header go">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
              <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5" />
                <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5" />
                <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5" />
              </g>
            </svg>
            <pre>
                    <code class="language-go">
package main

import (
 "context"

 "m7s.live/engine/v4"
)

func main() {
 ctx := context.Background()
 engine.Run(ctx, "config.yaml")
}
                    </code>
                  </pre>
          </div>
          <div class="bottom">
            <div class="title">简洁</div>
            <div class="desc">代码设计追求极致精简、优雅</div>
          </div>
        </div>
        <div class="item">
          <div class="header">
            <Roles />
          </div>
          <div class="bottom">
            <div class="title">精致</div>
            <div class="desc">设计精巧的插件机制，实现高内聚低耦合，具有高超的扩展能力</div>
          </div>
        </div>
        <div class="item">
          <div class="header">
            <div class="download">
              <div class="download-item windows">
                <a
                  class="iconfont icon-windows"
                  href="http://monibuca.com/windows.tgz"
                ></a>
              </div>
              <div class="download-item apple">
                <a class="iconfont icon-apple" href="http://monibuca.com/mac.tgz"></a>
              </div>
              <div class="download-item linux">
                <a class="iconfont icon-linux" href="http://monibuca.com/linux.tgz"></a>
              </div>
            </div>
            <div class="download-desc">windows直接双击exe运行，mac需要设置一下文件的可执行权限</div>
          </div>
          <div class="bottom">
            <div class="title">易用</div>
            <div class="desc">无需配置环境，无需安装运行时，直接下载可执行文件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./index.less" scoped></style>
