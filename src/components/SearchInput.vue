<script setup>
import { defineEmits } from "vue"
const emits = defineEmits(['inputSearch'])

const handleChange = (e) => emits('inputSearch', e)
</script>

<template>
<div class="m-5 box-border rounded-lg bg-white p-1 shadow-sm">
  <input type="text" class="w-full p-2 text-sm text-gray-500 outline-none" placeholder="Search (enter⨼)" @keyup="handleChange"/>
</div>
</template>