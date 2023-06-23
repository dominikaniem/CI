const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'worr1d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: 'https://tapsshop.pl/'
  },
});
