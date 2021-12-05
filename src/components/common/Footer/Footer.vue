<template>
  <v-footer padless v-if="!$route.meta.hidenFooter">
    <v-card dark flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-2" icon>
          <v-icon size="24px" color="white">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="font-weight-black">
        2021.12
        <span id="text-en" class="text-h5 mx-1"> Chen </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style></style>
