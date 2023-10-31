// prettier.config.js
module.exports = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  useTabs: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
