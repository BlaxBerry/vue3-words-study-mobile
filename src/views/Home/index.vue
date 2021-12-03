<template>
  <div>
    搜索 (按 回车) 高级赞助商 #安装 让我们从 Vuetify 开始吧，这是世界上最流行的
    Vue.js 框架，用于构建功能丰富、快速的应用程序。 #Vue CLI 安装 当前版本的
    Vuetify 不支持 Vue 3。 对 Vue 3 的支持将随着Vuetify v3的发布而提供。
    创建新项目时，请确保您从 Vue CLI 提示中选择 Vue 2 或者正在安装到已存在的 Vue
    2项目。 更多关于如何使用Vue CLI的信息请访问 官方文档 如果你还没有使用Vue
    CLI创建过Vue.js的项目，你可以尝试输入以下内容: vue create my-app #
    切换到新项目目录 cd my-app 现在你已经实例化了一个项目，你可以使用 Vue CLI
    添加Vuetify vue add vuetify
    此命令将更改你的项目模板文件、组件文件夹、vue.config.js 等。 如果您通过
    Vue-CLI 安装 Vuetify，请确保已经提交您的代码以避免任何潜在的数据丢失。
    在安装过程中选择高级安装选项可以跳过模板更改。 #Vue UI 安装 Vuetify
    也可以使用 Vue UI 安装，这是 Vue CLI 的新可视化应用。
    确保你已经安装了最新版本的 Vue CLI，然后从你的终端中键入： # 确保 Vue CLI
    版本是 >= 3.0 vue --version //或 vue -V # 然后启动 UI vue ui 这将启动 Vue
    用户界面，并在浏览器中打开一个 新窗口。 在屏幕左侧，单击 插件。
    在输入框中搜索 Vuetify 并安装插件。 安装 Vuetify 插件 #Nuxt 安装
    可以通过安装 Nuxt Vuetify 模块来添加 Vuetify 。 yarn add @nuxtjs/vuetify -D
    # 或者 npm install @nuxtjs/vuetify -D 安装完成后，更新你的 nuxt.config.js
    文件，将 Vuetify 模块包含在构建中。 // nuxt.config.js { buildModules: [ //
    简单使用 '@nuxtjs/vuetify', // 和选项一起 ['@nuxtjs/vuetify', { /* 模块选项
    */ }] ] } 在 GitHub 上查找 Nuxt 社区模块的更多信息 #Webpack 安装 要将
    Vuetify 安装到 Webpack 项目，您需要添加几个依赖： yarn add vuetify # 或 npm
    install vuetify yarn add sass@~1.32 sass-loader deepmerge -D # OR npm
    install sass@~1.32 sass-loader deepmerge -D 安装好后，找到你的
    webpack.config.js 文件，然后复制下面的片段到规则数组中。
    如果你已经配置了一个现有的 sass 规则，你可能需要应用下面的部分或全部更改。
    如果你想利用vuetify-loader来进行 treeshaking，请确保你的 Webpack 版本 >=4。
    您可以在 树摇 页面上找到更多关于webpack的设置信息。 // webpack.config.js
    module.exports = { module: { rules: [ { test: /\.s(c|a)ss$/, use: [
    'vue-style-loader', 'css-loader', { loader: 'sass-loader', // Requires
    sass-loader@^7.0.0 options: { implementation: require('sass'),
    indentedSyntax: true // optional }, // Requires >= sass-loader@^8.0.0
    options: { implementation: require('sass'), sassOptions: { indentedSyntax:
    true // optional }, }, }, ], }, ], } } 为 Vuetify 创建一个插件文件，
    src/plugins/vuetify.js，内容如下： // src/plugins/vuetify.js import Vue from
    'vue' import Vuetify from 'vuetify' import 'vuetify/dist/vuetify.min.css'
    Vue.use(Vuetify) const opts = {} export default new Vuetify(opts) 如果使用
    vuetify-loader，请使用以下内容： // src/plugins/vuetify.js import Vue from
    'vue' import Vuetify from 'vuetify/lib' Vue.use(Vuetify) const opts = {}
    export default new Vuetify(opts) 导航到主入口点，在那里实例化 Vue 实例并将
    Vuetify 对象作为选项传递进来。 // src/main.js import Vue from 'vue' import
    vuetify from '@/plugins/vuetify' // path to vuetify export new Vue({
    vuetify, }).$mount('#app') #安装字体 Vuetify 使用 Google’s Roboto 字体 和
    Material Design 图标。 最简单的安装方法是在你的 index.html 中加入他们的 CDN
    #CDN 的用法 要测试使用 Vuetify.js 而不安装 Vue CLI
    中的模板，请将以下代码复制到你的 index.html 中。
    这将拉出最新版本的Vue和Vuetify，让你开始尝试组件。 您也可以在代码上使用
    Vuetify starter。 虽然不推荐，但如果你需要在生产环境中使用 cdn
    包，建议你对资产的版本进行范围化。 有关如何做的详细信息，请访问 jsdelivr
    网站。 为了使你的应用程序能够正常工作，你必须将其包裹在 v-app 组件中。
    查看Application组件页面以获取更多信息。 #Electron 的用法 要在 Electron
    中使用 Vuetify ，请通过 Vue CLI 添加 electron-builder 插件。 # 安装 vue add
    electron-builder # 使用 yarn electron:build yarn electron:serve #PWA 的用法
    如果您正在使用 Vue CLI 创建一个新的应用程序，您可以在启动 vue create my-app
    后的第一个提示中选择 Progressive Web App (PWA) 支持。
    这个软件包也可以通过输入以下命令安装到现有的 Vue CLI 项目中。 vue add pwa
    #Cordova 的用法 要使用 Vuetify 与 Cordova，请通过 Vue CLI 添加 Cordova
    插件： # 如果 cordova 尚未安装 yarn global add cordova # 安装 vue add
    cordova # 使用 yarn cordova-serve-android # Development Android yarn
    cordova-build-android # Build Android yarn cordova-serve-ios # Development
    IOS yarn cordova-build-ios # Build IOS yarn cordova-serve-browser #
    Development Browser yarn cordova-build-browser # Build Browser #Capacitor
    的用法 要使用 Capacitor，通过 Vue CLI 添加 Capacitor 插件： # 安装 $ vue add
    @nklayman/capacitor # 使用 $ yarn capacitor:serve #Vueprs 的用法
    我们可以通过两种方式将 Vuetify 与默认的 vuepress 主题结合使用。 要么在
    vuepress .vuepress/enhanceApp.js 文件 (下面的代码示例)中将 vuetify
    注册为插件，要么直接从 CDN 使用 vuetify ： // 作为全局插件注册vuetify //
    .vuepress/enhanceApp.js import Vuetify from 'vuetify' export default ({ Vue,
    // VuePress 应用正在使用的Vue版本 options, // 根Vue实例的选项 router, //
    应用的路由实例 siteData, // 站点元数据 }) => { Vue.use(Vuetify) } //
    或者直接从CDN使用vuetify. // 像下面一样更新 .vuepress/config.js 的头部部分.
    module.exports = { head: [ ['link', { rel: 'stylesheet', href:
    `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css` }],
    ['script', { src: `https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js` }],
    ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js`
    }], ] } #Nightly Builds The three development branches (master, dev, and
    next) are automatically published to NPM at 1200 UTC under the
    @vuetify/nightly namespace. They may be outdated or buggy and are therefore
    not officially supported and are only supplied for testing puposes. These
    builds can be installed with a package alias. master Bug修复 "vuetify":
    "npm:@vuetify/nightly@latest" Changelog dev 新功能 "vuetify":
    "npm:@vuetify/nightly@dev" Changelog next Breaking changes "vuetify":
    "npm:@vuetify/nightly@next" Changelog 了解更多？ 继续学习由 我们的团队
    选择的相关内容，或通过使用下面的导航链接在页面之间跳转。 ← 企业版 浏览器支持
    → 在 GitHub GitHub 上编辑此页面 最后更新：12/01/2021, 3:17:12 PM 目录 Vue
    CLI 安装 Vue UI 安装 Nuxt 安装 Webpack 安装 安装字体 CDN 的用法 Electron
    的用法 PWA 的用法 Cordova 的用法 Capacitor 的用法 Vueprs 的用法 Nightly
    Builds 白金赞助商
  </div>
</template>

<script>
export default {};
</script>

<style></style>
