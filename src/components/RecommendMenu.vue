<script setup>
import { computed , ref} from "vue";
import { recipes } from "../data/recipes.js"



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

const menu = ref(availableRecipes.value[0])

</script>

<template>
  <div v-if="availableRecipes.length" class="bg-white rounded-3xl flex flex-col pb-4 shadow-xl border border-gray-100 gap-3 overflow-hidden relative group">
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
          <p class="text-slate-900 font-black text-sm">ทำอาหารเลย!</p>
          <p class="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">ระดับ: {{ menu.difficulty }}</p>
        </div>
        <a class="cursor-pointer hover:scale-110 transition-all duration-300 flex justify-center items-center rounded-xl size-10 bg-secondary text-white shadow-lg shadow-secondary/20"
           href="/tumraidee"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </div>
  </div>
</template>

<style scoped>
</style>    



