<script setup>
import { ref } from 'vue'
import { ValidateEmail } from "@/utils/validator"
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const form = ref({
    account: "",
    password: "",
    code: "",
})

const isVerifyLogin = ref(false)
const router = useRouter()
const userStore = useUserStore()
const rules = {
    "account": [
        { required: true, message: '请输入用户名/邮箱', trigger: 'blur' },
        {
            validator: (rule, val, callback) => {
                if (isVerifyLogin.value) {
                    if (ValidateEmail(val)) {
                        return callback();
                    }
                    else {
                        return callback(new Error("请输入合法的邮箱"))
                    }
                } else {
                    return callback();
                }
            }
        }
    ],
    "password": [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度6~20', trigger: 'blur' },
    ],
    "code": [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 6, max: 6, message: '验证码长度不正确', trigger: 'blur' },

    ]
}



// 切换登录方式
const onChangeLoginWay = () => {
    form.value.code = ""
    form.value.password = ""
    if (!ValidateEmail(form.value.account)) {
        form.value.account = ""
    }
    isVerifyLogin.value = !isVerifyLogin.value
}

const formRef = ref(null)
// 点击登录按钮触发事件
const doLogin = () => {
    const { account, password, code } = form.value
    formRef.value.validate(async (valid) => {
        if (valid) {
            if (isVerifyLogin.value) {
                await userStore.getUserInfoByCode({ account, code })
            } else {
                await userStore.getUserInfoByPwd({ account, password })
            }
            ElMessage({ type: 'success', message: "登录成功" })
            router.replace({ path: "/" })
        }
    })
}


</script>

<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="header">Login</div>
            <el-form ref="formRef" :rules="rules" :model="form">
                <template v-if="!isVerifyLogin">
                    <el-form-item prop="account">
                        <el-input type="text" v-model="form.account" placeholder="用户名/邮箱" class="input-item" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="form.password" show-password placeholder="密码"
                            class="input-item" />
                    </el-form-item>
                </template>
                <template v-else>
                    <el-form-item prop="account">
                        <el-input type="text" v-model="form.account" placeholder="邮箱" class="input-item" />
                    </el-form-item>
                    <el-form-item prop="code" :inline="true">
                        <el-input type="text" v-model="form.code" placeholder="验证码" style="width:200px"
                            class="input-item" />
                        <el-button style="margin-left: 30px; height: 40px;">获取验证码</el-button>
                    </el-form-item>
                </template>
                <div class="a-group">
                    <div>没有账号？<RouterLink to="/registe">点此注册</RouterLink>
                    </div>
                    <template v-if="isVerifyLogin">
                        <a @click="onChangeLoginWay">账号密码登录</a>
                    </template>
                    <template v-else>
                        <a @click="onChangeLoginWay">邮箱验证登录</a>
                    </template>
                </div>
                <el-form-item>
                    <div class="btn" @click="doLogin">登录</div>
                </el-form-item>
            </el-form>
            <div class="msg">
                <a href="#">已有帐号，忘记密码?</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    background-color: aqua;
    text-align: center;
    height: calc(100vh - 70px);
    background-image: linear-gradient(to right, #5bedfb, #5f91e9);


    .login-wrapper {
        background-color: #fff;
        width: 458px;
        height: 588px;
        border-radius: 15px;
        padding: 0 50px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .header {
        font-size: 38px;
        font-weight: bold;
        text-align: center;
        line-height: 200px;
    }

    .a-group {
        display: flex;
        padding: 5px 10px;
        justify-content: space-between;
    }

    .input-item {
        display: block;
        // width: 100%;
        margin-bottom: 20px;
        border: 0;
        padding: 5px 10px;
        border-bottom: 1px solid rgb(128, 125, 125);
        font-size: 15px;
        outline: none;

        :deep(.el-input__wrapper) {
            box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
            cursor: default;
            width: 100%;
            text-align: center;
        }
    }

    .btn {
        text-align: center;
        padding: 10px;
        width: 100%;
        margin-top: 20px;
        background-image: linear-gradient(to right, #5bedfb, #5f91e9);
        color: #fff;
    }

    .msg {
        text-align: center;
        line-height: 80px;
    }

    a {
        text-decoration-line: none;
        color: #abc1ee;
    }
}
</style>
