<template>
    <div class="flex justify-center">
        <div style="width: 800px; height: fit-content;">
            <div>
                <img :src="panzer.img" alt="panzer image" class="mx-auto rounded-tr-[50px] rounded-bl-[50px]" style="width: 800px; height:400px;">
            </div>
            <div class=" text-white">
                <div class="flex justify-between" style="width: 100%;">
                    <div class="flex items-center gap-2">
                        <h2 class="text-4xl"> {{ panzer.title }}</h2>
                        <p class="bg-white text-black rounded-tr-lg rounded-bl-lg text-md px-1" style="width: fit-content; height: fit-content;">{{ panzer.nation }}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-white text-xs italic">{{ panzer.createdAt }}</p>
                    </div>
                </div>
                <p class="text-xl italic">Armament: {{ panzer.gun }}</p>
                <hr color="white" class="my-3">
                <contentRenderer :value="panzer"/>
            </div>
        </div>
    </div>
    <h1  class="text-white font-semibold text-3xl pb-2 pt-4">Other Articles</h1>
            <hr class="mb-2" color="white" style="height: 2px;">
            <p class="text-white text-2xl font-semibold mt-5">{{ panzer.msg }}</p>
            <div class="grid grid-cols-2 gap-y-5 gap-x-2">
            <div v-for="p in panzers.slice(panzer.id +0, panzer.id +2)" class="text-white border-b-[1px] justify-between" style="width: 100%; height: fit-content;">
                
                <div class="flex items-center flex-wrap" style="width: 100%;">
                    <div class="text-white flex justify-between items-center" style="width: 50%; height: min-content;">
                        <h1 class="text-xl">{{ p.title }}</h1>
                        <p class="text-xs">{{ p.createdAt }}</p>
                    </div>
                    
                    <div class="flex justify-between items-start text-white" style="width: 51%; height: min-content;">
                        <NuxtLink to="/about"><p class="text-xs">By: {{ p.author }}</p></NuxtLink>
                        <p class="bg-white text-black rounded-tr-lg rounded-bl-lg text-md px-1" style="width: fit-content;">{{ p.nation }}</p>
                    </div>
                        <img :src="p.img" alt="PanzerCard" class="PanzerCard rounded-tr-3xl rounded-bl-3xl my-2" style="width: 50%; height: 180px;">

                <div class="ml-2" style="width: 45%; height: 100%;">
                    <div>
                        <p class="text-white text-xs italic flex justify-center items-center mt-2"> {{ p.description }}</p>
                    </div>
                    <div class="flex justify-end self-end">
                        <NuxtLink :to="`/blog/${p.slug}`" class="underline underline-offset-2 decoration-1 decoration-white text-sm mt-4 flex self-end">
                        <p>Read More</p>
                    </NuxtLink>
                    </div>
                </div>
            </div>



            </div>
            </div>
</template>



<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data:panzer } = await useAsyncData(() => queryContent(`/blog/${route.params.slug}`).findOne())
const { data:panzers } = await useAsyncData(() => queryContent(`/blog`).find())
</script>
<style scoped>
:deep(h3) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>