<script setup>
import { computed } from "vue";

const props = defineProps({
  fridgeItems: Array
})

const totalItems = computed(() => {
  return props.fridgeItems ? props.fridgeItems.length : 0;
});


const freshnessScore = computed(() => {
  if (totalItems.value === 0) return 0; 

  const today = new Date();
  today.setHours(0, 0, 0, 0); 


  const freshItems = props.fridgeItems.filter(item => {
    const expDate = new Date(item.expiredDate);
    expDate.setHours(0, 0, 0, 0);
    return expDate >= today;
  });

  return Math.round((freshItems.length / totalItems.value) * 100);
});


</script>

<template>
<div class="bg-secondary rounded-3xl flex flex-col p-6 shadow-lg shadow-secondary/20 gap-4 hover:-translate-y-1 transition-all cursor-default text-white">
            <h3 class="font-bold text-xl">สุขภาพตู้เย็น</h3>
            <div class="flex justify-between">
                <div>
                    <p class="text-3xl font-black">{{ freshnessScore }}%</p>
                     <h2 class="text-sm opacity-90">คะแนนความสดใหม่</h2>
                </div>
                <div>
                    <p class="text-3xl font-black">{{ totalItems }}</p>
                    <h2 class="text-sm opacity-90">วัตถุดิบทั้งหมด</h2>
                </div>
            </div>
            <div class="bg-white/20 w-full p-1 rounded-full">
                <div class="p-1 rounded-full bg-white transition-all duration-1000" :style="{ width: freshnessScore + '%' }"></div>
            </div>
        </div>
</template>



<style scoped>
</style>

<style scoped>
</style>