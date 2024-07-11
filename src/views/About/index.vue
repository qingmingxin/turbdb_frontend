<script setup>
import { ElContainer } from 'element-plus'
</script>

<template>
  <div class="about_container">
    <div class="about_title">项目人员信息</div>
    <el-divider />
    <div class="about_content">
      本项目由西北工业大学、哈尔滨工业大学、上海交通大学、浙江大学、中国航天空气动力技术研究院合作展开。
      上海交通大学负责低速湍流实验精细测量和湍流数据同化方法研究以及发动机叶片精细数值模拟研究，浙江大学负责民机翼型和潜航器标模数值模拟研究，哈尔滨工业大学负责物理融入的湍流机器学习方法研究，中国航天空气动力技术研究院负责高超声速实验湍流数据库构建。
      项目组主要参与人员： 张伟伟、廖飞、高丽敏、张晓 李惠 刘应征、徐汇
      夏振华、刘溢浪 赵俊波
    </div>
  </div>
</template>

<style lang="css" scoped>
.about_container {
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;

  .about_title {
    font-size: 40px;
    font-weight: 600;
  }
}
</style>
