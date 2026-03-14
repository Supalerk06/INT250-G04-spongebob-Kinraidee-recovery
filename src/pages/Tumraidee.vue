<script setup>
import { ref, computed } from "vue"

import recipes from "@/data/recipes";
import fridgeItems from "@/data/fridgeItems";

import PerfectMatch from "@/components/PerfectMatch.vue";
import RecipePopup from "@/components/RecipePopup.vue";
import AlmostMatch from "@/components/AlmostMatch.vue";
import MyRecipe from "@/components/MyRecipe.vue";
import MyFridge from "@/components/MyFridge.vue";

const selectedCategory = ref('All');
const categories = ['All', 'Thai', 'Western', 'Chinese', 'Mexican', 'Halal', 'Vegetarian', 'Vegan'];
const setCategory = (category) => {
    selectedCategory.value = category;
};



const availableRecipes = computed(() => {
    return recipes.filter(recipe => {
        // กรองตามหมวดหมู่ก่อน
        const matchCategory = selectedCategory.value === 'All' || recipe.categories.includes(selectedCategory.value);
        if (!matchCategory) return false;

        // แล้วค่อยเช็คเรื่องวัตถุดิบในตู้เย็น
        return recipe.ingredients.every(ingredient => {
            const itemInFridge = fridgeItems.find(
                item => item.name.toLowerCase() === ingredient.name.toLowerCase()
            );
            return itemInFridge && itemInFridge.quantity >= ingredient.quantity;
        });
    });
});

// 3. แก้ไข almostReadyRecipes ให้กรองตามหมวดหมู่ด้วย
const almostReadyRecipes = computed(() => {
    if (!recipes || !fridgeItems) return [];

    return recipes
        .filter(recipe => selectedCategory.value === 'All' || recipe.categories.includes(selectedCategory.value)) // กรองหมวดหมู่
        .map(recipe => {
            const missingIngredients = recipe.ingredients.filter(ing => {
                const itemInFridge = fridgeItems.find(
                    item => item.name.toLowerCase() === ing.name.toLowerCase()
                );
                return !itemInFridge || itemInFridge.quantity < ing.quantity;
            });

            return {
                ...recipe,
                missingCount: missingIngredients.length,
                missingList: missingIngredients
            };
        })
        .filter(recipe => recipe.missingCount === 1 || recipe.missingCount === 2)
        .sort((a, b) => a.missingCount - b.missingCount);
});


</script>

<template>
    <div
        class="bg-[radial-gradient(circle_at_90%_0%,rgba(234,179,8,0.2),transparent_40%),radial-gradient(circle_at_0%_100%,rgba(220,38,38,0.25),transparent_40%),linear-gradient(135deg,#7f1d1d,#450a0a,#000000)] font-display text-text-main min-h-screen flex flex-col overflow-x-hidden ">
        <div class="flex-1 max-w-[1400px] w-full mx-auto p-6 md:p-8 lg:p-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
                <aside class="lg:col-span-3">
                    <MyFridge></MyFridge>
                </aside>

                <!-- หน้าหลัก -->
                <!-- <RecipePopup ></RecipePopup> -->
                <main class="lg:col-span-9 flex flex-col gap-8 ">

                    <div class="gap-5 flex flex-col ">
                        <div>
                            <h2 class="mb-2 text-4xl text-white md:text-5xl font-black">
                                What to Cook?
                            </h2>
                            <!-- จำนวนเมนู -->
                            <p class="text-lg text-text-muted text-white flex gap-2">
                                Generating ideas from
                                <strong class="text-primary">
                                    {{ fridgeItems.length }} items
                                </strong>
                                in your fridge
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-2 items-center">
                            <button v-for="cat in categories" :key="cat" @click="setCategory(cat)" :class="[
                                'h-fit px-4 py-2 text-sm font-bold rounded-full shadow-md transition-all flex gap-1 items-center',
                                selectedCategory === cat
                                    ? 'bg-primary text-white scale-105 shadow-primary/40' // สไตล์เมื่อถูกเลือก
                                    : 'bg-white text-secondary/90 hover:-translate-y-0.5 shadow-secondary/40' // สไตล์ปกติ
                            ]">
                                <span class="material-symbols-outlined text-[18px]">
                                    {{ selectedCategory === cat ? 'check_circle' : 'award_meal' }}
                                </span>
                                {{ cat }}
                            </button>
                        </div>
                    </div>

                    <!-- Perfect mactch -->
                    <p class="flex gap-2  text-xl font-bold  text-white"><span
                            class="material-symbols-outlined text-primary fill-current">star</span> Perfect Match (100%)
                    </p>
                    <!-- ของด้านล่าง -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <PerfectMatch v-for="Perfect in availableRecipes" :id="Perfect.id" :name="Perfect.name"
                            :short_description="Perfect.short_description" :difficulty="Perfect.difficulty"
                            :image="Perfect.image" :video="Perfect.video" :ingredients="Perfect.ingredients" :steps="Perfect.steps"></PerfectMatch>
                    </div>


                    <!-- Almostนะ -->
                    <p class="flex gap-2  text-xl font-bold  text-white"><span
                            class="material-symbols-outlined text-orange-400">shopping_basket</span>Almost There
                        (Missing 1-2 items)</p>
                    <!-- ข้างล่าง -->
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
                        <AlmostMatch v-for="Almost in almostReadyRecipes" :id="Almost.id" :name="Almost.name"
                            :image="Almost.image" :missList="Almost.missingList" :missingCount="Almost.missingCount">
                        </AlmostMatch>
                    </div>


                    <!-- ของฉัน -->
                    <div>
                        <p class="flex gap-2  text-xl font-bold  text-white"><span
                                class="material-symbols-outlined text-green-400">bookmark</span>My Food Recipes (Your
                            own recipes)</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <MyRecipe></MyRecipe>
                    </div>
                </main>
            </div>
        </div>

    </div>
</template>

<style scoped></style>