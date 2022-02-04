import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `margin: 0;  padding: 0; box-sizing: border-box;  text-decoration: none;`
      }
    }
  }
});
