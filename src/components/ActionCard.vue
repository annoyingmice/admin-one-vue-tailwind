<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
	classStyle: {
		type: String,
		required: true
	},
	label: {
		type: String,
		default: 'Label'
	},
	icon: {
		type: String,
		required: true
	},
	map: {
		type: null,
		// required: true
	}
})

const emits = defineEmits(['handleClick'])
const handleClick = (e) => emits('handleClick', e)
</script>
<template>
	<div class="mx-5 my-1 box-border cursor-pointer rounded-lg bg-white px-3 py-2 text-sm text-gray-500 hover:bg-slate-100" @click="handleClick">
		<div class="relative">
			<span :class="classStyle"></span>
			<h5 class="inline w-full">{{ label }}</h5>
			<span class="absolute right-0 top-0 rounded-md bg-gray-200 px-1 text-gray-500">{{ icon }}</span>
		</div>
	</div>
</template>