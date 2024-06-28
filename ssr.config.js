import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            ssr: 'resources/js/ssr.js', // Habilitar SSR
            publicDirectory: 'public',
            buildDirectory: 'bootstrap',
            refresh: true,
        }),
        vue(),
    ],
    build: {
        ssr: true, // Habilitar SSR
        outDir: 'bootstrap',
        rollupOptions: {
            input: 'resources/js/ssr.js',
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
                manualChunks: undefined, // Desactiva el hashing de nombres
            },
        },
    },
});
