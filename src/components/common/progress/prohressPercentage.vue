<template>
  <div class="my-prohress-percentage">
    <el-progress type="dashboard" :percentage="70" :color="setColorPercentage">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">完成率</span>
      </template>
    </el-progress>

    <ul class="my-prohress-text-content">
      <li>finished: 00</li>
      <li>rested: 00</li>
      <li>all: 00</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
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
    margin-left: 1rem;
  }
}
</style>
