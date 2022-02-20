<template>
  <el-carousel height="190px" :autoplay="false" arrow="never">
    <el-carousel-item v-for="item in 2" :key="item" class="carousel-item">
      <!-- <h3 class="small">{{ item }} Dialy word</h3> -->
      <el-image
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        fit="cover"
      />
      <div class="my-carousel-text">
        <p>
          When you want to give up, think about what made you insist on coming
          here
        </p>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.carousel-item {
  height: 190px;

  .my-carousel-text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;

    p {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      margin: 0;
      padding: 0 10px;
      font-size: 1.05rem;
      text-align: center;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }
}
</style>
