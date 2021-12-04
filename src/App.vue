<template>
  <v-app>
    <!-- top bar -->
    <Toolbar />

    <!-- right navigation drawer -->
    <Drawer />
    
    <!-- main views-->
    <v-container>
      <v-main>
        <router-view />
      </v-main>
    </v-container>

    <!-- bottoom footer -->
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Toolbar from "@/components/common/Navigation/Toolbar.vue";
import Drawer from "@/components/common/Navigation/Drawer.vue";
import Footer from "@/components/common/Footer/Footer.vue";
export default Vue.extend({
  name: "App",
  components: { Toolbar, Drawer, Footer },
});
</script>
