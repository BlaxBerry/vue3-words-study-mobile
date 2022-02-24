<script lang="ts" setup>
import { useRoute } from "vue-router";
// components
import TopHeader from "./components/layout/TopHeader.vue";
import BottomNavigation from "./components/layout/BottomNavigation.vue";
import WordBottomHandleButtons from "./components/word/WordBottomHandleButtons.vue";
// store
import { useLocalStore } from "./store/local";

const route = useRoute();
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
      <el-main class="my-main">
        <el-scrollbar>
          <div class="my-main-page-content">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>

      <!-- mobile side bottom navigations -->
      <BottomNavigation
        v-if="!route.meta.navigationDisable"
        class="my-bottom-navigation"
      />

      <!-- word detail handle buttons -->
      <WordBottomHandleButtons
        v-else
        class="my-bottom-navigation"
      ></WordBottomHandleButtons>
    </el-container>
  </el-config-provider>
</template>
