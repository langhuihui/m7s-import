// https://cn.windicss.org
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  attributify: true,
  extract: {
    include: [
      "./components/**/*.{vue,js}",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
    ],
  },
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      }
    },
  },
});
