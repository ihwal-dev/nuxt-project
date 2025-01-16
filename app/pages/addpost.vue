<template>
    <div class="skills">
      <h2>Add Post</h2>
      <label>Explore your idea</label>
      
    </div>

  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  #app .skills {
    flex: 1;
    width: 100%;
    padding: 20px;
  }
  
  .skills h2 {
    font-size: 19px;
    font-weight: 600;
    font-family: 'ibm' !important;
    text-wrap: pretty;
  }
  
  .skills label {
    line-height: 15px;
    font-size: 15px;
  }
  
  .skills .gridbox {
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 40px;
  }
  
  .gridbox .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .cards img {
    max-width: 50%;
  }
  
  @media (max-width: 680px) {
    .skills .gridbox {
      grid-template-columns: auto auto;
    }
  }
  
  @media (max-width: 425px) {
    .skills .gridbox {
      grid-gap: 20px;
    }
    .cards img {
      max-width: 50%;
    }
  }
  </style>
  