<template>
  <div class="relative w-screen h-screen bg-slate-50 overflow-hidden font-sans text-[#111111] select-none flex flex-col items-center justify-center">
    
    <div class="absolute inset-0 bg-white z-0"></div>
    <div class="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-200/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

    <div v-show="!isWarping" class="relative z-10 w-full max-w-6xl h-full flex flex-col lg:flex-row items-center justify-center gap-12 px-8">
      <!-- Left Info Panel -->
      <InfoPanel
        :filters="filters"
        :filteredCount="getFilteredFoods().length"
      />

      <!-- Center Machine Panel -->
      <MachinePanel
        :isRolling="isRolling"
        :canRoll="getFilteredFoods().length > 0"
        :getRandomFoodImage="getRandomFoodImage"
        @roll="rollFood"
      />
    </div>

    <!-- Redesigned Result Modal -->
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
/* Main page specific styles if any */
</style>