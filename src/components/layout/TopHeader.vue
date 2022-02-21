<template>
  <div v-if="route.name === 'Word'" class="my-header-mobile-word-page">
    <el-page-header
      :icon="ArrowLeft"
      :content="t(`${route.name?.toString()}.title`)"
      @back="router.go(-1)"
    />
    <!-- mobile side drawer -->
    <SiderDrawer :isLeft="false" />
  </div>

  <div v-else-if="route.name === 'List'" class="my-header-mobile-list-page">
    <!-- mobile side drawer -->
    <SiderDrawer />
    <!-- mobile search bar -->
    <el-input
      v-model="inputValue"
      :placeholder="t('topHeader.searchInputPlaceholder')"
      :prefix-icon="Search"
      clearable
      @keydown.enter="handlerSearch"
    />
  </div>

  <div v-else class="my-header-mobile-others">
    <!-- mobile side drawer -->
    <SiderDrawer :isLeft="true" />
    <div class="mobile-header-title">
      {{ t(`${route.name?.toString()}.title`) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Search, ArrowLeft } from "@element-plus/icons-vue";
// components
import SiderDrawer from "./SiderDrawer.vue";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const inputValue = ref("");

const handlerSearch = () => {
  if (inputValue.value.trim()) {
    console.log(inputValue.value.trim());
  }
};
</script>
