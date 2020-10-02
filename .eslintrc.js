module.exports = {
  parser: 'babel-eslint',
  plugins: ['simple-import-sort'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  env: {
    mocha: true,
    browser: true,
    jest: true,
  },
  rules: {
    'import/extensions': 0,
    'import/order': 'off', // disabled in favor of simple-inport-sort
    'react/jsx-props-no-spreading': ['off'],
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off', // disabled in favor of simple-import-sort
  },
};
