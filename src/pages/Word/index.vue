<template>
  <!-- 发音 + 标签 -->
  <WordTitle />
  <el-divider></el-divider>

  <!-- 含义 -->
  <h3>单词含义</h3>
  <WordMeaning />
  <el-divider></el-divider>

  <!-- 使用搭配 -->
  <h3>使用搭配</h3>
  <WordParten />
  <el-divider></el-divider>

  <!-- 例句 -->
  <h3>例句</h3>
  <WordExample />
  <el-divider></el-divider>
</template>

<script lang="ts" setup>
import WordTitle from "../../components/word/WordTitle.vue";
import WordMeaning from "../../components/word/WordMeaning.vue";
import WordParten from "../../components/word/WordParten.vue";
import WordExample from "../../components/word/WordExample.vue";
</script>
