<template>
    <div class="card text-center">
        <img :src="panzer.image" alt="PanzerCard" class="PanzerCard">
        <p class="font-bold text-gray-500 m-4 truncate">{{ panzer.title }}</p>
        <NuxtLink :to="`/pz/${panzer.id}`">
        <p class="btn my-4">Read More</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { panzer } = defineProps(['panzer'])
</script>

<style>
.PanzerCard{
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>