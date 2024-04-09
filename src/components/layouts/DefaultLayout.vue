<script setup>
import { computed, ref } from "vue";
import EmblemDark from "@/assets/ee265765-b65e-4677-8f5c-34c93e59c83f.jpeg";
import IconGlobe from "@/components/icons/IconGlobe.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconList from "@/components/icons/IconList.vue";
import IconPieChart from "@/components/icons/IconPieChart.vue";
import IconClose from "@/components/icons/IconClose.vue";
import { useRouter, useRoute } from "vue-router";
import { useMainStore } from "@/stores";

const openSearch = ref(false);
const router = useRouter();
const route = useRoute();
const activeRoute = computed(() => route.path);
const { data } = useMainStore();
const user = computed(() => data.user !== null);

const handleOpenSearch = () => openSearch.value = !openSearch.value;
</script>

<template>
<div class="flex space-x-1">
    <div class=" w-4/12 h-4/5 block p-2 relative">
        <!-- Navigation -->
        <div class="flex mb-1 space-x-1">
            <!-- brand logo -->
            <div class="bg-center bg-cover h-10 w-16 rounded-sm" :style="{ backgroundImage: `url(${EmblemDark})` }"></div>
            <div class="flex w-full space-x-1">
                <!-- Plus -->
                <div @click="() => router.push('/app/add')" :class="{
                    'bg-white text-black': activeRoute === '/app/plus',
                    'flex justify-center items-center flex-grow hover:bg-white hover:text-black rounded-sm duration-200 cursor-pointer': true
                    }">
                    <IconPlus classProps="w-5 h-5" />
                </div>
                <!-- Globe -->
                <div @click="() => router.push('/app/map')" :class="{
                    'bg-white text-black': activeRoute === '/app/map',
                    'flex justify-center items-center flex-grow hover:bg-white hover:text-black rounded-sm duration-200 cursor-pointer': true
                    }">
                    <IconGlobe classProps="w-5 h-5" />
                </div>
                <!-- List -->
                <div @click="() => router.push('/app/lists')" :class="{
                    'bg-white text-black': activeRoute === '/app/lists',
                    'flex justify-center items-center flex-grow hover:bg-white hover:text-black rounded-sm duration-200 cursor-pointer': true
                    }">
                    <IconList classProps="w-5 h-5" />
                </div>
                <!-- Diagram -->
                <div @click="() => router.push('/app/diagram')" :class="{
                    'bg-white text-black': activeRoute === '/app/diagram',
                    'flex justify-center items-center flex-grow hover:bg-white hover:text-black rounded-sm duration-200 cursor-pointer': true
                    }">
                    <IconPieChart classProps="w-5 h-5" />
                </div>
                <!-- Search -->
                <div @click="handleOpenSearch" class="flex justify-center items-center flex-grow hover:bg-white hover:text-black rounded-sm duration-200 cursor-pointer">
                    <IconSearch classProps="w-5 h-5" />
                </div>
            </div>
            <!-- Search Details -->
            <div v-if="openSearch" class="absolute block p-2 top-0 left-0 h-full w-full bg-white z-10 rounded-sm">
                <!-- Search input -->
                <div class="flex items-center justify-center">
                    <input type="text" class="px-3 py-1 w-full bg-gray-100 rounded-sm flex-grow focus:outline-none" placeholder="Search here ...">
                    <!-- Close search -->
                    <div @click="handleOpenSearch" class="flex items-center justify-center cursor-pointer w-10">
                        <IconClose classProps="w-5 h-5" />
                    </div>
                </div>
                <!-- Search Results -->
                <div class="mt-8 space-y-2 relative">
                    <!-- Result Card -->
                    <div class="flex space-x-1 p-2 bg-gray-100 shadow-sm rounded-lg cursor-pointer">
                        <!-- Avatar -->
                        <div class="bg-[url('https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover block relative h-20 w-16 rounded-md"></div>
                        <!-- Client details -->
                        <div class="flex space-x-1 flex-grow">
                            <div class="flex-grow">
                                <div class="flex space-x-1" title="citizenship">
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-5 w-10 rounded-sm"></div>
                                    <!-- Sub residencies -->
                                    <!-- <div class=" flex space-x-1 items-end text-end">
                                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-2 w-4 rounded-md"></div>
                                        </div> -->
                                </div>
                                <!-- Name -->
                                <h4 class=" text-sm font-bold text-gray-900">Jane Doe</h4>
                                <!-- Network -->
                                <h6 class=" text-xs font-medium text-gray-500 mt-1 mb-1">$1.3M</h6>
                                <!-- Date of birth -->
                                <h6 class=" text-xs font-medium text-gray-500">Dec. 29, 1996</h6>
                                <!-- Citizenship -->
                                <!-- <div class=" flex space-x-1 items-end text-end overflow-x-scroll w-22" title="residency">
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    </div> -->
                            </div>
                            <div class="flex-grow">
                                <!-- Email -->
                                <h6 class=" text-xs font-medium text-gray-500">example@example.com</h6>
                                <!-- Phone -->
                                <h6 class=" text-xs font-medium text-gray-500">000-0000</h6>
                            </div>
                        </div>
                    </div>
                    <!-- Result Card -->
                    <div class="flex space-x-1 p-2 bg-gray-100 shadow-sm rounded-lg cursor-pointer">
                        <!-- Avatar -->
                        <div class="bg-[url('https://plus.unsplash.com/premium_photo-1666265385067-8a18a50688ea?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover block relative h-20 w-16 rounded-md"></div>
                        <!-- Client details -->
                        <div class="flex space-x-1 flex-grow">
                            <div class="flex-grow">
                                <div class="flex space-x-1" title="citizenship">
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')] bg-center bg-cover h-5 w-10 rounded-sm"></div>
                                    <!-- Sub residencies -->
                                    <!-- <div class=" flex space-x-1 items-end text-end">
                                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-2 w-4 rounded-md"></div>
                                        </div> -->
                                </div>
                                <!-- Name -->
                                <h4 class=" text-sm font-bold text-gray-900">John Doe</h4>
                                <!-- Network -->
                                <h6 class=" text-xs font-medium text-gray-500 mt-1 mb-1">$2M</h6>
                                <!-- Date of birth -->
                                <h6 class=" text-xs font-medium text-gray-500">Dec. 29, 1996</h6>
                                <!-- Citizenship -->
                                <!-- <div class=" flex space-x-1 items-end text-end overflow-x-scroll w-22" title="residency">
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    </div> -->
                            </div>
                            <div class="flex-grow">
                                <!-- Email -->
                                <h6 class=" text-xs font-medium text-gray-500">example@example.com</h6>
                                <!-- Phone -->
                                <h6 class=" text-xs font-medium text-gray-500">000-0000</h6>
                            </div>
                        </div>
                    </div>
                    <!-- Result Card -->
                    <div class="flex space-x-1 p-2 bg-gray-100 shadow-sm rounded-lg cursor-pointer">
                        <!-- Avatar -->
                        <div class="bg-[url('https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover block relative h-20 w-16 rounded-md"></div>
                        <!-- Client details -->
                        <div class="flex space-x-1 flex-grow">
                            <div class="flex-grow">
                                <div class="flex space-x-1" title="citizenship">
                                    <div class="bg-[url('https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg')] bg-center bg-cover h-5 w-10 rounded-sm"></div>
                                    <!-- Sub residencies -->
                                    <!-- <div class=" flex space-x-1 items-end text-end">
                                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-2 w-4 rounded-md"></div>
                                        </div> -->
                                </div>
                                <!-- Name -->
                                <h4 class=" text-sm font-bold text-gray-900">Jane Smith</h4>
                                <!-- Network -->
                                <h6 class=" text-xs font-medium text-gray-500 mt-1 mb-1">$2.1M</h6>
                                <!-- Date of birth -->
                                <h6 class=" text-xs font-medium text-gray-500">Dec. 29, 1996</h6>
                                <!-- Citizenship -->
                                <!-- <div class=" flex space-x-1 items-end text-end overflow-x-scroll w-22" title="residency">
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-3 w-6 rounded-sm block"></div>
                                    </div> -->
                            </div>
                            <div class="flex-grow">
                                <!-- Email -->
                                <h6 class=" text-xs font-medium text-gray-500">example@example.com</h6>
                                <!-- Phone -->
                                <h6 class=" text-xs font-medium text-gray-500">000-0000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="user">
            <div class="flex space-x-3">
                <!-- Avatar -->
                <div class="flex-1 bg-[url('https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover block relative h-40 w-32 rounded-sm"></div>
                <!-- Client details -->
                <div class="flex-1">
                    <div class="flex space-x-1" title="citizenship">
                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-10 w-20 rounded-sm"></div>
                        <!-- Sub residencies -->
                        <div class=" flex space-x-1 items-end text-end">
                            <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-4 w-8 rounded-sm"></div>
                        </div>
                    </div>
                    <!-- Name -->
                    <h4 class=" text-lg font-bold text-gray-900">Jane Doe</h4>
                    <!-- Date of birth -->
                    <h6 class=" text-xs font-medium text-gray-500">Dec. 29, 1996</h6>
                    <!-- Email -->
                    <h6 class=" text-xs font-medium text-gray-500">example@example.com</h6>
                    <!-- Phone -->
                    <h6 class=" text-xs font-medium text-gray-500">000-0000</h6>
                    <!-- Network -->
                    <h6 class=" text-sm font-medium text-gray-500 mt-1 mb-1">$1.3M</h6>
                    <!-- Citizenship -->
                    <div class=" flex space-x-1 items-end text-end" title="residency">
                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')] bg-center bg-cover h-4 w-8 rounded-sm"></div>
                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-4 w-8 rounded-sm"></div>
                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png')] bg-center bg-cover h-4 w-8 rounded-sm"></div>
                        <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-4 w-8 rounded-sm"></div>
                    </div>
                </div>
            </div>
            <div class="flex mt-3">
                <!-- Filters -->
                <div class="flex-1">
                    <div class="mt-2">
                        <div class="p-1 bottom-1 hover:bg-gray-900 hover:text-white rounded-md cursor-pointer text-sm">&#9867; Residency</div>
                        <div class="p-1 bottom-1 hover:bg-gray-900 hover:text-white rounded-md cursor-pointer text-sm">&#9906; Citizenship</div>
                        <div class="p-1 bottom-1 hover:bg-gray-900 hover:text-white rounded-md cursor-pointer text-sm">&#8886; Revenue Generator</div>
                        <div class="p-1 bottom-1 hover:bg-gray-900 hover:text-white rounded-md cursor-pointer text-sm">&#9862; Trust</div>
                        <div class="p-1 bottom-1 hover:bg-gray-900 hover:text-white rounded-md cursor-pointer text-sm">&#9901; Corporate Structure</div>
                    </div>
                </div>
                <!-- Details -->
                <div class="flex-1">
                    <div class="p-1 bottom-1 hover:bg-gray-900 hover:text-white rounded-md cursor-pointer text-sm">
                        <div class="flex justify-between">
                            <div>Australia</div>
                            <div>&#x2690;</div>
                        </div>
                        <!-- Sub details -->
                        <div>
                            <p class="text-xs">If you're an Australian resident for tax purposes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-[96vh] block p-2">
        <RouterView/>
    </div>
</div>
</template>