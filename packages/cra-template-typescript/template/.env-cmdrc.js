/**
 * env-cmd 注入 node 运行环境变量
 *  - env-cmd 支持定义任意多的环境，自动注入定义的环境变量，仅需在 package.json scripts 启动时，通过 -e 指定运行时对应的环境；
 *  - https://github.com/toddbluhm/env-cmd
 *
 * Tips：
 *  1、自定义的环境变量：
 *    - 如果你期望在 js 代码中读取，必须以 REACT_APP_ 打头，否则会被 CRA 脚手架经过内部处理忽略掉；
 *    - 如果仅仅在构建阶段使用，可以不使用 REACT_APP_ 前缀；
 *  2、CRA 内置的环境变量列表：https://create-react-app.dev/docs/advanced-configuration
 */

module.exports = {
  development: {
    REACT_APP_BUILD_ENV: 'development', // 编译环境
    PUBLIC_URL: '', // 配置静态资源 url,最终影响 output下的 publicPath（开发环境不需要配置）
    BUILD_PATH: 'build', // 自定义打包输出目录
    DANGEROUSLY_DISABLE_HOST_CHECK: true, // 允许代理 host 通过 IP 地址访问
    // HOST: 'local.test.xxxx.com', // 指定启动时的 host（需提前修改 host 映射）
    ENABLE_VCONSOLE: false, // 是否开启 vconsole（ production 环境即使设置为 true 也不会开启）
  },
  test: {
    REACT_APP_BUILD_ENV: 'test',
    PUBLIC_URL: ``,
    BUILD_PATH: 'build',
    INLINE_RUNTIME_CHUNK: false,
    GENERATE_SOURCEMAP: true,
    REMOVE_FILENAME_HASH: false, // 是否移除编译产物中 js/css 文件名的 hash 值
    ENABLE_VCONSOLE: false,
  },
  uat: {
    REACT_APP_BUILD_ENV: 'uat',
    PUBLIC_URL: ``,
    BUILD_PATH: 'build',
    INLINE_RUNTIME_CHUNK: false,
    GENERATE_SOURCEMAP: true,
    REMOVE_FILENAME_HASH: false,
    ENABLE_VCONSOLE: false,
  },
  production: {
    REACT_APP_BUILD_ENV: 'production',
    PUBLIC_URL: ``, // 尽量使用 https，避免运营商劫持资源
    BUILD_PATH: 'build',
    INLINE_RUNTIME_CHUNK: false, // runtime 代码是否内嵌到 html 中
    GENERATE_SOURCEMAP: true, // 是否开启 sourcemap
    REMOVE_FILENAME_HASH: false,
    SHOULD_DROP_DEBUGGER: true, // 打包时是否移除 debugger
    SHOULD_DROP_CONSOLE: true, // 打包时是否移除 console
  },
};
