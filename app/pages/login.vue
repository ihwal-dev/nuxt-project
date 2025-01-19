<template>
    <div class="login">

        <h2>LOGIN</h2>
        <span>Please login to access administrator</span>
        <div class="form-control">
            <p class="errmsg" v-show="msgVisible"><Icon style="font-size: 17px;" name="ep:warning-filled"/>{{ msg }}</p>
            <form @submit.prevent="login">
                <input v-model="email" type="email" placeholder="Ex: user@gmail.com">
                <input v-model="password" type="password" placeholder="Enter password">
                <button type="submit">Login</button>
            </form>

        </div>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'authen',
})

useHead({
    title: 'iHwal - Login'
})
const email  = ref('')
const password  = ref('')
const msg = ref('');
const msgVisible = ref(false);
const client = useSupabaseClient();


async function login()
{
    const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })



    if(error)
    {
        msgVisible.value = true;
        email.value = '';
        password.value = '';
        switch(error.code)
        {
            case 'invalid_credentials': {
                msg.value = error.message
            }
            break;
            case 'validation_failed': {
                msg.value = error.message
            }
            break;
        }
        
    } else {
        navigateTo("/addpost");
    }
}


async function logout()
{
    await client.auth.signOut();
    navigateTo("/");
}

</script>

<style scoped>
#app .login
{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 0 20px;
}



.login h2
{
    font-size: 18px;
}

.login .form-control
{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 35px;
}

.form-control form
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}

.form-control .errmsg
{
    font-size: 13px;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.form-control input
{
    width: 100%;
    padding: 10px;
    border: 1px solid #dedede;
    border-radius: 5px;
}

.form-control input:focus
{
    outline: none;
}

.form-control button
{
    padding: 8px 13px;
    background: #42b883;
    color: #fff;
    border: 1px solid #dedede;
    outline: none;
    border-radius: 5px;
}

@media(min-width: 800px)
{
    .form-control form
    {
        width: 100%;
    }
}
</style>
