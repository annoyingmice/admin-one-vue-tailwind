<script setup>
import { computed, ref, watch } from "vue";
import { useErrorStore } from '@/stores';

const { data, setError } = useErrorStore();
const error = computed(() => data.error);
const show = ref(false);

watch(
    error, 
    () => {
        show.value = (error.value !== null)
        setTimeout(() => {
            show.value = false
            setError(null)
        }, 5000)
    },
)

</script>
<template>
    <div v-if="show" class="absolute p-3 bg-red-500 top-10 right-10 shadow-lg text-white rounded-sm">
        <p class="text-xs">{{ data.error }}</p>
    </div>
</template>