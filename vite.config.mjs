import { defineConfig } from 'vite'
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    root: path.resolve('./src'),
    server: {
        port: 8080,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, './src/index.html'),
                popular: path.resolve(__dirname, './src/popular.html'),
                city: path.resolve(__dirname, './src/city.html')
            }
        }
    },
    // plugins: [
    //     VitePWA({
    //         registerType: 'autoUpdate',
    //         workbox: {
    //             clientsClaim: true,
    //             skipWaiting: true
    //         }
    //     })
    // ]
})