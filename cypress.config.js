const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // usa example para que el sanity pase siempre; luego cambiamos a tu app
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      // plugins/eventos si los necesitas
    },
  },
  video: false,
});
