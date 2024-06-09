<script setup>

</script>

<template>
    <div class="nwpu">
        <div class="nwpu-nav">
            <h1 style="padding-bottom: 20px;">浙江大学</h1>
            <div>浙江大学项目由夏振华科研团队参加研究</div>
        </div>
        <el-divider />
        <el-scrollbar class="nwpu-list">
            <el-card shadow="hover" :body-style="{ padding: '20px' }">
                <el-row>
                    <el-col :span="6">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image" />
                        <h2>夏振华实验室</h2>
                    </el-col>
                    <el-col :span="18" style="padding: 30px 20px 0 20px; font-size: 15px; text-align: left;">
                        <p>夏振华，师从陈十一院士，在湍流理论与数值模拟方面积累 了丰富的研究经验。他参与了约束大涡模拟方法（CLES）的初期验证到后期完 善和推广的几乎全部工作，并研究了旋转对壁湍流的影响，先后在国内外著名杂 志上(例如：J. Fluid Mech., Phys. Rev. Fluids, Sci. China: Phys. Mech. Astron., AIAA J.等)发表了 40 余篇相关的科研论文。特别地，他用 CLES 方法模拟了翼型的大 攻角绕流，三角翼绕流，某型号大飞机带吊舱的翼身组合体外形在 14 度攻角下 的绕流问题等等，得到了很好的结果。</p>
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