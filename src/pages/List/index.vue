<template>
  <div v-if="apolloLoading">Loading...</div>
  <EmptyVue v-else-if="!wordsList.length" />
  <div v-else>
    <ul>
      <li v-for="(item, index) in wordsList" :key="item.id">
        <router-link to="/word">
          <span>{{ index }}</span>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getWordsList } from "../../lib/graphql/index";
import EmptyVue from "../../components/common/status/Empty.vue";

const { result: apolloResult, loading: apolloLoading } = useQuery(getWordsList);

type WordsListItem = {
  a: string;
  b: string;
};
type WordsList = {
  name: string;
  id: string;
  createAt: string;
  expressions: Array<WordsListItem> | [];
};

const wordsList = computed((): Array<WordsList> => {
  return apolloResult?.value?.wordsList || [];
});
</script>
