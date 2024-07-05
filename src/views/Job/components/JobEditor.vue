<script setup>
import { ref } from 'vue'
import CodeEditor from './CodeEditor.vue'

const databasesList = ref(['数据库1', '数据库2'])
const datasetList = ref(['数据集1', '数据集2'])
const selectedDatabase = ref('')
const selectedDataset = ref('')
const selectedData = ref('')

const clearDatabaseEvent = () => {
  selectedDatabase.value = ''
  selectedDataset.value = ''
  selectedData.value = ''
}

const clearDatasetEvent = () => {
  selectedDataset.value = ''
  selectedData.value = ''
}

const formData = ref({
  database: '',
  dataset: '',
  datatype: '',
  comment: '',
})
const dialogVisible = ref(false)
const reset_setting = () => {
  Object.keys(formData.value).forEach((key) => {
    formData.value[key] = ''
  })
  console.log('click reset setting')
}
const commit_job = (value) => {
  console.log(value)
  console.log('commit job')
}
</script>

<template>
  <div class="job-editor-panel">
    <el-form class="left" model="formData">
      <el-form-item class="data-form-item">
        <span>数据集</span>
        <div class="data-select-group">
          <el-select
            class="database-select"
            @clear="clearDatabaseEvent"
            clearable
            v-model="formData.database"
            placeholder="请选择数据库"
          >
            <el-option
              v-for="item in databasesList"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
          <template v-if="formData.database != ''">
            <el-select
              class="dataset-select"
              @clear="clearDatasetEvent"
              clearable
              v-model="formData.dataset"
              placeholder="请选择数据集"
            >
              <el-option
                v-for="item in datasetList"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </template>
          <template v-if="formData.dataset != ''">
            <el-select
              class="data-select"
              clearable
              v-model="formData.datatype"
              placeholder="请选择数据集"
            >
              <el-option
                v-for="item in datasetList"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </template>
          <template v-if="formData.datatype != ''">
            <el-button
              type="primary"
              @click="dialogVisible = true"
              style="margin-top: 10px; width: 70%"
              >选择数据</el-button
            >
          </template>
        </div>
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          v-model="formData.comment"
          placeholder="请输入备注（非必填项）"
          style="padding-left: 30px"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 选择后的文件列表 -->
      </el-form-item>
    </el-form>
    <el-divider
      direction="vertical"
      style="height: calc(100vh - 200px); margin-top: 10px"
    />
    <div class="right">
      <CodeEditor @reset-setting="reset_setting" @commit="commit_job" />
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.job-editor-panel {
  display: flex;
  height: calc(100vh - 200px);

  .left {
    width: 30%;
    height: 100%;
    border: 1px;
    margin-top: 20px;

    .data-form-item {
      display: flex;
      flex-direction: row;
      text-align: left;

      span {
        width: 100px;
      }

      .data-select-group {
        width: 80%;
        display: flex;
        flex-direction: column;
      }

      .database-select {
        width: 70%;
        margin-top: 5px;
      }

      .dataset-select {
        width: 70%;
        margin-top: 5px;
      }

      .data-select {
        width: 70%;
        margin-top: 5px;
      }

      .btn-item {
        width: 20%;
        text-align: center;
        margin-top: 5px;
      }
    }
  }

  .right {
    width: 70%;
    text-align: left;
  }
}
</style>
