<script setup>
defineProps({
  filters: Object,
  filteredCount: Number
})

const filterLabels = {
  halal: 'ฮาลาล',
  vegetarian: 'มังสวิรัติ',
  noMeat: 'ไม่ใส่เนื้อสัตว์'
}
</script>

<template>
  <div class="w-full lg:w-1/3 flex flex-col gap-8 order-2 lg:order-1">
    <div>
      <div class="flex items-center gap-3 mb-4">
        <span class="inline-flex items-center gap-1.5 bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-secondary/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
          </svg>
          ระบบสุ่มอาหาร
        </span>
      </div>
      
      <h1 class="text-5xl font-black leading-tight text-slate-900 tracking-tight mb-4">
        เลือกไม่ได้ใช่ไหม<br><span class="text-secondary">ว่าจะกินอะไร?</span>
      </h1>
      
      <p class="text-base text-slate-500 leading-relaxed font-medium">
        ให้เราช่วยตัดสินใจให้คุณ! ระบบสุ่มอัจฉริยะของเราจะเลือกมื้ออาหารที่สมบูรณ์แบบตามความต้องการของคุณ
      </p>
    </div>

    <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
      <p class="text-sm font-bold text-slate-800 mb-4 flex justify-between items-center">
        <span>เงื่อนไขการคัดกรอง</span>
        <span class="text-xs font-medium bg-slate-50 text-secondary px-3 py-1 rounded-full">พบ {{ filteredCount }} รายการ</span>
      </p>
      <div class="flex flex-col gap-3">
        <button 
          v-for="(val, key) in filters" :key="key"
          :class="filters[key] ? 'bg-secondary text-white border-transparent' : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'" 
          @click="filters[key] = !filters[key]"
          class="px-5 py-3 border rounded-2xl text-sm font-bold transition-all duration-200 flex items-center justify-between group"
        >
          <span class="capitalize">{{ filterLabels[key] || key }}</span>
          <div :class="filters[key] ? 'bg-white text-secondary' : 'bg-slate-200 text-slate-400'" class="w-6 h-6 rounded-full flex items-center justify-center text-xs">
            {{ filters[key] ? '✓' : '' }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
