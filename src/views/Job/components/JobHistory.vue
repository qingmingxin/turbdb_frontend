<script setup>

import { ref } from 'vue';

const currentPage = ref(1)
const pageSize = ref(10)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}
const StatusList = ref(['运行中', "完成", "运行出错"])
const tableData = [
    {
        date: '2016-05-03',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },

    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-22',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-22',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-22',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-22',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-22',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-22',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-24',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-21',
        name: StatusList.value[0],
        address: 'No. 189, Grove St, Los Angeles',
    },
]

</script>

<template>
    <div class="table-container">

        <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" class="history-table"
            table-layout="fixed">
            <el-table-column label="序号" width="150px" align="center">
                <template #default="scope">
                    <span style="text-align: center">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="上传时间" align="center">
                <template #default="scope">
                    <span style="text-align: center">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" width="150px" align="center">
                <template #default="scope">
                    <span style="text-align: center">{{ scope.row.name }}</span>
                </template>

            </el-table-column>
            <el-table-column label="备注" align="center">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>name: {{ scope.row.name }}</div>
                            <div>address: {{ scope.row.address }}</div>
                        </template>
                        <template #reference>
                            <el-tag>{{ scope.row.name }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="Operations" align="center">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" @click="handleDelete(scope.$index, scope.row)">下载</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="history-pain" v-model:current-page="currentPage" v-model:page-size="pageSize"
            :page-sizes="[10, 20, 100, 200]" layout="total, sizes, prev, pager, next" :total="tableData.length"
            @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
    </div>
</template>


<style lang="scss" scoped>
.table-container {
    padding-top: 30px;

    .history-table {
        max-height: calc(100vh - 250px);
        height: calc(100vh - 250px);
        width: 70%;
        margin: auto;
        text-align: center;

    }


    .el-pagination {
        padding-top: 20px;
        justify-content: center;
        width: 80%;
        margin: auto;
    }
}
</style>