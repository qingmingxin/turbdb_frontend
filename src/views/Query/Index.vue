<script setup>
import { ref, onMounted } from 'vue'
const functionList = ref([
  { label: '处理函数1', value: '123' },
  { label: '处理函数2', value: '123' },
])
const selectedOption = ref('')
const selectedOptionList = ref([])
const query_result = ref('123')
const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  // ...
]
const nextOptionsref = ref([
  { label: '选项A', value: 'A' },
  { label: '选项B', value: 'B' },
  // ...
])
const stopAddingOptions = ref(false) // 控制是否停止添加选项

const onOptionChange = () => {
  if (selectedOption.value === '4') {
    stopAddingOptions.value = true
  }
}

// 按钮查询执行函数
const doQuery = () => {
  console.log('执行查询步骤')
}
</script>

<template>
  <div class="query_page">
    <div class="query_page_title">湍流数据库查询</div>
    <el-row class="query_page_content">
      <el-col :span="18">
        <el-form class="query_page_content_left">
          <el-form-item label="数据集">
            <el-select v-model="selectedOption" @change="onOptionChange">
              <el-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </el-select>
            <template v-if="selectedOption && !stopAddingOptions">
              <el-select v-model="selectedOption" @change="onOptionChange">
                <el-option
                  v-for="option in nextOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item label="处理函数:">
            <el-select
              v-model="value"
              placeholder="Select"
              style="width: 240px"
            >
              <el-option
                v-for="item in functionList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="坐标:">
            <el-col :span="5">
              <el-input placeholder="x" style="width: 100%"></el-input>
            </el-col>
            <el-col :span="4.5" class="text-center">
              <span class="text-gray-500" style="margin: 0, 10px">-</span>
            </el-col>

            <el-col :span="5">
              <el-input placeholder="y" style="width: 100%"></el-input>
            </el-col>

            <el-col :span="4.5" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>

            <el-col :span="5">
              <el-input placeholder="z" style="width: 100%"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item style="text-align: center">
            <div style="display: inline-block; width: 100%">
              <el-button class="btn_query" @click="doQuery">提交</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <div class="query_page_content_right">
          <div class="result_title">查询结果</div>
          <el-text class="result_content">{{ query_result }}</el-text>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.query_page {
  padding-top: 20px;
  width: 70%;
  margin: 0 auto;

  .query_page_title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }

  .query_page_content {
    margin-top: 20px;
    height: 100%;

    .query_page_content_right {
      height: 500px;
      background-color: #dadada;
      padding: 10px;
      .result_title {
        font-size: large;
        font-weight: bolder;
        text-align: center;
      }
    }
  }
  .btn_query {
    display: inline-block;
    width: 200px;
  }
}
</style>
