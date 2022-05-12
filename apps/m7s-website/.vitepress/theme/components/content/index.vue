<script lang="ts" setup>
import { UrlEnum } from '@m7s/shared/types'
import { ref,computed } from 'vue'
import Roles from '../Roles.vue'
const active = ref(0)
const server = ref("localhost")
const streamPath = ref("live/test")
const pushProtocol = ref("rtmp")
const pullProtocol = ref("rtmp")
const list = [
  {
    title: '极致简洁'
  },
  {
    title: '高可扩展'
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

function init() {
  const time = setInterval(() => {
    if (active.value == 2) {
      active.value = 0
      clearInterval(time)
    } else active.value = active.value + 1
  }, 3000)
}

init()

function jump(url: string) {
  window.open(`https://github.com/Monibuca/${url}`)
}
function onChangeServer(evt:Event){
  server.value = evt.target.value
}
function onChangeStreamPath(evt){
  streamPath.value = evt.target.value
}
function onChangePush(evt){
  pushProtocol.value = evt.target.value
}
function onChangePull(evt){
  pullProtocol.value = evt.target.value
}
const pushURL = computed(()=>{
  switch(pushProtocol.value){
    case "rtmp":
      return "rtmp://"+server.value+"/"+streamPath.value
    case "rtsp":
      return "rtsp://"+server.value+"/"+streamPath.value
  }
})
const pullURL = computed(()=>{
  switch(pullProtocol.value){
    case "rtmp":
      return "rtmp://"+server.value+"/"+streamPath.value
    case "rtsp":
      return "rtsp://"+server.value+"/"+streamPath.value
    case "hls":
      return "http://"+server.value+":8080/hls/"+streamPath.value+".m3u8"
    case "hdl":
      return "http://"+server.value+":8080/hdl/"+streamPath.value+".flv"
    case "ws-flv":
      return "ws://"+server.value+":8080/ws-flv/"+streamPath.value+".flv"
    case "ws-raw":
      return "ws://"+server.value+":8080/ws-flv/"+streamPath.value
  }
})
</script>

<template>
  <!--顶部导航 -->
  <div class="content">
    <section id="m7s">
      <div class="box">
        <div class="title">
          <div>优势</div>
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
                <p>Go语言本身的简洁+代码设计追求极致精简、优雅，阅读源码变成一件愉快的事</p>
                <p>启动工程提供了标准化的接入示例，插件引入十分简单</p>
              </div>
              <a href="https://github.com/langhuihui/monibuca">
                <div class="btn">查看示例</div>
              </a>
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
                <p>无锁化设计以及手术刀般精确的内存复用，充分利用多核计算，性能强悍</p>
              </div>
              <a href="https://github.com/Monibuca">
                <div class="btn">Github</div>
              </a>
            </div>
            <div class="right">
              <Roles class="role" />
            </div>
          </div>
          <div class="m7s-item" v-if="active == 2">
            <div class="left">
              <div class="feature-desc">
                <div class="h1">易用</div>
                <p>无需配置环境，无需安装运行时，直接下载可执行文件（v3）</p>
                <p>为arm架构提供贴心的编译版本，可以直接下载运行</p>
              </div>
              <a href="https://github.com/langhuihui/monibuca/releases">
                <div class="btn">所有版本</div>
              </a>
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
    <section id="plugin">
      <div class="box">
        <div class="title">
          <div>插件生态</div>
          <img src="/images/m7s/title-bar.png" alt="">
        </div>
        <div class="plugin-content">
          <div class="plugin-item" @click="jump('plugin-rtmp')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtmp</div>
            <div class="plugin-item-content">rmtp协议接受推拉、对外推拉</div>
          </div>
          <div class="plugin-item" @click="jump('plugin-rtsp')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-rtsp</div>
            <div class="plugin-item-content">rtsp协议接受推拉、对外推拉</div>
          </div>
          <div class="plugin-item" @click="jump('plugin-hls')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-hls</div>
            <div class="plugin-item-content">内存模式、写盘模式HLS协议拉流播放</div>
          </div>
          <div class="plugin-item" @click="jump('plugin-gb28181')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-gb28181</div>
            <div class="plugin-item-content">GB28181协议拉流播放、查看录像</div>
          </div>
          <div class="plugin-item" @click="jump('plugin-webrtc')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-webrtc</div>
            <div class="plugin-item-content">支持WebRTC协议的推流和拉流</div>
          </div>
          <div class="plugin-item" @click="jump('plugin-record')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-record</div>
            <div class="plugin-item-content">支持flv、mp4格式录制功能</div>
          </div>
          <div class="plugin-item" @click="jump('plugin-hdl')">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">plugin-hdl</div>
            <div class="plugin-item-content">HTTP-FLV格式拉流</div>
          </div>
          <div class="plugin-item">
            <img class="plugin-item-logo" src="/images/m7s/plugin.png" />
            <div class="plugin-item-title">自定义插件</div>
            <div class="plugin-item-content">可便捷开发任意扩展功能的插件</div>
          </div>
        </div>
      </div>
    </section>
    <section id="stream-path">
      <div class="box">
        <div class="title">
          <div>推拉地址生成</div>
          <img src="/images/m7s/title-bar.png" alt="">
        </div>
        <div class="stream-path-content">
          <div>
            <div>选择推流协议：</div>
            <select @change="onChangePush">
              <option value="rtmp">rtmp</option>
              <option value="rtsp">rtsp</option>
            </select>
            <div>推流地址：</div>
            <div class="URL">{{pushURL}}</div>
          </div>
          <div>
            <div>Server:</div>
            <input type="text" class="stream-path-input" :value="server" @input="onChangeServer"/>
            <div>StreamPath:</div>
            <input type="text" class="stream-path-input" :value="streamPath" @input="onChangeStreamPath"/>
          </div>
          <div>
            <div>选择拉流协议：</div>
            <select @change="onChangePull">
              <option value="rtmp">rtmp</option>
              <option value="rtsp">rtsp</option>
              <option value="hls">hls</option>
              <option value="hdl">hdl</option>
              <option value="ws-flv">ws-flv</option>
               <option value="ws-raw">ws-raw</option>
            </select>
            <div>拉流地址：</div>
            <div class="URL">{{pullURL}}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="less" scoped src="./index.less">
</style>
