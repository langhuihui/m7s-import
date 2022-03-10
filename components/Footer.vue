<script setup>
import data from '../data/mock';
const config = ref(data);
</script>
<template>
  <div class="footer">
    <div class="left">
      <img src="~@/assets/qcode.jpg" alt />
    </div>
    <div class="middle">
      <ul class="direction" v-for="(item, index) in config" :key="index">
        <li class="title">
          <span v-if="item.uri">
            <a :href="item.uri" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
          </span>
          <span v-else>{{ item.name }}</span>
        </li>
        <li class="product" v-for="(j, i) in item.children" :key="i">
          <span>
            <a :href="j.uri" target="_blank" rel="noopener noreferrer">{{ j.name }}</a>
          </span>
        </li>
      </ul>
    </div>
    <div class="right">
      <img src="~@/assets/alipay.jpg" alt />
      <img src="~@/assets/wechat.jpg" alt />
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  width: 100%;
  background-image: linear-gradient(150deg, #5824E8 0%, #E86024 100%);
  min-height: 298px;
  padding: 40px 0;
  font-size: 16px;
  line-height: 32px;
  color: #fff;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  display: flex;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    img {
      height: 225px;
    }
  }
  .right {
    margin-top: -20px;
    flex: 1;
    display: flex;
    img {
      width: 150px;
      margin: 20px;
    }
  }
  .middle {
    padding: 0 30px;
    flex: 2;
    display: flex;
    justify-content: space-between;
    line-height: 1;
    .direction {
      vertical-align: top;
      display: inline-block;
      width: 200px;
      text-align: center;
      .title {
        font-size: 18px;
        padding-bottom: 22px;
      }
      .product {
        cursor: pointer;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.48);
        padding-bottom: 22px;
        &:hover,
        :active {
          color: #fff;
        }
      }
    }
  }
}
</style>
