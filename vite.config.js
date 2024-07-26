import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    root: path.resolve('./public'),
    server: {
        port: 8080,
    }
})