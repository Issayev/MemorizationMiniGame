module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'define-placeholder',
          'extend',
          'define-mixin',
          'mixin',
          'for',
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['color-mod', 'blend', 'shade'],
      },
    ],
  },
};
