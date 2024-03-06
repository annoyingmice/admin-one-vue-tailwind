<script setup>
import MapView from "@/components/MapView.vue"
import ProfileCard from "@/components/ProfileCard.vue"
import ActionCard from "@/components/ActionCard.vue"
import SearchInput from "@/components/SearchInput.vue"
import SearchCard from "@/components/SearchCard.vue"
import CorporateView from "@/components/CorporateView.vue"
import OtherView from "@/components/OtherView.vue"
import RevGeneratorView from "@/components/RevGeneratorView.vue"
import { computed, ref } from "vue"

import { useMainStore } from "@/stores"
import { useActiveStore } from "@/stores"

const { clients } = useMainStore()
const { a, setActive, setResidency, setRevenue, setBusinessLocation, setActiveContent, setActiveOtherContent } = useActiveStore()
const active = computed(() => a.selected)

const timeoudId = ref(0)
let results = ref([])
const openCorpInfo = ref(false)
const openOtherInfo = ref(false)
const openRevGeneratorInfo = ref(false)

const handleSearch = (e) => {
  if(timeoudId.value) clearTimeout(timeoudId.value)

  timeoudId.value = setTimeout(() => {
    results.value = []
    clients.forEach(item => {
      if(
        item.name.toLowerCase().includes(
          e.target.value.toLowerCase()
        )
      ) {
        results.value.push(item)
      }
    })
  }, 800);
}
const handleClickSearchResult = (e) => {
  setActive(results.value.filter(item => item.id === e).pop())
  results.value = []
}
const handleClickRemoveResult = (e) => results.value = results.value.filter(item => item.id !== e)
const handleResidency = () => setResidency(active.value.residencies.map(item => item))
const handleRevG = () => openRevGeneratorInfo.value = !openRevGeneratorInfo.value //setRevenue(active.value.revenue_generators.map(item => item))
const handleBusinessLocation = () => setBusinessLocation(active.value.business_locations.map(item => item))
const handleCorporateStructure = () => {
  setActiveContent(active.value.corporate_structures)
  openCorpInfo.value = !openCorpInfo.value
}
const handleOthers = () => {
  setActiveOtherContent(active.value.others)
  openOtherInfo.value = !openOtherInfo.value
}
const handleClear = () => {
  setResidency([])
  setRevenue([])
  setBusinessLocation([])
  setActiveContent([])
  setActiveOtherContent([])
  setActive({})
  openCorpInfo.value = false
  openOtherInfo.value = false
  openRevGeneratorInfo.value = false
}
</script>

<template>
  <div class="bg-slate-200 p-5 h-screen box-border">

    <div class="absolute z-10 w-1/6 max-h-full">
      <SearchInput @inputSearch="handleSearch" />

      <!-- Search results -->
      <div>
        <SearchCard v-for="r in results" 
          :key="r.id"
          :name="r.name"
          :networth="r.networth" 
          @clickCard="() => handleClickSearchResult(r.id)"
          @removeCard="() => handleClickRemoveResult(r.id)"
        />
      </div>

      <!-- Navigation -->
      <div v-if="active.hasOwnProperty('name')">
        <!-- Profile -->
        <ProfileCard 
          :name="active.name"
          :networth="active.networth"
          @clear="handleClear"
        />

        <ActionCard 
          classStyle="h-2 w-2 bg-green-500 rounded-full mr-2 inline-block" 
          label="Residency" 
          icon="&#9867;"
          @handleClick="handleResidency"
        />

        <ActionCard 
          classStyle="h-2 w-2 bg-blue-500 rounded-full mr-2 inline-block" 
          label="Revenue Generators" 
          icon="&#8886;"
          @handleClick="handleRevG"
        />
        
        <ActionCard 
          classStyle="h-2 w-2 bg-orange-500 rounded-full mr-2 inline-block" 
          label="Business Location" 
          icon="&#9906;"
          @handleClick="handleBusinessLocation"
        />

        <ActionCard 
          classStyle="h-2 w-2 bg-red-500 rounded-full mr-2 inline-block" 
          label="Corporate Structure" 
          icon="&#9901;" 
          @handleClick="handleCorporateStructure"
        />

        <ActionCard 
          classStyle="h-2 w-2 bg-yellow-500 rounded-full mr-2 inline-block" 
          label="Others" 
          icon="&#9862;"
          @handleClick="handleOthers"
        />
      </div>

      <CorporateView v-if="openCorpInfo" />
      <OtherView v-if="openOtherInfo" />
      <RevGeneratorView v-if="openRevGeneratorInfo" />
    </div>

    <MapView />
  </div>
</template>
