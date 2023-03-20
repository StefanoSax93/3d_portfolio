import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // codice per attivare la visibilita anche su mobile
  // server: {
  //   host: true,
  // },
});
