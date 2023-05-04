<template>
    <div>
        <p>Information about the {{ id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
    layout:"panzer"
})
</script>



<style>


</style>