<script lang="ts" setup>
import {
  ElIcon,
} from "element-plus/dist/index.full.js";
import { ArrowDown } from "@element-plus/icons-vue";

import { ref } from 'vue'
import data from '../data/mock'
const headerFixed = ref(false)
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
  <div class="header">
    <div :class="['top-container', headerFixed ? 'isFixed' : '']">
      <div class="top">
        <div class="logo" @click="goHome">
          <img src="~@/assets/logo.png" alt />
        </div>
        <div class="nav-contain">
          <ul class="nav">
            <li class="nav-item" @click="goHome">首页</li>
            <li
              v-for="(item, index) in config"
              :key="index"
              class="nav-item"
              @mouseenter="showNav($event, true)"
              @mouseleave="showNav($event, false)"
            >
              {{ item.name }}
              <el-icon class="el-icon-arrow-down">
                <ArrowDown />
              </el-icon>
              <div
                class="nav-sheet-container"
                @mouseenter="keepShowNav($event, true)"
                @mouseleave="keepShowNav($event, false)"
              >
                <div class="nav-sheet-items">
                  <div v-for="(j, i) in item.children" :key="i" class="nav-sheet-item">
                    <a :href="j.uri" target="_blank" rel="noopener noreferrer">{{ j.name }}</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='less' scoped>
.header {
  width: 100%;
  // position: relative;
  position: fixed;
  background-color: #fff;
  top: 0;
  font-size: 14px;
  z-index: 100;
  .top-container {
    width: 100%;
    height: 50px;
    color: rgba(51, 53, 64, 0.6);
    .top {
      height: 50px;
      // max-width: 1320px;
      margin: 0 20px;
      justify-content: space-between;
      position: relative;
      .logo {
        width: 132px;
        height: 50px;
        position: absolute;
        z-index: 99;
        img {
          margin-top: 12px;
          width: 32px;
          height: 26px;
        }
      }
      .nav-contain {
        // pointer-events: all;
        height: 50px;
        line-height: 50px;
        position: relative;
        display: inline-block;
        padding-left: 192px;
        ul.nav {
          margin: 0;
          padding: 0;
          height: 100%;
          li.nav-item {
            position: relative;
            display: inline-block;
            margin: 0 13px;
            height: 50px;
            line-height: 50px;
            &:hover {
              cursor: pointer;
              color: #415fff;
              > .el-icon-arrow-down {
                transform: rotate(-180deg);
                transform-origin: center;
                transition: all 0.2s ease 0s;
              }
            }
            > .el-icon-arrow-down {
              margin-left: 5px;
            }
            .nav-sheet-container {
              display: none;
              // transform: scale(0);
            }
            .nav-sheet-items {
              border-radius: 4px;
              position: absolute;
              background-color: #fff222;
              z-index: 1;
              // margin-top: 7px;
              overflow: hidden;
              width: max-content;
              .nav-sheet-item {
                line-height: 19px;
                padding: 6px 20px;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #606266;
                width: 100%;
                text-align: center;
                &:hover,
                :active {
                  background-color: #f2f4ff;
                }
              }
            }
          }
        }
      }
      .help {
        // width: 200px;
        height: 50px;
        line-height: 50px;
        float: right;
        color: #303133;
        cursor: pointer;
        > .el-icon-info {
          color: #909399;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
