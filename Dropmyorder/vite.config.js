import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';

// Get the environment variables from process.env
const { REACT_APP_PUBLISHABLE_KEY } = process.env;

export default defineConfig({
  plugins: [
    VitePWA(),
    [react()],
    replace({
      'process.env.REACT_APP_PUBLISHABLE_KEY': JSON.stringify(REACT_APP_PUBLISHABLE_KEY),
    }),
  ],
});