<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(["close", "cook"])
defineProps(['name', 'image', 'ingredients', 'steps', 'video'])

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
  <div class="bg-card-dark/60 backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50 p-0 md:p-6 transition-all" @click.self="emit('close')">
    
    <div class="bg-white dark:bg-card-dark-02 w-full max-w-5xl max-h-screen md:max-h-[92vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-transparent dark:border-card-dark-02 transition-colors">
      
      <button 
        @click="emit('close')" 
        class="absolute top-4 right-4 z-50 bg-white/90 dark:bg-card-dark-02/90 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all active:scale-90 text-slate-600 dark:text-slate-300"
      >
        <span class="material-symbols-outlined block">close</span>
      </button>

      <div class="overflow-y-auto custom-scrollbar flex-1">
        
        <div class="relative h-[250px] md:h-[350px] overflow-hidden">
          <img :src="image" :alt="name" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
            <div class="p-6 md:p-8 w-full">
              <span class="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full mb-3 uppercase tracking-widest">สูตรอาหาร</span>
              <h2 class="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-md">
                {{ name }}
              </h2>
            </div>
          </div>
        </div>

        
        <div class="p-6 md:p-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            
            <div class="lg:col-span-5">
              <div class="sticky top-0">
                <h3 class="font-bold text-xl mb-4 flex items-center gap-3 text-slate-800 dark:text-white">
                  <span class="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-xl">kitchen</span>
                  วัตถุดิบที่ต้องใช้
                </h3>
                
                <div class="bg-slate-50 dark:bg-card-dark/50 rounded-2xl p-4 border border-slate-100 dark:border-card-dark-02 transition-colors">
                  <ul class="space-y-3">
                    <li v-for="(ing, index) in ingredients" :key="index" 
                        class="group flex items-center justify-between p-2 rounded-xl hover:bg-white dark:hover:bg-secondary/20 hover:shadow-sm transition-all border-b border-slate-200/50 dark:border-slate-700 last:border-0">
                      <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors"></div>
                        <span class="text-slate-600 dark:text-white font-medium">{{ ing.name }}</span>
                      </div>
                      <span class="bg-white dark:bg-card-dark-02 px-3 py-1 rounded-lg text-sm font-bold text-slate-800 dark:text-white shadow-sm border border-slate-100 dark:border-card-dark-02">
                        {{ ing.quantity }} {{ ing.unit }}
                      </span>
                    </li>
                  </ul>
                </div>

                
                <div v-if="video" class="mt-6 hidden lg:block">
                  <h3 class="font-bold text-xl mb-4 text-slate-800 dark:text-white flex items-center gap-2">
                     <span class="material-symbols-outlined text-secondary">play_circle</span>
                     วิดีโอสอนทำอาหาร
                  </h3>
                  <div class="rounded-2xl overflow-hidden shadow-lg aspect-video border-2 border-slate-100 dark:border-card-dark-02">
                    <iframe class="w-full h-full" :src="video" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>

            
            <div class="lg:col-span-7">
              <h3 class="font-bold text-xl mb-4 flex items-center gap-3 text-slate-800 dark:text-white">
                <span class="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-xl">format_list_numbered</span>
                ขั้นตอนการทำ
              </h3>

              <div class="space-y-4">
                <div v-for="(step, index) in steps" :key="index" class="flex gap-4 group items-center">
                  <div class="flex-none w-8 h-8 rounded-full bg-white dark:bg-card-dark-02 border-2 border-secondary text-secondary flex items-center justify-center font-black shadow-sm group-hover:bg-secondary group-hover:text-white transition-all text-sm">
                    {{ index + 1 }}
                  </div>
                  <div class="bg-white dark:bg-card-dark-02 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:shadow-md transition-all flex-grow">
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-sm">
                      {{ step }}
                    </p>
                  </div>
                </div>
              </div>

              
              <div v-if="video" class="mt-6 lg:hidden">
                <h3 class="font-bold text-xl mb-4 text-slate-800 dark:text-white flex items-center gap-2">
                   <span class="material-symbols-outlined text-secondary">play_circle</span>
                   วิดีโอสอนทำอาหาร
                </h3>
                <div class="rounded-2xl overflow-hidden shadow-lg aspect-video border-2 border-slate-100 dark:border-card-dark-02">
                  <iframe class="w-full h-full" :src="video" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div class="p-4 border-t border-slate-100 dark:border-card-dark-02 bg-white/80 dark:bg-card-dark/80 backdrop-blur-md flex flex-col md:flex-row justify-end gap-3 transition-colors">
        <button
          @click="emit('close')"
          class="order-2 md:order-1 px-6 py-2.5 rounded-xl font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 text-sm">
          กลับไปหน้ารวมสูตร
        </button>
        <button
          @click="emit('cook')"
          class="order-1 md:order-2 bg-secondary text-white px-8 py-2.5 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/25 active:scale-95 flex items-center justify-center gap-2 text-sm">
          <span class="material-symbols-outlined text-sm">check_circle</span>
          ฉันทำอาหารเสร็จแล้ว!
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>