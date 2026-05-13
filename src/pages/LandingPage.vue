<template>
  <div class="bg-white dark:bg-background-dark text-[#111111] dark:text-white min-h-screen font-sans selection:bg-secondary selection:text-white overflow-x-hidden transition-colors duration-300">
    <Hero />

    <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
      <FeatureSection
        index="01"
        title="สุ่มเมนูอาหาร"
        accentTitle='"กินไรดี"'
        description="ตัดสินใจไม่ได้ใช่ไหม? ให้เราช่วยเลือกเมนูให้คุณทันที! เหมาะสำหรับวันที่เร่งรีบ พร้อมระบบคัดกรองอัจฉริยะที่ปรับแต่งได้ตามความต้องการของคุณ"
        :features="[
          'สุ่มเมนูรวดเร็วพร้อมอนิเมชั่นที่สวยงาม',
          'ระบบกรองขั้นสูง (ฮาลาล, มังสวิรัติ, และอื่นๆ)'
        ]"
        buttonText="ลองสุ่มเมนูเลย"
        buttonLink="/kinraidee"
        :image="kinraidee"
        badgeText="ตัวเลือกการกรอง"
        badgeTitle="ฮาลาล และ วีแกน"
        badgeIcon="☪️"
      />

      <FeatureSection
        index="02"
        title="คู่มือร้านอาหาร"
        accentTitle='"ร้านใกล้ฉัน"'
        description="ได้เมนูที่ถูกใจแล้วแต่ไม่อยากทำเอง? เราจะนำคุณไปยังร้านอาหารที่ดีที่สุดในบริเวณใกล้เคียงที่เสิร์ฟเมนูที่คุณต้องการ พร้อมแผนที่ที่ดูง่ายและชัดเจน"
        :features="[
          'เชื่อมโยงโดยตรงจากเมนูที่คุณสุ่มได้',
          'ปรับระยะการค้นหาได้ตามต้องการ (500ม., 2กม.)'
        ]"
        buttonText="ค้นหาร้านอาหารใกล้ตัว"
        buttonLink="/restaurants"
        :image="menu"
        badgeText="บริการระบุตำแหน่ง"
        badgeTitle="พบ 15 ร้านในระยะ 1 กม."
        badgeIcon="📍"
        :reverse="true"
      />

      <FeatureSection
        index="03"
        title="คลังวัตถุดิบอัจฉริยะ"
        accentTitle='"ตู้เย็นของฉัน"'
        description="เปลี่ยนตู้เย็นที่วุ่นวายให้เป็นคลังวัตถุดิบที่เป็นระเบียบ ติดตามวันหมดอายุด้วยรหัสสีที่เข้าใจง่าย และช่วยลดขยะจากอาหารได้อย่างมีประสิทธิภาพ"
        :features="[
          'จัดการรายการวัตถุดิบได้อย่างอิสระ',
          'ระบบเตือนความสดใหม่ด้วยรหัสสี'
        ]"
        buttonText="จัดการตู้เย็นของคุณ"
        buttonLink="/myfridge"
        :image="myfridge"
        :customSlot="true"
      >
        <template #image-overlay>
          <div class="absolute bottom-10 -right-6 bg-white border dark:bg-card-dark dark:border-card-dark border-slate-50 p-6 rounded-2xl shadow-2xl z-20 w-64">
            <div class="flex justify-between items-center mb-4">
              <span class="font-black text-sm text-slate-800 dark:text-white tracking-wide uppercase">สถานะตู้เย็น</span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center dark:bg-card-dark-02 dark:border-card-dark-02 text-xs p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-slate-700 dark:text-white font-bold">เนื้อหมู</span>
                <span class="text-secondary font-black">หมดอายุวันนี้!</span>
              </div>
              <div class="flex justify-between items-center dark:bg-card-dark-02 dark:border-card-dark-02 text-xs p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-slate-700 dark:text-white font-bold">ไข่ไก่</span>
                <span class="text-secondary font-black">อีก 3 วัน</span>
              </div>
            </div>
          </div>
        </template>
      </FeatureSection>

      <FeatureSection
        index="04"
        title="แนะนำสูตรอาหาร"
        accentTitle='"ทำไรดี"'
        description="เชื่อมโยงกับ 'ตู้เย็นของฉัน' อย่างไร้รอยต่อ เพื่อแนะนำเมนูที่คุณสามารถปรุงได้ทันทีจากวัตถุดิบที่มี พร้อมบันทึกสูตรอาหารส่วนตัวของคุณ"
        buttonText="ค้นหาสูตรอาหาร"
        buttonLink="/tumraidee"
        :image="tumraidee"
        :reverse="true"
      >
        <template #extra-content>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-slate-50 p-5 rounded-2xl border dark:bg-card-dark-02 dark:border-card-dark-02 border-slate-100">
              <div class="text-secondary font-black mb-1 text-sm tracking-wide">วัตถุดิบครบ 🌟</div>
              <p class="text-xs text-slate-500 font-bold dark:text-white">ปรุงได้ทันที 100%</p>
            </div>
            <div class="bg-slate-50 p-5 rounded-2xl border dark:bg-card-dark-02 dark:border-card-dark-02 border-slate-100">
              <div class="text-slate-800 font-black mb-1 text-sm dark:text-secondary tracking-wide">เกือบครบแล้ว 🛒</div>
              <p class="text-xs text-slate-500 font-bold dark:text-white">ขาดเพียง 1-2 อย่าง</p>
            </div>
          </div>
        </template>
      </FeatureSection>
    </section>

    <CTASection />
  </div>
</template>

<script setup>
import Hero from "@/components/landing/Hero.vue";
import FeatureSection from "@/components/landing/FeatureSection.vue";
import CTASection from "@/components/landing/CTASection.vue";

import kinraidee from "@/assets/kinraidee.png";
import menu from "@/assets/menu.png";
import myfridge from "@/assets/myfridge.png";
import tumraidee from "@/assets/tumraidee.png";
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
