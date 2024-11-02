import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default {
  // Définition des environnements
  env: {
    browser: true,
    es2021: true,
  },
  // Les fichiers à analyser
  overrides: [
    {
      files: ['**/*.{ts,mts,tsx,vue}'],
      rules: {
        // Ajoutez vos règles personnalisées ici
      },
    },
  ],
  // Les fichiers à ignorer
  ignorePatterns: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],

  // Intégration des configurations de plugins
  extends: [
    // Intégration de la configuration essentielle de Vue
    ...pluginVue.configs['flat/essential'],
    // Configuration TypeScript pour Vue
    ...vueTsEslintConfig(),
    // Ignorer le formatage par Prettier
    skipFormatting,
  ],
  rules: {
    // Ajoutez vos règles personnalisées ici
  },
}
