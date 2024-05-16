import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // we want code test only in tests/unit folder
    include: ['src/tests/unit/**\/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})