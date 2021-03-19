/**
 * https://commitlint.js.org/#/reference-configuration
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    commit => {
      // 不校验 create-react-app 初始化创建时的 commit message
      return commit.includes('Initialize project using Create React App');
    },
  ],
};
