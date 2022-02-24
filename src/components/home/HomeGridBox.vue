<template>
  <el-row class="my-grid-card-mobile-group">
    <el-col :span="12" class="my-grid-card-item">
      <el-card class="my-grid-router-card">Collections </el-card>
    </el-col>
    <el-col :span="12" class="my-grid-card-item">
      <el-card class="my-grid-router-card"> Notes </el-card>
    </el-col>
    <el-col :span="12" class="my-grid-card-item">
      <el-card class="my-grid-router-card"> Empty </el-card>
    </el-col>
    <el-col :span="12" class="my-grid-card-item">
      <el-card class="my-grid-router-card"> Empty </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.my-grid-card-mobile-group {
  .my-grid-card-item {

    .my-grid-router-card {
      display: flex;
      justify-content: center;
      align-items: center;
      background: -webkit-linear-gradient(left, #d64848, #fa7d4f);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      height: 100px;
      border-radius: 10px;
      color: white;
      font-size: 1.2rem;
      font-weight: 500;

      cursor: pointer;
    }
  }
}
</style>
