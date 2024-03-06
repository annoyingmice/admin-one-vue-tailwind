<script setup>
import { computed } from "vue"
import { useActiveStore } from "@/stores"
const { a, setFocusLocation } = useActiveStore()
const revs = computed(() => a.revenue_generators)
const focus_location = computed(() => a.focus_location)
const handleClick = (e) => {
    if(focus_location.value === e) {
        setFocusLocation([])
    } else {
        setFocusLocation(e)
    }
}
</script>

<template>
<div class="absolute left-full top-[50%] z-20 box-border max-h-[38rem] w-[200%] overflow-y-scroll rounded-lg bg-white px-3 py-2 text-sm text-gray-500">
  <div>
    <h5 class="font-bold">Revenue Generators</h5>
    <p></p>
    <hr />
    <ul class="ml-2">
      <li v-for="(i, index) in revs" :key="`${i}-${index}`">
        <h4 class="font-semibold">
        {{ i.name || '-' }}
        <span 
            class="relative cursor-pointer right-0 top-0 rounded-md bg-red-500 px-1 text-gray-100"
            @click="() => handleClick(i.latlong)"
        >&#9906;</span></h4>
        <h6 class="font-semibold">{{ i.location || '-' }}</h6>
        <ul class="ml-4 list-disc">
          <li> - </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>