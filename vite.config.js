import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,webp}"], // Cache dynamic assets
      },
      manifest: {
        name: "Shopping App",
        short_name: "ShopApp",
        description:
          "Discover amazing deals and find everything you need, right at your fingertips.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3D005E",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/e-commerce.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "/Animation - 1739881882213.gif",
            sizes: "512x512",
            type: "image/gif",
          },
          {
            src: "/about.webp",
            sizes: "512x512",
            type: "image/webp",
          },
          {
            src: "/contact.webp",
            sizes: "512x512",
            type: "image/webp",
          },
          {
            src: "/landing_image.webp",
            sizes: "512x512",
            type: "image/webp",
          },
          {
            src: "/shopping-bags.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
        scope: "/",
        lang: "en",
        dir: "ltr",
      },
    }),
  ],
});
