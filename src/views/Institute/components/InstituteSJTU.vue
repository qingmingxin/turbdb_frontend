<script setup>

</script>

<template>
    <div class="nwpu">
        <div class="nwpu-nav">
            <h1 style="padding-bottom: 20px;">上海交通大学</h1>
            <div>上海交通大学共有 2 个科研团队参加本项目的研究，分别为刘应征教授实验室和徐辉副教授实验室。</div>
        </div>
        <el-divider />
        <el-scrollbar class="nwpu-list">
            <el-card shadow="hover" :body-style="{ padding: '20px' }">
                <el-row>
                    <el-col :span="6">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image" />
                        <h2>刘应征教授实验室</h2>
                    </el-col>
                    <el-col :span="18" style="padding: 30px 20px 0 20px; font-size: 15px; text-align: left;">
                        <p>刘应征教授在流场、压力场测量和数据同化方面已有多年的 研究经历，提出了基于非稳态连续伴随， 开发出顺序数据同化方法，推导出准稳态的伴随方程组，解决了非稳态伴随方程 组对数据存储和计算迭代的苛刻要求，实现了高效的非稳态计算。</p>
                    </el-col>
                </el-row>
            </el-card>
            <el-card shadow="hover" :body-style="{ padding: '20px' }">
                <el-row>
                    <el-col :span="6">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image" />
                        <h2>徐辉副教授实验室</h2>
                    </el-col>
                    <el-col :span="18" style="padding: 0 20px; font-size: 15px; text-align: left;">
                        <p>徐辉副教授十余年来，一直在流体力学、应用数学和计算数学交叉领域从事 相关理论与应用研究，特别是致力于先进高精度科学计算方法在流动物理及噪声辐射方面的理论及工程应用研究，是 hp 型谱元法开源软件 Nektar++的不可压缩 及可压缩求解器的核心开发人员。</p>
                        <p>此外，他将高精度 hp 型谱元方法首次应用于重大工 程需求中—参与设计新一代空客商用飞机机翼及罗伊斯•罗尔斯低噪声大推力发 动机的风扇。</p>
                    </el-col>
                </el-row>
            </el-card>
            
        </el-scrollbar>
    </div>
</template>

<style lang="scss">
.nwpu {
    height: 100%;
    
    .nwpu-list {
        height: calc(100vh - 270px);
        .el-card {
            ~.el-card{

                margin: 20px 0;
            }
        }

        p {
            text-indent: 2em;
        }
    }
}
</style>