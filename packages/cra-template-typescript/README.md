# @eleven.fe/cra-template-typescript

按照 CRA 官方推荐方式 —— [Custom Templates](https://create-react-app.dev/docs/custom-templates)，自定义的 cra-template，这是 TypeScript 版本。工具会长期维护，逐渐加入更多的扩展，并且和 [facebook/create-react-app](https://github.com/facebook/create-react-app) 保持更新同步。

运行命令，一键生成 React 项目

```sh
npx create-react-app my-app --template @eleven.fe/cra-template-typescript

# or

yarn create react-app my-app --template @eleven.fe/cra-template-typescript
```

> `npx` 和 `yarn create` 二选一即可，两者生成的项目完全一致，都会默认使用 yarn 作为项目的包管理工具。

## 扩展支持

- 统一的应用开发基础配置

  - ✅ public 目录清除无用代码，提供规范的 html 模版、meta 标签等
  - ✅ 默认引入 polyfill（如不需要，请移除）
  - ✅ 默认内置 [CSS Reset](https://www.npmjs.com/package/@eleven.fe/reset.css)
  - ✅ 提供编译环境判断 `src/utils/env.ts`

- 代码规范性扩展

  - ✅ git 提交时，lint-staged 按照指定的 prettier 规则格式化代码
  - ✅ git 提交时，commitlint 校验 commit message
  - ✅ 提供 `yarn commit` 命令，交互式输入 commit message
  - ✅ 内置 standard-version，自动生成 CHANGELOG.md

- 编译扩展

  - ✅ 引入 emv-cmd，可区分任意（编译）环境，优于 dotEnv
  - ✅ 引入 craco，无需 eject，支持覆盖所有 webpack 配置
  - ✅ 内置别名 `@`，映射指向 src 目录
  - ✅ 支持本地开发热更新
  - ✅ 支持装饰器
  - ✅ 支持 less
  - ✅ 支持 [react css modules](https://github.com/gajus/babel-plugin-react-css-modules)（sass/less/css），☞ 使用指南见下方
  - ✅ 支持 [react scoped css](https://github.com/gaoxiaoliangz/react-scoped-css)（仅支持 sass/css），☞ 使用指南见下方
  - ✅ 内置模块间循环依赖检测
  - ✅ tsconfig.json 扩展 paths

- 开发框架支持
  - ✅ 内置 AntDesign 配置、按需加载，开箱即用，提供 `antd.theme.js` 配置自定义主题

## Q&A

1. 为什么要使用此工具初始化创建项目？直接使用官方 create-react-app 去创建项目不香么？

   A：这里并没有重复造轮子，而是按照 create-react-app 官方推荐的方式，来自定义企业开发 template，为开发者提供好日常开发必须要用到的各种扩展支持、企业相关的特有扩展、代码规范性的统一约束等等。

   而按照 create-react-app 默认生成的项目，结构过于简单、内置了过多不需要的冗余代码或配置、日常开发必备的东西均需手动额外添加，每次从基础脚手架创建项目都要经历不必要的重复劳动。

   这里在自定义各项能力的同时，保持与 create-react-app 官方同步，生成的项目可以在任意时刻升级 react-scripts。

2. 编译的产物，怎么移除 js/css 文件名的 hash？

   > 通常在需要把 html 内嵌在服务端时用到，方便版本号管理。

   A：`.env-cmdrc.js` 文件中，提供了参数 `REMOVE_FILENAME_HASH` 来控制。

3. [react scoped css](https://github.com/gaoxiaoliangz/react-scoped-css) 怎么使用？

   A：以一个 sass 文件为例：

   1. 新建的样式文件，后缀名前添加 scoped，例如：新建了一个 sass 文件，命名为 `style.scoped.scss`，**注意：不可省略文件后缀名，否则会失效**
   2. 在组件中引入 `import './style.scoped.scss';` 即可，仍然按原来的 `className` 方式书写选择器名称

   当前支持 sass/css 2 种。

   **示例代码：**

   - index.tsx 文件

     ```tsx
     import './style.scoped.scss';
     import React from 'react';

     const Example = () => <div className="example-wrapper">Hello World</div>;

     export default Example;
     ```

   - style.scoped.scss 文件

     ```scss
     .example-wrapper {
       font-size: 20px;
       background-color: red;
     }
     ```

   - 渲染结果示例

     自动在 DOM 元素上添加 `data-v-[hash]` 属性

     ```html
     <div class="example-wrapper" data-v-f821aed7></div>
     ```

4. [react css modules](https://github.com/gajus/babel-plugin-react-css-modules) 怎么使用？

   > [react css modules](https://github.com/gajus/babel-plugin-react-css-modules) 与通常的 css modules 概念有一些区别，与 create-react-app 默认的 `*.module.css` 使用方式相比更加便捷，推荐通过阅读文档了解更多。

   A：以一个 sass 文件为例：

   1. 新建的样式文件，后缀名前添加 module，例如：新建了一个 sass 文件，命名为 `style.module.scss`
   2. 在组件中引入 `import './style.module.scss';`，**注意：不可省略文件后缀名，否则会失效**
   3. 标签中原来书写 `className`，现在换成 `styleName` 即可

   当前支持 sass/less/css 3 种。

   **示例代码：**

   - index.tsx 文件

     ```tsx
     import './style.module.scss';
     import React from 'react';

     const Example = () => <div styleName="example-wrapper">Hello World</div>;

     export default Example;
     ```

   - style.module.scss 文件

     ```scss
     .example-wrapper {
       font-size: 20px;
       background-color: red;
     }
     ```

   - 渲染结果示例

     class 上自动添加 hash 值

     ```html
     <div class="example-wrapper-1raFm"></div>
     ```

5. 为什么使用 craco 来自定义 react-scripts 配置？而不是 `eject` 出配置再自定义？

   A：大概有以下几点原因：

   1. craco 在自定义 react-scripts 方面，使用较为简单，社区支持情况良好，包括 AntDesign 官方也在大力推荐。相比 [react-app-rewired](https://github.com/timarney/react-app-rewired)，craco 是后起之秀，考虑简单、易用、社区支持等方面，更加推荐使用。
   2. 保持不 eject，即保持了跟随 React 官方脚步升级 react-scripts 的能力。
   3. craco 能够扩展所有的 react-scripts & webpack 自定义配置，完全不用考虑使用 `eject`。

6. 为什么不选择定制一个 react-scripts 包去扩展配置（还能方便的集成更多额外自定义的编译能力）？

   A：我们也可以直接定制一个 react-scripts，将所有需要的扩展纳入定制的包里，要做的工作并不复杂。

   但是，将来必须要时刻紧跟 create-react-app 官方脚步去维护、升级、发布新版本，一旦没有人持续维护，将不能使用 react-scripts 新版本的特性，之前做的所有努力都将付之东流。

   逆向的思考是，即便使用定制的 react-scripts，每一位使用者都有扩展编译配置的需求，你仍然要在 eject 或不 eject 之间做抉择。

   而这里选择 craco 方案，项目初始化完成后，将所有的控制权交给你自己，工具出现某些小问题、不足或想要补充，或想要升级 react-scripts 等等，你都可以畅通无阻地自己去完成。

7. 将来想要升级项目的 react-scripts 版本，应该怎么做？

   A：直接安装新版本的 react-scripts，与 create-react-app 官方生成的项目升级套路一致。

   推荐阅读 [CRA 官方的 CHANGELOG](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)，了解更高版本都有哪些更新，CRA 官方每发一个新版本，都会给出相应的升级建议。

   升级后，移除 `node_modules` 目录，重新 install 包，运行如果有报错，按照提示，去查找对应需要修改的地方即可，一般可能是:

   1. react-scripts 更新了大版本，craco “也许”需要跟随做升级；
   2. `craco.config.js` 中扩展的配置，需要改动、移除等；
   3. 其它日常升级 react-scripts 版本可能会遇到的问题等；

   举个栗子，例如：react-scripts 在 v4 以后默认支持了 fast refresh，而在此之前，我们是自己通过 craco 添加了 fast refresh 的扩展，那么升级 react-scripts 到 v4 以后，直接运行会发现提示 fast refresh 相关的报错，在 `craco.config.js` 中移除该扩展即可。

8. react scoped css / react css modules / styled components 等模块化样式方案，应该选哪个？

   A：推荐优先使用 [react scoped css](https://github.com/gaoxiaoliangz/react-scoped-css)，简单易用，与 vue 默认提供的 scoped 能力一致。相对于 [react css modules](https://github.com/gajus/babel-plugin-react-css-modules)、[styled components](https://styled-components.com/)，没有繁琐的规则，代码量也更少。

   其次推荐 [react css modules](https://github.com/gajus/babel-plugin-react-css-modules)，但编码时，需要用 `styleName` 替换 `className`，稍显麻烦了一点。

   最后，[styled components](https://styled-components.com/) 建议不要使用，它更适合服务端渲染、React Native 的场景。主要有以下几点原因：

   1. 性能

      styled-components 不能解析出一个静态 CSS 文件，这意味你的浏览器只有解析完 styled-components 才能开始渲染样式。

      css 和 js 没有分离，那么你在更新代码时，即使仅仅修改了 js 部分的逻辑代码，浏览器依然要重新下载文件，而无法从浏览器缓存中读取 css 的部分。

      styled-components 生成的组件都会被包裹一层高阶组件 (HoC)，也浪费了性能。

   2. 代码的阅读体验

      将冗长的样式代码放在组件中，让组件代码非常长，并且大部分人在书写 styled components 时，TA 的 react 组件标签和 styled components 标签很像，代码的阅读体验直线下降。

   推荐阅读 [[译]停止使用 CSS-in-JS 的九个理由](http://ekoneko.github.io/blog/engineering/stop-using-css-in-js/) 了解更多。

9. 生成的项目目录中，有 `.gitkeep` 文件？

   A：Git 提交时会略过空目录，`.gitkeep` 文件用于处理此提交问题，编码时将其删除即可。
