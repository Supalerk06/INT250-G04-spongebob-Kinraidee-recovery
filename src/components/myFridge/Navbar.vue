<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#f0f4f3] dark:border-[#2a302d] bg-white/80 dark:bg-card-dark/80 backdrop-blur-md"
  >
    <div class="flex justify-center py-3 px-4 md:px-10">
      <div class="flex w-full max-w-[1280px] items-center justify-between">
        <a href="/">
          <div class="flex items-center gap-4">
            <div
              class="size-8 text-secondary flex items-center justify-center rounded-lg bg-secondary/10"
            >
              <span class="material-symbols-outlined text-2xl"
                >restaurant_menu</span
              >
            </div>
            <h2
              class="text-xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white"
            >
              KinRaiDee
            </h2>
          </div>
        </a>

        <div class="flex items-center gap-4 lg:gap-8">
          <nav class="hidden md:flex items-center gap-6 lg:gap-9">
            <a
              href="/kinraidee"
              class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary transition-colors"
              >กินไรดี</a
            >
            <a
              href="/tumraidee"
              class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary transition-colors"
              >ทำไรดี</a
            >
            <a
              href="/myfridge"
              class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary transition-colors"
              >ตู้เย็นของฉัน</a
            >
          </nav>

          <div class="flex items-center gap-2">
            <!-- Dark Mode Toggle -->
            <button
              @click="toggleDarkMode"
              class="size-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              <span class="material-symbols-outlined text-2xl">
                {{ isDark ? "light_mode" : "dark_mode" }}
              </span>
            </button>

            <button
              @click="toggleMenu"
              class="md:hidden flex items-center justify-center size-10 rounded-xl hover:bg-gray-100 dark:hover:bg-[#2a302d]"
            >
              <span class="material-symbols-outlined">
                {{ isOpen ? "close" : "menu" }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-card-dark border-b border-[#f0f4f3] dark:border-[#2a302d] py-4 px-6 flex flex-col gap-4 shadow-xl z-50 transition-colors"
    >
      <a
        href="/kinraidee"
        class="text-slate-600 dark:text-slate-300 font-bold hover:text-secondary dark:hover:text-secondary"
        >กินไรดี</a
      >
      <a
        href="/tumraidee"
        class="text-slate-600 dark:text-slate-300 font-bold hover:text-secondary dark:hover:text-secondary"
        >ทำไรดี</a
      >
      <a
        href="/myfridge"
        class="text-slate-600 dark:text-slate-300 font-bold hover:text-secondary dark:hover:text-secondary"
        >ตู้เย็นของฉัน</a
      >
      <a
        href="#"
        class="text-slate-600 dark:text-slate-300 font-bold hover:text-secondary dark:hover:text-secondary"
        >เกี่ยวกับเรา</a
      >
    </div>
  </header>
</template>

<script setup>
import { ref, inject } from "vue";

const isOpen = ref(false);
const isDark = inject("isDark");
const toggleDarkMode = inject("toggleDarkMode");

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
