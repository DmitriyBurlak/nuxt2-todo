export default {
	modules: [
    '@nuxtjs/axios',
  ],
	buildModules: [
    '@nuxtjs/composition-api/module'
  ],
  head: {
    title: 'Nuxt Todo',
		link: [
			{ 
        rel: 'icon', 
        type: 'image/png', 
        sizes: '32x32', 
        href: '/icon.png' 
      },
		],
  },
  css: [
    '@/assets/css/main.css'
  ],
	axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  }
}