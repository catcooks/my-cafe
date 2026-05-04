import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  // Since you're using a custom domain at the root, use '/'
  base: '/', 
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
