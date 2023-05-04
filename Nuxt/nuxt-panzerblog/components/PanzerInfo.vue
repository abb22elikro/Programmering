<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="panzer.image" alt="panzer image" class="mx-auto my-7">
            </div>
            <div class="p-7 text-black">
                <h2 class="text-4xl my-7"> {{ panzer.title }}</h2>
                <p class="text-xl my-7">Price - ${{ panzer.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Panzer Information</h3>
                <p class="mb-7">{{ panzer.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { panzer } = defineProps(['panzer'])
</script>

<style scoped>
    img{
        max-width: 400px;
    }
</style>