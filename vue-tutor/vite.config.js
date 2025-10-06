import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
// import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [vue(), 
    // vueDevTools(), 
    tailwindcss(), 
    // createHtmlPlugin({})
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
