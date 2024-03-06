import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useActiveStore = defineStore('active', () => {
  let a = reactive({
    selected: {},
    residencies: [],
    revenue_generators: [],
    business_locations: [],
    content: [],
    others: [],
    focus_location: [],
  })
	const setActive = payload => Object.assign(a, { selected: payload })
  const setResidency = payload => Object.assign(a, { residencies: payload })
  const setRevenue = payload => Object.assign(a, { revenue_generators: payload })
  const setBusinessLocation = payload => Object.assign(a, { business_locations: payload })
  const setActiveContent = payload => Object.assign(a, { content: payload })
  const setActiveOtherContent = payload => Object.assign(a, { others: payload })
  const setFocusLocation = payload => Object.assign(a, { focus_location: payload })
  return {
    a,
    setFocusLocation,
    setActiveOtherContent,
    setActiveContent,
    setBusinessLocation,
    setRevenue,
    setResidency,
		setActive
   }
})
