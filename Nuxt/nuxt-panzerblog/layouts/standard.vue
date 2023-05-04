<template>
    <div>
        <slot />
    </div>
    <div class="relative bottom-0 bg-[url('https://i.postimg.cc/RZNPBJH5/Footer-Panzer-blog.jpg')] bg-cover bg-blend-darken bg-top mt-6" style="width: 100vw; height: min-content;">
        <!-- https://th.bing.com/th/id/R.b9cbd53e180ed7a48f6357c9f515dfd3?rik=WolQtN77ifnhhw&riu=http%3a%2f%2fwww.bhmpics.com%2fwalls%2fthe_big_battle_tank-wide.jpg&ehk=k%2f6nyXzfXxPk1DG1WabtdZnXQ0zvke2p6%2fTQfodvLyQ%3d&risl=&pid=ImgRaw&r=0 -->
        
        <!-- <div class="text-6xl text-white font-semibold mt-4 flex justify-center">
            <p>Panzer Blog</p>
        </div> -->
        <footer class="flex gap-20 text-white pt-5" style="width: 60vw; height: min-content;">

            <div class="flex flex-wrap justify-center" style="width: 25vw; height: min-content;">    
                <div>
                    <h2 class="text-white text-4xl font-semibold pb-1">Section</h2>
                    <hr color="white" style="width: 120px;">
                </div>
                <div class="flex justify-center pt-3" style="width: 25vw;">
                    <p class="text-xl hover:italic hover:font-semibold self-center"><NuxtLink to="/blog">Articles</NuxtLink></p>
                </div>
                <div class="flex justify-center pt-3" style="width: 25vw;">
                    <p class="text-xl hover:italic hover:font-semibold self-center"><NuxtLink to="/gallery">Gallery</NuxtLink></p>
                </div>
                <div class="flex justify-center pt-3" style="width: 25vw;">
                    <p class="text-xl hover:italic hover:font-semibold self-center"><NuxtLink to="/about">About Us</NuxtLink></p>
                </div>
            </div>
            <div class="flex flex-wrap justify-center" style="width: 25vw;">
                <div>
                    <h2 class="text-white text-3xl font-semibold pb-1">Contact</h2>
                <hr color="white" style="width: 105px;">
                </div>
                <div class="flex justify-start pt-3" style="width: 25vw;">
                    <img src="https://icon-library.com/images/white-phone-icon-png-transparent/white-phone-icon-png-transparent-3.jpg" alt="phone icon" style="height:4vw;">
                    <p class="text-1xl self-center">480-784-15-14</p>
                </div>
                <div class="flex justify-start pt-5 pl-2" style="width:25vw">
                    <img src="https://swetaprototype.weebly.com/uploads/1/2/0/3/120387845/email-transparent-orig_orig.png" alt="mail icon" style="width:3vw;">
                    <p class="text-1xl self-center pl-4">elias.kroon@abbgymnasiet.se</p>
                </div>
                <div class="flex justify-start pt-5 pl-3" style="width: 25vw;">
                    <img src="https://www.pngkey.com/png/full/235-2350342_location-white-location-icon-with-transparent-background.png" alt="location icon" style="height:3vw;">
                    <p class="text-1xl self-center pl-4">Lat: 40° 42' 24.66" N</p>
                </div>
                <div class="flex self-start pt-5 pl-3" style="width: 30vw;">
                    <img src="https://www.pngkey.com/png/full/235-2350342_location-white-location-icon-with-transparent-background.png" alt="location icon" style="height:3vw;">
                    <p class="text-1xl self-center pl-4">Long: -74° 00' 26.40" W</p>
                </div>
            </div>
        </footer>
        <div class="flex justify-between pt-20" style="width: 100vw; height: min-content;">
            <p class=" pl-6 text-xs italic uppercase text-white">© 2023 Vasteras Sweden, all rigths reserved</p>
            <p class="pb-2 pr-6 text-md italic hover:font-semibold text-white"> <NuxtLink to="terms">Terms of Service</NuxtLink></p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.cleanWidth{
    width: 20vw;
}

</style>

<!-- <div><NuxtLink to="/terms" class="text-xl">Terms of service</NuxtLink></div> -->