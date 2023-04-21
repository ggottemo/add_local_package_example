// vite.config.js
import react from '@vitejs/plugin-react';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            outputDir: 'dist/types'
        }),
    ],
    build: {
        lib: {
            entry: `${__dirname}/src/lib/index.ts`,
            name: 'MyLib',
            formats: ['es', 'umd'],
            fileName: (format) => `my-lib.${format}.js`,
            
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components', 'primereact', 'primeicons','primeflex'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                    'primereact': 'primereact',
                    'primeicons': 'primeicons',
                    'primeflex': 'primeflex'
                },
            },
        },
    },
});
