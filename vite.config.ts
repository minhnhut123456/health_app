/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite config
    plugins: [react(), tsconfigPaths(), svgr()],
    server: {
      port: 3003,
      host: true,
      strictPort: true,
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      css: true,
      globals: true,
    },
    base: env.BASE_URL ?? '/',
  };
});
