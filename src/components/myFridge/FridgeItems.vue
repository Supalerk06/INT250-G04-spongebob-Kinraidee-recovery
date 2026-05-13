<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  fridgeItems: Array,
  getIcon: {
    type: Function,
    required: true,
  },
  calculateExpiredDate: {
    type: Function,
    required: true,
  },
  getExpiryMsg: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["delete-item", "edit-item"]);
const activeMenuId = ref(null);
const toggleMenu = (id) => {
  activeMenuId.value = activeMenuId.value === id ? null : id;
};
const closeMenu = () => {
  activeMenuId.value = null;
};
onMounted(() => window.addEventListener("click", closeMenu));
onUnmounted(() => window.removeEventListener("click", closeMenu));


function getExpiryClassText(expiredDate) {
  const diffInDays = props.calculateExpiredDate(expiredDate);
  if (diffInDays < 0) {
    return "text-danger bg-orange-100";
  } else if (diffInDays >= 0 && diffInDays <= 2) {
    return "text-warning bg-yellow-100 dark:bg-yellow-900/30";
  } else {
    return "text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900/30";
  }
}

function getExpiryClassDiv(expiredDate) {
  const diffInDays = props.calculateExpiredDate(expiredDate);
  if (diffInDays < 0) {
    return "border-4 border-orange-400 shadow-orange-100 dark:shadow-orange-900/20";
  } else if (diffInDays >= 0 && diffInDays <= 2) {
    return "border-4 border-yellow-200 dark:border-yellow-900/40 shadow-yellow-100 dark:shadow-yellow-900/20";
  } else {
    return "border-4 border-green-200 dark:border-green-900/40 shadow-green-50 dark:shadow-green-900/20";
  }
}
</script>

<template>
  <div>
    <div
      v-if="!fridgeItems || fridgeItems.length === 0"
      class="flex flex-col justify-center items-center w-full p-12 bg-white dark:bg-card-dark rounded-[2.5rem] border-2 border-dashed border-gray-100 dark:border-card-dark-02 transition-colors"
    >
      <h1 class="text-slate-400 dark:text-slate-500 font-bold">ไม่พบวัตถุดิบในตู้เย็นของคุณ</h1>
    </div>
    <div v-else class="grid grid-cols-[repeat(auto-fit,minmax(185px,1fr))] justify-center w-full py-3 gap-4
  md:grid-cols-3
    lg:grid-cols-4">

    <div v-for="item in props.fridgeItems"
      class="relative py-7 px-4 flex flex-col justify-center items-center rounded-3xl bg-white dark:bg-card-dark shadow w-full gap-4 
      hover:-translate-y-1 transition-all"
      :class="getExpiryClassDiv(item.expiredDate)"
    >
      <div class="absolute top-5 right-5">
        <svg
          @click.stop="toggleMenu(item.id)"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-neutral-500 dark:fill-slate-400 cursor-pointer hover:fill-black dark:hover:fill-white transition-colors"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path
            d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"
          />
        </svg>

        <div
          v-if="activeMenuId === item.id"
          class="absolute right-0 mt-2 w-32 bg-white dark:bg-card-dark-02 border dark:border-slate-700 rounded-lg shadow-lg z-10 overflow-hidden"
        >
          <button
            @click="emit('edit-item', item)"
            class="w-full text-left px-5 py-3 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition flex items-center gap-2 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            แก้ไข
          </button>
          <button
            @click="emit('delete-item', item.id)"
            class="w-full text-left px-5 py-3 text-sm hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-danger transition flex items-center gap-2 dark:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            ลบ
          </button>
        </div>
      </div>
      <img
        :src="getIcon(item.name)"
        class="w-full max-w-[75px] mx-auto p-1"
        :alt="item.name"
      />
      <div class="flex flex-col gap-3 w-full">
        <div>
          <h1 class="text-xl font-bold line-clamp-1 text-slate-900 dark:text-white">{{ item.name }}</h1>
          <p class="text-slate-500 dark:text-slate-400 font-medium text-sm">{{ item.quantity }} {{ item.unit }}</p>
        </div>
        <hr class="dark:border-card-dark-02" />
        <h1
          class="rounded px-3 py-2 w-fit text-sm font-bold"
          :class="getExpiryClassText(item.expiredDate)"
        >
          <span class="text-xs font-thin">●</span> {{ getExpiryMsg(item.expiredDate) }}
        </h1>
      </div>
    </div>

    </div>
  </div>
</template>


<style scoped>
</style>