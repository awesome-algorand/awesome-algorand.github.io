import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Awesome Algorand',
			social: {
				github: 'https://github.com/awesome-algorand',
			},
			editLink: {
				baseUrl: 'https://github.com/awesome-algorand/awesome-algorand.github.io/edit/main/',
			},
			sidebar: [
				{
					label: "@algokit/cli",
					link: process.env.NODE_ENV === 'production' ? "https://awesome-algorand.github.io/npm-algokit-cli/guides/example/" : "http://localhost:4322/npm-algokit-cli/guides/example/",
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
