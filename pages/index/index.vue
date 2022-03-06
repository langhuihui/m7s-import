<script lang="ts" setup>
import hljs from 'highlight.js/lib/core';
import go from 'highlight.js/lib/languages/go';
import 'highlight.js/styles/github.css';
import Roles from '../../components/Roles.vue';
hljs.registerLanguage('go', go);
onMounted(() => {
  hljs.highlightAll();
});
</script>

<template>
  <div class="project">
    <div class="section">
      <div class="container">
        <!-- <img class="img" src="~@/assets/logo.png" alt /> -->
        <Roles style="height: 300px;"/>
        <div class="intro">
          <div class="title">Monibuca V4</div>
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
            <el-card shadow="hover" class="card">
              <template #header>
                <div class="card-header">
                  <span>简洁</span>
                </div>
                <div class="card-header">
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
              </template>
              <div class="card-item">
                代码设计追求极致精简、优雅。
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>精致</span>
                </div>
                <div class="card-header">
                  <img class="img" src="~@/assets/monibuca.png" alt />
                </div>
              </template>
              <div class="card-item">设计精巧的插件机制，实现高内聚低耦合，具有高超的扩展能力</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>易用</span>
                </div>
              </template>
              <div class="card-item">
                <ul>
                  <li>没有复杂的环境配置</li>
                  <li>不需要安装运行时</li>
                  <li>直接下载可执行文件</li>
                </ul>
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