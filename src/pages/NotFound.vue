<script setup>
</script>

<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-9xl font-black text-secondary">404</h1>
    <h2 class="text-3xl font-bold text-slate-800 dark:text-white mt-4">ไม่พบหน้าที่คุณต้องการ</h2>
    <p class="text-slate-500 dark:text-slate-400 mt-2 max-w-md">
      ขออภัย หน้าที่คุณกำลังค้นหาไม่มีอยู่หรือถูกย้ายไปแล้ว
    </p>
    <router-link
      to="/"
      class="mt-8 px-6 py-3 bg-secondary text-white font-bold rounded-xl shadow-lg shadow-secondary/30 hover:scale-105 transition-all"
    >
      กลับสู่หน้าหลัก
    </router-link>
  </div>
</template>
