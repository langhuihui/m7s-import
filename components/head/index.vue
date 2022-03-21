<script lang="ts" setup>
  import { ref } from 'vue'
  import data from '../../constants'
  const config = ref(data)
</script>

<template>
  <!--顶部导航 -->
  <div class="main">
    <div class="left">
      <img src="~@/assets/img/monibuca.png" />
    </div>
    <div class="right">
      <nuxt-link to="/">
        <div class="item">首页</div>
      </nuxt-link>
      <div v-for="(item, index) in config" :key="index" class="item">
        <template v-if="item.children">
          <span>{{ item.name }}</span>
          <div class="nav-sheet-container">
            <a
              :href="j.url"
              target="_blank"
              v-for="(j, i) in item.children"
              :key="i"
              class="nav-sheet-item"
              >{{ j.name }}</a
            >
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
