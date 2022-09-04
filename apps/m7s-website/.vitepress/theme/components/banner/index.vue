<template>
  <!--顶部导航 -->
  <div class="banner" id="banner">
    <div class="box">
      <div class="left">
        <div class="item-1">
          <pre>
███    ███  ██████  ███    ██ Go ██████  ██    ██  ██████  █████
████  ████ ██    ██ ████   ██ ██ ██   ██ ██    ██ ██      ██   ██
██ ████ ██ ██    ██ ██ ██  ██ ██ ██████  ██    ██ ██      ███████
██  ██  ██ ██    ██ ██  ██ ██ ██ ██   ██ ██    ██ ██      ██   ██
██      ██  ██████  ██   ████ ██ ██████   ██████   ██████ ██   ██
          </pre>

        </div>
        <div class="item-2">开源Go语言流媒体服务器开发框架</div>
        <div class="item-3">
          <slot>
            <span>v4.0.0</span>
          </slot>
        </div>
        <a href="https://m7s.live/guide/introduction.html" target="_blank">
          <div class="item-4">快速开始</div>
        </a>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="less" scoped src="./index.less"></style>
