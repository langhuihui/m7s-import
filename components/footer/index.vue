<script setup>
import data from '../../constants/index'
const config = ref(data)
const showLx = ref(false)
const showWx = ref(false)
const showZf = ref(false)
</script>
<template>
  <div class="footer min-h-[300px] py-[40px] text-[16px]">
    <div class="left">
      <ul class="direction w-50" v-for="(item, index) in config" :key="index">
        <li class="title">
          <span v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
          </span>
          <span v-else>{{ item.name }}</span>
        </li>
        <li class="product" v-for="(j, i) in item.children" :key="i">
          <span>
            <a :href="j.url" target="_blank" rel="noopener noreferrer">{{ j.name }}</a>
          </span>
        </li>
      </ul>
    </div>
    <div class="right mr-[100px]">
      <div>关于我们</div>
      <div class="icon-list mt-2">
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
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
