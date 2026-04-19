<template>
  <div class="relative w-screen h-screen bg-white overflow-hidden font-sans text-[#111111] select-none flex">
    
    <div class="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-95 z-0"></div>
    <div class="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-red-600/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay z-0"></div>

    <div v-show="!isWarping" class="relative z-10 w-full h-full flex items-center justify-between px-8 lg:px-24">
      
      <div class="relative w-full max-w-lg bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(238,27,36,0.1)] border border-gray-100 flex flex-col h-[85vh] justify-between z-20">
        
        <div>
          <div class="flex items-center gap-3 mb-6">
            <span class="inline-flex items-center gap-1.5 bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(238,27,36,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" /></svg>
              KinRaiDee Event
            </span>
            <span class="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-100">
              V 2.0
            </span>
          </div>
          
          <h1 class="text-6xl font-black leading-tight text-slate-900 drop-shadow-sm tracking-tight">
            KIN<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-secondary drop-shadow-[0_0_15px_rgba(238,27,36,0.2)]">RaiDee</span>
          </h1>
          
          <p class="text-secondary font-bold flex items-center gap-2 text-xl mt-2">
            ระบบสุ่มอาหารอัจฉริยะ 
          </p>
          <p class="text-base text-slate-500 mt-3 leading-relaxed opacity-90 font-light">
            สุ่มมื้ออร่อยตามใจคุณ การันตีคุณภาพใน 3 วินาที!
          </p>
        </div>

        <div class="mt-8">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span class="w-8 h-px bg-gray-200"></span> เรตอัปประจำวัน <span class="w-8 h-px bg-gray-200"></span>
          </p>
          <div class="flex gap-4">
            <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-secondary shadow-[0_0_20px_rgba(238,27,36,0.2)] relative group cursor-pointer hover:scale-105 transition-transform">
              <div class="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent flex items-end justify-center pb-1 opacity-100 z-10 text-[10px] font-black text-white">UP!</div>
              <img src="https://img2.10bestmedia.com/Images/Photos/423388/Double-Meat-Whataburger---Whataburger_54_990x660.jpg?auto=webp&width=3840&quality=75" class="w-full h-full object-cover" />
            </div>
            <div class="w-16 h-16 rounded-2xl overflow-hidden border border-white/30 relative group cursor-pointer hover:border-white transition-colors">
              <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&q=80" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div class="w-16 h-16 rounded-2xl overflow-hidden border border-white/30 relative group cursor-pointer hover:border-white transition-colors">
              <img src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&q=80" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        <div class="mt-8 bg-slate-50 p-6 rounded-[2rem] border border-gray-100">
          <p class="text-sm font-bold text-slate-700 mb-4 flex justify-between items-center">
            <span>เงื่อนไขการสุ่ม</span>
            <span class="text-xs font-medium bg-slate-200 text-slate-600 px-3 py-1 rounded-full">{{ getFilteredFoods().length }} เมนู</span>
          </p>
          <div class="flex flex-wrap gap-3">
            <button 
              :class="filters.halal ? 'bg-secondary text-white border-transparent shadow-[0_0_15px_rgba(238,27,36,0.2)]' : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-50'" 
              @click="filters.halal = !filters.halal"
              class="px-5 py-2.5 border rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2">
              <span v-if="filters.halal" class="text-white">●</span> Halal
            </button>
            <button 
              :class="filters.vegetarian ? 'bg-secondary text-white border-transparent shadow-[0_0_15px_rgba(238,27,36,0.2)]' : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-50'" 
              @click="filters.vegetarian = !filters.vegetarian"
              class="px-5 py-2.5 border rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2">
              <span v-if="filters.vegetarian" class="text-white">●</span> Vegetarian
            </button>
            <button 
              :class="filters.noMeat ? 'bg-secondary text-white border-transparent shadow-[0_0_15px_rgba(238,27,36,0.2)]' : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-50'" 
              @click="filters.noMeat = !filters.noMeat"
              class="px-5 py-2.5 border rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2">
              <span v-if="filters.noMeat" class="text-white">●</span> No Meat
            </button>
          </div>
        </div>
      </div>

      <div class="relative hidden lg:flex flex-1 justify-center items-center h-full pointer-events-none">
        <div class="relative w-[34rem] h-[34rem] animate-[float_6s_ease-in-out_infinite] z-10">
          
          <div class="absolute inset-0 bg-secondary/10 rounded-full blur-[100px] z-0"></div>
          
          <div class="absolute inset-[-8%] border-[1px] border-slate-200 rounded-full animate-[spin_30s_linear_infinite_reverse] z-0"></div>
          <div class="absolute inset-[-4%] border-[3px] border-dashed border-secondary/40 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
          
          <div class="relative z-10 w-full h-full rounded-full p-2 bg-gradient-to-br from-red-100 via-secondary to-red-700 shadow-[0_20px_60px_rgba(238,27,36,0.3)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80" 
              alt="Featured Food" 
              class="w-full h-full object-cover rounded-full border-[6px] border-white"
            />
          </div>

          <div class="absolute top-[8%] left-[-5%] bg-white/90 backdrop-blur text-red-800 px-5 py-2.5 rounded-full shadow-2xl font-black flex items-center gap-2 transform -rotate-6 z-20 border border-white">
            <span class="text-xl">🔥</span> SIGNATURE
          </div>
          <div class="absolute bottom-[12%] right-[-2%] bg-secondary text-white px-5 py-2 rounded-full shadow-2xl font-black flex items-center gap-1 transform rotate-6 z-20">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div class="absolute bottom-12 right-12 lg:right-24 z-30">
        <button 
          @click="rollFood" 
          :disabled="isWarping || getFilteredFoods().length === 0"
          class="group flex items-center bg-secondary text-white px-10 py-5 rounded-full font-black text-xl cursor-pointer shadow-[0_0_40px_rgba(238,27,36,0.3)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(238,27,36,0.5)] disabled:opacity-50 disabled:cursor-not-allowed border-4 border-white"
        >
          <span class="flex items-center gap-3 text-white group-hover:text-red-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <span class="text-2xl">x 1</span>
          </span>
          <span class="w-1 h-8 bg-white/30 mx-6 rounded-full"></span>
          <span class="tracking-widest drop-shadow-sm uppercase">สุ่มมื้ออร่อย!</span>
        </button>
      </div>
    </div>

    <div v-if="isWarping" class="fixed inset-0 z-40 bg-white/90 backdrop-blur-2xl flex flex-col items-center justify-center">
      <div class="relative w-40 h-40 mb-10">
        <div class="absolute inset-0 border-[6px] border-slate-100 rounded-full"></div>
        <div class="absolute inset-0 border-[6px] border-secondary border-t-transparent rounded-full animate-spin"></div>
        <div class="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-[0_0_15px_rgba(238,27,36,0.3)]">✨</div>
      </div>
      <h2 class="text-4xl font-black tracking-widest text-slate-800 animate-pulse drop-shadow-sm">WARPING...</h2>
      <p class="text-secondary mt-4 font-bold tracking-widest uppercase opacity-80 text-sm">Searching for the perfect meal</p>
    </div>

    <div v-if="showResult && result" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-lg" @click="closeModal"></div>
      
      <div class="relative bg-white text-slate-900 border-[8px] border-white p-2 rounded-[3rem] text-center w-full max-w-md shadow-[0_0_100px_rgba(255,255,255,0.3)] transform transition-all animate-[popIn_0.6s_cubic-bezier(0.16,1,0.3,1)]">
        
        <div class="bg-gradient-to-b from-red-50 to-white rounded-[2.5rem] p-8 h-full w-full border border-red-100 flex flex-col items-center relative overflow-hidden">
          
          <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-900 to-transparent opacity-10"></div>
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

          <div class="bg-secondary text-white text-xl tracking-widest px-8 py-2 rounded-b-3xl absolute top-0 font-black shadow-lg">
            {{ result.star }}
          </div>
          
          <div class="relative w-56 h-56 mx-auto mt-10 mb-6 rounded-full overflow-hidden shadow-[0_20px_40px_rgba(153,0,0,0.2)] border-[6px] border-white group">
            <img :src="result.imageUrl" :alt="result.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 rounded-full ring-inset ring-2 ring-yellow-400/50 pointer-events-none"></div>
          </div>
          
          <h2 class="text-4xl font-black text-red-900 mb-2 leading-tight drop-shadow-sm">{{ result.name }}</h2>
          <p class="text-red-600 font-bold flex items-center justify-center gap-1.5 mb-6 bg-red-50 px-5 py-2 rounded-full shadow-sm text-sm border border-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            {{ result.place }}
          </p>
          <p class="text-slate-600 italic mb-10 relative font-medium px-4">
            <span class="text-4xl text-secondary absolute -top-5 left-0 opacity-20 font-serif">"</span>
            {{ result.detail }}
            <span class="text-4xl text-secondary absolute -bottom-8 right-0 opacity-20 font-serif">"</span>
          </p>

          <div class="flex flex-col gap-3 w-full">
            <button @click="goToRestaurant(result.name)" class="w-full bg-gradient-to-r from-[#00B14F] to-[#009c45] text-white py-4 rounded-2xl font-black text-lg transition-all shadow-[0_10px_20px_rgba(0,177,79,0.3)] hover:shadow-[0_15px_30px_rgba(0,177,79,0.4)] flex items-center justify-center gap-2 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              สั่งเลยผ่าน Grab
            </button>
            
            <div class="flex gap-3">
              <button @click="rollFood" class="flex-1 bg-red-50 hover:bg-red-100 text-red-900 py-4 rounded-2xl font-bold transition-all border border-red-200">
                🔄 สุ่มใหม่
              </button>
              <button @click="closeModal" class="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-500 py-4 rounded-2xl font-bold transition-all border border-slate-200">
                ❌ ปิด
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'
import foods from "@/data/foods"

const router = useRouter()
const goToRestaurant = () => {
  router.push('/restaurants?menu=' + result.value.name)
}

const filters = ref({
  halal: false,
  vegetarian: false,
  noMeat: false
})

const isWarping = ref(false)
const showResult = ref(false)
const result = ref(null)

function getFilteredFoods() {
  return foods.filter(f => {
    if (filters.value.halal && !f.halal) return false
    if (filters.value.vegetarian && !f.vegetarian) return false
    if (filters.value.noMeat && !f.noMeat) return false
    return true
  })
}

function rollFood() {
  const pool = getFilteredFoods()
  if (pool.length === 0) {
    alert("ไม่มีอาหารที่ตรงกับเงื่อนไข ลองปลด Filter ดูนะครับ!")
    return
  }

  showResult.value = false
  isWarping.value = true

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * pool.length)
    result.value = pool[randomIndex]
    
    isWarping.value = false
    showResult.value = true
  }, 2000)
}

// function orderOnGrab(foodName) {
//   const grabUrl = `https://food.grab.com/th/th/restaurants?search=${encodeURIComponent(foodName)}`
//   window.open(grabUrl, '_blank')
// }

function closeModal() {
  showResult.value = false
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes popIn {
  0% { opacity: 0; transform: scale(0.75) translateY(30px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
</style>