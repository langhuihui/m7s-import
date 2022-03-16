<script setup>
import data from '../../constants/index'
const config = ref(data)
const showLx = ref(false)
const showWx = ref(false)
const showZf = ref(false)
</script>
<template>
  <div class="footer">
    <div class="left">
      <div class="item" v-for="(item, index) in config" :key="index">
        <div class="title">
          <span v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
          </span>
          <span v-else>{{ item.name }}</span>
        </div>
        <div class="product" v-for="(j, i) in item.children" :key="i">
          <span>
            <div :href="j.url" target="_blank" rel="noopener noreferrer">{{ j.name }}</div>
          </span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="us">关于我们</div>
      <div class="icon-list">
        <div class="hover" v-if="showLx">
          <img src="~@/assets/img/footer/wx-qun.jpg" alt />
        </div>
        <div class="hover" v-if="showWx">
          <img src="~@/assets/img/footer/wx-pay.jpg" alt />
        </div>
        <div class="hover" v-if="showZf">
          <img src="~@/assets/img/footer/zf-pay.jpg" alt />
        </div>
        <div class="icon" @mouseover="showLx = true" @mouseleave="showLx = false">
          <img v-if="!showLx" src="~@/assets/img/footer/lx.png" alt />
          <img v-if="showLx" class="active" src="~@/assets/img/footer/lx-active.png" alt />
        </div>
        <div class="icon" @mouseover="showWx = true" @mouseleave="showWx = false">
          <img v-if="!showWx" src="~@/assets/img/footer/wx.png" alt />
          <img v-if="showWx" class="active" src="~@/assets/img/footer/wx-active.png" alt />
        </div>
        <div class="icon" @mouseover="showZf = true" @mouseleave="showZf = false">
          <img v-if="!showZf" src="~@/assets/img/footer/zf.png" alt />
          <img v-if="showZf" class="active" src="~@/assets/img/footer/zf-active.png" alt />
        </div>
      </div>
    </div>
     <div
        class="rights"
      >© 2020 - Present Monibuca. All rights reserved.</div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
