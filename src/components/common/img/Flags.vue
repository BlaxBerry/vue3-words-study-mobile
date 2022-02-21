<template>
  <div
    wrap
    v-for="item in flags"
    :key="item.lang"
    class="box"
    :style="{
      textAlign: props.showBottomTitle ? 'center' : 'left',
    }"
  >
    <el-avatar
      :size="props.flagSize"
      :src="item.svg"
      :class="
        locale === item.lang ? 'country-selected' : 'country-not-selected'
      "
      @click="handleChangeLanguage(item.lang)"
    />
    <div v-if="props.showBottomTitle">
      <b>{{ t(`langs.${item.title}`) }}</b>
    </div>
    <small v-else>{{ t(`langs.${item.title}`) }}</small>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";
import { useLocalStore } from "../../../store/local";
import flagCN from "@/assets/images/flags/cnZh.svg";
import flagJP from "@/assets/images/flags/ja.svg";
import flagEN from "@/assets/images/flags/en.svg";
const { t, locale } = useI18n();
const localStore = useLocalStore();

const props = defineProps({
  showBottomTitle: {
    type: Boolean,
    default: false,
  },
  flagSize: {
    type: Number,
    default: 40,
  },
});

const flags = [
  {
    lang: "zh",
    svg: flagCN,
    title: "ZH",
  },
  {
    lang: "ja",
    svg: flagJP,
    title: "JA",
  },
  {
    lang: "en",
    svg: flagEN,
    title: "EN",
  },
];

const handleChangeLanguage = (lang: string) => {
  // change i18n locale
  locale.value = lang;
  // change store state
  localStore.changLanguage(lang);
};
</script>

<style lang="scss" scoped>
.box {
  flex: 1;
  padding: 5px;
  vertical-align: middle;

  small {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: top;
    margin-left: 10px;
  }

  b {
    margin-top: 5px;
    font-size: 0.8rem;
    color: grey;
  }
}

.country-not-selected {
  opacity: 0.6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: 0.5s;
  cursor: pointer;
}
.country-selected {
  opacity: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transform: scale(1.1);
  transition: 0.5s;
  cursor: pointer;
}
</style>
