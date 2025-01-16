<template>
    <Header />
    <div id="app">
        <slot />
    </div>
    <Footer />
</template>

<script setup>
</script>


<style>
@font-face {
    font-family: 'thin';
    src: url('https://nuxt.com/_fonts/ijwRs572Xtc6ZYQws9YVwnNGfJ7QwOk1-XeAcsqe881.woff2');
}
@font-face {
    font-family: 'bold';
    src: url('https://nuxt.com/_fonts/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymu8Z65wA-pHcKT8Xdpf.woff');
}
@font-face {
    font-family: 'comforta';
    src: url('https://saweria.co/comfortaa-latin-600.woff');
}

@font-face {
    font-family: 'ibm';
    src: url('https://saweria.co/ibm-plex-mono-latin-400.woff');
}
*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'comforta';
}
/* h1, h2, h3
{
    font-family: 'thin' !important;
} */
body, html
{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#__nuxt
{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
#app
{
    position: relative;
    width: 100%;
    flex: 1;
}

@media (min-width: 800px) {
  #__nuxt {
    width: 700px !important;
  }
  .post .postgrid {
    grid-template-columns: auto auto auto !important;
  }
}

</style>