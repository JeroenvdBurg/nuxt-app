import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5063",
          changeOrigin: true,
        },
      },
    },
  },
});
