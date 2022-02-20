<template>
  <SiderDrawer />

  <!-- mobile search bar -->
  <div v-if="route.name === 'List'" class="my-top-header-search-input-mobile">
    <el-input
      v-model="inputValue"
      :placeholder="t('topHeader.searchInputPlaceholder')"
      :prefix-icon="Search"
      clearable
      @keydown.enter="handlerSearch"
    />
  </div>

  <!-- mobile title -->
  <div v-else class="my-top-header-title-mobile">
    <h1>{{ t("home.title") }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
// components
import SiderDrawer from "./SiderDrawer.vue";

const route = useRoute();
const { t } = useI18n();

const inputValue = ref("");
const handlerSearch = () => {
  if (inputValue.value.trim()) {
    console.log(inputValue.value.trim());
  }
};
</script>

<style lang="scss">
.my-top-header-search-input-mobile {
  width: 100%;

  .el-input {
    .el-input__inner {
      font-size: 1.1rem !important;
      border: 0 !important;
    }
  }
}

.my-top-header-title-mobile {
  flex: 1;
  text-align: center;
  transform: translateX(-30px);
  color: white;
}
</style>
