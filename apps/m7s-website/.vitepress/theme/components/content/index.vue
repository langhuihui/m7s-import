<script lang="ts" setup>
import { UrlEnum } from '@m7s/shared/types'
import { ref } from 'vue'
import data from '../constants'
import Roles from '../Roles.vue'
const config = ref(data)
const active = ref(0)
const list = [
  {
    title: '极致简洁'
  },
  {
    title: '高超的扩展能力'
  },
  {
    title: '简单易用'
  }
]
const url = ref({
  ...UrlEnum,
})

function change(index: number) {
  active.value = index
}
</script>

<template>
  <!--顶部导航 -->
  <div class="content">
    <section id="plugin">
      <div class="box">
        <div class="title">
          <div>插件生态</div>
          <img src="/images/m7s/title-bar.png" alt="">
        </div>
        <div class="plugin-content">
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">这是插件介绍内容</div>
          </div>
        </div>
      </div>
    </section>
    <section id="m7s">
      <div class="box">
        <div class="title">
          <div>定制化流媒体服务器</div>
          <img src="/images/m7s/title-bar.png" alt="">
        </div>
        <div class="m7s-feature">
          <div class="m7s-tab">
            <div class="item" @click="change(index)" v-for="(item, index) in list" :class="active == index ? 'active' : ''">{{ item.title }}</div>
          </div>
          <div class="m7s-item" v-if="active == 0">
            <div class="left">
              <div class="feature-desc">
                <div class="h1">简洁</div>
                <p>代码设计追求极致精简、优雅</p>
              </div>
              <!-- <div class="feature-desc">
                <div class="h1">简洁</div>
                <p>1111</p>
              </div> -->
              <div class="btn">了解更多</div>
            </div>
            <div class="right">
              <img src="/images/m7s/plugin-go-code.png" alt="" srcset="">
            </div>
          </div>
          <div class="m7s-item" v-if="active == 1">
            <div class="left">
              <div class="feature-desc">
                <div class="h1">精致</div>
                <p>设计精巧的插件机制，实现高内聚低耦合，具有高超的扩展能力</p>
              </div>
              <!-- <div class="feature-desc">
                <div class="h1">精致</div>
                <p>1111</p>
              </div> -->
              <div class="btn">了解更多</div>
            </div>
            <div class="right">
              <Roles class="role" />
            </div>
          </div>
          <div class="m7s-item" v-if="active == 2">
            <div class="left">
              <div class="feature-desc">
                <div class="h1">易用</div>
                <p>无需配置环境，无需安装运行时，直接下载可执行文件</p>
              </div>
              <!-- <div class="feature-desc">
                <div class="h1">易用</div>
                <h1>跨端</h1>
                <p>全操作系统</p>
              </div> -->
              <div class="btn">了解更多</div>
            </div>
            <div class="right">
              <div class="download">
                <div class="download-item windows">
                  <a class="iconfont icon-windows" :href="url.M7S_WIN"></a>
                </div>
                <div class="download-item apple">
                  <a class="iconfont icon-apple" :href="url.M7S_IOS"></a>
                </div>
                <div class="download-item linux">
                  <a class="iconfont icon-linux" :href="url.M7S_LINUX"></a>
                </div>
              </div>
              <div class="download-desc">windows直接双击exe运行，mac需要设置一下文件的可执行权限</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
