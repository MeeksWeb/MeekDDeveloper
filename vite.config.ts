import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoosJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), devtoosJson()],
  resolve: {
    tsconfigPaths: true,
  },
});
