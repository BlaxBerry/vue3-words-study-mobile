<template>
  <div :style="{ paddingRight: '20px', marginTop: '5px' }">
    <el-icon
      @click="showDrawer = true"
      :size="30"
      color="white"
      :class="showDrawer ? 'is-loading my-icon-setting' : 'my-icon-setting'"
    >
      <Setting />
    </el-icon>
  </div>

  <el-drawer
    v-model="showDrawer"
    :title="t('drawer.setting')"
    size="50%"
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
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Setting } from "@element-plus/icons-vue";
import { useLocalStore } from "../../store/local";
import Flags from "../common/img/Flags.vue";

const { t } = useI18n();
const localStore = useLocalStore();

const showDrawer = ref(false);
</script>

<style lang="scss" scoped>
.my-icon-setting {
  cursor: pointer;
}
.my-flags-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
