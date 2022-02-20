<script lang="ts" setup>
// components
import TopHeader from "./components/layout/TopHeader.vue";
import BottomNavigation from "./components/layout/BottomNavigation.vue";
// store
import { useLocalStore } from "./store/local";
const localStore = useLocalStore();
</script>

<template>
  <el-config-provider :locale="localStore.elementPlusConfigProviderLocal">
    <el-container style="height: 100vh">
      <!-- top header -->
      <el-header class="my-top-header">
        <TopHeader />
      </el-header>

      <!-- page content -->
      <el-main style="padding-top: 0">
        <el-scrollbar>
          <div style="padding-top: 20px">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>

      <!-- mobile side bottom navigations -->
      <BottomNavigation class="my-bottom-navigation" />
    </el-container>
  </el-config-provider>
</template>
