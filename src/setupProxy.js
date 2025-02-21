// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://test.api.amadeus.com',
      changeOrigin: true,
      pathRewrite: {
        '^/v1': '',  
      },
    })
  );
};

