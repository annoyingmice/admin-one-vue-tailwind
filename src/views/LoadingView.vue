<script setup>
import EmblemDark from "@/assets/emblem-dark.png";
import { useRouter } from "vue-router";
const router = useRouter();

setTimeout(() => {
    router.push('/home')
}, 3000);

</script>
<template>
    <div class="flex justify-center items-center h-screen">
        <div class="bg-center bg-cover h-40 w-40" :style="{ backgroundImage: `url(${EmblemDark})` }"></div>
        <div class="absolute w-44 h-44 border-t-4 border-4 rounded-full border-white border-x-yellow-500 animate-spin duration-1000"></div>
        <p class="absolute bottom-[19rem]">loading ...</p>
    </div>
</template>