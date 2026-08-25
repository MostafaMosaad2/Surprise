import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 43141,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 43141,
    strictPort: true,
  },
})
