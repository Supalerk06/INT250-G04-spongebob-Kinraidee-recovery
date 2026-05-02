<script setup>
import RestaurantCard from '@/components/RestaurantCard.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import foods from '../data/foods.js'

const route = useRoute()
const targetMenu = computed(() => route.query.menu)
const sortBy = ref('distance')
const maxDistance = ref(1)

const displayDistance = computed(() => {
  return maxDistance.value >= 1
    ? maxDistance.value + ' km'
    : (maxDistance.value * 1000) + ' m'
})

const filteredFoods = computed(() => {
  if (!targetMenu.value) return foods

  return foods.filter(f =>
    f.name.includes(targetMenu.value)
  )
})

const allRestaurants = computed(() => {
  let restaurants = filteredFoods.value.flatMap(f =>
    f.restaurants.map(r => ({
      ...r,
      imageUrl: f.imageUrl
    }))
  )

  restaurants = restaurants.filter(r => r.distance <= maxDistance.value)

  // sort
  if (sortBy.value === 'distance') {
    restaurants.sort((a, b) => a.distance - b.distance)
  } else if (sortBy.value === 'rating') {
    restaurants.sort((a, b) => b.star - a.star)
  }

  let filtered = restaurants.filter(r => r.distance <= maxDistance.value)

  if (filtered.length === 0 && restaurants.length > 0) {
    const nearest = restaurants[0]
    maxDistance.value = nearest.distance
    filtered = [nearest]
  }

  return filtered
})

const distanceOptions = [
  { label: 'Very Close', value: 0.5 },
  { label: '1 km', value: 1 },
  { label: 'Moderate', value: 3 },
  { label: 'All', value: 10 }
]

const resetFilters = () => {
  maxDistance.value = 1
  sortBy.value = 'distance'
}


console.log(targetMenu.value)
console.log(filteredFoods.value)

</script>
<template>
  <div class="min-h-screen font-body text-slate-800 bg-slate-50">

    <main class="max-w-7xl mx-auto pt-12 space-y-5"> 

      <div class="flex flex-col lg:flex-row justify-between gap-8 px-6 pb-2">
        <div class="space-y-3">
          <span
            class="flex items-center gap-2 text-secondary font-black font-display text-[11px] uppercase tracking-[0.2em]">
            📍 Current Location: KMUTT
          </span>
          <h1 class="text-3xl md:text-5xl font-black text-slate-900">
            {{ targetMenu || 'ร้านอาหารทั้งหมด' }}
          </h1>
          <p class="text-slate-500 text-sm font-display font-medium">
            Discover great restaurants around you
          </p>
        </div>


        <!-- distance box  -->
        <div
          class="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">

          <div class="w-full sm:w-60">
            <div class="flex justify-between items-center mb-3">
              <span class="text-[12px] font-bold text-slate-400 font-display">
                Distance
              </span>
              <span
                class="text-white font-black bg-secondary px-2.5 py-0.5 rounded-md text-[11px] shadow-lg shadow-secondary/20">
                {{ displayDistance }}
              </span>

            </div>

            <input type="range" v-model="maxDistance" min="0" max="10" step="0.1"
              class="w-full h-1.5 bg-black rounded-full appearance-none cursor-pointer accent-secondary" />
          </div>

          <div class="h-10 border-r border-gray-200 hidden sm:block"></div>

          <!-- select option -->
         <div class="flex flex-col w-full sm:w-[140px] space-y-1">
            <span class="text-xs font-bold font-display text-slate-400">
              Sort by
            </span>
            <select v-model="sortBy"
              class="text-sm font-bold font-display text-slate-700 border-b border-gray-200 focus:border-secondary outline-none cursor-pointer">
              <option value="distance">Nearest</option>
              <option value="rating">Top rated</option>
            </select>
            <button @click="resetFilters"
              class="text-xs font-bold text-red-500 hover:text-red-600 transition pt-1 text-left">
              Reset all
            </button>
          </div>
        </div>
      </div>

      <!-- quick option button -->
      <div class="flex gap-3 px-6">
        <button v-for="option in distanceOptions" :key="option.value" @click="maxDistance = option.value"
          class="shrink-0 rounded-full px-4 py-2 font-display font-bold text-sm transition-all duration-200 border border-gray-200 hover:bg-gray-100"
          :class="maxDistance === option.value
            ? 'bg-secondary text-white shadow-secondary/20 hover:bg-secondary'
            : 'bg-white text-slate-600'">
         {{ option.label }}
        </button>
      </div>

      <!-- count rest -->
      <div class="flex items-center gap-2 ml-7 pt-2">
        <span class="text-xl font-black text-secondary">{{ allRestaurants.length }}</span>
        <p class="text-slate-500 font-display font-bold text-base">restaurants nearby</p>
      </div>

      <!-- card -->
      <!-- กรณีถ้าร้านไม่มีในระยะทางนั้น ๆ -->
      <div v-if="allRestaurants.length === 0" class="text-center py-20 px-6">
        <div class="text-6xl mb-4">😢</div>
        <h2 class="text-2xl font-black text-slate-700 font-display ">
          No restaurants found
        </h2>
        <p class="text-sm text-slate-400 mt-2 font-display">
          Try adjusting your filters or distance🍜
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <RestaurantCard v-for="(shop, index) in allRestaurants" :key="index" :shop="shop" />
      </div>

    </main>
  </div>
</template>

<style scoped></style>