<script setup>
defineProps({
  shop: Object
})
</script>

<template>
  <div
  class="bg-white rounded-[2.5rem] p-3 shadow-xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 flex flex-col">

    <div class="relative overflow-hidden rounded-3xl mb-4 bg-gray-50 h-48">
      <img :src="shop.imageUrl"
        class="w-full h-full object-cover  rounded-3xl group-hover:scale-110 transition-transform duration-700 " />

      <div class="absolute bottom-3 left-3 right-3 flex justify-between items-center">
        <div class="bg-black/60 text-white px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1">
          ⭐ {{ shop.star }}
        </div>
      </div>
    </div>

    <div class="px-2 pb-2 flex-1 flex flex-col justify-between group-hover:text-secondary">
      <h3 class="font-display font-black text-xl mb-4">
        {{ shop.name }}
      </h3>

      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
        <div class="flex flex-col">
          <span class="text-xs font-bold text-gray-400">DISTANCE</span>
          <span class="text-xl font-black text-secondary">
            {{ shop.distance }} KM
          </span>
        </div>

        <button class="bg-primary text-text px-5 py-2.5 rounded-2xl text-xs font-black">
          ไปที่ร้าน →
        </button>
      </div>
    </div>

  </div>
</template>