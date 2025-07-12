import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pokemon: 'pokemon.html',
        trivial: 'trivial.html',
        sobremi: 'sobremi.html'
      }
    }
  }
});