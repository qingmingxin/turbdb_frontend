<template>
  <div class="nwpu">
    <div class="nwpu-nav">
      <h1 style="padding-bottom: 20px">中国航天空气动力技术研究院</h1>
    </div>
    <el-divider />
    <el-scrollbar class="nwpu-list">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <el-row>
          <el-col :span="6">
            <img
              src="@/views/Institute/images/lh.jpg"
              class="image"
              style="width: 160px"
            />
            <h2>
              <a
                href="http://caaa-spacechina.com/index.html"
                class="card-text"
                target="_blank"
                >中国航天空气动力技术研究所</a
              >
            </h2>
          </el-col>
          <el-col
            :span="18"
            style="padding: 30px 20px 0 20px; font-size: 15px; text-align: left"
          >
            <p>
              中国航天空气动力技术研究院是我国我国第一个大型空气动力研究与试验
              基地，拥有低速至高超声速风洞试验设备三十余座，在高超声速流场测量方面，
              具备先进的测力天平、压力测量、高频脉动压力测量技术，近年来，研发建立了
              磷光热图技术、PSP/TSP、红外热图技术、液晶摩阻/油膜摩阻等表面测量技术，
              以及
              PIV、瞬态纹影、激光纹影等空间测量技术，针对典型构型如平板、圆锥、
              三角翼、压缩拐角等模型开展了高超声速流场试验研究，针对高超声速流动转捩、
              表面热流分布、表面压力分布、表面摩阻分布和内外流速度特性获取了典型测量结果。
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
