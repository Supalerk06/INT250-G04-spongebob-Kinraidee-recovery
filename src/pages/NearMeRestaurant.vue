
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

  if (sortBy.value === 'distance') {
    restaurants.sort((a, b) => a.distance - b.distance)
  } else if (sortBy.value === 'rating') {
    restaurants.sort((a, b) => b.star - a.star)
  }

  let filtered = restaurants.filter(r => r.distance <= maxDistance.value)

  if (filtered.length === 0 && restaurants.length > 0) {
    const nearest = restaurants[0]
    maxDistance.value = nearest.distance   // ⭐ สำคัญ
    filtered = [nearest]
  }

  return filtered
})

console.log(targetMenu.value)
console.log(filteredFoods.value)

</script>


<template>
  <div class="min-h-screen font-body text-slate-800 pb-24 relative overflow-hidden bg-slate-50">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(238,27,36,0.05),transparent_40%),radial-gradient(circle_at_0%_100%,rgba(238,27,36,0.05),transparent_40%)] -z-10 pointer-events-none"></div>
    <div class="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-secondary/5 blur-[150px] rounded-full -z-10">
    </div>
    <div class="absolute bottom-[-20%] left-[-10%] w-[30vw] h-[30vw] bg-secondary/5 blur-[120px] rounded-full -z-10"></div>
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay -z-10">
    </div>

    <header class="relative bg-white pt-10 pb-28 rounded-b-[70px] border-b border-gray-100 shadow-xl">

      <div class="relative z-10 max-w-7xl mx-auto">

        <!-- text left -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div class="space-y-1">
            <span
              class="flex items-center gap-2 text-secondary font-black text-[11px] uppercase tracking-[0.2em] mb-2 font-display">
              📍 Current Location: KMUTT
            </span>
            <h1 class="text-4xl md:text-6xl font-display font-black text-slate-900">
              {{ targetMenu || 'ร้านอาหารทั้งหมด' }}
            </h1>
          </div>

          <!-- distance box  -->
          <div
            class="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto bg-slate-50 p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div class="w-full sm:w-60">
              <div class="flex justify-between items-center mb-3">
                <span class="text-[12px] font-bold text-slate-400 font-display">
                  ระยะทางค้นหา
                </span>
                <span class="text-white font-black bg-secondary px-2.5 py-0.5 rounded-md text-[11px] shadow-lg shadow-secondary/20">
                  {{ displayDistance }}
                </span>
              </div>
              <input type="range" v-model="maxDistance" min="0" max="10" step="0.1"
                class="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-secondary transition-all" />
            </div>

            <div class="h-10 w-px bg-gray-200 hidden sm:block mx-1"></div>

            <!-- select option -->
            <div class="relative flex flex-col gap-1 w-full sm:w-[140px]">
              <span class="text-[12px] font-bold text-slate-400 font-display">
                จัดเรียงตาม
              </span>
              <select v-model="sortBy"
                class="bg-transparent font-bold text-slate-700 text-sm cursor-pointer pb-1 border-b border-gray-200 hover:border-secondary transition-colors pr-6 focus:outline-none">
                <option value="distance" class="text-slate-700">ใกล้ที่สุด</option>
                <option value="rating" class="text-slate-700">คะแนนรีวิว</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </header>

    <!-- card -->
    <main class="relative z-20 max-w-7xl mx-auto px-6 -mt-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <RestaurantCard v-for="(shop, index) in allRestaurants" :key="index" :shop="shop"/>
      </div>
    </main>

  </div>
</template>

<style scoped></style>