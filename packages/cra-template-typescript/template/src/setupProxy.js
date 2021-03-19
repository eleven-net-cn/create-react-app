const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(['/dev_proxy_xxx'], {
      target: 'http://xxx.xxxx.com',
      secure: true,
      changeOrigin: true,
      cookieDomainRewrite: 'xxx.xxxx.com',
      pathRewrite: {
        // 以自由添加的前缀作为本地接口代理的标记，请求发送时会被替换掉
        '^/dev_proxy_xxx': '',
      },
    })
  );
};
