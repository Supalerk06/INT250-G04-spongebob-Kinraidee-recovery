<script setup>
import { ref, computed, onMounted, toRaw } from "vue";
import { useObservable } from "@vueuse/rxjs";
import { liveQuery } from "dexie";

import { recipes } from "@/data/recipes";
// import {fridgeItems} from "@/data/fridgeItems";
import { db } from "@/data/userRecipes";

let fridgeItems = ref(JSON.parse(localStorage.getItem("fridgeItems")) || []);

import PerfectMatch from "@/components/tumraidee/PerfectMatch.vue";
import AlmostMatch from "@/components/tumraidee/AlmostMatch.vue";
import MyRecipe from "@/components/tumraidee/MyRecipe.vue";
import MyFridge from "@/components/tumraidee/MyFridge.vue";
import FormPopUp from "@/components/tumraidee/FormPopup.vue";

const showForm = ref(false);

const openForm = () => {
  showForm.value = true;
};

const selectedCategory = ref("All");
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
const setCategory = (category) => {
  selectedCategory.value = category;
};

const availableRecipes = computed(() => {
  return recipes.value.filter((recipe) => {
    // กรองตามหมวดหมู่ก่อน
    const matchCategory =
      selectedCategory.value === "All" ||
      recipe.categories.includes(selectedCategory.value);
    if (!matchCategory) return false;

    // แล้วค่อยเช็คเรื่องวัตถุดิบในตู้เย็น
    return recipe.ingredients.every((ingredient) => {
      const itemInFridge = fridgeItems.value.find(
        (item) => item.name.toLowerCase() === ingredient.name.toLowerCase(),
      );
      return itemInFridge && itemInFridge.quantity >= ingredient.quantity;
    });
  });
});

// 3. แก้ไข almostReadyRecipes ให้กรองตามหมวดหมู่ด้วย
const almostReadyRecipes = computed(() => {
  if (!recipes.value || !fridgeItems.value) return [];

  return recipes.value
    .filter(
      (recipe) =>
        selectedCategory.value === "All" ||
        recipe.categories.includes(selectedCategory.value),
    ) // กรองหมวดหมู่
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

const userRecipes = useObservable(liveQuery(() => db.recipes.toArray()));

async function deleteRecipe(id) {
  // ลบ DB
  await db.recipes.delete(id);

  // ลบ UI
  const index = userRecipes.value.findIndex((r) => r.id === id);
  if (index !== -1) userRecipes.value.splice(index, 1);
}
</script>

<template>
  <div
    class="bg-white font-display text-slate-900 min-h-screen flex flex-col overflow-x-hidden relative"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(238,27,36,0.05),transparent_40%),radial-gradient(circle_at_0%_100%,rgba(238,27,36,0.05),transparent_40%)] pointer-events-none"
    ></div>
    <div class="flex-1 max-w-[1400px] w-full mx-auto p-6 md:p-8 lg:p-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside class="lg:col-span-3">
          <MyFridge :fridgeItems="fridgeItems"></MyFridge>
        </aside>

        <!-- หน้าหลัก -->
        <!-- <RecipePopup ></RecipePopup> -->
        <main class="lg:col-span-9 flex flex-col gap-8">
          <div class="gap-5 flex flex-col">
            <div>
              <h2 class="mb-2 text-4xl text-slate-900 md:text-5xl font-black">
                What to Cook?
              </h2>
              <!-- จำนวนเมนู -->
              <p class="text-lg text-slate-500 flex gap-2">
                Generating ideas from
                <strong class="text-secondary font-black">
                  {{ fridgeItems.length }} items
                </strong>
                in your fridge
              </p>
            </div>
            <div class="flex flex-wrap gap-2 items-center">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="setCategory(cat)"
                :class="[
                  'h-fit px-4 py-2 text-sm font-bold rounded-full shadow-md transition-all flex gap-1 items-center',
                  selectedCategory === cat
                    ? 'bg-secondary text-white scale-105 shadow-secondary/40' // สไตล์เมื่อถูกเลือก
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-gray-100', // สไตล์ปกติ
                ]"
              >
                <span class="material-symbols-outlined text-[18px]">
                  {{ selectedCategory === cat ? "check_circle" : "Search" }}
                </span>
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- Perfect mactch -->
          <p class="flex gap-2 text-xl font-bold text-slate-800">
            <span class="material-symbols-outlined text-secondary fill-current"
              >star</span
            >
            Perfect Match (100%)
          </p>
          <!-- ของด้านล่าง -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
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
            ></PerfectMatch>
          </div>

          <!-- Almostนะ -->
          <p class="flex gap-2 text-xl font-bold text-slate-800">
            <span class="material-symbols-outlined text-orange-500"
              >shopping_basket</span
            >Almost There (Missing 1-2 items)
          </p>
          <!-- ข้างล่าง -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <AlmostMatch
              v-for="Almost in almostReadyRecipes"
              :id="Almost.id"
              :name="Almost.name"
              :image="Almost.image"
              :missList="Almost.missingList"
              :missingCount="Almost.missingCount"
            >
            </AlmostMatch>
          </div>

          <!-- ของฉัน -->
          <div
            class="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border border-gray-100"
          >
            <p class="flex gap-2 text-xl font-bold text-slate-800">
              <span class="material-symbols-outlined text-red-600"
                >bookmark</span
              >My Food Recipes
            </p>
            <button
              @click="showForm = true"
              class="px-6 py-3 flex items-center font-bold rounded-xl text-white gap-2 bg-secondary hover:bg-red-600 transition-all shadow-lg shadow-secondary/20"
            >
              Add your own Recipes
              <span class="material-symbols-outlined"> add </span>
            </button>
            <FormPopUp v-if="showForm" @close="showForm = false" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
