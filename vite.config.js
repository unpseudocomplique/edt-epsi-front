import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			includeAssets: ['favicon.ico', 'epsilogo.webp'],
			manifest: {
				name: 'EDT',
				short_name: 'EDT',
				theme_color: '#374151',
				icons: [
					{
						src: 'epsilogo.webp',
						sizes: '192x192',
						type: 'image/webp',
					},
				]
			},
			registerType: 'autoUpdate'
		})
	],
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`
		}
	}
})
