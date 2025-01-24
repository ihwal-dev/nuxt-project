<template>
        <div class="posts" v-html="content">
        </div>
</template>

<script setup>

const content = ref(null);
const supabase = useSupabaseClient();

const data = await useFetch('/api/getpost');

if(data?.data?.value.length)
{
    content.value = `${data?.data?.value[4]?.content}`
    useHead({
    title: data?.data?.value[4]?.title ? data?.data?.value[4]?.title : 'iHwal | Not Found'
    })
} else {
    content.value = `No Post`
}
</script>

<style>
#app .posts
{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 20px;
    font-family: 'thin';
}

.posts p
{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: justify;
    line-height: 25px;
    font-size: 14px;
    flex-wrap: wrap;
    
}

p img
{
    text-align: center;
}

.posts img
{
    max-width: 100%;
    margin: 0;
}

.posts pre
{
    width: 100%;
    white-space: pre-wrap;
    background: #23241f;
    color: #f8f8f2;
    font-size: 14px;
    text-align: justify;
    padding: 5px;
    border-radius: 3px;
}

p strong
{
    font-weight: bold;

}
</style>