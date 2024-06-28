import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

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
        manifest: true, // Generar el manifest.json
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
                manualChunks: undefined, // Desactiva el hashing de nombres
            },
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});
