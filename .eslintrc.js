module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // Turns off the rule for interface prefixes
    '@typescript-eslint/explicit-function-return-type': 'off', // No need to explicitly declare return types for functions
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disables enforcing return types for module boundaries
    '@typescript-eslint/no-explicit-any': 'off', // Allow `any` type in TypeScript
    '@typescript-eslint/no-unused-vars': 'off', // Turn off unused variables errors
    '@typescript-eslint/no-inferrable-types': 'off', // Disables enforcing inferred types
    '@typescript-eslint/no-var-requires': 'off', // Allows using `require` instead of `import`
    '@typescript-eslint/no-empty-function': 'off', // Allows empty functions without errors
    'prettier/prettier': 'off', // Disables Prettier's auto formatting errors
  },
};
