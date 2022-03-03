<script lang="ts" setup>
import { ref } from 'vue'
const monibucaShow = ref(false)
</script>

<template>
  <div class="project">
    <div class="section">
      <div class="container">
        <img class="img" src="~@/assets/monibuca.png" alt />
        <div class="intro">
          <div class="title">Monibuca V4</div>
          <div class="info">Go语言开源插件式流媒体服务器开发框架</div>
          <div class="slogen">简洁、精致、易用</div>
          <div class="more" @click="monibucaShow = true">
            <!-- <a class="button" rel="noopener noreferrer">即将发布</a> -->
            <a class="button" rel="noopener noreferrer">更多细节</a>
          </div>
          <!-- <el-collapse accordion v-model="activeName">
            <el-collapse-item name="1">
              <template #title>
                <div class="more">
                  <a class="button" rel="noopener noreferrer">即将发布</a>
                </div>
              </template>
              <div>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
              </div>
            </el-collapse-item>
          </el-collapse> -->
        </div>
      </div>
      <div v-show="monibucaShow" class="more">
        <el-row :gutter="16">
          <el-col :span="8">
            <el-card shadow="hover" class="card">
              <template #header>
                <div class="card-header">
                  <span>简洁</span>
                </div>
              </template>
              <div class="card-item">
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
                简洁主题的内容
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>精致</span>
                </div>
              </template>
              <div class="card-item">
                精致主题的内容
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>易用</span>
                </div>
              </template>
              <div class="card-item">
                易用主题的内容
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="container reverse">
        <img class="img" src="~@/assets/jessibuca.png" alt />
        <div class="intro intro">
          <div class="title">Jessibuca V3</div>
          <div class="info">多用途开源H5视频播放器</div>
          <div class="more">
            <a
              class="button"
              href="https://jessibuca.com"
              target="_blank"
              rel="noopener noreferrer"
            >了解更多</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <img class="img" src="~@/assets/rebebuca.png" alt />
        <div class="intro intro">
          <div class="title">Rebebuca</div>
          <div class="info">Electron跨平台桌面版推流管理工具</div>
          <div class="more">
            <a class="button" rel="noopener noreferrer">即将发布</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./index.less" scoped></style>