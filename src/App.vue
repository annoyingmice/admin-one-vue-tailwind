<script setup>
import { ref } from "vue";
import LoadingView from "@/components/LoadingComponent.vue";
import NotificationErrorComponent from "@/components/NotificationErrorComponent.vue";

const loading = ref(true);
setTimeout(() => loading.value = false, 5000);
</script>
<template>
<LoadingView v-if="loading" />
<div v-else class="bg-slate-200 p-5 h-screen box-border relative">
    <RouterView />
    <NotificationErrorComponent />
</div>
</template>