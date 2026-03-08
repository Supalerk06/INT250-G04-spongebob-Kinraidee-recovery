<template>
  <div class="relative w-screen h-screen bg-[#800000] overflow-hidden font-sans text-white select-none flex">
    
    <div class="absolute inset-0 bg-gradient-to-br from-red-900 via-red-950 to-black opacity-95 z-0"></div>
    <div class="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-yellow-500/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
    <div class="absolute bottom-[-20%] left-[-10%] w-[30vw] h-[30vw] bg-red-600/30 blur-[100px] rounded-full z-0 pointer-events-none"></div>
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0"></div>

    <div v-show="!isWarping" class="relative z-10 w-full h-full flex items-center justify-between px-10 lg:px-20">
      
      <div class="relative w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col h-[85vh] justify-between">
        
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="inline-flex items-center gap-1.5 bg-yellow-300 text-red-950 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" /></svg>
              KinRaiDee Event Warp
            </span>
            <span class="text-xs font-bold text-red-200 bg-red-900/50 px-3 py-1.5 rounded-full border border-red-500/30">
              V 2.0
            </span>
          </div>
          
          <h1 class="text-5xl lg:text-6xl font-black leading-tight bg-clip-text text-white">
            KIN<br><span class="text-yellow-400 drop-shadow-[0_2px_10px_rgba(250,204,21,0.5)]">RaiDee</span>
          </h1>
          
          <p class="text-yellow-300 font-bold flex items-center gap-2 text-lg">
            ระบบสุ่มอาหารอัจฉริยะ 
          </p>
          <p class="text-sm text-red-100 mt-3 leading-relaxed opacity-90">
            สุ่มอาหารตามความต้องการ ให้คุณใน 3 วินาที!
          </p>
        </div>

        <div class="mt-6">
          <p class="text-xs font-bold text-red-300 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">เมนูเรตอัปประจำวัน (Featured)</p>
          <div class="flex gap-3">
            <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)] relative group">
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 text-xs font-bold">UP!</div>
              <img src="https://img2.10bestmedia.com/Images/Photos/423388/Double-Meat-Whataburger---Whataburger_54_990x660.jpg?auto=webp&width=3840&quality=75" class="w-full h-full object-cover" />
            </div>
            <div class="w-16 h-16 rounded-xl overflow-hidden border border-white/20 relative group">
              <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&q=80" class="w-full h-full object-cover" />
            </div>
            <div class="w-16 h-16 rounded-xl overflow-hidden border border-white/20 relative group">
              <img src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&q=80" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="mt-6 bg-black/20 p-5 rounded-2xl border border-white/5">
          <p class="text-sm font-bold text-white mb-3 flex justify-between items-center">
            <span>Filter ประเภทอาหาร</span>
            <span class="text-xs font-normal text-red-300">{{ getFilteredFoods().length }} เมนูในตู้</span>
          </p>
          <div class="flex flex-wrap gap-2.5">
            <button 
              :class="filters.halal ? 'bg-yellow-400 text-red-900 border-yellow-400' : 'bg-transparent text-white border-white/30 hover:bg-white/10'" 
              @click="filters.halal = !filters.halal"
              class="px-5 py-2 border rounded-full text-sm font-bold transition-all duration-300 shadow-sm flex items-center gap-1.5">
              <span v-if="filters.halal">✓</span> Halal
            </button>
            <button 
              :class="filters.vegetarian ? 'bg-yellow-400 text-red-900 border-yellow-400' : 'bg-transparent text-white border-white/30 hover:bg-white/10'" 
              @click="filters.vegetarian = !filters.vegetarian"
              class="px-5 py-2 border rounded-full text-sm font-bold transition-all duration-300 shadow-sm flex items-center gap-1.5">
              <span v-if="filters.vegetarian">✓</span> Vegetarian
            </button>
            <button 
              :class="filters.noMeat ? 'bg-yellow-400 text-red-900 border-yellow-400' : 'bg-transparent text-white border-white/30 hover:bg-white/10'" 
              @click="filters.noMeat = !filters.noMeat"
              class="px-5 py-2 border rounded-full text-sm font-bold transition-all duration-300 shadow-sm flex items-center gap-1.5">
              <span v-if="filters.noMeat">✓</span> No Meat
            </button>
          </div>
        </div>
      </div>

      <div class="relative hidden lg:flex flex-1 justify-center items-center h-full">
        <div class="relative w-[32rem] h-[32rem] animate-[float_6s_ease-in-out_infinite] z-10">
          
          <div class="absolute inset-0 bg-yellow-500/30 rounded-full blur-[80px] z-0"></div>
          
          <div class="absolute inset-[-5%] border-[2px] border-dashed border-yellow-500/50 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
          
          <div class="relative z-10 w-full h-full rounded-full p-3 bg-gradient-to-tr from-yellow-300 via-amber-500 to-red-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80" 
              alt="Featured Food" 
              class="w-full h-full object-cover rounded-full border-4 border-red-950"
            />
          </div>

          <div class="absolute top-[10%] left-[-10%] bg-white text-red-700 px-4 py-2 rounded-2xl shadow-xl font-bold flex items-center gap-2 transform -rotate-6 z-20">
            <span class="text-xl">🔥</span> ยอดฮิตประจำสัปดาห์
          </div>
          <div class="absolute bottom-[15%] right-[-5%] bg-yellow-400 text-red-900 px-4 py-2 rounded-2xl shadow-xl font-black flex items-center gap-1 transform rotate-3 z-20">
            ⭐⭐⭐⭐⭐ 
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 right-10 lg:right-20 z-20">
        <button 
          @click="rollFood" 
          :disabled="isWarping || getFilteredFoods().length === 0"
          class="group flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-red-950 px-10 py-5 rounded-full font-black text-xl cursor-pointer shadow-[0_15px_30px_-5px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_-5px_rgba(250,204,21,0.7)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none border-2 border-yellow-200"
        >
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            x 1
          </span>
          <span class="w-px h-8 bg-red-950/20 mx-5"></span>
          <span class="tracking-widest drop-shadow-sm">สุ่มมื้ออร่อย!</span>
        </button>
      </div>
    </div>

    <div v-if="isWarping" class="fixed inset-0 z-40 bg-red-950/95 backdrop-blur-xl flex flex-col items-center justify-center">
      <div class="relative w-32 h-32 mb-8">
        <div class="absolute inset-0 border-4 border-yellow-500/30 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <div class="absolute inset-0 flex items-center justify-center text-4xl">🍳</div>
      </div>
      <h2 class="text-3xl font-black tracking-widest text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">กำลังรังสรรค์มื้ออาหาร...</h2>
      <p class="text-red-200 mt-3 font-medium tracking-wide opacity-80">โปรดรอสักครู่ ระบบกำลังค้นหาเมนูที่ดีที่สุดสำหรับคุณ</p>
    </div>

    <div v-if="showResult && result" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-md" @click="closeModal"></div>
      
      <div class="relative bg-white text-slate-900 border-[6px] border-yellow-400 p-1 rounded-[2.5rem] text-center w-full max-w-md shadow-[0_0_80px_rgba(250,204,21,0.4)] transform transition-all animate-[popIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)]">
        <div class="bg-red-50 rounded-[2rem] p-8 h-full w-full border border-red-100 flex flex-col items-center relative overflow-hidden">
          
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>

          <div class="bg-red-900 text-yellow-400 text-xl tracking-widest px-6 py-1.5 rounded-b-2xl absolute top-0 font-black shadow-md border-b-2 border-yellow-500">
            {{ result.star }}
          </div>
          
          <div class="relative w-48 h-48 mx-auto mt-8 mb-6 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-4 border-white group">
            <img :src="result.imageUrl" :alt="result.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 rounded-full ring-inset ring-4 ring-black/5 pointer-events-none"></div>
          </div>
          
          <h2 class="text-3xl font-black text-red-800 mb-1 leading-tight">{{ result.name }}</h2>
          <p class="text-slate-500 font-bold flex items-center justify-center gap-1.5 mb-4 bg-white px-4 py-1.5 rounded-full shadow-sm text-sm border border-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            {{ result.place }}
          </p>
          <p class="text-slate-600 italic mb-8 relative">
            <span class="text-3xl text-yellow-300 absolute -top-4 -left-6 opacity-50">"</span>
            {{ result.detail }}
            <span class="text-3xl text-yellow-300 absolute -bottom-6 -right-4 opacity-50">"</span>
          </p>

          <div class="flex flex-col gap-3 w-full">
            <button @click="orderOnGrab(result.name)" class="w-full bg-[#00B14F] hover:bg-[#009c45] text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              สั่งเลยผ่าน Grab
            </button>
            
            <div class="flex gap-3">
              <button @click="rollFood" class="flex-1 bg-yellow-400 hover:bg-yellow-500 text-red-950 py-3.5 rounded-2xl font-bold transition-all hover:shadow-md border border-yellow-500">
                🔄 สุ่มใหม่
              </button>
              <button @click="closeModal" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 py-3.5 rounded-2xl font-bold transition-all border border-slate-300">
                ❌ ปิดหน้าต่าง
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

import foods from "@/data/foods"

// State & Logic ส่วนใหญ่คงเดิมจากเวอร์ชันที่แล้ว
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

  // หน่วงเวลา Animation ให้นานขึ้นนิดนึงเพื่อให้ลุ้น (2 วิ)
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * pool.length)
    result.value = pool[randomIndex]
    
    isWarping.value = false
    showResult.value = true
  }, 2000)
}

function orderOnGrab(foodName) {
  const grabUrl = `https://food.grab.com/th/th/restaurants?search=${encodeURIComponent(foodName)}`
  window.open(grabUrl, '_blank')
}

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
  0% { opacity: 0; transform: scale(0.8) translateY(20px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
</style>