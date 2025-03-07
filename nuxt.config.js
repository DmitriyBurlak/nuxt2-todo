export default {
	modules: [
    '@nuxtjs/axios',
  ],
	buildModules: [
    '@nuxtjs/composition-api/module'
  ],
  head: {
    title: 'Nuxt Todo',
  },
  css: [
    '@/assets/css/main.css'
  ],
}