<script setup>
import { computed } from "vue";

const props = defineProps({
  fridgeItems: Array,
  getIcon: {
    type: Function,
    required: true
  }
})

const aboutToExpire = computed(() => {
  if (!props.fridgeItems) return [];

  const now = new Date().getTime();

  return props.fridgeItems.filter(item => {
    const expTime = new Date(item.expiredDate).getTime();
    const diffInHours = (expTime - now) / (1000 * 60 * 60);
    return diffInHours >= 0 && diffInHours <= 48;
  });
});


// คำนวนวันหมดอายุ
function calculateExpiredDate(expiredDate) {
  const currentDate = new Date();
  const targetDate = new Date(expiredDate);
  const diffInMs = targetDate - currentDate;
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}

// เปลี่ยนสี/ข้อความ

function getExpiryMsg(expiredDate) {
  const diffInDays = calculateExpiredDate(expiredDate);
  if (diffInDays > 1) return `${diffInDays} days left`;
  else if (diffInDays === 1) return "Exp. Tomorrow";
  else if (diffInDays === 0) return "Exp. Today";
  else return "Expired";
}

function getExpiryClassText(expiredDate) {
  const diffInDays = calculateExpiredDate(expiredDate);
  if (diffInDays < 0) {
    return "text-danger";
  } else if (diffInDays >= 0 && diffInDays <= 2) {
    return "text-warning"
  } else {
    return "text-success"
  }
}
</script>

<template>
<div>

  <div v-if="aboutToExpire.length > 0" class="bg-white rounded-2xl flex flex-col p-5 border-2 shadow shadow-warning border-warning gap-2">
    <h3 class="font-bold text-xl"> 
      <span class="px-3 py-1 rounded-full text-warning text-xl bg-orange-100 font-black">!</span> 
      Use it up!
    </h3>
    <p class="text-neutral-500">These items are expiring within 48 hours.</p>
    
    <div v-for="item in aboutToExpire" :key="item.id" class="flex gap-2 p-1 items-center w-full rounded-xl bg-neutral-100 mt-2">
      <img :src="getIcon(item.name)" class="w-full p-3 max-w-[70px]" :alt="item.name">
      <div class="flex flex-col justify-center">
        <h1 class="font-bold">{{ item.name }}</h1>
        <p class="text-sm text-neutral-500" :class="getExpiryClassText(item.expiredDate)" >{{ getExpiryMsg(item.expiredDate) }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>