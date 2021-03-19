// 编译环境
export const BUILD_ENV: BuildEnv = process.env.REACT_APP_BUILD_ENV as BuildEnv;
// 是否为本地开发环境
export const isDev: boolean = BUILD_ENV === 'development';
// 是否为测试环境
export const isTest: boolean = BUILD_ENV === 'test';
// 是否为 UAT 环境
export const isUat: boolean = BUILD_ENV === 'uat';
// 是否为生产环境
export const isProd: boolean = BUILD_ENV === 'production';

/**
 * 返回对应编译环境的配置常量
 * @param mappings 多环境配置集合
 * @param env 编译环境
 */
export function generateByEnv<T>(mappings: MultiEnv<T>, env = BUILD_ENV): T {
  return mappings[env];
}
