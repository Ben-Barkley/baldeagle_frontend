const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://142.4.6.101:32768',
      changeOrigin: true,
    })
  );
};