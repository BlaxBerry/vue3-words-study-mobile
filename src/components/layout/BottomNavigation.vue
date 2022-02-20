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
// route
const route = useRoute();
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    flex: 1;
    text-align: center;
  }

  i {
    color: grey;
    transition: 0.5s;
  }
}

.selected {
  i {
    color: $color-main-2;
    transform: scale(1.05);
  }
}
</style>
