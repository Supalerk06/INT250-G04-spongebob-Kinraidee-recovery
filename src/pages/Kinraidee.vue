<template>
  <div class="relative w-full min-h-screen bg-slate-50 dark:bg-background-dark font-sans text-[#111111] select-none flex flex-col items-center justify-center transition-colors duration-300">
    <div v-show="!isWarping" class="relative z-10 w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center gap-8 lg:gap-12 px-8 py-12 md:py-0">
      <InfoPanel
        :filters="filters"
        :filteredCount="getFilteredFoods().length"
      />
      <MachinePanel
        :isRolling="isRolling"
        :canRoll="getFilteredFoods().length > 0"
        :getRandomFoodImage="getRandomFoodImage"
        @roll="rollFood"
      />
    </div>
    <ResultModal
      v-if="showResult && result"
      :result="result"
      @close="closeModal"
      @roll="rollFood"
      @order="goToRestaurant"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import foods from "@/data/foods";

import InfoPanel from "@/components/kinraidee/InfoPanel.vue";
import MachinePanel from "@/components/kinraidee/MachinePanel.vue";
import ResultModal from "@/components/kinraidee/ResultModal.vue";

const router = useRouter();
const goToRestaurant = () => {
  if (result.value) {
    router.push('/restaurants?menu=' + result.value.name);
  }
};

const filters = ref({
  halal: false,
  vegetarian: false,
  noMeat: false
});

const isRolling = ref(false);
const showResult = ref(false);
const result = ref(null);

function getFilteredFoods() {
  return foods.filter(f => {
    if (filters.value.halal && !f.halal) return false;
    if (filters.value.vegetarian && !f.vegetarian) return false;
    if (filters.value.noMeat && !f.noMeat) return false;
    return true;
  });
}

function getRandomFoodImage() {
  const pool = getFilteredFoods();
  if (pool.length === 0) return "";
  return pool[Math.floor(Math.random() * pool.length)].imageUrl;
}

function rollFood() {
  const pool = getFilteredFoods();
  if (pool.length === 0) {
    alert("ไม่มีเมนูที่ตรงกับตัวกรองของคุณ กรุณาปรับเปลี่ยนตัวเลือกใหม่!");
    return;
  }

  showResult.value = false;
  isRolling.value = true;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    result.value = pool[randomIndex];
    
    isRolling.value = false;
    showResult.value = true;
  }, 1500);
}

function closeModal() {
  showResult.value = false;
}
</script>

<style scoped>
</style>
