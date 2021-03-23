> 这里提供两款直接可用的模版工具，你可以用来一键生成 React 应用，经过若干时日的探索，目前我认为这是使用 CRA 比较省力的方式，已经成为我日常开发 React 应用的常规武器之一。  
> TypeScript 版本：[@eleven.fe/cra-template-typescript](https://www.npmjs.com/package/@eleven.fe/cra-template-typescript)  
> ES 版本：[@eleven.fe/cra-template](https://www.npmjs.com/package/@eleven.fe/cra-template)  
> 包含了下方 craco 扩展 CRA 配置的全部内容，并且扩展了诸多日常有用的特性，你可以当做日常编写 React 项目的脚手架工具，也可以当做学习阅读 carco 配置的示例。  
> 两款工具会长期维护，逐渐加入更多的扩展，并且和 [facebook/create-react-app](https://github.com/facebook/create-react-app) 保持更新同步。

使用 CRA 脚手架创建的项目，如果想要修改编译配置，通常可能会选择 `npm run eject` 弹出配置后魔改。但是，eject 是不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的 react-scripts 版本。

如果想要无 eject 重写 CRA 配置，一般可以有以下几种方式：

1. 通过 CRA 官方支持的 `--scripts-version` 参数，创建项目时使用自己重写过的 react-scripts 包
2. 使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) + [customize-cra](https://github.com/arackaf/customize-cra) 组合覆盖配置
3. 使用 [craco](https://github.com/gsoft-inc/craco) 覆盖配置

第 1 种方式很棒，但这里暂时不做讨论，感兴趣的可以从下方链接了解更多：

1. CRA 官方的介绍：[Alternatives to Ejecting](https://create-react-app.dev/docs/alternatives-to-ejecting/)
2. [Customizing create-react-app: How to Make Your Own Template](https://auth0.com/blog/how-to-configure-create-react-app/)

第 2 种方式相对第 3 种略复杂一些，并且我注意到 AntDesign 官方也开始推荐 [craco](https://github.com/gsoft-inc/craco) 了，这里详细讨论一下第三种 [craco](https://github.com/gsoft-inc/craco) 的使用，经过项目的实测，用起来还算顺手。