<template>
  <v-sheet class="work-card">
    <v-card
      :elevation="
        hover ? ELEVATIONS.CARD_ELEVATION * 2 : ELEVATIONS.CARD_ELEVATION
      "
      :class="{ 'on-hover': hover }"
      @click="goDetailPage(item.id)"
    >
      <!-- pc desktop bar -->
      <DesktopBar v-if="item.type == 'PC'" />

      <!-- img -->
      <v-img
        class="grey lighten-2"
        :src="item.pics[0]"
        :lazy-src="
          item.type == 'PC'
            ? require(`@/assets/images/works/default-pc.png`)
            : require(`@/assets/images/works/default-mobile.png`)
        "
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    <!-- name -->
    <h3 class="text-center mt-2" id="text-jp">{{ item.name }}</h3>
  </v-sheet>
</template>

<script>
import { ELEVATIONS } from "@/utils/commonVariables/index";
import DesktopBar from "@/components/common/Bar/DesktopBar.vue";
export default {
  props: ["hover", "item"],
  components: { DesktopBar },

  data: () => ({
    ELEVATIONS,
  }),

  methods: {
    goDetailPage(id) {
      this.$router.push(`/detail/work/${id}`).catch((err) => {
        console.log("works card go detail page", err);
      });
    },
  },
};
</script>
