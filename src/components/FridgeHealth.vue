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
<div class="bg-green-400 rounded-3xl flex flex-col p-5 shadow gap-4 text-white">
            <h3 class="font-bold text-xl">Fridge Health</h3>
            <div class="flex justify-between">
                <div>
                    <p class="text-2xl font-bold">{{ freshnessScore }}%</p>
                     <h2>Freshness Score</h2>
                </div>
                <div>
                    <p class="text-2xl font-bold">{{ totalItems }}</p>
                    <h2>Total Items</h2>
                </div>
            </div>
            <div class="bg-green-500  w-full p-1 rounded-full">
                <div class="p-1 rounded-full bg-white" :style="{ width: freshnessScore + '%' }"></div>
            </div>
        </div>
</template>



<style scoped>
</style>

<style scoped>
</style>