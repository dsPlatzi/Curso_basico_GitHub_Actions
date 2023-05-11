import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dsplatzi.github.io/Curso_basico_GitHub_Actions/",
  plugins: [react()],
})
