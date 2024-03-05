<script setup>
import { computed } from "vue"
import { useActiveStore } from "@/stores"
const { a } = useActiveStore()
const others = computed(() => a.others)

</script>
<template>
<div class="absolute left-full top-[50%] z-20 box-border max-h-[38rem] w-[200%] overflow-y-scroll rounded-lg bg-white px-3 py-2 text-sm text-gray-500">
  <div v-for="(i, index) in others.trusts" :key="`${i.name}-${index}`">
    <h5 class="font-bold">{{ i.name }}</h5>
    <p></p>
    <hr />
    <ul class="ml-2">
      <li v-for="(j, index) in i.a" :key="`${j}-${index}`">
        <h6 class="font-semibold">{{ j || '-' }}</h6>
        <!-- <ul class="ml-4 list-disc">
          <li v-if=""></li>
        </ul> -->
      </li>
    </ul>
  </div>

  <div v-for="(i, index) in others.laws" :key="`${i.name}-${index}`">
    <h5 class="font-bold">{{ i.name }}</h5>
    <p></p>
    <hr />
    <ul class="ml-2">
      <li v-for="(j, index) in i.a" :key="`${j}-${index}`">
        <h6 class="font-semibold">{{ j || '-' }}</h6>
        <!-- <ul class="ml-4 list-disc">
          <li v-if=""></li>
        </ul> -->
      </li>
    </ul>
  </div>

  <div v-for="(i, index) in others.rev_laws" :key="`${i.name}-${index}`">
    <h5 class="font-bold">{{ i.name }}</h5>
    <p></p>
    <hr />
    <ul class="ml-2">
      <li v-for="(j, index) in i.a" :key="`${j}-${index}`">
        <h6 class="font-semibold">{{ j || '-' }}</h6>
        <!-- <ul class="ml-4 list-disc">
          <li v-if=""></li>
        </ul> -->
      </li>
    </ul>
  </div>

  <div v-for="(i, index) in others.banks" :key="`${i.name}-${index}`">
    <h5 class="font-bold">{{ i.name }}</h5>
    <p></p>
    <hr />
    <ul class="ml-2">
      <li v-for="(j, index) in i.a" :key="`${j}-${index}`">
        <h6 class="font-semibold">{{ j || '-' }}</h6>
        <!-- <ul class="ml-4 list-disc">
          <li v-if=""></li>
        </ul> -->
      </li>
    </ul>
  </div>
</div>
</template>