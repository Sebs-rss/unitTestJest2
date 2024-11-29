/* module.exports = {
    plugins: ['jest']
    }
 */

module.exports = { 
    env: { browser: true, es2021: true }, 
    extends: [ 
        'eslint:recommended', 
        'plugin:vue/vue3-recommended', 
        'plugin:@typescript-eslint/recommended' ], 
        parserOptions: { ecmaVersion: 12, sourceType: 'module' }, 
        plugins: [ /* 'vue', '@typescript-eslint', */ 'jest' ], 
        rules: { 'no-unused-vars': 'warn', 'no-console': 'off', 
            // Agrega más reglas personalizadas aquí 
            } 
        };