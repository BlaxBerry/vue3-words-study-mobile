<template>
  <v-app-bar app hide-on-scroll :elevation="ELEVATIONS.BAR_ELEVATION">
    <v-spacer></v-spacer>
    <div class="d-none d-sm-flex align-center">
      <v-btn
        id="text-jp"
        v-for="(item, index) in NAVIGATION_LIST"
        :key="index"
        :to="item.to ? item.to : undefined"
        :href="item.href ? item.href : undefined"
        :target="item.href ? '_blank' : undefined"
        :icon="item.href ? true : false"
        :x-large="!item.href ? true : false"
        depressed
        plain
        rounded
      >
        <v-icon v-if="item.href" large>{{ item.icon }}</v-icon>
        <strong v-else>{{ item.name }}</strong>
      </v-btn>
      <!-- <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      /> -->
      <!-- <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      /> -->
    </div>

    <ThemeSwitch />

    <v-app-bar-nav-icon @click.stop="handleDrawer" class="d-sm-none" />
  </v-app-bar>
</template>

<script>
// common variables
import { ELEVATIONS } from "@/utils/commonVariables/index";
import { NAVIGATION_LIST } from "@/utils/layoutDefaultData/index";
import ThemeSwitch from "@/components/common/Switch/Switch.vue";
export default {
  components: { ThemeSwitch },

  data: () => ({
    ELEVATIONS,
    NAVIGATION_LIST,
  }),

  methods: {
    handleDrawer() {
      this.$store.commit("handleDrawer");
    },
  },
};
</script>

<style></style>
