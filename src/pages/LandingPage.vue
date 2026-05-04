<template>
  <div class="bg-white text-[#111111] min-h-screen font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
    <!-- Hero Section -->
    <Hero />

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
      <!-- Feature 01 -->
      <FeatureSection
        index="01"
        title="Food Randomizer"
        accentTitle='"Kinraidee"'
        description="Can't decide? Let us pick for you instantly! Perfect for busy days. Complete with smart filters tailored to your dietary preferences."
        :features="[
          'Quick randomized results with animations',
          'Advanced filtering (Halal, No Meat, etc.)'
        ]"
        buttonText="Try Food Randomizer"
        buttonLink="/kinraidee"
        :image="kinraidee"
        badgeText="Filter Option"
        badgeTitle="Halal & Vegan Friendly"
        badgeIcon="☪️"
      />

      <!-- Feature 02 -->
      <FeatureSection
        index="02"
        title="Restaurant Guide"
        accentTitle='"Near Me"'
        description="Got your menu but don't want to cook? We'll direct you to the best nearby restaurants serving exactly what you crave, with a clean and easy-to-read map interface."
        :features="[
          'Directly linked to your randomized results',
          'Adjustable radius filters (e.g. 500m, 2km)'
        ]"
        buttonText="Find Places Near Me"
        buttonLink="/restaurants"
        :image="menu"
        badgeText="Location Services"
        badgeTitle="15 places within 1km"
        badgeIcon="📍"
        :reverse="true"
      />

      <!-- Feature 03 -->
      <FeatureSection
        index="03"
        title="Smart Inventory"
        accentTitle='"My Fridge"'
        description="Turn your messy fridge into an organized inventory. Track ingredients, monitor expiry dates with intuitive color codes, and significantly reduce food waste."
        :features="[
          'Freely manage your grocery inventory',
          'Check freshness via visual Color Coding'
        ]"
        buttonText="Manage Your Fridge"
        buttonLink="/myfridge"
        :image="myfridge"
        :customSlot="true"
      >
        <template #image-overlay>
          <div class="absolute bottom-10 -right-6 bg-white border border-slate-50 p-6 rounded-2xl shadow-2xl z-20 w-64">
            <div class="flex justify-between items-center mb-4">
              <span class="font-black text-sm text-slate-800 tracking-wide uppercase">Fridge Status</span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-slate-700 font-bold">Pork</span>
                <span class="text-secondary font-black">Exp. Today!</span>
              </div>
              <div class="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-slate-700 font-bold">Eggs</span>
                <span class="text-secondary font-black">3 Days Left</span>
              </div>
            </div>
          </div>
        </template>
      </FeatureSection>

      <!-- Feature 04 -->
      <FeatureSection
        index="04"
        title="Recipe Suggestions"
        accentTitle='"Tumraidee"'
        description="Seamlessly integrated with 'My Fridge', this feature suggests recipes you can cook right now. It calculates your ingredient readiness and lets you store your secret personal recipes."
        buttonText="Discover Recipes"
        buttonLink="/tumraidee"
        :image="tumraidee"
        :reverse="true"
      >
        <template #extra-content>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div class="text-secondary font-black mb-1 text-sm tracking-wide">Perfect Match 🌟</div>
              <p class="text-xs text-slate-500 font-bold">100% ingredients ready</p>
            </div>
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div class="text-slate-800 font-black mb-1 text-sm tracking-wide">Almost There 🛒</div>
              <p class="text-xs text-slate-500 font-bold">Missing just 1-2 items</p>
            </div>
          </div>
        </template>
      </FeatureSection>
    </section>

    <!-- CTA Section -->
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
