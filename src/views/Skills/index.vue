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
  </div>
</template>

<script>
import Cards from "@/components/skills/Cards.vue";
import { mixin_skills } from "@/mixin/Skills/index";

export default {
  components: { Cards },
  mixins: [mixin_skills],
};
</script>

<style></style>
