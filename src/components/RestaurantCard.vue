<script setup>
defineProps({
  shop: Object
})

function goToMaps() {
  window.open('https://www.google.com/maps', '_blank')
}
</script>

<template>
  <div class="bg-white rounded-3xl p-3 shadow-xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 flex flex-col">

    <div class="relative overflow-hidden rounded-3xl mb-4 bg-gray-50 h-48">
      <img :src="shop.imageUrl"
        class="w-full h-full object-cover rounded-3xl" />

      <div class="absolute top-2 right-2">
         <div class="bg-black/60 text-white font-semibold px-3 py-1 rounded-2xl text-sm flex items-center gap-1.5">
          <span class="text-sm">⭐</span>{{ shop.star }}
        </div>
      </div>
    </div>

    <div class="px-2 pb-2 flex-1 flex flex-col justify-between">
      <h3 class="font-display font-black text-xl mb-4 text-slate-900 group-hover:text-secondary ">
        {{ shop.name }}
      </h3>

      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
        <div class="flex flex-col">
          <span class="text-xs font-bold font-display text-gray-400">DISTANCE</span>
          <span class="text-xl font-black font-display text-secondary">
            {{ shop.distance }} KM
          </span>
        </div>

        <button @click="goToMaps" class="bg-secondary font-display font-black text-white px-3 py-2.5 rounded-2xl text-xs hover:bg-orange-600">
          Get directions →
        </button>
      </div>
    </div>

  </div>
</template>