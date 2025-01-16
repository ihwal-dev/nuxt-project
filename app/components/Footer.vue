<template>
    <div class="footer">
      <div class="footerIcon">
        <NuxtImg title="Nuxt Js" alt="Nuxt Js" width="20" src="https://www.inkoop.io/static/3fd155c993893819981d0b9fa56b5057/b7804/logo.png" />
        <NuxtImg title="Supabase" alt="Supabase" width="15" src="https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png" />
      </div>
      <span>Load Time : {{ loadTime / 1000 }}s</span>
      <!-- <div class="footerIcon">
        <NuxtImg width="20" src="https://pipedream.com/s.v0/app_1dBhP3/logo/96" />
      </div> -->

    </div>
  </template>

  <script setup>

    const loadTime = ref(0);
    const loading = ref(true);
    let startTime = 0;

    // Start timer on component mount
    onMounted(() => {
    startTime = performance.now();
    });

    // Watch for route changes and reset timer
    watch(useRoute(), () => {
    loading.value = true;
    startTime = performance.now();
    });

    // Stop loading and show the loading time after the page is loaded
    watch(loading, (newVal) => {
    if (!newVal) {
        loadTime.value = (performance.now() - startTime).toFixed(0);
    }
    });

    // Automatically stop the loading after a short delay to simulate page load completion
    setTimeout(() => {
    loading.value = false;
    }, 1000); // You can adjust the timeout based on your needs

</script>
  
  <style scoped>
  .footer {
    /* position: absolute;
    bottom: 0;
    left: 0; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-direction: column; */
    padding: 10px 20px;
    background: #fff;
    border-top: 1px solid #f6f6f6;
    font-size: 13px;
  }
  
  .footer .footerIcon {
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: flex-start;
  }
  
  .footerIcon img {
    max-width: 100%;
  }

  span
  {
    font-size: 10px;
  }
  </style>
  