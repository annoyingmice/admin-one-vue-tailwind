<script setup>
import { defineProps, defineEmits } from "vue"

defineProps({
	name: {
		type: String,
		required: true
	},
	networth: {
		type: String,
		required: true
	}
})

const emits = defineEmits(['clear'])

const handleClick = (e) => emits('clear', e)

</script>

<template>
	<div class="m-5 box-border rounded-lg bg-white px-3 py-2 text-sm text-gray-500">
		<div class="relative">
			<h3 class="w-full">
				<!-- <span class="text-xs">name - </span> -->
				{{ name }}
			</h3>
			<h6>
				<!-- <span class="text-xs">net - </span> -->
				{{ networth }}
			</h6>

			<div class="absolute right-[-20px] top-[-15px] flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-gray-500 cursor-pointer" @click="handleClick">
				<span class="p-1">&#8854;</span>
			</div>
		</div>
	</div>
</template>