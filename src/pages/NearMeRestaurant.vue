
<script setup>
import RestaurantCard from '@/components/RestaurantCard.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import foods from '../data/foods.js'

const route = useRoute()
const targetMenu = computed(() => route.query.menu)
const sortBy = ref('distance')

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

  return restaurants
})

console.log(targetMenu.value)
console.log(filteredFoods.value)

</script>


<template>
  <div class="min-h-screen font-body text-text pb-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-[#990000] via-[#5a0000] to-black opacity-95 -z-10"></div>
    <div class="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-yellow-400/10 blur-[150px] rounded-full -z-10">
    </div>
    <div class="absolute bottom-[-20%] left-[-10%] w-[30vw] h-[30vw] bg-white/10 blur-[120px] rounded-full -z-10"></div>
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay -z-10">
    </div>

    <header class="relative bg-red-800 pt-10 pb-28 rounded-b-[70px] border-b border-red-500/40 shadow-2xl">

      <div class="relative z-10 max-w-7xl mx-auto">

        <!-- text left -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div class="space-y-1">
            <span
              class="flex items-center gap-2 text-primary font-black text-[11px] uppercase tracking-[0.2em] mb-2 font-display">
              Current Location: KMUTT
            </span>
            <h1 class="text-4xl md:text-6xl font-display font-black text-white">
              {{ targetMenu || 'ร้านอาหารทั้งหมด' }}
            </h1>
          </div>

          <!-- distance box  -->
          <div
            class="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto bg-white/10 p-5 rounded-3xl border border-white/20 shadow-xl text-white">
            <div class="w-full sm:w-60">
              <div class="flex justify-between items-center mb-3">
                <span class="text-[12px] font-bold text-red-100 font-display">
                  ระยะทางค้นหา
                </span>
                <span class="text-red-900 font-black bg-primary px-2.5 py-0.5 rounded-md text-[11px] shadow-lg">
                  1000 M
                </span>
              </div>
              <input type="range"
                class="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-primary transition-all" />
            </div>

            <div class="h-10 w-px bg-white/20 hidden sm:block mx-1"></div>

            <!-- select option -->
            <div class="relative flex flex-col gap-1 w-full sm:w-[140px]">
              <span class="text-[12px] font-bold text-red-100 font-display">
                จัดเรียงตาม
              </span>
              <select v-model="sortBy"
                class="bg-transparent font-bold text-white text-sm cursor-pointer pb-1 border-b border-white/30 hover:border-primary transition-colors pr-6">
                <option value="distance" class="text-text">ใกล้ที่สุด</option>
                <option value="rating" class="text-text">คะแนนรีวิว</option>
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