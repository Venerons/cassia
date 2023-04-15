
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/albam', component: () => import('pages/Albam.vue') },
      { path: '/atbash', component: () => import('pages/Atbash.vue') },
      { path: '/caesar', component: () => import('pages/Caesar.vue') },
      { path: '/carbonaro', component: () => import('pages/Carbonaro.vue') },
      //{ path: '/pigpen', component: () => import('pages/Pigpen.vue') },
      { path: '/rot13', component: () => import('pages/Rot13.vue') },

      { path: '/base64', component: () => import('pages/Base64.vue') },
      //{ path: '/binary', component: () => import('pages/Binary.vue') },
      //{ path: '/leet', component: () => import('pages/Leet.vue') },
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