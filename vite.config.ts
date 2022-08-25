import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
    }),
    svgLoader({
      svgo: false,
      svgoConfig: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeDimensions', active: true },
        ],
      },
    }),
    eslintPlugin({
      include: ['src/**/*.js, src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
})
