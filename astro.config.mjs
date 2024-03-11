import { defineConfig } from 'astro/config';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  //routes: [{ path: "/product-page/:slug", component: "./src/pages/product-page.astro" }],
  integrations: [tailwind()],
  output: "server",
});