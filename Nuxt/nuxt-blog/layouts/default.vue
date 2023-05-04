<template>
    <div>
        <header class="shadow-sm bg-black">
            <nav class="container mx-auto p-4 flex justify-between text-center">
                <NuxtLink to="/" class="font-bold text-3xl p-4">Home</NuxtLink>
                <ul class="flex gap-10 font-semibold text-white p-5">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/pz">Panzer Info</NuxtLink></li>
                    <li><NuxtLink to="/pz/operators">Operators</NuxtLink></li>
                    <li><NuxtLink to="/pz/warCrimes">War Crimes</NuxtLink></li>
                    <li><NuxtLink to="/aboutMe">About Me</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: rgb(151, 139, 0);
}

</style>