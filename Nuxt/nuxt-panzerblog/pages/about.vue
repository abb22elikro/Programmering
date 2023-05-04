<template>
    <h1  class="text-white font-semibold text-3xl pb-2">About</h1>
    <hr color="white" style="height: 2px;">
    <div class="relative">
        <img class="flex justify-center rounded-tl-3xl rounded-br-3xl mt-6" src="https://i.ibb.co/ZV7R2D1/Microsoft-Teams-image-7.jpg" alt="Microsoft-Teams-image-7" style="width: 85vw; height: 25vw;">
        <p class="absolute bottom-10 right-4 text-white text-xl italic">"I have no fucking clue about what I'm doing"</p>
        <p class="absolute bottom-4 right-4 text-white text-md">Elias Kroon</p>
    </div>
    I have no fucking clue what I'm doing
    <hr color="white" class="mt-5">

    <div class="m-6 flex justify-around text-white" style="width: 100%; height: min-content;">
        <div>
            <img class="profiles" src="https://i.ibb.co/T027Dwq/Panzer-About-Dev-Me.jpg" alt="Me">
            <p class="profilesDev">Elias Kroon</p>
            <p class="profilesRoles" >Lead Developer/Author</p>
            <p class="profilesTank">Favourite Tank: BT-42</p>
        </div>
        <div>
            <img class="profiles" src="https://i.ibb.co/FnKSMVj/Panzer-About-Dev-Bunny.jpg" alt="Bunny">
            <p class="profilesDev">Mephisto</p>
            <p class="profilesRoles">Emotional Support/Motivation</p>
            <p class="profilesTank">Favourite Tank: Food Truck</p>
        </div>
        <div>
            <img class="profiles" src="https://th.bing.com/th/id/OIP.ATwFQm3li6BT5l06ypmp6gHaHa?pid=ImgDet&rs=1" alt="ChatGPT">
            <p class="profilesDev">Chat GPT</p>
            <p class="profilesRoles">Secondary Author</p>
            <p class="profilesTank">Firstly named Tank: Tiger I </p>
        </div>
    </div>
    <div class="flex justify-center mb-6 rounded-3xl">
        <div class="bg-gradient-to-br from-slate-400 to-stone-900 rounded-3xl border-4 border-solid aboutPurpose" style="width: 60vw; height: min-content;">
            <p class="flex justify-items-center flex-wrap items-center m-4 text-white italic">We have a strong interest in military history, and tanks have always been fascinating. Both as a symbol of power and technology. We are passionate about the engineering and design behind these armored beasts, and wish to share our knowledge and insights others who might share a similar interest. We see our blog as an opportunity to educate people about the role tanks have played in various conflicts throughout history, highlighting their strategic importance and impact on the outcome of wars as well as their individual strengths and weaknesses.</p>
        </div>
    </div>
    <hr color="white">
</template>

<script setup>

</script>

<style>
.profiles{
    width: 250px;
    height: 250px;
    border-radius:69420px;
}
.profilesDev{
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 1.875rem;
    line-height: 2.25rem; 
    font-weight: 600;
}
.profilesRoles{
    display: flex;
    justify-content: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
}
.profilesTank{
    display: flex;
    justify-content: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.0rem;
    line-height: 1.5rem;
    font-style: oblique;
}
.aboutPurpose{
    border-color: rgb(151 139 0);
}
</style>