<template>
  <!-- 每日推荐短句 -->
  <Carousel />
  <br />

  <GridBox />
  <br />

  <!-- 数据统计进度环 -->
  <Prohress />

  <div v-if="apolloLoading">Loading...</div>
  <div v-else>{{ exampleUser }}</div>
</template>

<script lang="ts" setup>
// components
import Carousel from "components/home/HomeCarousel.vue";
import GridBox from "components/home/HomeGridBox.vue";
import Prohress from "components/home/HomepProhress.vue";

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getExampleUser } from "../../lib/graphql/index";
const { result: apolloResult, loading: apolloLoading } =
  useQuery(getExampleUser);

type ExampleUser = {
  name: string | null;
  age: number | null;
};
const exampleUser = computed((): ExampleUser => {
  return {
    name: apolloResult?.value?.exampleUser?.name,
    age: apolloResult?.value?.exampleUser?.age,
  };
});
</script>
