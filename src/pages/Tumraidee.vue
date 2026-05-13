<script setup>
import { ref, computed } from "vue";
import { recipes } from "@/data/recipes";
import { userRecipes, db } from "@/data/userRecipes";

import PerfectMatch from "@/components/tumraidee/PerfectMatch.vue";
import AlmostMatch from "@/components/tumraidee/AlmostMatch.vue";
import MyRecipe from "@/components/tumraidee/MyRecipe.vue";
import MyFridge from "@/components/tumraidee/MyFridge.vue";
import FormPopUp from "@/components/tumraidee/FormPopup.vue";

import { fridgeItems } from "@/data/fridgeItems";

const showForm = ref(false);

const selectedCategories = ref(["All"]);
const categories = [
  "All",
  "Thai",
  "Western",
  "Chinese",
  "Mexican",
  "Halal",
  "Vegetarian",
  "Vegan",
];

const categoryMapping = {
  All: "ทั้งหมด",
  Thai: "ไทย",         
  Western: "ตะวันตก",   
  Chinese: "จีน",       
  Mexican: "เม็กซิกัน",
  Halal: "ฮาลาล",
  Vegetarian: "มังสวิรัติ",
  Vegan: "วีแกน",
};

const toggleCategory = (category) => {
  if (category === "All") {
    selectedCategories.value = ["All"];
  } else {
    selectedCategories.value = selectedCategories.value.filter(c => c !== "All");
    
    if (selectedCategories.value.includes(category)) {
      selectedCategories.value = selectedCategories.value.filter(c => c !== category);
      if (selectedCategories.value.length === 0) {
        selectedCategories.value = ["All"];
      }
    } else {
      selectedCategories.value.push(category);
    }
  }
};

const availableRecipes = computed(() => {
  return recipes.value.filter((recipe) => {
    const matchCategory =
      selectedCategories.value.includes("All") ||
      recipe.categories.some(cat => 
        selectedCategories.value.some(selectedEn => categoryMapping[selectedEn] === cat)
      );

    if (!matchCategory) return false;

    return recipe.ingredients.every((ingredient) => {
      const itemInFridge = fridgeItems.value.find(
        (item) => item.name.toLowerCase() === ingredient.name.toLowerCase(),
      );
      return itemInFridge && itemInFridge.quantity >= ingredient.quantity;
    });
  });
});

const almostReadyRecipes = computed(() => {
  if (!recipes.value || !fridgeItems.value) return [];

  return recipes.value
    .filter((recipe) =>
      selectedCategories.value.includes("All") ||
      recipe.categories.some(cat => 
        selectedCategories.value.some(selectedEn => categoryMapping[selectedEn] === cat)
      )
    )
    .map((recipe) => {
      const missingIngredients = recipe.ingredients.filter((ing) => {
        const itemInFridge = fridgeItems.value.find(
          (item) => item.name.toLowerCase() === ing.name.toLowerCase(),
        );
        return !itemInFridge || itemInFridge.quantity < ing.quantity;
      });

      return {
        ...recipe,
        missingCount: missingIngredients.length,
        missingList: missingIngredients,
      };
    })
    .filter((recipe) => recipe.missingCount === 1 || recipe.missingCount === 2)
    .sort((a, b) => a.missingCount - b.missingCount);
});

async function deleteRecipe(id) {
  db.recipes.delete(id);
}
</script>

<template>
  <div class="bg-slate-50 dark:bg-background-dark font-sans text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-300">
    <div class="absolute inset-0 bg-slate-50/30 dark:bg-background-dark/30 pointer-events-none"></div>
    <div class="flex-1 max-w-[1400px] w-full mx-auto p-6 md:p-8 lg:p-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside class="lg:col-span-3">
          <MyFridge :fridgeItems="fridgeItems"></MyFridge>
        </aside>
        <main class="lg:col-span-9 flex flex-col gap-8">
          <div class="gap-5 flex flex-col">
            <div>
              <h2 class="mb-2 text-4xl text-slate-900 dark:text-white md:text-5xl font-black">
                ทำอะไรกินดี?
              </h2>
              <p class="text-lg text-slate-900 dark:text-slate-300 font-bold flex gap-2">
                กำลังสร้างไอเดียจากวัตถุดิบ
                <strong class="text-secondary font-black">
                  {{ fridgeItems.length }} รายการ
                </strong>
                ในตู้เย็นของคุณ
              </p>
            </div>
            <div class="flex flex-wrap gap-2 items-center">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="toggleCategory(cat)"
                :class="[
                  'h-fit px-4 py-2 text-sm font-bold rounded-full shadow-md transition-all flex gap-1 items-center',
                  selectedCategories.includes(cat)
                    ? 'bg-secondary text-white scale-105 shadow-secondary/40' 
                    : 'bg-white dark:bg-card-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-gray-100 dark:border-card-dark-02', 
                ]"
              >
                <span class="material-symbols-outlined text-[18px]">
                  {{ selectedCategories.includes(cat) ? "check_circle" : "search" }}
                </span>
                {{ categoryMapping[cat] || cat }}
              </button>
            </div>
          </div>

          <p class="flex gap-2 text-xl font-black text-slate-800 dark:text-white">
            <span class="material-symbols-outlined text-secondary fill-current">star</span>
            พร้อมปรุงทันที (100%)
          </p>
          <div v-if="availableRecipes.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <PerfectMatch
              v-for="Perfect in availableRecipes"
              :fridgeItems="fridgeItems"
              :id="Perfect.id"
              :name="Perfect.name"
              :short_description="Perfect.short_description"
              :difficulty="Perfect.difficulty"
              :image="Perfect.image"
              :video="Perfect.video"
              :ingredients="Perfect.ingredients"
              :steps="Perfect.steps"
              :categories="Perfect.categories"
              :categoryMapping="categoryMapping"
            ></PerfectMatch>
          </div>
          <div v-else class="flex flex-col items-center justify-center p-8 bg-white dark:bg-card-dark rounded-3xl border border-dashed border-gray-200 dark:border-card-dark-02">
             <p class="text-slate-500 font-bold">ไม่พบสูตรอาหารที่พร้อมปรุงด้วยวัตถุดิบที่คุณมี</p>
          </div>

          <p class="flex gap-2 text-xl font-black text-slate-800 dark:text-white">
            <span class="material-symbols-outlined text-orange-500">shopping_basket</span>เกือบพร้อมแล้ว (ขาด 1-2 อย่าง)
          </p>
          <div v-if="almostReadyRecipes.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <AlmostMatch
              v-for="Almost in almostReadyRecipes"
              :id="Almost.id"
              :name="Almost.name"
              :image="Almost.image"
              :missList="Almost.missingList"
              :missingCount="Almost.missingCount"
              :categories="Almost.categories"
              :categoryMapping="categoryMapping"
            >
            </AlmostMatch>
          </div>
          <div v-else class="flex flex-col items-center justify-center p-8 bg-white dark:bg-card-dark rounded-3xl border border-dashed border-gray-200 dark:border-card-dark-02">
             <p class="text-slate-500 font-bold">ไม่พบสูตรอาหารที่ใกล้เคียง</p>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-card-dark p-6 rounded-3xl border border-gray-100 dark:border-card-dark-02 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 gap-4 transition-colors">
            <p class="flex gap-2 text-xl font-black text-slate-800 dark:text-white">
              <span class="material-symbols-outlined text-orange-600">bookmark</span>สูตรอาหารของฉัน
            </p>
            <button
              @click="showForm = true"
              class="px-6 py-3 flex items-center font-bold rounded-xl text-white gap-2 bg-secondary hover:bg-orange-600 transition-all shadow-lg shadow-secondary/20"
            >
              เพิ่มสูตรอาหารของคุณ
              <span class="material-symbols-outlined"> add </span>
            </button>
            <FormPopUp v-if="showForm" @close="showForm = false" />
          </div>

          <div v-if="userRecipes.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <MyRecipe
              v-for="(myRecipes, index) in userRecipes"
              :fridgeItems="fridgeItems"
              :id="myRecipes.id"
              :name="myRecipes.name"
              :short_description="myRecipes.short_description"
              :image="myRecipes.image"
              :ingredients="myRecipes.ingredients"
              :steps="myRecipes.steps"
              @delete="deleteRecipe"
            />
          </div>
          <div v-else class="flex flex-col items-center justify-center p-8 bg-white dark:bg-card-dark rounded-3xl border border-dashed border-gray-200 dark:border-card-dark-02">
             <p class="text-slate-500 font-bold">คุณยังไม่มีสูตรอาหารของตัวเอง ลองเพิ่มดูสิ!</p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
