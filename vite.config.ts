import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone.js"
import * as path from "node:path";
import UnoCSS from 'unocss/vite'

dayjs.extend(utc);
dayjs.extend(timezone);

const version = dayjs().format('YYYYMMDDHHmmss');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  define: {
    "import.meta.env.__VERSION__": JSON.stringify(version),
  },
  server: {
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${version}.js`,
        chunkFileNames: `assets/[name].${version}.js`,
        assetFileNames: `assets/[name].${version}.[ext]`
      }
    }
  }
})
