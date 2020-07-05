module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/standard"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 0,
    'no-debugger': 0,
    'semi': 0,
    'no-return-assign': 0,
    "template-curly-spacing": "off",
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}


