<script setup>
import { ref } from 'vue'
</script>
<template>
  <div>
    <h1>个人信息</h1>
    <div class="user-info-item">
      <div v-if="userInfo">
        <div v-for="(value, key) in userInfo" :key="key" class="info-row">
          <span class="info-key">{{ key }}:</span>
          <input
            v-if="editableFields.includes(key)"
            v-model="editableUserInfo[key]"
            class="info-value"
          />
          <span v-else class="info-value">{{ value }}</span>
        </div>
      </div>
      <div v-else>加载中...</div>
    </div>
  </div>
</template>
