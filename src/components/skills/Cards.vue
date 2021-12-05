<template>
  <v-row class="px-2">
    <v-col
      v-for="item in list"
      :key="item.id"
      class="d-flex child-flex pa-1"
      cols="2"
      sm="1"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-hover v-slot="{ hover }">
            <Card :hover="hover" :on="on" :attrs="attrs" :item="item" />
          </v-hover>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/common/Card/SkillCard.vue";
export default {
  props: ["list"],
  components: {
    Card,
  },
};
</script>

<style></style>
