import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: import.meta.env.VITE_PORT_NUMBER,
    host: true,
    watch: {
      usePolling: true
    }
  }
})
