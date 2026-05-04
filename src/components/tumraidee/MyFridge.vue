<script setup>
import {  ref, computed ,toRaw} from 'vue';
const Props = defineProps(['fridgeItems'])

const categoryMapping = {
  MEAT: "เนื้อสัตว์",
  VEGETABLE: "ผัก",
  DAIRY: "ผลิตภัณฑ์นม",
  FRUIT: "ผลไม้",
  SAUCE: "ซอสและเครื่องปรุง",
};

const groupedItems = computed(() => {
    return Props.fridgeItems.reduce((acc, item) => {
        const cat = item.category.toUpperCase();
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});
});

</script>
<template>
    <div class="rounded-2xl p-6 shadow-xl bg-white border border-gray-100 text-slate-800">
        <h3 class="font-bold text-lg flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-secondary">kitchen</span>
            ตู้เย็นของฉัน
        </h3>
        <hr class="mb-4 border-gray-100">

        <div v-for="(items, category) in groupedItems" :key="category" class="mb-6">
            <p class="text-xs font-black text-secondary uppercase mb-3 tracking-wider">
                {{ categoryMapping[category] || category }}
            </p>

            <ul class="space-y-3">
                <li v-for="item in items" :key="item.id" class="flex justify-between items-center bg-slate-50/50 p-2 rounded-lg">
                    <span class="font-medium text-sm">{{ item.name }}</span>
                    <span class="text-[10px] font-bold bg-white px-2 py-0.5 rounded border border-gray-100 text-slate-400">
                        {{ item.quantity }} {{ item.unit }}
                    </span>
                </li>
            </ul>
        </div>

        <a class="text-sm text-secondary font-black flex items-center justify-center gap-2 hover:underline mt-4 pt-4 border-t border-gray-50"
            href="/myfridge">
            ดูวัตถุดิบทั้งหมด
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
    </div>
</template>