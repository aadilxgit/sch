import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows external connections
    port: 3000, // You can change this port number
  }
})
