CRA 是很棒的工具，开发 React 应用你必然有使用过、或正在使用它，但是，工具便利的同时，我们也会有一些需要思考、待解决的问题：

1. 如果想要修改编译配置，应该 `npm run eject` 么？
2. CRA 默认创建的代码，冗余的比较多，我们需要手动删除、添加若干基础代码。
3. 是否每一次创建项目都必须从零配置一遍？还是从某个旧项目直接拷贝？
4. ......

以上种种问题，大多数同学可能会选择 `npm run eject` 弹出配置后魔改，需要什么添加什么。但是，eject 是不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的 react-scripts 版本。而且，每一个新项目都从零配置，实在浪费时间。

## 自定义 CRA 配置

想要扩展 CRA 编译配置，eject 是不可取的，一般可以有以下几种方式：

1. 通过 CRA 官方支持的 `--scripts-version` 参数，创建项目时使用自己重写过的 react-scripts 包，相关介绍资料如下：

   1. CRA 官方的介绍：[Alternatives to Ejecting](https://create-react-app.dev/docs/alternatives-to-ejecting/)

   2. [Customizing create-react-app: How to Make Your Own Template](https://auth0.com/blog/how-to-configure-create-react-app/)

2. 使用 [craco](https://github.com/gsoft-inc/craco) 覆盖配置，这也是 AntDesign 官方最新推荐的方式。

   相关的详细介绍，请移步阅读我在掘金的介绍文章：[craco 无 eject 重写 cra 配置](https://juejin.cn/post/6871148364919111688)

3. 使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) + [customize-cra](https://github.com/arackaf/customize-cra) 组合覆盖配置，这是比较早期的方案，推荐用 craco 来替代。

以上 3 种方案，如果可以长期维护，推荐自定义 react-scripts 包，你需要花费一些精力，保持和 [facebook/create-react-app](https://github.com/facebook/create-react-app) 更新同步。无论是个人自用，还是为团队、企业开发定制的 react-scripts 包都是可行的。

## 自定义 cra-template

想要避免每一次创建项目都从零开始，我们可以通过 CRA 官方支持的 `--template` 参数，创建项目时，使用自己定制的 cra-template 包，即可一键生成基础代码，省时又省力。官方相关的介绍文档，请前往阅读：[Custom Templates](https://create-react-app.dev/docs/custom-templates)。

我们可以为自己的团队、企业开发定制的 template，将通用的代码或配置全部提炼、配置好，一定程度上提升团队的开发效率。如果将相关的开发约束、规范配置妥当，也能让团队的代码规范上一个台阶。

## 推荐

内置 [craco](https://github.com/gsoft-inc/craco) 扩展 CRA/webpack 配置，提供无 `eject` 使用 CRA 的便捷方式。默认支持一系列日常代码开发必备的编译扩展、代码规范性扩展以及 AntD 按需加载配置等，可以自由升级 `react-scripts`。

- TypeScript 版本：[@eleven.fe/cra-template-typescript](https://www.npmjs.com/package/@eleven.fe/cra-template-typescript)
- ES 版本：[@eleven.fe/cra-template](https://www.npmjs.com/package/@eleven.fe/cra-template)

工具长期维护，和 [facebook/create-react-app](https://github.com/facebook/create-react-app) 保持更新同步。

## CRA Template 开发/测试

```zsh
# ts
npx create-react-app my-app-ts --template file:./create-react-app/packages/cra-template-typescript

# es
npx create-react-app my-app-es --template file:./create-react-app/packages/cra-template
```

## CRA Template 发布

```zsh
# 推荐始终通过命令提交，方便自动生成 CHANGELOG.md
yarn commit

# 一键自动发布
yarn pub
```
