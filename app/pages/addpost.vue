<template>
    <div class="editor">
      <div class="skills">
        <h2>Add Post</h2>
        <label>Explore your idea</label>
      </div>
        <Editor />
    </div>

  </template>
  
  <script setup>
  useHead({
      title: 'iHwal - Blog '
  })

  function func(e)
  {
    console.log(e)
  }
  </script>
  
  <style>
  
  #app .editor
  {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
  }

  .editor .skills
  {
    width: 100%;
    margin-bottom: 20px;
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

  .editor .ql-container
  {
      flex: 1;
      width: 100%;
      border: none;
      border: 1px solid #f6f6f6;
  }

  .ql-container .ql-editor
  {
    padding: 10px;
    height: 100% !important;
  }

  .editor .ql-toolbar
  {
      border: none;
      padding: 5px;
      border: 1px solid #f6f6f6;
  }

  </style>
  