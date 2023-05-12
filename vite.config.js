import { defineConfig } from "vite";
import rakkas from "rakkasjs/vite-plugin";
import path from "node:path";

export default defineConfig({
  resolve: { alias: { src: path.resolve(__dirname, "src") } },
  plugins: [rakkas()],
});
