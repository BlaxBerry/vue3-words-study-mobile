<template>
  <v-footer padless v-if="!$route.meta.hidenFooter">
    <v-card dark flat tile width="100%" class="text-center">
      <v-card-text>
        <span v-for="(btn, i) in FOOTER_LINK_BTNS" :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mx-2" icon :href="btn.href" target="_blank">
                <v-icon size="24px" color="white" v-bind="attrs" v-on="on">
                  {{ btn.icon }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ btn.message }}</span>
          </v-tooltip>
        </span>
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
import { FOOTER_LINK_BTNS } from "@/utils/layoutDefaultData/index";
export default {
  data: () => ({
    FOOTER_LINK_BTNS,
  }),
};
</script>
