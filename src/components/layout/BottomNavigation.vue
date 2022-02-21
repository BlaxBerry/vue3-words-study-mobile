<template>
  <el-row class="row-bg" justify="space-around">
    <el-col
      :span="6"
      :class="route.path === '/list' ? 'selected center' : 'center'"
    >
      <router-link to="/list">
        <el-icon :size="30"><Notebook /> </el-icon>
      </router-link>
    </el-col>
    <el-col
      :span="6"
      :class="route.path === '/home' ? 'selected center' : 'center'"
    >
      <router-link to="/home">
        <el-icon :size="30"><House /> </el-icon>
      </router-link>
    </el-col>
    <el-col
      :span="6"
      :class="route.path === '/my' ? 'selected center' : 'center'"
    >
      <router-link to="/my">
        <el-icon :size="30"><User /> </el-icon>
      </router-link>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { House, Notebook, User } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
