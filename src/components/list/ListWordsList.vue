<template>
  <ul class="my-list-page-wordslist">
    <li
      class="my-list-page-wordslist-item"
      v-for="item in props.wordsList"
      :key="item.id"
    >
      <span class="word">
        <b>{{ item?.name?.charAt(0)?.toUpperCase() }}</b>
        <span>{{ item?.name?.slice(1)?.toLowerCase() }}</span>
      </span>

      <router-link to="/word" class="jump-arrow">
        <el-icon :size="20">
          <DArrowRight />
        </el-icon>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { DArrowRight } from "@element-plus/icons-vue";

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

const props = defineProps({
  wordsList: {
    type: Array as PropType<Array<WordsList>>,
    default: () => [],
  },
});
</script>

<style lang="scss">
@import "../../styles/variables.scss";
.my-list-page-wordslist {
  .my-list-page-wordslist-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.6rem 1rem 1rem;
    transition: 0.2s linear;
    border-radius: 0.5rem;
    cursor: pointer;

    span.word {
      flex: 1;
      color: #555555;
      font-size: 1.5rem;

      b {
        margin-right: 1px;
      }
    }

    a.jump-arrow {
      display: none;
      color: $color-main-2;

      .el-icon {
        vertical-align: middle !important;
      }
    }

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      a.jump-arrow {
        display: inline-block;
        text-decoration: none;
      }

      span.word {
        color: #141414;
      }
    }
  }
}
</style>
