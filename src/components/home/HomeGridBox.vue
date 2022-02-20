<template>
  <!-- flags -->
  <div class="my-flags-group">
    <Flags :showBottomTitle="true" :flagSize="50" />
  </div>
</template>

<script lang="ts" setup>
import Flags from "../common/img/Flags.vue";
</script>

<style lang="scss" scoped>
.my-flags-group {
  display: flex;
  justify-content: space-around;
}
</style>
