const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    STAFF_USERNAME: "JehadLefdawy",
    STAFF_PASSWORD: "200400600Gg",
  },
  e2e: {
    baseUrl: "https://goal-dev.mdx.ac.uk/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
