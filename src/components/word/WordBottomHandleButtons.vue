<template>
  <el-row class="row-bg" justify="space-around">
    <!-- deit -->
    <el-col :span="6" class="center">
      <router-link to="/edit">
        <el-icon :size="30"><Edit /></el-icon
      ></router-link>
    </el-col>
    <!-- collect -->
    <el-col
      :span="6"
      :class="collected ? 'selected center' : 'center'"
      @click="handleCollect"
    >
      <el-icon :size="30"><Star /></el-icon>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Edit, Star } from "@element-plus/icons-vue";

const collected = ref(false);
const handleCollect = () => {
  collected.value = !collected.value;
};
</script>
