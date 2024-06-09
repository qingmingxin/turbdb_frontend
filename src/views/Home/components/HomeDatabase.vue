<script setup>
</script>


<template>
    <div class="databases-container">
        <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="7">
                <el-card shadow="hover" :body-style="{ padding: '20px 0 0 0' }">
                    <img src="http://www.news.cn/mil/2023-04/28/1212172337_16826437022281n.jpg" class="image" />
                    <h2>民机翼型/机翼湍流信息数据库</h2>
                    <div class="detail">
                        <span>包含超/高超声速平板、钝锥、压缩拐角的DNS与实验数据</span>
                    </div>
                    <el-divider />
                    <el-button text class="button">查看详情</el-button>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card shadow="hover" :body-style="{ padding: '20px 0 0 0' }">
                    <img src="http://www.news.cn/mil/2023-04/28/1212172337_16826437022281n.jpg" class="image" />
                    <h2>高超声速飞行器标模湍流数据</h2>
                    <div class="detail">
                        <span>包含超/高超声速平板、钝锥、压缩拐角的DNS与实验数据</span>
                    </div>
                    <el-divider />
                    <RouterLink to="/database"><el-button text class="button">查看详情</el-button></RouterLink>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card shadow="hover" :body-style="{ padding: '20px 0 0 0' }">
                    <img src="http://www.news.cn/mil/2023-04/28/1212172337_16826437022281n.jpg" class="image" />
                    <h2>航空发动机典型部件湍流数据</h2>
                    <div class="detail">
                        <span>包含超/高超声速平板、钝锥、压缩拐角的DNS与实验数据</span>
                    </div>
                    <el-divider />
                    <el-button text class="button">查看详情</el-button>
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>

<style lang="scss" scoped>
.databases-container {
    padding: 100px 0;
    text-align: center;
    margin: auto;
    width: 60%;

    .el-card {
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: translateY(-5px);
            /* 在鼠标悬停时上移 5 像素 */
        }

        .detail {
            padding: 10px 30px;
        }

        .el-divider {
            margin: 24px 0 0 0;
        }

        span {
            color: #99a9bf;
        }

        .button {
            height: 50px;
            width: 100%;
            padding: 0;
            margin: 0;
            color: $xtxColor;
            text-align: center;

            &:hover {
                background-color: $xtxColor;
                color: white;
            }
        }
    }

}
</style>