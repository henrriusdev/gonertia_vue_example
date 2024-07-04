import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            publicDirectory: 'public',
            buildDirectory: 'build',
            refresh: true,
        }),
        vue({
            include: [/\.vue$/],

        }),
    ],
    build: {
        manifest: true, // Generate manifest.json file
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
                manualChunks: undefined, // Disable automatic chunk splitting
            },
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});
