const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://ejemplo-app.com',
    setupNodeEvents(on, config) {
      // Aquí puedes agregar plugins o eventos personalizados si los necesitas
    },
  },
  video: false, // Desactiva la grabación de video para acelerar las pruebas
});
