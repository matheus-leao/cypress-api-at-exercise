const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cpsago",
  e2e: {
      baseUrl: 'https://automationexercise.com/api',
    },
    env: {
      requestMode: true
    }
  },
);

