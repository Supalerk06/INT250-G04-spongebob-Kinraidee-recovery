<template>
  <footer class="bg-slate-100 dark:bg-card-dark border-t border-slate-100 dark:border-card-dark-02 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2">
          <a href="/" class="flex items-center gap-3 mb-6">
            <div class="size-10 text-secondary flex items-center justify-center rounded-xl bg-secondary/10">
              <span class="material-symbols-outlined text-3xl font-bold">restaurant_menu</span>
            </div>
            <h2 class="text-2xl font-black tracking-tight text-slate-800 dark:text-white">KinRaiDee</h2>
          </a>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-medium">
            ผู้ช่วยอัจฉริยะที่จะเปลี่ยนประสบการณ์การทำอาหารและการกินของคุณให้เป็นเรื่องง่าย สนุก และมีระบบระเบียบมากยิ่งขึ้น
          </p>
        </div>
        
        <div>
          <h4 class="font-black text-slate-800 dark:text-white uppercase tracking-widest text-xs mb-6">เมนูหลัก</h4>
          <ul class="space-y-4">
            <li><a href="/kinraidee" class="text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary font-bold transition-colors">สุ่มอาหาร</a></li>
            <li><a href="/tumraidee" class="text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary font-bold transition-colors">ทำไรดี</a></li>
            <li><a href="/myfridge" class="text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary font-bold transition-colors">ตู้เย็นของฉัน</a></li>
            <li><a href="/restaurants" class="text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary font-bold transition-colors">ร้านใกล้ฉัน</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-black text-slate-800 dark:text-white uppercase tracking-widest text-xs mb-6">ติดตามเรา</h4>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/mix_nsth_/" class="rounded-full hover:brightness-75 transition overflow-hidden size-11 rounded-full bg-slate-50 dark:bg-card-dark-02 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all shadow-sm">
              <img src="../assets/profile/pro1.png" alt="">
            </a>
            <a href="https://www.instagram.com/pk._tcsk/" class="rounded-full hover:brightness-75 transition overflow-hidden size-11 rounded-full bg-slate-50 dark:bg-card-dark-02 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all shadow-sm">
              <img src="../assets/profile/pro2.png" alt="">
            </a>
            <a href="https://www.instagram.com/hlqjan/" class="rounded-full hover:brightness-75 transition overflow-hidden size-11 rounded-full bg-slate-50 dark:bg-card-dark-02 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all shadow-sm">
              <img src="../assets/profile/pro3.png" alt="">
            </a>
            <a href="https://www.instagram.com/_spkpoom/" class="rounded-full hover:brightness-75 transition overflow-hidden size-11 rounded-full bg-slate-50 dark:bg-card-dark-02 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all shadow-sm">
              <img src="../assets/profile/pro4.png" alt="">
            </a>
          </div>
        </div>
      </div>
      
      <div class="pt-8 border-t border-slate-50 dark:border-card-dark-02 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-400 dark:text-slate-500 text-sm font-bold">
          &copy; 2026 KinRaiDee. All rights reserved.
        </p>
        <div class="flex gap-8">
          <a href="#" class="text-slate-400 dark:text-slate-500 text-sm font-bold hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</a>
          <a href="#" class="text-slate-400 dark:text-slate-500 text-sm font-bold hover:text-slate-600 dark:hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
