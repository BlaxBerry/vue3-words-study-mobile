<template>
  <el-row class="row-bg" justify="space-around">
    <!-- add -->
    <el-col
      :span="6"
      :class="route.path === '/add' ? 'selected center' : 'center'"
    >
      <router-link to="/add">
        <el-icon :size="30"><Plus /> </el-icon>
      </router-link>
    </el-col>
    <!-- home -->
    <el-col
      :span="6"
      :class="route.path === '/home' ? 'selected center' : 'center'"
    >
      <router-link to="/home">
        <el-icon :size="30"><House /> </el-icon>
      </router-link>
    </el-col>
    <!-- list -->
    <el-col
      :span="6"
      :class="route.path === '/list' ? 'selected center' : 'center'"
    >
      <router-link to="/list">
        <el-icon :size="30"><Notebook /> </el-icon>
      </router-link>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { House, Notebook, Plus } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
