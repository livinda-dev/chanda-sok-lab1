import js from '@eslint/js';
export default [
    js.configs.recommended,
    {
        files:["**/*.js"],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "module",
            globals: {
        // Built-in Node globals
        process: "readonly",
        console: "readonly",

        // Mocha test globals
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    rules:{
        "no-console":"off"

    }
}
]