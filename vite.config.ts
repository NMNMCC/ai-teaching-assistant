import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import uno from "unocss/vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [uno(), react()],
})
