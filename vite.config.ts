import {fileURLToPath, URL} from "node:url";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone.js"

dayjs.extend(utc);
dayjs.extend(timezone);

const version = dayjs().format('YYYYMMDDHHmmss');

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
    ],
    define: {
        "import.meta.env.__VERSION__": JSON.stringify(version),
    },
    server: {
        cors: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
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
