// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Anycar",
      link: [  
        // { rel: 'icon', type: 'image/x-icon', href: '/tendar.ico', id: 'favicon' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      },]
    }
  },
  devtools: { enabled: true },
  css: ['@/assets/styles/main.css'],
  modules: ['@pinia/nuxt'],
  runtimeConfig: { 
    public: {
      BASE_URL: process.env.BASE_URL || 'https://cara-4oc8.onrender.com/', 
    },
  },
})
