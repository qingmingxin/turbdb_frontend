<script setup>

import { reactive, ref } from 'vue'
import { oneDark } from '@codemirror/theme-one-dark'
const emit = defineEmits(['reset-setting', 'commit'])
const data = reactive({
    content: "\n",
    extensions: [basicSetup, python()],
    fontSize: 20,
})

const changeFontSize = () => {
    const inputFont = document.getElementsByClassName("content")[0];
    inputFont.style.fontSize = data.fontSize + "px";
}
import { basicSetup } from "codemirror";
import { python } from "@codemirror/lang-python";
let extensionsOfPython = [basicSetup, python()];
const btn_reset_code = ref(null)
const btn_reset_setting = ref(null)
const btn_commit = ref(null)
const reset_setting_handler = () => {
    emit('reset-setting', 1);
}
const reset_code_handler = () => {
    data.content = "重置"
    console.log("click reset code")
}
const commit_handler = () => {
    emit('commit', data.content);
}
const theme = ref("亮主题")
const change_theme = () => {
    if (theme.value === "亮主题") {
        extensionsOfPython = [basicSetup, python()]
    }
    else {
        extensionsOfPython = [basicSetup, oneDark, python()]
    }
}
</script>
<template>
    <div class="head">
        <el-select v-model="theme" style="width: 200px;" @change="change_theme">
            <el-option label="亮主题" value="亮主题"></el-option>
            <el-option label="暗主题" value="暗主题"></el-option>
        </el-select>
        <el-row class="btn-group">
            <el-button ref="btn_reset_setting" type="danger" @click="reset_setting_handler">重置配置</el-button>
            <el-button ref="btn_reset_code" type="danger" @click="reset_code_handler">重置代码</el-button>
            <el-button ref="btn_commit" type="primary" @click="commit_handler">提交</el-button>
        </el-row>
        <div class="set-font">
            <span style="width: 130px;text-align: right; padding-right: 10px;align-items: center;">当前字体(px) </span>
            <el-input size="small" class="input-font" v-model="data.fontSize" @change="changeFontSize"
                style="width: 50px;" />
        </div>
    </div>
    <div class="content">
        <VueCodemirror :extensions="extensionsOfPython" v-model="data.content" style="height: calc(100vh - 250px);" />
    </div>
</template>

<style scoped>
.head {
    display: flex;
    width: 100%;
    padding-top: 10px;
    height: 40px;

    .set-font {

        display: flex;
        align-items: center;
    }

    .btn-group {
        width: 100%;
        padding-left: 20px;

        .el-button {
            margin: 0 20px;
            width: 150px;
        }
    }
}

.content {
    font-size: 20px;
    height: calc(100vh - 200px);
    overflow: scroll;
    padding-bottom: 2px;
    margin-top: 20px;
}

.content::-webkit-scrollbar {
    width: 0;
}
</style>