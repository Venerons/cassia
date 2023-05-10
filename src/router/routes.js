
const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/IndexPage.vue') },
			{ path: '/albam', component: () => import('pages/Albam.vue') },
			{ path: '/atbash', component: () => import('pages/Atbash.vue') },
			{ path: '/augustus', component: () => import('pages/Augustus.vue') },
			{ path: '/caesar', component: () => import('pages/Caesar.vue') },
			{ path: '/carbonaro', component: () => import('pages/Carbonaro.vue') },
			//{ path: '/pigpen', component: () => import('pages/Pigpen.vue') },
			{ path: '/rot13', component: () => import('pages/Rot13.vue') },
			{ path: '/theban', component: () => import('pages/Theban.vue') },

			{ path: '/base2', component: () => import('pages/Base2.vue') },
			{ path: '/base8', component: () => import('pages/Base8.vue') },
			{ path: '/base10', component: () => import('pages/Base10.vue') },
			{ path: '/base16', component: () => import('pages/Base16.vue') },
			{ path: '/base64', component: () => import('pages/Base64.vue') },
			//{ path: '/morse', component: () => import('pages/Morse.vue') },
			{ path: '/urlencoding', component: () => import('pages/URLEncoding.vue') },

			{ path: '/readingkey', component: () => import('pages/ReadingKey.vue') },
			{ path: '/fibonacci', component: () => import('pages/Fibonacci.vue') },
			{ path: '/collatz', component: () => import('pages/Collatz.vue') },
			{ path: '/randomkey', component: () => import('pages/RandomKey.vue') },
		]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue')
	}
]

export default routes
