/**
 * ESlint: https://cn.eslint.org/docs/user-guide/configuring
 * CRA: https://create-react-app.dev/docs/setting-up-your-editor/#extending-or-replacing-the-default-eslint-config
 *
 * 配置优先级，同一个目录下有多个配置文件，ESLint 只会使用一个：
 *  .eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json
 */

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    // https://github.com/umijs/fabric
    require.resolve('@umijs/fabric/dist/eslint'),
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/no-invalid-this': 0,
    '@typescript-eslint/consistent-type-imports': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'react/sort-comp': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-param-reassign': 0,
    'prefer-object-spread': 0,
    'consistent-return': 0,
    'react/button-has-type': 0,
    'react/react-in-jsx-scope': 0,
    'prefer-destructuring': 0,
    'array-callback-return': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
  },
};
