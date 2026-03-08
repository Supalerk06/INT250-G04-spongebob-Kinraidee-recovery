<script setup>
import FridgeItems from '../components/FridgeItems.vue';
// import { ref } from "vue";

// const isOpen = ref(false);

// const toggleMenu = () => {
//   isOpen.value = !isOpen.value;
// };
</script>

<template>
  <div class="px-4 pt-4 bg-red-800 flex flex-col gap-4
  md:px-10 lg:flex-row">
    <div class="flex flex-col gap-4 w-full lg:max-w-6/8 lg:mr-auto">

    <div class="flex justify-between py-2">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl text-white font-bold">My Fridge</h1>
            <p class="text-neutral-200">Manage your household ingredients</p>
        </div>
        <button class="rounded-full flex justify-center items-center shadow shadow-success
         bg-success text-white h-full max-h-10 py-1 px-4 gap-2
         hover:scale-[1.025] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Add Item</button>
    </div>
    <div class="flex rounded-3xl bg-white p-4 flex-wrap md:flex-nowrap shadow shadow-neutral-300 gap-3">
        <div class=" bg-neutral-100 px-4 py-1 rounded-3xl w-full md:w-9/13 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          <input class="w-full bg-neutral-100 outline-none border-none" placeholder="Search ingredients (e.g. Egg,Milk)" type="text" />
        </div>
        <div class=" bg-neutral-100 px-4 py-3 md:px-2 md:py-1 rounded-3xl cursor-pointer md:w-2/13 flex justify-center md:min-w-[129px] items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
            <h2 class="">Sort: Expiry</h2>
        </div>
        <div class=" bg-neutral-100 px-4 py-3 md:px-2 md:py-1 rounded-3xl cursor-pointer md:w-2/13 flex justify-center md:min-w-[129px] items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <h2 class="">filter</h2>
        </div>


    </div>

        <div class="flex">
            <button class="rounded-full shadow shadow-neutral-300 bg-white py-2 px-4
            hover:scale-[1.015] hover:bg-neutral-400 hover:text-white transition">All Items</button >
        </div>
        <Fridge-items />
    </div>

    <div class="flex flex-col gap-4 w-full lg:max-w-2/8">
        <div class="bg-white  rounded-2xl flex flex-col p-5 border-2 shadow shadow-warning border-warning gap-2">
            <h3 class="font-bold text-xl"> <span class="p-2 rounded-full text-warning text-xl bg-orange-100">!</span> Use it up!</h3>
            <p class="text-neutral-500">These items are expiring within 48 hours.</p>
            <div>
                
            </div>
        </div>

        <div class="bg-primary  rounded-2xl flex flex-col p-5 shadow gap-2">
            <h3 class="font-bold text-xl">Fridge Health</h3>
            <div class="flex justify-between">
                <div>
                    <p class="text-2xl font-bold">85%</p>
                     <h2>Freshness Score</h2>
                </div>
                <div>
                    <p class="text-xl font-bold">24</p>
                    <h2>Total Items</h2>
                </div>
            </div>
            <div class="bg-yellow-600  w-full p-1 rounded-full"><div class="w-3/4 p-1 rounded-full bg-white"></div></div>
        </div>

        <div class="bg-white  rounded-2xl flex flex-col p-5 shadow gap-2">
            <h3 class="font-bold text-xl">Suggest menu</h3>
        </div>
    </div>

  </div>
</template>



<style scoped>
</style>