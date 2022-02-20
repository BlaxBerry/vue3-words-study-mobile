<template>
  <!-- 每日推荐短句 -->
  <Carousel />
  <br />

  <GridBox />
  <br />

  <!-- 数据统计进度环 -->
  <Prohress />

  <el-empty description="description" :style="{ paddingTop: 0 }"></el-empty>
  <el-empty description="description"></el-empty>
</template>

<script lang="ts" setup>
// components
import Carousel from "../../components/home/HomeCarousel.vue";
import GridBox from "../../components/home/HomeGridBox.vue";
import Prohress from "../../components/home/HomepProhress.vue";
</script>
