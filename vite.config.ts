import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueTypeImports from 'vite-plugin-vue-type-imports'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import viteImagemin from 'vite-plugin-imagemin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets')],
      symbolId: 'icon-[dir]-[name]',
    }),
    vue(),
    vueTypeImports(),
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
      defaultImport: 'component',
    }),
    eslintPlugin({
      include: ['src/**/*.js, src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
})
