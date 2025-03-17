const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // アプリケーションのURL
    supportFile: false, // 必要に応じてサポートファイルを無効化
  },
});
