/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'atom.tailus.io',
			'images.unsplash.com',
			'unsplash.com',
			'tailus.io',
			'assets.aceternity.com',
			'pagedone.io',
		],  // This specifies the allowed domains for image sources
	},
};

export default nextConfig;
