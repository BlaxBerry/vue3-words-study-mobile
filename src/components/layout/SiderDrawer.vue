<template>
  <div
    :class="
      props.isLeft
        ? 'my-top-header-setting-icon-left'
        : 'my-top-header-setting-icon-right'
    "
  >
    <el-icon
      @click="showDrawer = true"
      :size="30"
      color="white"
      :class="showDrawer ? 'is-loading' : ''"
      :style="{ marginTop: '3px' }"
    >
      <Setting />
    </el-icon>
  </div>

  <el-drawer
    v-model="showDrawer"
    :title="t('drawer.setting')"
    size="70%"
    direction="ltr"
  >
    <!-- TODO: theme toggle -->
    <div>{{ t("drawer.theme") }}</div>
    <div>
      <el-switch v-model="localStore.isDarkTheme" active-color="#13ce66" />
      {{ t(localStore.isDarkTheme ? "drawer.themeDark" : "drawer.themeLight") }}
    </div>

    <br />

    <!-- language change -->
    <div>{{ t("drawer.language") }}</div>
    <!-- flags -->
    <div class="my-flags-group">
      <Flags :showBottomTitle="false" />
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { useI18n } from "vue-i18n";
import { Setting } from "@element-plus/icons-vue";
import { useLocalStore } from "../../store/local";
import Flags from "../common/img/Flags.vue";

const props = defineProps({
  isLeft: {
    type: Boolean,
    default: true,
  },
});

const { t } = useI18n();
const localStore = useLocalStore();

const showDrawer = ref(false);
</script>

<style lang="scss" scoped>
.my-top-header-setting-icon-left {
  margin-right: 20px;
  cursor: pointer;
}

.my-top-header-setting-icon-right {
  cursor: pointer;
}

.my-flags-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
