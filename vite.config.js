import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			includeAssets: ['favicon.ico', 'robot.txt'],
			manifest: {
				name: 'EDT',
				short_name: 'EDT',
				theme_color: '#374151'
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
