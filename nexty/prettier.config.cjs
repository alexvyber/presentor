/** @type {import('prettier').Config} */

module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  tabWidth: 2,
  trailingComma: 'all',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
    '',
    '^@/graphql/(.*)$',
    '',
    '^@/assets/(.*)$',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    'prettier-plugin-jsdoc',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
}
