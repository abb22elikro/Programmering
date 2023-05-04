<template>
            <h1  class="text-white font-semibold text-3xl pb-2">Articles</h1>
            <hr class="mb-2" color="white" style="height: 2px;">
            <div class="grid grid-cols-2 gap-y-5 gap-x-2">
            <div v-for="(panzer, key) in panzers" :key="key" class="text-white border-b-[1px] justify-between" style="width: 100%; height: fit-content;">
                
                <div class="flex items-center flex-wrap" style="width: 100%;">
                    <div class="text-white flex justify-between items-center" style="width: 50%; height: min-content;">
                        <h1 class="text-xl">{{ panzer.title }}</h1>
                        <p class="text-xs">{{ panzer.createdAt }}</p>
                    </div>
                    
                    <div class="flex justify-between items-start text-white" style="width: 51%; height: min-content;">
                        <NuxtLink to="/about"><p class="text-xs">By: {{ panzer.author }}</p></NuxtLink>
                        <p class="bg-white text-black rounded-tr-lg rounded-bl-lg text-md px-1" style="width: fit-content;">{{ panzer.nation }}</p>
                    </div>
                        <img :src="panzer.img" alt="PanzerCard" class="PanzerCard rounded-tr-3xl rounded-bl-3xl my-2" style="width: 50%; height: 180px;">

                <div class="ml-2" style="width: 45%; height: 100%;">
                    <div>
                        <p class="text-white text-xs italic flex justify-center items-center mt-2"> {{ panzer.description }}</p>
                    </div>
                    <div class="flex justify-end self-end">
                        <NuxtLink :to="`/blog/${panzer.slug}`" class="underline underline-offset-2 decoration-1 decoration-white text-sm mt-4 flex self-end">
                        <p>Read More</p>
                    </NuxtLink>
                    </div>
                </div>
            </div>



            </div>
            </div>
</template>
<script setup>
const { data: panzers } = await useAsyncData(() => queryContent(`/blog`).find())
</script>