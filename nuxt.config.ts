// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  supabase: {
    redirect: false
  },
  devtools: { enabled: false },
  routeRules: {
    '/blog': {ssr: false}
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxt/icon",
    "nuxt-tiptap-editor"
  ],
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  compatibilityDate: "2025-01-11"
})