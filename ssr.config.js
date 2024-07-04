import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            ssr: 'resources/js/ssr.js', // Enable SSR
            publicDirectory: 'public',
            buildDirectory: 'bootstrap',
            refresh: true,
        }),
        vue(),
    ],
    build: {
        ssr: true, // Enable SSR
        outDir: 'bootstrap',
        rollupOptions: {
            input: 'resources/js/ssr.js',
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
                manualChunks: undefined, // Disable automatic chunk splitting
            },
        },
    },
});
