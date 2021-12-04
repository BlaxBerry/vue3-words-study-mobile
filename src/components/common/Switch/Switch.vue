<template>
  <v-switch
    v-model="$vuetify.theme.dark"
    :append-icon="
      $vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
    "
    inset
    dense
    color="cyan"
    class="px-4"
    @click:append="changeDarkTheme()"
  />
</template>

<script>
export default {
  methods: {
    changeDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss">
.v-input__slot {
  margin-bottom: 0 !important;
}
.v-input__append-outer {
  margin-left: 0 !important;
}
.v-messages {
  display: none;
}
</style>
