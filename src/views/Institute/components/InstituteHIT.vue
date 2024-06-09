<script setup>

</script>

<template>
    <div class="nwpu">
        <div class="nwpu-nav">
            <h1 style="padding-bottom: 20px;">哈尔滨工业大学</h1>
            <div>哈尔滨工业大学项目由学李惠教授科研团队参加研究</div>
        </div>
        <el-divider />
        <el-scrollbar class="nwpu-list">
            <el-card shadow="hover" :body-style="{ padding: '20px' }">
                <el-row>
                    <el-col :span="6">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image" />
                        <h2>李惠教授实验室</h2>
                    </el-col>
                    <el-col :span="18" style="padding: 30px 20px 0 20px; font-size: 15px; text-align: left;">
                        <p>李惠教授团队近年来在数据驱动发现湍流物理规律、神经网 络求解流动方程等方面取得了很多学术研究成果，发展了物理融合的不可压缩流
                            动的深度学习模拟方法，包括速度-压力方程、涡量-速度方程的深度学习求解方
                            法，提出了非线性微分方程深度强化学习求解框架；提出了高时间分辨率钝体绕流场重构的深度学习方法，发展了多尺度融合卷积神经网络模型，实现了钝体绕 流尾流场的快速预测。</p>
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
            ~.el-card {

                margin: 20px 0;
            }
        }

        p {
            text-indent: 2em;
        }
    }
}</style>