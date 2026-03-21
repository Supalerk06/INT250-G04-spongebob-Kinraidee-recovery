<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#f0f4f3] dark:border-[#2a302d] bg-white/80 dark:bg-card-dark/80 backdrop-blur-md"
  >
    <div class="flex justify-center py-3 px-4 md:px-10">
      <div
        class="flex w-full max-w-[1280px] items-center justify-between"
      >
        <!-- Logo -->
       <a href="/"><div class="flex items-center gap-4">
          <div
            class="size-8 text-primary flex items-center justify-center rounded-lg bg-primary/10"
          >
            <span class="material-symbols-outlined text-2xl">
              restaurant_menu
            </span>
          </div>
          <h2 class="text-xl font-bold leading-tight tracking-tight">
            KinRaiDee
          </h2>
        </div></a> 

        <!-- Desktop Menu -->
        <div
          class="hidden md:flex flex-1 justify-end gap-8 items-center"
        >
          <nav class="flex items-center gap-6 lg:gap-9">
            <a
              href="/kinraidee"
              class="text-sm font-medium hover:text-primary transition-colors"
            >
              KinRaiDee
            </a>
            <a
              href="/tumraidee"
              class="text-sm font-medium hover:text-primary transition-colors"
            >
              TumraiDee
          </a>
            <a
              href="/myfridge"
              class="text-sm font-medium hover:text-primary transition-colors"
            >
              Fridge
            </a>
            <a
              href="#"
              class="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>

          <div class="flex gap-3">
            <button
              class="flex h-10 px-5 items-center justify-center rounded-xl bg-gray-100 dark:bg-[#2a302d] hover:bg-gray-200 dark:hover:bg-[#363d39] text-sm font-bold transition-all"
            >
              Login
            </button>
            <button
              class="flex h-10 px-5 items-center justify-center rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-sm font-bold transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>

        <!-- Mobile Button -->
        <button
          @click="toggleMenu"
          class="md:hidden flex items-center justify-center size-10 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a302d]"
        >
          <span class="material-symbols-outlined">
            {{ isOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-gray-100 dark:border-[#2a302d] bg-white dark:bg-card-dark px-4 pb-4"
    >
      <nav class="flex flex-col gap-4 py-4">
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">
          KinRaiDee
        </a>
        <a href="/tumraidee" class="text-sm font-medium hover:text-primary transition-colors" >
          TumraiDee
        </a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="/myfridge">
          Fridge
        </a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">
          About
        </a>
      </nav>

      <div class="flex flex-col gap-3">
        <button
          class="h-10 rounded-xl bg-gray-100 dark:bg-[#2a302d] hover:bg-gray-200 dark:hover:bg-[#363d39] text-sm font-bold"
        >
          Login
        </button>
        <button
          class="h-10 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold"
        >
          Sign Up
        </button>
      </div>
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