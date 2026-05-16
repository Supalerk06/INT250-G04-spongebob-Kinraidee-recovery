<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  result: Object
})
const emit = defineEmits(['close', 'roll', 'order'])

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-md" @click="emit('close')"></div>
    
    <div class="relative bg-white dark:bg-card-dark text-slate-900 dark:text-white p-2 rounded-[3.5rem] w-full max-w-lg shadow-[0_0_100px_rgba(0,0,0,0.2)] dark:shadow-slate-900 transform transition-all animate-popIn overflow-hidden border border-transparent dark:border-card-dark-02">
      
      
      <div class="relative h-64 w-full overflow-hidden rounded-[2.8rem]">
        <img :src="result.imageUrl" :alt="result.name" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="absolute top-6 right-6">
          <button @click="emit('close')" class="w-10 h-10 bg-white/90 dark:bg-card-dark-02/90 backdrop-blur rounded-full flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="absolute bottom-6 left-8">
          <span class="bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
            {{ result.star }} ⭐
          </span>
        </div>
      </div>

      <div class="p-10 flex flex-col items-start gap-4">
        <h2 class="text-4xl font-black text-slate-900 dark:text-white leading-tight">{{ result.name }}</h2>
        
        <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-card-dark-02/50 px-4 py-2 rounded-xl text-sm transition-colors">
          <span class="material-symbols-outlined text-secondary">location_on</span>
          {{ result.place || 'ร้านอาหารใกล้คุณ' }}
        </div>
        
        <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mt-2">
          "{{ result.detail }}"
        </p>

        <div class="flex gap-4 w-full mt-6">
          <button @click="emit('order')" class="flex-1 bg-secondary text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
            <span class="material-symbols-outlined">shopping_cart</span>
            สั่งเลยวันนี้
          </button>
          <button @click="emit('roll')" class="px-6 bg-slate-100 dark:bg-card-dark-02 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold transition-all flex items-center justify-center">
            <span class="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes popIn {
  0% { opacity: 0; transform: scale(0.9) translateY(20px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

.animate-popIn {
  animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
