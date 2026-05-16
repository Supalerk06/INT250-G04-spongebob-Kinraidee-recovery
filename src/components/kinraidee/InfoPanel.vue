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
  <div class="w-full md:w-2/5 lg:w-1/3 flex flex-col gap-8 lg:order-1">
    <div class="hidden md:block">
      <div class="flex items-center gap-3 mb-4">
        <span class="inline-flex items-center gap-1.5 bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-secondary/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
          </svg>
          ระบบสุ่มอาหาร
        </span>
      </div>
      
      <h1 class="text-5xl font-black leading-tight text-slate-900 dark:text-white tracking-tight mb-4">
        เลือกไม่ได้ใช่ไหม<br><span class="text-secondary">ว่าจะกินอะไร?</span>
      </h1>
      
      <p class="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors">
        ให้เราช่วยตัดสินใจให้คุณ! ระบบสุ่มอัจฉริยะของเราจะเลือกมื้ออาหารที่สมบูรณ์แบบตามความต้องการของคุณ
      </p>
    </div>

    <div class="md:bg-white md:dark:bg-card-dark md:p-6 md:rounded-[2rem] md:border md:border-slate-100 md:dark:border-card-dark-02 md:shadow-xl md:shadow-slate-200/50 md:dark:shadow-card-dark transition-colors
                fixed top-24 right-4 z-40 bg-white/90 dark:bg-card-dark/90 backdrop-blur-md p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-[160px] md:static md:w-full">
      <p class="text-[12px] md:text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 flex justify-between items-center">
        <span class="flex items-center justify-center gap-1 text-secondary font-black md:text-slate-800 md:dark:text-slate-200 md:font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
</svg>เงื่อนไขการคัดกรอง</span>
        <span class="hidden md:inline-block text-xs font-black bg-slate-50 dark:bg-card-dark-02 text-secondary px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
ตัวเลือก
</span>
      </p>
      <div class="flex flex-col gap-3">
        <button 
          v-for="(val, key) in filters" :key="key"
          :class="filters[key] ? 'bg-secondary text-white border-transparent' : 'bg-slate-50 dark:bg-card-dark-02/50 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'" 
          @click="filters[key] = !filters[key]"
          class="px-3 py-2 md:px-5 md:py-3 border rounded-xl md:rounded-2xl text-[11px] md:text-sm font-black transition-all duration-200 flex items-center justify-between group"
        >
          <span class="capitalize">{{ filterLabels[key] || key }}</span>
          <div :class="filters[key] ? 'bg-white text-secondary' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500'" class="w-4 h-4 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black">
            {{ filters[key] ? '✓' : '' }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
