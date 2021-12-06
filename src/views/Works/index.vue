<template>
  <div>
    <!-- title -->
    <v-col>
      <h1 class="text-center text-en">Works</h1>
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
          <Cards
            v-for="(contentItem, index) in item.content"
            :key="index"
            :list="contentItem"
          />
        </v-container>
      </v-tab-item>
    </v-tabs>
    <v-col></v-col>

    <!-- <div class="text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Cards from "@/components/works/Cards.vue";
import { mixin_works } from "@/mixin/Works/index";
export default Vue.extend({
  name: "Works",
  components: { Cards },
  mixins: [mixin_works],

  data: () => ({
    // page: 1,
  }),

  methods: {
    goDetailPage(id: string) {
      console.log(id);
      this.$router.push(`/detail/work/${id}`);
    },
  },
});
</script>
