<script lang="ts" setup>
import { ref } from 'vue'
import data from '../constants'
const config = ref(data)
</script>

<template>
  <!--顶部导航 -->
  <div class="banner" id="banner">
    <div class="box">
      <div class="left">
        <div class="item-1">Monibuca</div>
        <div class="item-2">定制化流媒体开发框架</div>
        <div class="item-3">
          <span>GO语言</span>
          开源插件式流媒体服务器开发框架</div>
        <div class="item-4">立即体验</div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
