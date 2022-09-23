module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-console': ['error', { allow: ['info'] }],
    'react/jsx-no-constructed-context-values': 0,
    'react/button-has-type': 0,
    'max-len': 0,
  },
};
