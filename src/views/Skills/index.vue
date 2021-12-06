<template>
  <div>
    <!-- title -->
    <v-col>
      <h1 class="text-center text-en">Skills</h1>
      <br />
      <v-divider></v-divider>
    </v-col>

    <v-tabs color="accent-4" centered>
      <!-- top tabs -->
      <v-tab class="font-weight-black" v-for="tab in tabs" :key="tab">
        {{ tab }}
      </v-tab>

      <!-- bottom content -->
      <v-tab-item v-for="(item, i) in tabItems" :key="i">
        <v-container fluid>
          <br />
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
