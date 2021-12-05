<template>
  <v-navigation-drawer v-model="$store.state.showDrawer" fixed right temporary>
    <v-toolbar :elevation="ELEVATIONS.BAR_ELEVATION">
      <!-- <v-btn
        id="logo-text"
        class="transparent"
        depressed
        plain
        x-large
        to="/"
        left
      >
        Chen's Portfolio
      </v-btn> -->
    </v-toolbar>
    <v-list nav>
      <v-list-item-group v-model="group">
        <v-list-item
          v-for="(item, index) in NAVIGATION_LIST"
          :key="index"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
// common variables
import { ELEVATIONS } from "@/utils/commonVariables/index";
import { NAVIGATION_LIST } from "@/utils/layoutDefaultData/index";
export default {
  data: (): unknown => ({
    ELEVATIONS,
    NAVIGATION_LIST,
    group: null,
  }),
};
</script>

<style></style>
