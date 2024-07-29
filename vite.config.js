import { defineConfig } from 'vite'
import path from 'path';

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
                new_directions: path.resolve(__dirname, './src/new-directions.html')
            }
        }
    }
})