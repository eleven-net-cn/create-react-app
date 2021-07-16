## 运行命令

```bash
yarn start              # 本地调试
yarn build              # 打包 & 生产环境代码
yarn build:analyze      # 打包生产环境代码 & 查看编译产物分析

yarn build-test         # 打包 & 测试环境代码
yarn build-uat          # 打包 & UAT 环境代码
yarn build-prod         # 打包 & 生产环境代码

yarn commit             # （推荐）交互式书写 commit message
yarn changelog          # （推荐）根据 commit message，自动升级 version、生成 CHANGELOG.md
# 更多命令
# yarn changelog -- -f                # 初次创建项目，执行命令生成 CHANGELOG.md
# yarn changelog -- -r patch          # 指定本次仅升级 patch 版本
# yarn changelog -- -r minor          # 指定本次仅升级 minor 版本
# yarn changelog -- -r major          # 指定本次仅升级 major 版本
# yarn changelog -- -p alpha          # 指定本次升级 alpha 版本
# yarn changelog -- -p beta           # 指定本次升级 beta 版本

yarn test               # 运行测试

# 推荐不要使用 eject，以便能够跟随 React 官方的脚步，随时在你的项目中升级 react-scripts
# 所有的 react-scripts & webpack 自定义配置，都可以在 craco.config.js 中扩展
# 如果使用了 eject，你需要自己处理 craco.config.js 中已经添加的各项扩展
yarn eject
```

## 目录

```bash
├── build/
├── public/
│
├── src
│   ├── assets                      # 公用静态资源
│   │     ├── images/                   # 公用图片
│   │     └── styles/                   # 全局公用样式
│   │
│   ├── components/
│   ├── constants/                  # 公用配置常量
│   ├── hooks/
│   ├── pages/
│   ├── services/                   # API
│   ├── utils
│   │     └── env.ts                    # 编译环境相关封装
│   │
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts          # 全局类型声明
│   ├── reportWebVitals.ts
│   ├── setupProxy.js               # 本地开发代理
│   └── setupTests.ts
│
├── .commitlintrc.js            # commitlint 配置
├── .env-cmdrc.js               # node 运行环境配置 & react-scripts 编译配置
├── .gitignore
├── craco.config.js             # craco 配置，覆盖 react-scripts & webpack 配置
├── package.json
├── README.md
├── tsconfig.edit.json
├── tsconfig.json
└── yarn.lock
```
