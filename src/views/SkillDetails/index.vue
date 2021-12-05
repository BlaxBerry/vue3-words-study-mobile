<template>
  <v-sheet>
    <!-- title -->
    <h1 id="text-jp" class="text-center">
      {{ currentSkill.name }}
    </h1>
    <v-col></v-col>
    <v-divider></v-divider>

    <!-- relevance -->
    <v-col>
      <h1 id="text-en">Relevance Skills:</h1>
    </v-col>
    <Cards :list="relevanceList" />

    <!-- <v-img
      :src="
        currentSkill.fileName
          ? require(`@/assets/svg/${currentSkill.fileName}`)
          : ''
      "
      aspect-ratio="1"
      class="white"
      width="60"
    /> -->
  </v-sheet>
</template>

<script>
import Cards from "@/components/skills/Cards.vue";
import { mixin_skillDetails } from "@/mixin/SkillDetails/index";
import { FRONT, BACK, OTHER } from "@/utils/skillsData/index";
const SKILLS_ALL = [...FRONT, ...BACK, ...OTHER];

export default {
  name: "SkillDetails",
  components: { Cards },
  mixins: [mixin_skillDetails],

  computed: {
    currentSkill: function () {
      return SKILLS_ALL.find((item) => {
        return item.id == this.$route.params.id;
      });
    },
    relevanceList: function () {
      return this.currentSkill.relevance?.map((currentItem) => {
        return SKILLS_ALL.find((item) => item.name === currentItem);
      });
    },
  },
};
</script>
