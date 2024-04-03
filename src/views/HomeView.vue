<script setup>
import MapView from '@/components/MapView.vue';
</script>
<template>
    <div class="bg-slate-200 p-5 h-screen box-border">
        <div class="flex space-x-1">
            <div class=" w-4/12 h-4/5 block p-2">
                <div class="flex space-x-3">
                    <!-- Avatar -->
                    <div class="flex-1 bg-[url('https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover block relative h-40 w-32 rounded-md"></div>
                    <!-- Client details -->
                    <div class="flex-1">
                        <div class="flex space-x-1" title="citizenship">
                            <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-10 w-20 rounded-md"></div>
                            <!-- Sub residencies -->
                            <div class=" flex space-x-1 items-end text-end">
                                <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-4 w-8 rounded-md"></div>
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
                            <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')] bg-center bg-cover h-4 w-8 rounded-md"></div>
                            <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')] bg-center bg-cover h-4 w-8 rounded-md"></div>
                            <div class="bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png')] bg-center bg-cover h-4 w-8 rounded-md"></div>
                            <div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg')] bg-center bg-cover h-4 w-8 rounded-md"></div>
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

            <div class="w-full h-[96vh] block p-2">
                <MapView />
            </div>
        </div>
    </div>
</template>