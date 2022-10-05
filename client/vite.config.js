import { sveltekit } from "@sveltejs/kit/vite"
import path from "path"

//create alias
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"$components": path.resolve("./src/components")
		}
	}
}

export default config
