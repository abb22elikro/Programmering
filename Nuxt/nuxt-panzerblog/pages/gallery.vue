<template>
    <h1  class="text-white font-semibold text-3xl pb-2">Gallery</h1>
    <hr class="mb-5" color="white" style="height: 2px;">

    <div class="grid grid-cols-3" style="width: 100%; height: 500px;">
        <div class="col-span-1 overflow-y-auto flex justify-start flex-wrap pl-4 pr-10 gap-8">
            <NuxtLink to="/blog/panzer4">
                <div class="imageCards1">
                    <img src="https://images8.alphacoders.com/107/thumb-1920-1076556.jpg" alt="Panzer4" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/tiger1">
                <div class="imageCards1">
                    <img src="https://th.bing.com/th/id/OIP.6w6iPRv3XT6_YJI1RfQ6bQHaEu?pid=ImgDet&rs=1" alt="Tiger1" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/maus">
                <div class="imageCards1">
                    <img src="https://i.ytimg.com/vi/fwcil6YIBTY/maxresdefault.jpg" alt="Maus" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/t34">
                <div class="imageCards1">
                    <img src="https://www.hdwallpapers.in/download/t_34_russian_wwii_tank_action_movie_4k-HD.jpg" alt="T34" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/stug3">
                <div class="imageCards1">
                    <img src="https://th.bing.com/th/id/OIP.NgtyAsBbJVxBfAiAO-uLNwHaEJ?pid=ImgDet&rs=1" alt="StuG3" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/t28">
                <div class="imageCards1">
                    <img src="https://i.pinimg.com/originals/3e/5a/dd/3e5addd65f6dd6da3e71a500d1aa22c4.jpg" alt="T28" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/kv2">
                <div class="imageCards1">
                    <img src="https://th.bing.com/th/id/R.1da8880db197bf6fd26b5324686fa0d4?rik=xgbxIqAQdnPBpg&pid=ImgRaw&r=0" alt="KV-2" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
            <NuxtLink to="/blog/crusadermk3">
                <div class="imageCards1">
                    <img src="https://th.bing.com/th/id/R.605696c47bafbbbf8346979203fdb284?rik=XUVsANuAl%2fQAyw&riu=http%3a%2f%2fwarwall.ru%2fArts%2f11%2fWallpaper_6155_AFV_Crusader.jpg&ehk=50Bil8pHtl0z2eCoiSrFOh6sw%2fo5IXkQi0XshfchVno%3d&risl=&pid=ImgRaw&r=0" alt="CrusMk3" class="rounded-tr-[30px] rounded-bl-[30px] imageCardsImg">
                </div>
            </NuxtLink>
        </div>

        <div class="col-span-2" style="height: 500px;">
            <NuxtLink class="flex justify-center items-start flex-wrap border-l-[1px]" to="blog/bt42" style="height: 500px;">
                <h1 class="text-white text-2xl ml-6 italic font-semibold" style="height: 30px;">Featured</h1>
                <img class="rounded-tr-[60px] rounded-bl-[60px] ml-6" src="https://static.turbosquid.com/Preview/2018/01/02__00_51_18/bt_3.jpg220B971E-C5E0-4B96-9B7F-05ABB371B3B4Default.jpg" alt="Featured" style=" width: 100%; height: min-content; ">
                <p class="text-xl italic text-white ml-6">BT-42</p>
            </NuxtLink>
        </div>
    </div>
    <hr class="mt-4" color="white">
</template>

<script setup>

</script>

<style scoped>
.imageCards1{
    height: 150px;
    width: 250px ;
}
.imageCardsImg{
    height: 150px;
    width: 250px ;
    margin: 5px;
}
</style>