<script setup>
import RecipePopup from './RecipePopup.vue';
import { ref, toRaw , watch } from 'vue'


const Props = defineProps(['fridgeItems','id', 'name', 'short_description', 'difficulty', 'image', 'video', "ingredients", "steps"])

const emit = defineEmits(['cook']);

const showModal = ref(false)


function openRecipe() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}
const showConfirm = ref(false)

function handleCook() {
    closeModal()       
    showConfirm.value = true
}

watch(
  Props.fridgeItems,
  (newVal) => {
    localStorage.setItem("fridgeItems", JSON.stringify(newVal))
  },
  { deep: true }
)

function confirmCook() {
    Props.ingredients.forEach(recipeItem => {
        const itemIndex = Props.fridgeItems.findIndex(
            item => item.name.toLowerCase() === recipeItem.name.toLowerCase()
        )

        if (itemIndex !== -1) {
            Props.fridgeItems[itemIndex].quantity -= recipeItem.quantity

            if (Props.fridgeItems[itemIndex].quantity <= 0) {
                Props.fridgeItems.splice(itemIndex, 1)
            }
        } else {
            console.warn(`ไม่พบ ${recipeItem.name}`)
        }
    })

    emit('cook')
    showConfirm.value = false
}

function cancelCook() {
    showConfirm.value = false
}

const isCooking = ref(false)


</script>

<template>
    <!-- อันที่ 1 -->
    <article @click="openRecipe"
        class="border border-secondary/20 group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 flex flex-col sm:flex-row h-auto sm:h-72">
        <div class="w-full sm:w-2/5 h-48 sm:h-full relative overflow-hidden">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-alt="Plate of Pad Kra Pao with fried egg and basil" :style="{ backgroundImage: `url(${image})` }">
            </div>
        </div>
        <div class="flex-1 p-6 flex flex-col justify-between">
            <div>
                <div class="flex flex-col justify-center md:justify-between lg:justify-between items-start mb-2">
                    <h4
                        class="text-2xl font-bold text-slate-900 group-hover:text-secondary transition-colors">
                        {{ name }}</h4>
                    <div
                        class="flex items-center gap-1 text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                        <span class="material-symbols-outlined text-[14px]">check</span>
                        คุณมีวัตถุดิบครบถ้วนแล้ว
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
                    class="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-secondary/20 transition-all active:scale-95 flex items-center gap-2">
                    ทำอาหารเลย
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </div>
    </article>

    <RecipePopup v-if="showModal" :name="name" :image="image" :video="video" :ingredients="ingredients" :steps="steps"
        @close="closeModal" @cook="handleCook" ></RecipePopup>

    <div v-if="showConfirm" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl w-[90%] max-w-md shadow-xl">
            <h3 class="text-lg font-bold mb-4 text-center">
                คุณแน่ใจหรือไม่ว่าคุณทำอาหารเสร็จแล้ว?
            </h3>
            <div class="flex justify-center gap-4">
                <button @click="cancelCook" class="font-bold px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-700">
                    ยกเลิก
                </button>

                <button @click="confirmCook" class="font-bold px-4 py-2 rounded-lg bg-secondary text-white hover:bg-orange-600 transition-all shadow-lg shadow-secondary/20">
                    ใช่ เสร็จแล้ว
                </button>
            </div>
        </div>
    </div>

</template>