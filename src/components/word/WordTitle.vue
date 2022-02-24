<template>
  <!-- 单词 -->
  <h1>increase</h1>

  <!-- 发音 -->
  <div>
    <span>[ɪnkriːs]</span> &nbsp;
    <span>
      <el-button type="danger" :icon="Headset" circle />
    </span>
  </div>

  <!-- 标签 -->
  <div>
    <el-tag effect="plain" type="danger">高考</el-tag>
    <el-tag effect="plain" type="danger">考研</el-tag>
  </div>
</template>

<script lang="ts" setup>
import { Headset } from "@element-plus/icons-vue";
</script>
