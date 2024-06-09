<script setup>

import { onMounted, ref } from 'vue'

const title = ref('湍流数据库')


onMounted(()=>{
    // getTitle()
})
</script>


<template>
    <div class="title-container">
        <h1>{{ title }}</h1>
        <p>一个湍流场数据库共享平台用以实现海量异构湍流数据高效存储</p>
    </div>
</template>

<style lang="scss">
.title-container {
    text-align: center;

    h1 {
        padding-top: 70px;
    }

    p {
        margin-top: 20px;
        font-size: 16px;
    }
}
</style>