// 编译环境
export const BUILD_ENV = process.env.REACT_APP_BUILD_ENV;
// 是否为本地开发环境
export const isDev = BUILD_ENV === 'development';
// 是否为测试环境
export const isTest = BUILD_ENV === 'test';
// 是否为 UAT 环境
export const isUat = BUILD_ENV === 'uat';
// 是否为生产环境
export const isProd = BUILD_ENV === 'production';

/**
 * 返回对应编译环境的配置常量
 * @param {Object} mappings 多环境配置集合
 * @param {String} env 编译环境
 */
export function generateByEnv(mappings, env = BUILD_ENV) {
  return mappings[env];
}
