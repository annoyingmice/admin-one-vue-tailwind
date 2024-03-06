<script setup>
import "@/../node_modules/mapbox-gl/dist/mapbox-gl.css"
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue"
import { useActiveStore } from "@/stores"

import mapboxgl from "mapbox-gl"

const map = ref(null)
let mapGl = ref(null)
let focusedMarker = ref(null)
const mapMarkerInstances = new Set()
const markers = new Set()

const { a } = useActiveStore()
const active = computed(() => a.selected)
const residencies = computed(() => a.residencies)
const focus_location = computed(() => a.focus_location)
const business_locations = computed(() => a.business_locations)

const createMarker = () => {
    const marker = document.createElement('div')
    marker.innerHTML = `
        <span class="relative flex h-3 w-3 cursor">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
        </span>
    `
    return marker
}

const createResidencyMarker = () => {
    const marker = document.createElement('div')
    marker.innerHTML = `
        <span class="relative flex h-3 w-3 cursor">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
        </span>
    `
    return marker
}

const createRevyMarker = () => {
    const marker = document.createElement('div')
    marker.innerHTML = `
        <span class="relative flex h-3 w-3 cursor">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-300"></span>
        </span>
    `
    return marker
}

const createBusinessLocationMarker = () => {
    const marker = document.createElement('div')
    marker.innerHTML = `
        <span class="relative flex h-3 w-3 cursor">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-200 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-300"></span>
        </span>
    `
    return marker
}

onMounted(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZmd1bnowNiIsImEiOiJjbHQ4ZGIwaTcwdmZ6MmtvOGhxNW9qNW43In0.T97DIaqYgczVTgS0sBoS6g"
    mapGl.value = new mapboxgl.Map({
        container: map.value,
        style: "mapbox://styles/fgunz06/clt8e0du7006601r5dv439cfl", // Replace with your preferred map style
        center: [144.946457, -37.840935],
        zoom: 2,
    })
})

watch(active, () => {
    if(!Object.prototype.hasOwnProperty.call(active.value, 'name')) {
        markers.clear()
        mapMarkerInstances.forEach(item => item.remove())
        mapMarkerInstances.clear()
        return
    }

    const marker = new mapboxgl.Marker({
        element: createMarker()
    })
    .setLngLat(active.value.latlong)
    .setPopup(
        new mapboxgl.Popup({closeButton: false, offset: 25 })
            .setHTML(`
                <span class="block">${active.value.name}</span>
                <span class="block">${active.value.networth}</span>
            `)
    )
    .addTo(mapGl.value)
    .togglePopup()

    if(!mapMarkerInstances.has(marker)) {
        mapMarkerInstances.add(marker)
    }

    mapGl.value.flyTo({
        center: [...active.value.latlong],
        essential: true,
        // zoom: 10,
        speed: 1.5,
        curve: 1.4,
        easing(t) {
          return t;
        }
    });
})

watch(residencies, () => {
    residencies.value.forEach(item => {
        if(!markers.has(item.latlong)) {
            const marker = new mapboxgl.Marker({
                element: createResidencyMarker()
            })
            .setLngLat(item.latlong)
            .setPopup(
                new mapboxgl.Popup({closeButton: false, offset: 25 })
                    .setHTML(`
                        <div>
                            <span class="block">${item.name}</span>
                            <span class="block">${item.description}</span>
                        </div>
                    `)
            )
            .addTo(mapGl.value)
            .togglePopup()
            
            if(!mapMarkerInstances.has(marker)) {
                mapMarkerInstances.add(marker)
            }

            markers.add(item.latlong)
        }

        mapGl.value.flyTo({
            center: [...item.latlong],
            essential: true,
            // zoom: 10,
            speed: 1.5,
            curve: 1.4,
            easing(t) {
                return t;
            }
        })
    })
})

watch(focus_location, () => {
    if(focus_location.value.length > 0 && !markers.has(focus_location.value)) {
        focusedMarker.value = new mapboxgl.Marker({
                element: createRevyMarker()
            })
            .setLngLat(focus_location.value)
            // .setPopup(
            //     new mapboxgl.Popup({ closeButton: false, offset: 25 })
            //         .setHTML(`
            //             <div>
            //                 <span class="block">${item.name}</span>
            //             </div>
            //         `)
            // )
            .addTo(mapGl.value)
            // .togglePopup()

            if(!mapMarkerInstances.has(focusedMarker.value)) {
                mapMarkerInstances.add(focusedMarker.value)
            }

            markers.add(focus_location.value)
    }

    if(markers.has(focus_location.value) && focus_location.value.length > 0) {
        mapGl.value.flyTo({
            center: [...focus_location.value],
            essential: true,
            zoom: 10,
            speed: 1.5,
            curve: 1.4,
            easing(t) {
                return t;
            }
        })
    }

    if(focus_location.value.length === 0) {
        mapGl.value.flyTo({
            center: [...active.value.latlong],
            essential: true,
            zoom: 2,
            speed: 1.5,
            curve: 1.4,
            easing(t) {
                return t;
            }
        })

        markers.delete(focus_location.value)
        focusedMarker.value.remove()
    }
})

// watch(revenue_generators, () => {
//     revenue_generators.value.forEach(item => {
//         if(!markers.has(item.latlong)) {
//             const marker = new mapboxgl.Marker({
//                 element: createRevyMarker()
//             })
//             .setLngLat(item.latlong)
//             .setPopup(
//                 new mapboxgl.Popup({ closeButton: false, offset: 25 })
//                     .setHTML(`
//                         <div>
//                             <span class="block">${item.name}</span>
//                         </div>
//                     `)
//             )
//             .addTo(mapGl.value)
//             .togglePopup()

//             if(!mapMarkerInstances.has(marker)) {
//                 mapMarkerInstances.add(marker)
//             }

//             markers.add(item.latlong)
//         }

//         mapGl.value.flyTo({
//             center: [...item.latlong],
//             essential: true,
//             // zoom: 10,
//             speed: 1.5,
//             curve: 1.4,
//             easing(t) {
//             return t;
//             }
//         })
//     })
// })

watch(business_locations, () => {
    business_locations.value.forEach(item => {
        if(!markers.has(item.latlong)) {
            const marker = new mapboxgl.Marker({
                element: createBusinessLocationMarker()
            })
            .setLngLat(item.latlong)
            .setPopup(
                new mapboxgl.Popup({ closeButton: false, offset: 25 })
                    .setHTML(`
                        <div>
                            <span class="block">${item.name}</span>
                            <span>${item.location}</span>
                        </div>
                    `)
            )
            .addTo(mapGl.value)
            .togglePopup()

            if(!mapMarkerInstances.has(marker)) {
                mapMarkerInstances.add(marker)
            }

            markers.add(item.latlong)
        }

        mapGl.value.flyTo({
            center: [...item.latlong],
            essential: true,
            // zoom: 10,
            speed: 1.5,
            curve: 1.4,
            easing(t) {
            return t;
            }
        })
    })
})

onBeforeUnmount(() => mapGl.value.remove())
</script>

<template>
    <div ref="map" id="map" class="block relative bg-gray-50 shadow-lg rounded-lg h-full w-auto"></div>
</template>