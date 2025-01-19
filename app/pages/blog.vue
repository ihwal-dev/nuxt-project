<template>
    <div class="editor">
        <Editor />
    </div>
</template>

<script setup>
useHead({
    title: 'iHwal - Blog'
})
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
}

.editor .ql-container
{
    flex: 1;
    width: 100%;
}
</style>