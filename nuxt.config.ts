import { defineNuxtConfig } from "nuxt3";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  meta: {
    title: "m7s",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "monibuca",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  components: true,

  // vite plugins
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [IconsResolver({})],
      }),
    ],
  },
});
