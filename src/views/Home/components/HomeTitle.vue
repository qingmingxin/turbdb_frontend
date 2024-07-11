<script setup>
import { onMounted, ref } from 'vue'

const title = ref('湍流信息数据库')

onMounted(() => {
  // getTitle()
})
</script>

<template>
  <div class="title-container">
    <div class="title">{{ title }}</div>
    <p>
      本网站构建了一个湍流场数据库共享平台用以实现海量异构湍流数据高效存储，目前拟根据数值模拟提供高超声速、民用机翼型、航空发动机内流，
      三类湍流数据库
    </p>
    <div class="btn_div">
      <el-button size="large">了解更多 >></el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-container {
  text-align: left;
  background-color: #eee;
  .title {
    font-size: $HomeTitleFontSize;
    font-weight: bold;
    width: 70%;
    margin: auto;
    padding: 40px 0;
  }
  p {
    font-size: $HomeContentDetailFontSize;
    width: 70%;
    margin: auto;
    text-align: left;
  }
  .btn_div {
    width: 70%;
    margin: auto;
    padding-top: 30px;
    text-align: left;
  }
  .el-button {
    background-color: #337ab7;
    color: #fff;
    font-size: $HomeTitleButtonFontSize;
    padding: 10px;
  }
}
</style>
