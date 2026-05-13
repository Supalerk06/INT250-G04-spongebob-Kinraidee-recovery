<script setup>
import { computed } from "vue";

const props = defineProps({
  fridgeItems: Array,
  getIcon: {
    type: Function,
    required: true
  },
  calculateExpiredDate: {
    type: Function,
    required: true,
  },
  getExpiryMsg: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(["delete-item"]);

const aboutToExpire = computed(() => {
  if (!props.fridgeItems) return [];

  return props.fridgeItems.filter(item => {
    const diffInDays = props.calculateExpiredDate(item.expiredDate);
    return diffInDays >= 0 && diffInDays <= 2; 
  });
});

function getExpiryClassText(expiredDate) {
  const diffInDays = props.calculateExpiredDate(expiredDate);
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

  <div v-if="aboutToExpire.length > 0" class="bg-white dark:bg-card-dark rounded-3xl flex flex-col p-5 border-2 border-secondary dark:border-secondary/50 shadow-xl shadow-secondary/20 dark:shadow-slate-900/50 gap-2 hover:-translate-y-1 transition-all">
    <h3 class="font-bold text-xl flex items-center gap-2 dark:text-white"> 
      <span class="size-6 flex items-center justify-center rounded-full text-white text-sm bg-secondary font-black">!</span> 
      ควรใช้ให้หมด!
    </h3>
    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">วัตถุดิบเหล่านี้กำลังจะหมดอายุภายใน 48 ชั่วโมง</p>
    
    <div class="flex flex-col gap-1">

    <div v-for="item in aboutToExpire" :key="item.id" class="flex gap-2 py-1 px-3 justify-between items-center w-full rounded-xl bg-neutral-100 dark:bg-card-dark-02 mt-2 transition-colors">
      <div class="flex gap-1">
        <img :src="getIcon(item.name)" class="w-full p-3 max-w-[70px]" :alt="item.name">
        <div class="flex flex-col justify-center">
          <h1 class="font-bold dark:text-white">{{ item.name }}</h1>
          <p class="text-sm text-neutral-500 dark:text-slate-400 font-medium" :class="getExpiryClassText(item.expiredDate)" >{{ getExpiryMsg(item.expiredDate) }}</p>
        </div>
      </div>
        <button 
          @click="emit('delete-item', item.id)"
          class="p-2 text-neutral-400 dark:text-slate-500 hover:text-orange-500 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
    </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>