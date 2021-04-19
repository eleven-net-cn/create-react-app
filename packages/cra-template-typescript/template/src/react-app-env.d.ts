/// <reference types="react-scripts" />

/**
 * 编译环境
 */
declare type BuildEnv = 'development' | 'test' | 'uat' | 'production';

/**
 * 多编译环境变量约束
 */
declare type MultiEnv<T = string> = Record<BuildEnv, T>;
