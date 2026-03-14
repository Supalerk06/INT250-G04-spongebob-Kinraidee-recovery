<script setup>
import RecipePopup from './RecipePopup.vue';
import { ref } from 'vue'

defineProps(['id', 'name', 'short_description', 'difficulty', 'image', 'video', "ingredients", "steps"])

const emit = defineEmits(['cook']);
const showModal = ref(false)


function openRecipe() {
  showModal.value = true;

}

function closeModal() {
  showModal.value = false;
}

// เมื่อกด Cook ใน Popup ให้ส่งสัญญาณต่อไปยังหน้าหลัก (Parent)
function handleCook() {
  emit('cook'); // ส่งข้อมูลเมนูนี้กลับไปด้วย
  closeModal();
}

</script>

<template>
    <!-- อันที่ 1 -->
    <article @click="openRecipe"
        class="border-2 border-primary group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 md:col-span-2 lg:col-span-1 flex flex-col sm:flex-row h-auto sm:h-72">
        <div class="w-full sm:w-2/5 h-48 sm:h-full relative overflow-hidden">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-alt="Plate of Pad Kra Pao with fried egg and basil" :style="{ backgroundImage: `url(${image})` }">
            </div>
        </div>
        <div class="flex-1 p-6 flex flex-col justify-between">
            <div>
                <div class="flex flex-col justify-center md:justify-between lg:justify-between items-start mb-2">
                    <h4
                        class="text-2xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                        {{ name }}</h4>
                    <div
                        class="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-400/20 px-2 py-1 rounded-md">
                        <span class="material-symbols-outlined text-[14px]">check</span>
                        You have all items
                    </div>
                </div>
                <p class="text-text-muted text-sm mb-4 line-clamp-2">{{ short_description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span
                        class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-text-muted dark:text-gray-300">
                        <span class="material-symbols-outlined text-[14px]">bar_chart</span> {{ difficulty }}
                    </span>
                </div>
            </div>
            <div class="flex items-center justify-between mt-auto">
                <button @click.stop="openRecipe"
                    class="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
                    Cook Now
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </div>
    </article>
    <RecipePopup v-if="showModal" 
    :name = "name" 
    :image = "image"
    :video = "video"
    :ingredients = "ingredients"
    :steps = "steps"
    @close="closeModal" 
    @cook="handleCook"></RecipePopup>

</template>