<template>
    <div class ="flex justify-center bg-cover bg-center relative" style="width:100vw; height: 50vw; background-image: url(https://www.teahub.io/photos/full/152-1522583_tiger-1-wallpaper-hd.jpg);">
        <ul class="flex justify-start text-center space-x-12 pr-8 pl-8 pt-9 text-xl text-white">
                <li class="hover:font-semibold hover:italic navBar"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="hover:font-semibold hover:italic navBar"><NuxtLink to="/blog">Articles</NuxtLink></li>
                <li class="hover:font-semibold hover:italic navBar"><NuxtLink to="/gallery">Gallery</NuxtLink></li>
               <li class="hover:font-semibold hover:italic navBar"><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
        <div class="absolute flex bottom-1 left-4">        
                <h1 class="p-8 text-6xl text-white customFont uppercase font-thin">Rolling Thunder</h1>       
        </div>
    </div>
    <div class="text-white text-2xl p-5 flex overflow-x-auto" style="width: 100vw; height: 25vw;">
        <NuxtLink to="/blog/bt42">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">BT-42</h1>
                <img src="https://i.redd.it/lbz4d9goh9l41.jpg" alt="BT-42" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/panzer4">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h2 class="pb-3">Panzer IV</h2>
                <img src="https://th.bing.com/th/id/R.a9230f6e9ae7b57e1933d817425405b2?rik=6c94wgbhq0Ovtw&riu=http%3a%2f%2fimg04.deviantart.net%2ffb95%2fi%2f2006%2f118%2f0%2fe%2fpanzer_iv_ausf__g_by_darkwizard83.jpg&ehk=nZIL3wCfbcWinVUCWjQddHHbVhXG%2bjL72ObTIut%2fn%2bA%3d&risl=&pid=ImgRaw&r=0" alt="Panzer4" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/tiger1">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">Tiger I</h1>
                <img src="https://live.staticflickr.com/2769/4292924907_8ee7e6a6a0_b.jpg" alt="Tiger1" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/maus">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">Maus</h1>
                <img src="https://th.bing.com/th/id/R.83325f44c55e4b9395a20bb4bd35f6bc?rik=gIqQQpYb%2fxlDRQ&riu=http%3a%2f%2fwww.cmchant.com%2fwp-content%2fuploads%2f2015%2f01%2fMetro-maus1.jpg&ehk=ZWY2jw0pMHu2edUUq%2bP2vursETVQMS%2fBlk7h0t8LZEQ%3d&risl=&pid=ImgRaw&r=0" alt="Maus" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/t34">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">T34</h1>
                <img src="https://th.bing.com/th/id/OIP.zUMoMp9njdYS6TgfJjbpWgHaFN?pid=ImgDet&rs=1" alt="T34" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/stug3">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">Sturmgeschutz III</h1>
                <img src="https://i.ytimg.com/vi/QjvkxNkB5D8/maxresdefault.jpg" alt="Stug3" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/t28">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">T-28</h1>
                <img src="https://th.bing.com/th/id/R.64a5c37b886adda815535dea0f15599d?rik=AYdPFZhF1fsklA&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2fs--LVwamkoC--%2f18z8g78gtedbujpg.jpg&ehk=%2bt8o5Eh8OTO9HzwddV71fucjTdtVvhaXiaa46nz4GT0%3d&risl=&pid=ImgRaw&r=0" alt="T28" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/kv2">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">KV-2</h1>
                <img src="https://th.bing.com/th/id/OIP.UpG6-ZVYYILvxlY850BWoQHaFj?pid=ImgDet&rs=1" alt="deathFridge" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
        <NuxtLink to="/blog/crusadermk3">
            <div class="m-4 italic hover:font-semibold imageCardContainer">
                <h1 class="pb-3">Crusader MK III</h1>
                <img src="https://th.bing.com/th/id/R.e36c25593e683202b4aa9f8cc0043a6a?rik=0pQE6lvLIdmtZA&riu=http%3a%2f%2fimages.wikia.com%2fcodfanfic%2fimages%2f3%2f39%2fCrusader_Mk.III.jpg&ehk=JNfYKaM1fFoTCwRbXSJD0YxAIR39C7%2fx6oz0V1h0vKQ%3d&risl=&pid=ImgRaw&r=0" alt="CrusMk3" class="rounded-tr-lg rounded-bl-lg imageCards">
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    definePageMeta({
        layout:"standard"
    })
</script>

<style scoped>
.router-link-exact-active {
    color: rgb(151, 139, 0);
}
.imageCards{
    height: 15vw;
    width: 25vw;
}
.imageCardContainer{
    height: 20vw;
    width: 25vw;
}
body::-webkit-scrollbar {
    width: 0em;
}
.navBar{
    height: 30px;
}
.customFont{
    font-family: 'Courier New', Courier, monospace ;
}
/* body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(190, 190, 190, 0.3);
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(219, 218, 218);
  outline: 1px solid slategrey;
} */
</style>