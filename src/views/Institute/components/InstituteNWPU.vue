<script setup></script>

<template>
  <div class="nwpu">
    <div class="nwpu-nav">
      <h1 style="padding-bottom: 20px">西北工业大学</h1>
      <div>
        西北工业大学共有 3
        个科研团队参加本项目的研究，分别为张伟伟教授实验室、高丽敏教授实验室以及张晓主任实验室。
      </div>
    </div>
    <el-divider />
    <el-scrollbar class="nwpu-list">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <el-row>
          <el-col :span="6">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <h2>张伟伟教授实验室</h2>
          </el-col>
          <el-col
            :span="18"
            style="padding: 30px 20px 0 20px; font-size: 15px; text-align: left"
          >
            <p>
              张伟伟教授团队近年围绕数据驱动的流体力学开展了系统研究，包括湍流机
              器学习、非定常气动力建模与流固耦合、气动优化设计以及流动自适应智能化控
              制等诸多方向。2019 年 6
              月学校联合了国内外多所研究机构，成立了“流体力
              学智能化国际联合研究所”，探索人工智能与流体力学的深度融合，解决当前流
              体力学领域的热点与难点问题。
            </p>
            <p>
              研究所紧密围绕当前流体力学研究中的核心科学
              和重大应用问题，在流体力学理论、模型和方法的智能化，流动信息特征提取与
              多源数据融合的智能化以及多学科、多物理场耦合建模与控制的智能化等方面开
              展长期深入的国际合作研究和学术交流，致力于建立具有一定国际影响力又具有
              应用价值和前景的国际合作交流平台。
            </p>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <el-row>
          <el-col :span="6">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <h2>高丽敏教授实验室</h2>
          </el-col>
          <el-col
            :span="18"
            style="padding: 0 20px; font-size: 15px; text-align: left"
          >
            <p>
              高丽敏教授团队长期从事航空压气机内流复杂流场的实验测试技术研究，在
              光学压敏（PSP）测量技术、剪敏液晶测量技术（SSLCC）和粒子图像测速技术
              （PIV）等先进流动测量技术上取得了较大研究进展。尤其是在 PSP
              测量技术方 面，自主搭建了多套 PSP
              稳态与动态测量系统，掌握了涂料喷涂技术，优化了
              内流场荧光图像后处理流程，突破了内流场光路布局的限制，并与涂料研制单位
              中科院化学所保持着良好合作关系。
            </p>
            <p>
              此外，在热线风速仪、气动探针和微型动态
              压力传感器等测量技术上也积累了丰富经验。研究团队突破了压气机平面叶栅通
              道空间狭窄、光路布局难和实验效率低等问题，发展了具有自主知识产权的“航
              空发动机内流综合测试诊断技术”（获 2020 年国防技术发明三等奖）。
            </p>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <el-row>
          <el-col :span="6">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <h2>张晓教授实验室</h2>
          </el-col>
          <el-col
            :span="18"
            style="padding: 0 20px; font-size: 15px; text-align: left"
          >
            <p>
              项目参与人张晓，任西北工业大学计算机学院计算机软件与科学系主任，近
              年来一直从事存储系统、计算机网络及分布式文件系统等方面的研究。1998
              年 起与 NEC
              合作，先后开发了共享文件系统、存储管理系统、异地容灾备份系统
              等多个存储管理系统。共享文件系统实现了银行等关键行业中大型机与兼容机系
              统间的数据共享。主持和参与了多 项国家 863
              课题和重点研发计划子课题，提出了国内首个 PB 级海量存储系统的
              性能、功能、能耗、可用性及可管理性的评测体系与方法。
            </p>
            <p>
              另外，在国产磁盘阵列产品 内部实现了 MAID2.0 功能，最高可节能
              40%，并提出了存储产品利用率评估体 系和方法。在开源分布式文件系统
              HDFS 上，基于 RDMA 和非易失内存的优化 提升读写性能超过
              50%。与华为公司合作，优化了分布式文件系统 Ceph 的读写
              流程，性能提升 20%以上。
            </p>
          </el-col>
        </el-row>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.nwpu {
  height: 100%;
  .nwpu-list {
    height: calc(100vh - 270px);
    .el-card {
      ~ .el-card {
        margin: 20px 0;
      }
    }

    p {
      text-indent: 2em;
    }
  }
}
</style>
