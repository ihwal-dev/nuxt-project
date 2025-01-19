// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    url: 'https://qbtgslijvliafwjilfnr.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidGdzbGlqdmxpYWZ3amlsZm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1OTUxMzMsImV4cCI6MjA1MjE3MTEzM30.aFehTaF0xHp53KXdspSSoLOue-_R_c7JyS6N9AxMgWw',
  },
  supabase: {
    redirect: false
  },
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxt/icon",
  ],
  compatibilityDate: "2025-01-11"
})