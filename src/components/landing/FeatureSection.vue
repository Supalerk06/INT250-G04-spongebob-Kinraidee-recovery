<script setup>
defineProps({
  index: String,
  title: String,
  accentTitle: String,
  description: String,
  features: Array,
  buttonText: String,
  buttonLink: String,
  image: String,
  reverse: Boolean,
  badgeText: String,
  badgeTitle: String,
  badgeIcon: String,
  customSlot: Boolean
})
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
    <!-- Image Side -->
    <div :class="['w-full lg:w-1/2 relative group', reverse ? 'lg:order-2' : 'lg:order-1']">
      <div class="absolute inset-0 bg-secondary/5 blur-[60px] rounded-full group-hover:bg-secondary/10 transition-colors duration-700"></div>
      <img :src="image" :alt="title" class="relative z-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border-[10px] border-white dark:border-card-dark object-cover w-full transform group-hover:-translate-y-2 transition-transform duration-500" />
      
      <!-- Badge -->
      <div v-if="badgeTitle" class="absolute -bottom-6 -right-6 bg-white dark:bg-card-dark border border-slate-50 dark:border-card-dark-02 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-3">
        <div class="bg-orange-50 dark:bg-secondary/10 p-2 rounded-xl text-secondary">{{ badgeIcon }}</div>
        <div>
          <p class="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{{ badgeText }}</p>
          <p class="font-bold text-slate-800 dark:text-white">{{ badgeTitle }}</p>
        </div>
      </div>
      
      <!-- Custom Slot for complex badges like Fridge Status -->
      <slot v-if="customSlot" name="image-overlay"></slot>
    </div>

    <!-- Content Side -->
    <div :class="['w-full lg:w-1/2', reverse ? 'lg:order-1' : 'lg:order-2']">
      <span class="text-secondary font-black tracking-widest uppercase text-sm">ฟีเจอร์ที่ {{ index }}</span>
      <h2 class="text-4xl md:text-5xl font-black mt-4 mb-6 text-slate-800 dark:text-white">
        {{ title }}<br /><span class="text-secondary">{{ accentTitle }}</span>
      </h2>
      <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
        {{ description }}
      </p>
      
      <ul v-if="features" class="space-y-4 mb-8">
        <li v-for="feat in features" :key="feat" class="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
          <span class="bg-orange-50 dark:bg-secondary/10 text-secondary rounded-full p-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          {{ feat }}
        </li>
      </ul>

      <slot name="extra-content"></slot>

      <a :href="buttonLink" class="group inline-flex items-center gap-3 bg-secondary text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-[1.05] transition-all shadow-xl shadow-secondary/20">
        {{ buttonText }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</template>
