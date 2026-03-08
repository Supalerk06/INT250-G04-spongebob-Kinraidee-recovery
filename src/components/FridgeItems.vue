<script setup>
import { ref } from "vue";
const items = ref([
  {
    id: 1,
    name: "Chicken",
    category: "Meat",
    quantity: 3,
    unit:"pcs",
    purchaseDate:null,
    expireDate:null,
  },
  {
    id: 2,
    name: "Chicken",
    category: "Meat",
    quantity: 3,
    unit:"pcs",
    purchaseDate:null,
    expireDate:null,
  },
  {
    id: 3,
    name: "Chicken",
    category: "Meat",
    quantity: 3,
    unit:"pcs",
    purchaseDate:null,
    expireDate:null,
  },
  {
    id: 4,
    name: "Chicken",
    category: "Meat",
    quantity: 3,
    unit:"pcs",
    purchaseDate:null,
    expireDate:null,
  },
  {
    id: 5,
    name: "Chicken",
    category: "Meat",
    quantity: 3,
    unit:"pcs",
    purchaseDate:null,
    expireDate:null,
  },
  {
    id: 6,
    name: "Chicken",
    category: "Meat",
    quantity: 3,
    unit:"pcs",
    purchaseDate:null,
    expireDate:null,
  },
])

</script>

<template>
  <div class="flex flex-wrap gap-8">
    <div v-for="item in items"
    class="flex flex-col p-4 justify-center items-start rounded-xl bg-white w-full gap-4 max-w-47 md:max-w-57 shadow-xl">
        <img class="rounded-xl" src="https://i.pinimg.com/736x/8a/27/50/8a2750de7fc1fbd8af045fd709738770.jpg" alt="">
        <div class="flex flex-col gap-1">
            <h1 class="text-xl font-bold">{{ item.name}}</h1> 
            <p class="text-neutral-500">{{ item.quantity }} {{ item.unit }}</p>
            <!-- <hr class="w-full border-black"/> -->
            <h1 class="rounded px-2 py-1 text-success bg-green-100">6 days left</h1>
        </div>

    </div>
  </div>
</template>



<style scoped>
</style>

