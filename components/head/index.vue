<script lang="ts" setup>
  import { ArrowDown } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import data from '../../constants'
  const config = ref(data)
  function showNav(event, bool) {
    if (bool) {
      event.target.children[1].style.display = 'block'
    } else {
      this.timeoutID = setTimeout(() => {
        event.target.children[1].style.display = 'none'
      }, 70)
    }
  }
  function keepShowNav(event, bool) {
    if (bool) {
      window.clearTimeout(this.timeoutID)
      event.target.style.display = 'block'
    } else {
      event.target.style.display = 'none'
    }
  }
  function goHome() {
    if (this.$route.path !== '/index') {
      this.$router.push({
        path: `/`
      })
    }
  }
</script>

<template>
  <!--顶部导航 -->
  <div class="px-[150px] h-[50px] flex space-between box">
    <div class="flex logo">
      <img class="h-[28px] flex-row" src="~@/assets/img/logo.png"/>
      <div class="leading-[50px] text-slate-500 text-2xl ml-1">Monibuca</div>
    </div>
    <div class="flex nav">
      <div class="mx-[13px] leading-[50px] text-slate-500" @click="goHome">首页</div>
      <div
        v-for="(item, index) in config"
        :key="index"
        class="item px-[14px] leading-[50px] text-slate-500"
        @mouseenter="showNav($event, true)"
        @mouseleave="showNav($event, false)">
        <template v-if="item.children">
          {{ item.name }}
          <el-icon class="el-icon-arrow-down">
            <ArrowDown />
          </el-icon>
          <div
            class="nav-sheet-container"
            @mouseenter="keepShowNav($event, true)"
            @mouseleave="keepShowNav($event, false)">
            <div class="nav-sheet-items rounded">
              <div v-for="(j, i) in item.children" :key="i" class="nav-sheet-item text-size-[14px] px-[20px] py-[6px] leading-[20px]">
                <a :href="j.url" target="_blank" rel="noopener noreferrer">{{ j.name }}</a>
              </div>
            </div>
          </div>
        </template>
        <a v-else :href="item.url" target="_blank">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
