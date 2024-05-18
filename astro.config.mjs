import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
            configFile: fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url)),
        }),
    ],
    experimental: { optimizeHoistedScript: true },
    image: {
        service: passthroughImageService(),
    },
    site: 'https://wedding.datyen.com/',
    base: import.meta.env.BASE_URL,
});