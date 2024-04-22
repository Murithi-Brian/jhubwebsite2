import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://jhubafrica.com/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
