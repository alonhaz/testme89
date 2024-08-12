import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
  //host: '0.0.0.0',   // This allows access from any local IP address
    port: 5173,        // Ensure the server runs on port 5173
    strictPort: true,  // Ensure the server always uses the specified port
    hmr: true,         // Hot Module Replacement for faster development
  },
});
