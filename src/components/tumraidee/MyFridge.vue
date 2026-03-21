<script setup>
import {  ref, computed ,toRaw} from 'vue';
const Props = defineProps(['fridgeItems'])
// import {fridgeItems} from '@/data/fridgeItems';
console.log(toRaw(Props.fridgeItems));
// let fridgeItems = ref(JSON.parse(localStorage.getItem("fridgeItems")) || [])


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
    <div class="rounded-2xl p-6 shadow-soft bg-white/10 backdrop-blur-xl border border-white/20 text-white">
        <h3 class="font-bold text-lg flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-primary">kitchen</span>
            My Fridge
        </h3>

        <div v-for="(items, category) in groupedItems" :key="category" class="mb-6">
            <p class="text-sm font-bold text-primary uppercase mb-3">
                {{ category }}
            </p>

            <ul class="space-y-3">
                <li v-for="item in items" :key="item.id" class="flex justify-between">
                    <span>{{ item.name }}</span>
                    <span class="text-xs text-text-muted">
                        {{ item.quantity }} {{ item.unit }}
                    </span>
                </li>
            </ul>
        </div>

        <a class="text-sm text-primary font-bold flex items-center justify-center gap-2 hover:underline mt-4"
            href="/myfridge">
            View Full Inventory
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
    </div>
</template>