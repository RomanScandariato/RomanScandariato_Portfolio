import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //send all requests through /graphql to the Express 3333 port
  server: {
    proxy: {
      '/graphql': {
         target:'http://localhost:5173'
      }
    }
  }
})
