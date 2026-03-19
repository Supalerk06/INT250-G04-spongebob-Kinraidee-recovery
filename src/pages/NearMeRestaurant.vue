<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import foods from '../data/foods.js'

const route = useRoute()

const targetMenu = computed(() => route.query.menu || "กะเพรา") // hardcode ลอง

const filteredFoods = computed(() => {
  if (!targetMenu.value) return []

  return foods.filter(f =>
    f.name.includes(targetMenu.value)
  )
})

const allRestaurants = computed(() =>
  filteredFoods.value.flatMap(f =>
    f.restaurants.map(r => ({
      ...r,
      imageUrl: f.imageUrl
    }))
  )
)

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

    <header class="relative bg-red-900 pt-5 pb-28  rounded-b-[70px] border-b border-red-500/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

      <div class="relative z-10 max-w-7xl mx-auto">
        <button
          class="flex items-center gap-2 text-white/80 hover:text-primary transition-all text-sm font-bold mb-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>
          หน้าแรก
        </button>

        <!-- text left -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div class="space-y-1">
            <span
              class="flex items-center gap-2 text-primary font-black text-[11px] uppercase tracking-[0.2em] mb-2 font-display">
              Current Location: KMUTT
            </span>
            <h1 class="text-4xl md:text-6xl font-display font-black text-white">
              {{ targetMenu }}
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
              <select
                class="bg-transparent font-bold text-white text-sm focus:outline-none cursor-pointer pb-1 border-b border-white/30 hover:border-primary transition-colors pr-6">
                <option class="text-text">ใกล้ที่สุด</option>
                <option class="text-text">คะแนนรีวิว</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </header>

    <!-- card -->
    <main class="relative z-20 max-w-7xl mx-auto px-6 -mt-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div v-for="(shop, index) in allRestaurants" :key="index" class="bg-white rounded-[2.5rem] p-3 shadow-xl hover:shadow-[0_10px_30px_rgba(255,215,0,0.25)] hover:-translate-y-2 transition-all duration-500 group border border-gray-100 flex flex-col">

          <div class="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-4 bg-gray-50">

            <img :src="shop.imageUrl"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

            <div class="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <div
                class="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-primary text-[14px]">star</span>
                {{ shop.star }}
              </div>
            </div>
          </div>

          <div class="px-2 pb-2 flex-1 flex flex-col justify-between">
            <h3
              class="font-display font-black text-xl group-hover:text-secondary transition-colors mb-4">
              {{ shop.name }}
            </h3>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex flex-col">
                <span
                  class="text-[9px] font-bold text-gray-400 tracking-widest font-display mb-0.5">DISTANCE</span>
                <span class="text-xl font-display font-black text-secondary">
                  {{ shop.distance }} KM
                </span>
              </div>
              <button
                class="bg-primary hover:bg-white text-red-950 hover:text-secondary border-2 border-primary px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 shadow-[0_5px_15px_rgba(255,235,59,0.3)] flex items-center gap-2 group/btn">
                ไปที่ร้าน
                <span
                  class="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform font-bold">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>

  </div>
</template>

<style scoped></style>