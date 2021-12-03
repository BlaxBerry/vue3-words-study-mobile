<template>
  <v-app>
    <v-app-bar app hide-on-scroll :elevation="ELEVATIONS.BAR_ELEVATION">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
        <span class="mr-2">Github</span>
      </v-btn>

      <v-switch v-model="$vuetify.theme.dark"/>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed left temporary>
      <v-toolbar :elevation="ELEVATIONS.BAR_ELEVATION">Hello</v-toolbar>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-red--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// common variables
import { ELEVATIONS } from "@/utils/commonVariables/index";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    ELEVATIONS,
  }),

  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
});
</script>
