<template>
    <div class="header">
        <div class="logo">
            i<strong>H</strong>wal
        </div>
        <ul class="nav">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/project">Project</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
            <li v-if="!auth">
                <NuxtLink to="/login"><Icon style="position: relative; top: 2px;font-size: 20px;" name="fa6-solid:circle-user"/></NuxtLink>
                
            </li>
            <li v-else>
                <NuxtLink @click="logout"><Icon style="position: relative; top: 2px;font-size: 20px;" name="streamline:logout-1-solid"/></NuxtLink>
            </li>
        </ul>

        <div class="menu" @click="toggleMenu" style="z-index:99">
            <div v-if="!nav">
                <Icon style="font-size: 20px;" name="line-md:close-to-menu-alt-transition" />
            </div>
            <div v-else>
                <Icon style="font-size: 20px;" name="line-md:menu-to-close-alt-transition" />
            </div>
        </div>
    </div>

    <div class="outsider" ref="outsider">
        <NuxtLink to="/" @click="toggleMenu">Home</NuxtLink>
        <NuxtLink to="/about" @click="toggleMenu">About</NuxtLink>
        <NuxtLink to="/project" @click="toggleMenu">Project</NuxtLink>
        <NuxtLink to="/blog" @click="toggleMenu">Blog</NuxtLink>
        <NuxtLink v-if="!auth" to="/login" @click="toggleMenu">Login</NuxtLink>
        <NuxtLink v-else @click="logout">Logout</NuxtLink>
    </div>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const auth = ref(false);
const nav = ref(false);

if(user.value)
{
    auth.value = true;
}

const outsider = ref('');
watchEffect(() => {
    user.value ? auth.value = true : auth.value = false
})

function toggleMenu()
{
    if(!nav.value)
    {
        nav.value= true;
        outsider.value.style.display = 'flex'
    } else {
        nav.value= false;
        outsider.value.style.display = 'none'
    }
}

async function logout()
{
    const f = confirm('Are you sure!!');

    if(f)
    {
        await client.auth.signOut();
        outsider.value.style.display = 'none'
        nav.value= false;
        navigateTo("/");
    }
}

</script>

<style scoped>
    .menu
    {
        display: none;
    }

    .outsider a
    {
        text-decoration: none;
        color: #213547;
        font-size: 16px;
    }
    .outsider
    {
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 9;
        gap: 20px;
    }
    .header
    {
        position: relative;
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #f6f6f6;
    }
    .header .logo
    {
        font-size: 23px;
        background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: slide 5s linear infinite;
        font-weight: bold;
    }

    @keyframes slide
    {
        0%, 100%
        {
            background-position-x: -100px;
        } 50% {
            background-position-x: 100px;
        }
    }

    .logo strong
    {
        font-family: 'comforta';
    }

    .header ul
    {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
    }

    ul li
    {
        list-style: none;
    }
    
    ul li a
    {
        text-decoration: none;
        color: #213547;
        font-size: 13px;
    }

    /* a.router-link-active
    {
        
        background: linear-gradient(#f1f1f1,#f1f1f1) padding-box,linear-gradient(45deg,#42d392,#647eff) border-box;
        border: 1.5px solid transparent;
        padding: 5px;
        border-radius: 5px;
        transition: background-position .3s ease-in-out,opacity .2s ease-in-out;
    } */

    @media(max-width: 475px)
    {
        .menu
        {
            display: block;
        }
        .nav
        {
            display: none !important;
        }
    }
</style>