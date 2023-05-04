<template>
    <div>
        <header class="shadow-sm bg-black">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to = "/pz" class="font-bold text-3xl"></NuxtLink>
            </nav>
        </header>
    </div>
    <div class="container mx-auto p-4">
        <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-5 font-semibold">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/pz">Panzer Info</NuxtLink></li>
            <li><NuxtLink to="/pz/operators">Operators</NuxtLink></li>
            <li><NuxtLink to="/pz/warCrimes">War Crimes</NuxtLink></li>
            <li><NuxtLink to="/aboutMe">About Me</NuxtLink></li>
        </ul>
    </footer>
</template>

<script setup>

</script>

<style>
.router-link-exact-active {
    color: rgb(151, 139, 0);
}
</style>