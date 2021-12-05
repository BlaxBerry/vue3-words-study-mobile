<template>
  <div
    v-show="expand"
    class="404 d-flex flex-column justify-center align-center py-4"
    :style="{ width: '100%' }"
  >
    <v-img
      :src="require('@/assets/gif/speechless.gif')"
      alt="404"
    />
    <h1 class="text-h1 font-weight-black">404</h1>
    <h1>Page Not Fount...</h1>
    <h3>back to home in ( {{ num }} ) s</h3>
  </div>
</template>

<script>
export default {
  name: "NoComponent",
  data: () => ({
    num: 6,
    expand: true,
  }),

  mounted() {
    const timer = setInterval(() => {
      this.num -= 1;
      if (this.num == 0) {
        this.$router.replace("/");
      }
    }, 1000);

    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
};
</script>
