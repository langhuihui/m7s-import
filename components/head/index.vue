<script lang="ts" setup>
  import { ArrowDown } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import data from '../../constants'
  const config = ref(data)
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
      <img src="~@/assets/img/monibuca.png"/>
    </div>
    <div class="right">
      <div class="item" @click="goHome">首页</div>
      <div
        v-for="(item, index) in config"
        :key="index"
        class="item">
        <template v-if="item.children">
          <span>{{ item.name }}</span>
          <div class="nav-sheet-container">
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
