<script setup>
import { ref, onMounted, watch, provide } from 'vue';
import Navbar from './components/myFridge/Navbar.vue';
import Footer from './components/Footer.vue';

const isDark = ref(localStorage.getItem('theme') === 'dark');

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

watch(isDark, (val) => {
  if (val) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

provide('isDark', isDark);
provide('toggleDarkMode', toggleDarkMode);
</script>

<template>
<div class="min-h-screen flex flex-col bg-white dark:bg-background-dark transition-colors duration-300">
  <Navbar/>
  <main class="flex-1">
    <router-view />
  </main>
  <Footer />
</div>
</template>