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
  <div class="main">
    <div class="left">
      <img src="~@/assets/img/logo.png"/>
      <div class="title">Monibuca2</div>
    </div>
    <div class="right">
      <div class="item" @click="goHome">首页</div>
      <div
        v-for="(item, index) in config"
        :key="index"
        class="item"
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
            <div class="nav-sheet-items">
              <div v-for="(j, i) in item.children" :key="i" class="nav-sheet-item">
                {{ j.name }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
