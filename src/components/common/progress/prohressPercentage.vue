<template>
  <div class="my-prohress-percentage">
    <el-progress type="dashboard" :percentage="60" :color="setColorPercentage">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <b class="percentage-label">
          {{ t("Home.prohressTextcContent.finished") }}
        </b>
      </template>
    </el-progress>

    <ul class="my-prohress-text-content">
      <li>{{ t("Home.prohressTextcContent.finished") }} : <b>9</b></li>
      <li>{{ t("Home.prohressTextcContent.left") }} : <b>6</b></li>
      <li>{{ t("Home.prohressTextcContent.all") }} : <b>15</b></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const setColorPercentage = (percentage: number) => {
  if (percentage < 30) {
    return "#6d6875";
  }
  if (percentage < 60) {
    return "#277da1";
  }
  if (percentage < 80) {
    return "#4d908e";
  }
  return "#52b788";
};
</script>

<style lang="scss" scoped>
.my-prohress-percentage {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
  }
  .percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }

  .my-prohress-text-content {
    margin-left: 2rem;
  }
}
</style>
