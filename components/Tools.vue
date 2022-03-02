<script lang="ts" setup>
import {
  ElIcon,
  ElButton,
  ElPopover,
  ElCard,
} from "element-plus/dist/index.full.js";
import { Service } from "@element-plus/icons-vue";

import { ref } from 'vue'
import data from '../data/mock'
// const config = ref(data)
</script>
<template>
  <!-- 工具栏 -->
  <div class="tools">
    <el-card>
      <!-- 报错，坑是真的多 -->
      <!-- <el-popover placement="left" popper-class="sysContact" title="请选择您需要咨询的系统" :width="800" trigger="click">
        <div class="config">
          <ul v-for="item in config" :key="item.name" class="title">
            <h4 class="sysTitle">{{item.name}}</h4>
            <li v-for="it in item.children" :key="it.name">
              <el-button round size="small">{{it.name}}</el-button>
            </li>
          </ul>
        </div>
        <el-button round size="small" class="other">其他</el-button>
        <template #reference>
          <div class="service">
            <el-icon class="el-icon-service"><Service /></el-icon>
          </div>
        </template>
      </el-popover>-->
      <div class="service">
        <el-icon class="el-icon-service">
          <Service />
        </el-icon>
      </div>
    </el-card>
  </div>
</template>
<style>
.sysContact .el-popover__title {
  text-align: center !important;
  font-weight: 600;
  line-height: 3;
}
.sysContact .config {
  display: flex;
  min-height: 200px;
  max-height: 600px;
  overflow: auto;
}
.sysContact ul {
  font-size: 16px;
  width: 129px;
  text-align: center;
}
.sysContact .sysTitle {
  padding-bottom: 20px;
}
.sysContact li {
  padding: 10px;
}
.sysContact .other {
  margin: 60px auto 15px;
  display: block;
  width: 100px;
}
</style>
<style lang='less' scoped>
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(144, 147, 153, 0.3);
  border-radius: 7px;
}
.tools {
  width: 60px;
  position: fixed;
  right: 60px;
  bottom: 300px;
  ::v-deep.el-card {
    border-radius: 12px !important;
  }
  ::v-deep .el-card__body {
    padding: 10px;
  }
  .service,
  .message {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      color: #456fff;
      font-size: 26px;
      font-weight: 600;
      display: block;
      text-align: center;
    }
    .el-icon-edit {
      color: #888;
    }
  }
  ::v-deep .el-divider--horizontal {
    margin: 6px 0px;
  }
}
</style>
