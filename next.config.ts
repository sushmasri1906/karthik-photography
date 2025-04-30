// next.config.js
import path from "path";

const nextConfig = {
	images: {
		domains: ["cdn.sanity.io"], // Allow images from Sanity CDN
	},
	webpack(config: { resolve: { alias: any; }; }) {
		config.resolve.alias = {
			...config.resolve.alias,
			"~slick-carousel": path.resolve(__dirname, "node_modules/slick-carousel"),
		};
		return config;
	},
};

export default nextConfig;
