<template>
  <div>
    <!-- title -->
    <v-col>
      <h1 class="text-center text-en">
        {{ currentWork.name }}
      </h1>
      <br />
      <v-divider></v-divider>
    </v-col>

    <!-- tech tasks skills-->
    <v-col>
      <Cards :list="techTask" />
      <br />
    </v-col>

    <!-- description-->
    <v-col>
      <h1 class="text-en">About This Project</h1>
      <br />
      <p v-html="currentWork.description" />
    </v-col>

    <v-divider></v-divider>

    <!-- details-->
    <v-col>
      <h1 class="text-en">What I Have Done ?</h1>
      <br />
      <p v-html="currentWork.detail" />
    </v-col>

    <v-divider></v-divider>

    <!-- extras-->
    <v-col>
      <h1 class="text-en">Extra Information ?</h1>
      <br />
      <p v-html="currentWork.extra" />
    </v-col>

    <v-divider></v-divider>

    <!-- links-->
    <v-col>
      <h1 class="text-en">Links</h1>
      <br />
      <v-row>
        <v-col
          v-for="(val, key, index) in currentWork.links"
          :key="index"
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <v-icon x-large>{{ val.icon }}</v-icon>
          <v-btn
            :href="val.link"
            target="_blank"
            depressed
            elevation="2"
            rounded
          >
            {{ key }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-divider></v-divider>

    <!-- images-->
    <v-col>
      <h1 class="text-en">Images</h1>
      <br />
      <v-row>
        <v-col
          v-for="(pic, i) in currentWork.pics"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card>
            <v-img :src="pic" class="white" />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <br />
  </div>
</template>

<script>
import Cards from "@/components/skills/Cards.vue";
import { PC, MOBILE } from "@/utils/worksData/index";
import { FRONT, BACK, OTHER } from "@/utils/skillsData/index";
const WORKS_ALL = [...PC, ...MOBILE];
const SKILLS_ALL = [...FRONT, ...BACK, ...OTHER];

export default {
  name: "WorkDetails",
  components: { Cards },

  computed: {
    currentWork: function () {
      return WORKS_ALL.find((item) => {
        return item.id == this.$route.params.id;
      });
    },
    techTask: function () {
      return this.currentWork.techTask?.map((currentItem) => {
        return SKILLS_ALL.find((item) => item.name === currentItem);
      });
    },
  },
};
</script>
