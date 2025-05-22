import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace this with your Replit URL
const allowedHost = "4e4dbe6b-3dee-47f2-a8c7-f9c2a6e3b132-00-lr2en95fh0ad.pike.replit.dev"

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [allowedHost],
    host: true,  // Allow external access if needed
    port: 5173   // Optional: specify your port
  }
})
