module.exports = {
   root: true,
   env: {
      node: true
   },
   plugins: ['vuetify'],
   extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'prettier/vue'
   ],
   rules: {
      'no-unreachable': 'off',
      'vue/valid-v-slot': 'off',
      'vuetify/no-deprecated-classes': 'error',
      'vue/no-side-effects-in-computed-properties': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
   },
   parserOptions: {
      parser: 'babel-eslint'
   }
}