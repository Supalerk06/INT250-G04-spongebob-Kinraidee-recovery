<script setup>
import { computed , ref} from "vue";
import { recipes } from "../../data/recipes.js"



const props = defineProps({
  fridgeItems: Array,
});

const selectedCategory = ref("All");

const availableRecipes = computed(() => {
  return recipes.value.filter((recipe) => {
    const matchCategory =
      selectedCategory.value === "All" ||
      recipe.categories.includes(selectedCategory.value);
    if (!matchCategory) return false;
    return recipe.ingredients.every((ingredient) => {
      const itemInFridge = props.fridgeItems.find(
        (item) => item.name.toLowerCase() === ingredient.name.toLowerCase()
      );
      return itemInFridge && itemInFridge.quantity >= ingredient.quantity;
    });
  });
});

const menu = computed(() => availableRecipes.value[0]);

</script>

<template>
  <div v-if="availableRecipes.length" class="bg-white dark:bg-card-dark cursor-pointer rounded-3xl flex flex-col pb-4 shadow-xl border border-gray-100 dark:border-card-dark-02 gap-3 overflow-hidden relative group transition-colors">
    <div class="relative h-48 lg:h-36 overflow-hidden">
      <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" :src="menu.image" :alt="menu.name + ' image'">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <h3 class="font-bold text-white text-[10px] py-1 px-3 rounded-full bg-secondary absolute left-3 top-3 shadow-lg shadow-black/20 uppercase tracking-widest">
        ใช้ให้หมด
      </h3>
      
      <div class="absolute bottom-3 left-3 right-3">
        <h3 class="font-black text-white text-xl leading-tight drop-shadow-md">{{ menu.name }}</h3>
        <p class="text-white/80 text-[10px] font-bold mt-1">
          ต้องการ: {{ menu.ingredients[0].quantity }} {{ menu.ingredients[0].name }}
        </p>
      </div>
    </div>
    
    <div class="px-4 pt-2 flex justify-between items-center">
        <div>
          <p class="text-slate-900 dark:text-white font-black text-lg">ทำอาหารเลย!</p>
          <p class="text-slate-400 dark:text-slate-500 font-bold uppercase text-sm tracking-tighter">ระดับ: {{ menu.difficulty }}</p>
        </div>
        <router-link class="group/btn cursor-pointer hover:scale-105 transition-all duration-300 flex items-center gap-2 rounded-xl px-4 py-2.5 bg-secondary text-white shadow-lg shadow-secondary/20"
           :to="`/tumraidee?recipeId=${menu.id}`"
        >
            <span class="text-sm font-black uppercase">ดูวิธีทำ</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4 group-hover/btn:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </router-link>
    </div>
  </div>
</template>

<style scoped>
</style>    



