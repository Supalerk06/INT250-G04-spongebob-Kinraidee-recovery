<script setup>
defineProps({
  isRolling: Boolean,
  canRoll: Boolean,
  getRandomFoodImage: Function
})
const emit = defineEmits(['roll'])
</script>

<template>
  <div class="w-full lg:w-1/2 flex flex-col items-center gap-8 order-1 lg:order-2 ">
    <div class="relative w-full aspect-square max-w-[450px] bg-white dark:bg-card-dark rounded-[3rem] border-[12px] border-slate-100 dark:border-card-dark/80 shadow-2xl dark:shadow-black/60 overflow-hidden flex items-center justify-center group transition-colors duration-500 ease-in-out">
  
  <div v-if="isRolling" class="absolute inset-0 flex flex-col items-center justify-center animate-shuffle">
    <div v-for="i in 10" :key="i" class="w-full h-full flex-shrink-0 flex items-center justify-center border-b border-slate-50 dark:border-white/5 transition-colors duration-500">
       <img :src="getRandomFoodImage()" class="w-4/5 h-4/5 object-cover rounded-full opacity-50 dark:opacity-60 grayscale dark:brightness-75 transition-all duration-500" />
    </div>
  </div>

  <div v-else class="relative w-full h-full flex items-center justify-center p-8 transition-colors duration-500">
    <div class="w-full h-full rounded-full border-[8px] border-secondary/10 dark:border-secondary/40 bg-slate-50/50 dark:bg-card-dark/40 flex items-center justify-center transition-colors duration-500 shadow-inner dark:shadow-black/20">
       <span class="text-8xl animate-bounce drop-shadow-xl dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">🍱</span>
    </div>
  </div>

  <div class="absolute inset-0 bg-gradient-to-b from-white dark:from-card-dark via-transparent dark:via-transparent to-white dark:to-card-dark pointer-events-none opacity-60 dark:opacity-80 transition-colors duration-500"></div>
  
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
     <button 
      @click="emit('roll')" 
      :disabled="!canRoll"
      class="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-xl shadow-secondary/30 dark:shadow-secondary/40 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale"
    >
      สุ่มเลย!
    </button>
  </div>
</div>
    
    <p class="text-slate-400 font-bold text-xs uppercase tracking-widest">คลิกเพื่อเริ่มต้นการสุ่มเมนู</p>
  </div>
</template>

<style scoped>
@keyframes shuffle {
  0% { transform: translateY(0); }
  100% { transform: translateY(-90%); }
}

.animate-shuffle {
  animation: shuffle 0.2s linear infinite;
}
</style>
