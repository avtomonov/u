// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss'
    ],
    app: {
      head: {
        title: 'Nuxt Dojo',
        meta: [
          {name: 'description', content: 'Everything about Nuxt 3'}
        ],
        link: [
          {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
          {rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css'}
        ]
      }
    },
    runtimeConfig: {
      currencyKey: process.env.CURRENCY_API_KEY
    }
  })