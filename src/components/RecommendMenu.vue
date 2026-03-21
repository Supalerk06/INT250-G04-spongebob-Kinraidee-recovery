<script setup>
import { computed , ref} from "vue";
import recipes from "../data/recipes.js"


const props = defineProps({
  fridgeItems: Array,
});

const selectedCategory = ref("All");

const availableRecipes = computed(() => {
  return recipes.filter((recipe) => {
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
  <div v-if="availableRecipes.length" class="bg-white rounded-3xl flex flex-col pb-3 shadow gap-3 overflow-hidden relative">
    <img class="w-full max-h-[275px] object-cover bg-black text-white lg:max-h-[140px]" :src="menu.image" :alt="menu.name + ' image'">
    <h3 class="font-bold text-white text-sm py-1 px-2 rounded bg-primary absolute left-3 bottom-[100px]">Use your {{ menu.ingredients[0].quantity }} {{ menu.ingredients[0].name }}<span v-if="menu.ingredients[0].quantity > 1">s</span></h3>
    <h3 class="font-bold text-white text-xl absolute left-4 bottom-[68px]">{{ menu.name}}</h3>
    <div class="px-4 flex justify-between items-center">
        <p class="font-bold">Cook now ! - {{ menu.difficulty }}</p>
        <a class="cursor-pointer hover:-translate-y-1 transition-all duration-200 ease-out flex justify-center items-center rounded-full p-2 border-2 border-neutral-200"
        href="/tumraidee"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </div>
  </div>
</template>

<style scoped>
</style>    



