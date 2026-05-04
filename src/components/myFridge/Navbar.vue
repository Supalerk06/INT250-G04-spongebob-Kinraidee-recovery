<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#f0f4f3] dark:border-[#2a302d] bg-white/80 dark:bg-card-dark/80 backdrop-blur-md"
  >
    <div class="flex justify-center py-3 px-4 md:px-10">
      <div class="flex w-full max-w-[1280px] items-center justify-between">
        <a href="/">
          <div class="flex items-center gap-4">
            <div class="size-8 text-secondary flex items-center justify-center rounded-lg bg-secondary/10">
              <span class="material-symbols-outlined text-2xl">restaurant_menu</span>
            </div>
            <h2 class="text-xl font-bold leading-tight tracking-tight">KinRaiDee</h2>
          </div>
        </a>
        <div class="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav class="flex items-center gap-6 lg:gap-9">
            <a href="/kinraidee" class="text-sm font-medium hover:text-secondary transition-colors">สุ่มอาหาร</a>
            <a href="/tumraidee" class="text-sm font-medium hover:text-secondary transition-colors">ทำไรดี</a>
            <a href="/myfridge" class="text-sm font-medium hover:text-secondary transition-colors">ตู้เย็นของฉัน</a>
          </nav>

          <div class="flex gap-3"></div>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden flex items-center justify-center size-10 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a302d]"
        >
          <span class="material-symbols-outlined">
            {{ isOpen ? "close" : "menu" }}
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="md:hidden border-t border-gray-100 dark:border-[#2a302d] bg-white dark:bg-card-dark px-4 pb-4"
    >
      <nav class="flex flex-col gap-4 py-4">
        <a class="text-sm font-medium hover:text-secondary transition-colors" href="/kinraidee">KinRaiDee</a>
        <a class="text-sm font-medium hover:text-secondary transition-colors" href="/tumraidee">TumraiDee</a>
        <a class="text-sm font-medium hover:text-secondary transition-colors" href="/myfridge">Fridge</a>
        <a class="text-sm font-medium hover:text-secondary transition-colors" href="#">เกี่ยวกับเรา</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
