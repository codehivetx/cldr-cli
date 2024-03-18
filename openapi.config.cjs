const { defineConfig } = require('openapi-axios');

module.exports = defineConfig({
  openAPIs: [
    {
      name: 'st',
      document: 'https://st.unicode.org/openapi',
    },
  ],
});
