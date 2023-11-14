// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Anycar",
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/tendar.ico', id: 'favicon' },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"
          // href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["@/assets/styles/main.css"],
  imports: {
    dirs: ["store"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || "https://cara-4oc8.onrender.com/",
    },
  },
});
