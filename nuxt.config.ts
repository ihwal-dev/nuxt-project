// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  supabase: {
    redirect: false
  },
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxtjs/supabase", "@nuxt/icon"],
  compatibilityDate: "2025-01-11"
})
