import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    root: path.resolve('./src'),
    server: {
        port: 8080,
    },
    publicDir: '',
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
})