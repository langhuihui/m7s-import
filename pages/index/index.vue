<script lang="ts" setup>
import hljs from 'highlight.js/lib/core';
import go from 'highlight.js/lib/languages/go';
import 'highlight.js/styles/github.css';
import Roles from '../../components/Roles.vue';
hljs.registerLanguage('go', go);
const showCode = ref(false);
onMounted(() => {
  hljs.highlightAll();
  showCode.value = true;
});
</script>

<template>
  <div class="project">
    <div class="section">
      <div class="container">
        <!-- <img class="img" src="~@/assets/logo.png" alt /> -->
        <Roles style="height: 300px;" />
        <div class="intro">
          <div class="title"><img src="~@/assets/logo.png"/> V4</div>
          <div class="info">Go语言开源插件式流媒体服务器开发框架</div>
          <div class="slogen">简洁、精致、易用</div>
          <div class="more">
            <a class="button" rel="noopener noreferrer">即将发布</a>
          </div>
        </div>
      </div>
      <div class="more">
        <el-row :gutter="16">
          <el-col :span="8">
            <el-card shadow="never" class="card" v-show="showCode">
              <template #header>
                <div class="card-header">
                  <span>简洁</span>
                </div>
                <div class="card-header">
                  <div class="card-item">代码设计追求极致精简、优雅。</div>
                </div>
              </template>
              <div class="card-header go">
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
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              <template #header>
                <div class="card-header">
                  <span>精致</span>
                </div>
                <div class="card-header">
                  <div class="card-item">设计精巧的插件机制，实现高内聚低耦合，具有高超的扩展能力</div>
                </div>
              </template>
              <div class="card-header">
                <img class="img" src="~@/assets/monibuca.png" alt />
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              <template #header>
                <div class="card-header">
                  <span>易用</span>
                </div>
                <div class="card-header">
                  <div class="card-item">无需配置环境，无需安装运行时，直接下载可执行文件</div>
                </div>
              </template>
              <div class="card-item">
                <div class="download">
                  <div class="download-item windows">
                    <a
                      class="iconfont icon-windows"
                      href="http://monibuca.com/windows.tgz"
                      target="_blank"
                    ></a>
                  </div>
                  <div class="download-item apple">
                    <a
                      class="iconfont icon-apple"
                      href="http://monibuca.com/mac.tgz"
                      target="_blank"
                    ></a>
                  </div>
                  <div class="download-item linux">
                    <a
                      class="iconfont icon-linux"
                      href="http://monibuca.com/linux.tgz"
                      target="_blank"
                    ></a>
                  </div>
                </div>
                <div>windows直接双击exe运行，mac需要设置一下文件的可执行权限</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <div class="section">
      <div class="container reverse">
        <img class="img" src="~@/assets/jessibuca.png" alt />
        <div class="intro intro">
          <div class="title">Jessibuca V3</div>
          <div class="info">多用途开源H5视频播放器</div>
          <div class="more">
            <a
              class="button"
              href="https://jessibuca.com"
              target="_blank"
              rel="noopener noreferrer"
            >了解更多</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <img class="img" src="~@/assets/rebebuca.png" alt />
        <div class="intro intro">
          <div class="title">Rebebuca</div>
          <div class="info">Electron跨平台桌面版推流管理工具</div>
          <div class="more">
            <a class="button" rel="noopener noreferrer">即将发布</a>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<style src="./index.less" scoped></style>