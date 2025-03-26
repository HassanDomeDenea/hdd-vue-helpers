import HddVueHelpersResolver from '@hassandomedenea/hdd-vue-helpers/resolver'
import Tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), Tailwindcss(), Components({
    dts: true,
    resolvers: [
      HddVueHelpersResolver({
        prefix: 'HDD',
      }),
    ],
  })],
})
