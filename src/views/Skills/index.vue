<template>
  <div>
    <v-tabs color="cyan accent-4" left>
      <!-- top tabs -->
      <v-tab
        id="text-jp"
        class="font-weight-black"
        v-for="tab in tabs"
        :key="tab"
      >
        {{ tab }}
      </v-tab>

      <!-- bottom content -->
      <v-tab-item v-for="(item, i) in tabItems" :key="i">
        <v-container fluid>
          <v-col>
            <h1 id="text-en">{{ item.name }}</h1>
          </v-col>
          <Cards
            v-for="(contentItem, index) in item.content"
            :key="index"
            :list="contentItem"
          />
        </v-container>
      </v-tab-item>
    </v-tabs>

    <v-col></v-col>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/skills/Cards.vue";
import {
  mixin_skills,
  FRONT_TYPE_BASIC,
  FRONT_TYPE_VUE,
  FRONT_TYPE_REACT,
  BACK_TYPE_LANG,
  BACK_TYPE_SERVER,
  BACK_TYPE_DB,
  OTHER_TYPE_DEVTOOL,
  OTHER_TYPE_APIQUERY,
  OTHER_TYPE_APP,
} from "@/mixin/Skills/index";
export default {
  components: { Cards },
  data() {
    return {
      page: 1,
      tabs: ["Front", "Back", "Others"],
      tabItems: [
        {
          name: "Front Skills",
          content: [FRONT_TYPE_BASIC, FRONT_TYPE_VUE, FRONT_TYPE_REACT],
        },
        {
          name: "Back Skills",
          content: [BACK_TYPE_LANG, BACK_TYPE_SERVER, BACK_TYPE_DB],
        },
        {
          name: "Other Skills",
          content: [OTHER_TYPE_DEVTOOL, OTHER_TYPE_APIQUERY, OTHER_TYPE_APP],
        },
      ],
    };
  },

  mixins: [mixin_skills],

  mounted() {
    // console.log(this.list.FRONT);
  },
};
</script>

<style></style>
