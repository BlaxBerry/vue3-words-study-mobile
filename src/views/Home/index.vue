<template>
  <div>
    <!-- <div
      class="404 d-flex flex-column justify-center align-center pb-4"
      :style="{ width: '100%' }"
    >
      <v-img
        :src="require('@/assets/gif/hello.gif')"
        alt="404"
        :class="{ hidden: hiddenGif }"
      />
    </div> -->

    <v-sheet>
      下面是ress在默认 normalize.css 功能的情况下附加提供的 功能 列表 应用
      box-sizing: border-box 到所有元素. 重置所有元素的 padding 和 margin .
      在所有元素和为元素中指定 background-repeat: no-repeat . 继承
      text-decoration 和 vertical-align 到 ::before 和 ::after.
      在所有的浏览器中移除悬停时的 outline . 指定code元素的字体为 font-family:
      monospace . 重置input元素的 border-radius . 指定表单元素的字体继承。
      移除所有浏览器中的默认按钮样式。 指定文本区域的大小调整为垂直。 应用
      cursor: pointer 到按钮元素. 在 html 中应用 tab-size: 4 . 像标准input一样的
      select 样式. 由aria属性设置 cursor 样式.
      隐藏屏幕上的内容，但不隐藏屏幕阅读器。 所有应用样式的完整清单, 参见 ress
      css 样式表. 了解更多？ 下面是ress在默认 normalize.css
      功能的情况下附加提供的 功能 列表 应用 box-sizing: border-box 到所有元素.
      重置所有元素的 padding 和 margin . 在所有元素和为元素中指定
      background-repeat: no-repeat . 继承 text-decoration 和 vertical-align 到
      ::before 和 ::after. 在所有的浏览器中移除悬停时的 outline .
      指定code元素的字体为 font-family: monospace . 重置input元素的
      border-radius . 指定表单元素的字体继承。 移除所有浏览器中的默认按钮样式。
      指定文本区域的大小调整为垂直。 应用 cursor: pointer 到按钮元素. 在 html
      中应用 tab-size: 4 . 像标准input一样的 select 样式. 由aria属性设置 cursor
      样式. 隐藏屏幕上的内容，但不隐藏屏幕阅读器。 所有应用样式的完整清单, 参见
      ress
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    hiddenGif: false,
  }),
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        this.hiddenGif = true;
      },
      false
    );
  },
  beforeDestroy() {
    window.removeEventListener(
      "scroll",
      () => {
        this.hiddenGif = false;
      },
      true
    );
  },
};
</script>
