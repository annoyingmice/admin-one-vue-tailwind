<script setup>
import EmblemDark from "@/assets/ee265765-b65e-4677-8f5c-34c93e59c83f.jpeg";
</script>
<template>
<div class="flex justify-center items-center h-screen">
    <div class="bg-center bg-cover h-40 w-40" :style="{ backgroundImage: `url(${EmblemDark})` }"></div>
    <div class="absolute w-44 h-44 border-t-4 border-4 rounded-full border-white border-x-yellow-500 animate-spin duration-1000"></div>
    <p class="absolute bottom-[19rem]">loading ...</p>
</div>
</template>