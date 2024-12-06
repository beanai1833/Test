import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "node:url";
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //正式
  // base:process.env.NODE_ENV === 'development' ? './' : '/Amway2025MEL/',  //测试
  // server: {
  //   host: true,
  //   port: 8010,
  // },
  server: {
    host: true,
    port: 8010,
    // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
    // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    proxy: {
      "^/api": {
        target: "https://amway2025mel-uat.mmice.com.cn/api",
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, ""), //重写真实路径,替换/api
      },
      //当pdf和数据接口不在同一个请求地址下时,为pdf预览追加一个代理 bn
      // '/pdf': {
      //   target: 'https://sctt-image-test.sctt.net',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/pdf/, ""),
      // }
    },
  },
  build: {
    outDir: 'docs',
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@': '/src',
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
});
