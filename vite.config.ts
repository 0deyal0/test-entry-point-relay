import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from '@ch1ffa/vite-plugin-relay';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), relay],
});
