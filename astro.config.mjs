import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
            configFile: fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url)),
        }),
    ],
    site: 'https://sonynguyen29.github.io/',
    base: import.meta.env.PROD ? "/my-wedding" : "",
});