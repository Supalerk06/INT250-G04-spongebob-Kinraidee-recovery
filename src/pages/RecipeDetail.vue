<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { recipes } from '@/data/recipes';

const route = useRoute();
const router = useRouter();

const recipeId = parseInt(route.params.id);

const recipe = computed(() => {
  return recipes.value.find(r => r.id === recipeId);
});

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="bg-slate-50 dark:bg-background-dark min-h-screen transition-colors duration-300">
    <div v-if="recipe" class="max-w-[1000px] mx-auto p-4 md:p-8">
      <button @click="goBack" class="flex items-center gap-2 text-slate-500 hover:text-secondary dark:text-slate-400 dark:hover:text-secondary mb-6 font-bold transition-colors">
        <span class="material-symbols-outlined">arrow_back</span>
        กลับ
      </button>

      <div class="bg-white dark:bg-card-dark rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-card-dark-02">
        <div class="h-[300px] md:h-[400px] relative w-full">
          <img :src="recipe.image" :alt="recipe.name" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <h1 class="absolute bottom-6 left-6 right-6 text-4xl md:text-5xl font-black text-white drop-shadow-lg">
            {{ recipe.name }}
          </h1>
        </div>

        <div class="p-6 md:p-10">
          <p class="text-lg text-slate-600 dark:text-slate-300 mb-8">{{ recipe.short_description }}</p>

          <div class="flex flex-wrap gap-3 mb-8">
            <span class="px-4 py-2 bg-secondary/10 text-secondary font-bold rounded-full text-sm">
              ความยาก: {{ recipe.difficulty }}
            </span>
            <span v-for="cat in recipe.categories" :key="cat" class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-full text-sm">
              {{ cat }}
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">kitchen</span>
                ส่วนผสม
              </h2>
              <ul class="space-y-3">
                <li v-for="(item, index) in recipe.ingredients" :key="index" class="flex justify-between items-center bg-slate-50 dark:bg-card-dark-02 p-3 rounded-xl">
                  <span class="font-bold text-slate-700 dark:text-slate-300">{{ item.name }}</span>
                  <span class="text-secondary font-black">{{ item.quantity }} {{ item.unit }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">menu_book</span>
                ขั้นตอนการทำ
              </h2>
              <div class="space-y-4">
                <div v-for="(step, index) in recipe.steps" :key="index" class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-black">
                    {{ index + 1 }}
                  </div>
                  <p class="text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">{{ step }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-4">ไม่พบสูตรอาหารนี้</h2>
      <button @click="goBack" class="px-6 py-3 bg-secondary text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
        กลับ
      </button>
    </div>
  </div>
</template>
