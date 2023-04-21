// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            outputDir: 'dist'
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
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
