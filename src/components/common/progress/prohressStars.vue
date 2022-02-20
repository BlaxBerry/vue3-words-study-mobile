<template>
  <div class="my-prohress-statrs">
    <el-progress type="circle" :percentage="20" color="#ffb703">
      <el-icon color="#ffb703" :size="30">
        <Star />
      </el-icon>
      <span class="percentage-label">Progressing</span>
    </el-progress>
  </div>
</template>

<script lang="ts" setup>
import { Star } from "@element-plus/icons-vue";
</script>

