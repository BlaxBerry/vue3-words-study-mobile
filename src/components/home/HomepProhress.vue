<template>
  <div class="my-prohress">
    <!-- 百分比 -->
    <Percentage />

    <!-- 星星数 -->
    <Stars />
  </div>
</template>

<script lang="ts" setup>
import Percentage from "../common/progress/prohressPercentage.vue";
import Stars from "../common/progress/prohressStars.vue";
</script>

<style lang="scss">
.my-prohress {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;

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
}
</style>
