<script setup>
import data from '../data/mock';
const config = ref(data);
</script>
<template>
  <div class="pre-footer">
    <div class="footer-container">
      <div class="container">
        <div class="img">
          <img src="~@/assets/qr.jpg" alt />
        </div>
        <div class="navigation">
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
        <div class="img2">
          <img src="~@/assets/alipay.jpg" alt />
          <img src="~@/assets/wechat.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.pre-footer {
  width: 100%;
  background-image: linear-gradient(150deg, #242247 0%, #141233 100%);
  .footer-container {
    width: 1190px;
    min-height: 298px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 32px;
    color: #fff;
    justify-content: space-between;
    .container {
      padding-top: 82px;
      position: relative;
      .img {
        vertical-align: top;
        display: inline-block;
        width: 180px;
        height: 59px;
        > img {
          width: 100%;
        }
      }
      .img2 {
        position: absolute;
        right: 0;
        top: 0;
        > img {
          width: 150px;
          margin: 20px;
        }
      }
      .navigation {
        font-family: HYQiHei-FES;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        // margin-left: 20px;
        width: 1010px;
        line-height: 1;
        .direction {
          vertical-align: top;
          display: inline-block;
          width: 168px;
          text-align: center;
          .title {
            font-size: 16px;
            padding-bottom: 22px;
          }
          .product {
            cursor: pointer;
            font-size: 13px;
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
  }
}
</style>
