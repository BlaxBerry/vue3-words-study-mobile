<template>
  <div>
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        xl="3"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="
              hover ? ELEVATIONS.CARD_ELEVATION * 2 : ELEVATIONS.CARD_ELEVATION
            "
            @click="goDetailPage(2)"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>

              <v-sheet :class="{ 'on-hover': hover }">
                <div v-show="hover" class="text-h5 text-md-h4 text-lg-h3">
                  name details
                </div>
              </v-sheet>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

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

<script lang="ts">
import Vue from "vue";
// common variables
import { ELEVATIONS } from "@/utils/commonVariables/index";

export default Vue.extend({
  name: "Works",

  data: () => ({
    ELEVATIONS,
    page: 1,
  }),

  methods: {
    goDetailPage(id: string) {
      console.log(id);
      this.$router.push(`/detail/work/${id}`);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "/src/styles/index.scss";
</style>
