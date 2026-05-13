<script setup>

defineProps(['id','name','image','missList','missingCount', 'categories', 'categoryMapping'])
</script>
<template>
    <!-- 1 -->
    <article
        class="group bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-lg dark:shadow-slate-900/50 hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-card-dark-02 hover:border-secondary/30">
        <div class="h-40 relative overflow-hidden">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                data-alt="Bowl of Tom Yum Kung soup"
                :style="{backgroundImage: `url(${image})`}">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60">
            </div>
            
            <div class="absolute top-3 left-3 flex flex-wrap gap-1">
                <span
                    v-for="cat in categories"
                    :key="cat"
                    class="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-[8px] font-black text-white uppercase tracking-tight border border-white/20"
                >
                    {{ categoryMapping[cat] || cat }}
                </span>
            </div>

            <div class="absolute bottom-3 left-3 text-white">
                <h4 class="font-bold text-lg leading-tight">{{ name }}</h4>
            </div>
        </div>
        <div class="p-4 flex-1 flex flex-col">
            <div
                class="flex items-center gap-2 mb-3 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                <span class="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-[18px]">warning</span>
                <p class="text-xs font-semibold text-yellow-800 dark:text-yellow-200 ">ขาด:
                    <span class="underline decoration-dotted mr-1" v-for="(item, index) in missList" :key="index">
        {{ item.name }}{{ " " }}</span>
                </p>
            </div>
            <div class="flex items-center justify-between mt-auto pb-2">
                <div class="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div class="bg-yellow-400 h-full rounded-full" :style="{ width: (missingCount === 1 ? 95 : missingCount === 2 ? 85 : 0) + '%' }"></div>
                </div>
                <span class="text-xs font-bold text-text-muted ml-3" >{{ missingCount > 0 ? 95 - ((missingCount - 1) * 10) : 100 }}%</span>
            </div>

        </div>
    </article>
</template>