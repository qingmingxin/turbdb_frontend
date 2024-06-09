<script setup>
</script>

<template>
    <el-container class="institute">
        <el-aside width="500px">
            <el-row class="tac">
                <el-col :span="12">
                    <h2 style="text-align: left; padding-left: 20px;">研究机构</h2>
                    <el-menu default-active="/institute/nwpu" class="el-menu-vertical-demo" router>
                        <el-menu-item index="/institute/nwpu">
                            <span>西北工业大学</span>
                        </el-menu-item>
                        <el-menu-item index="/institute/sjtu">
                            <span>上海交通大学</span>
                        </el-menu-item>
                        <el-menu-item index="/institute/zju">
                            <span>浙江大学</span>
                        </el-menu-item>
                        <el-menu-item index="/institute/hit">
                            <span>哈尔滨工业大学</span>
                        </el-menu-item>
                        <el-menu-item index="/institute/caaa">
                            <span>中国航天空气动力技术研究院</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-main class="institute-main">
            <RouterView />
        </el-main>
    </el-container>
</template>

<style lang="scss">
.institute {
    padding-top: 10px;
    margin: auto;

    height: calc(100vh - 80px);
    text-align: center;
    width: 70%;
    .institute-main{
        min-width:  800px;
    }
}
</style>

