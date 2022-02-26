<template>
  <!-- TODO: Loading component -->
  <div v-if="apolloLoading">Loading...</div>
  <!-- list -->
  <ListWordsListVue
    v-else-if="apolloResult && apolloResult.wordsList"
    :wordsList="wordsList"
  />
  <!-- empty -->
  <EmptyVue v-else />
</template>

<script lang="ts" setup>
import { computed, onMounted, onUpdated } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useWordsStore } from "../../store/words";
import { getWordsList } from "../../lib/graphql/index";
import EmptyVue from "../../components/common/status/Empty.vue";
import ListWordsListVue from "../../components/list/ListWordsList.vue";

const wordsStore = useWordsStore();

const { result: apolloResult, loading: apolloLoading } = useQuery(getWordsList);

// TODO: common type
type ExpressionsItem = {
  a: string;
  b: string;
};
type WordsList = {
  name: string;
  id: string;
  createAt: string;
  expressions: Array<ExpressionsItem> | [];
};

const wordsList = computed((): Array<WordsList> => {
  return apolloResult?.value?.wordsList || [];
});

// update wordsList length in store
onMounted(() => {
  wordsStore.updateWordsListLength(wordsList.value.length);
});
onUpdated(() => {
  wordsStore.updateWordsListLength(wordsList.value.length);
});
</script>
