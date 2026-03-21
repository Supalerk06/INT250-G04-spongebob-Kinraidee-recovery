<script setup>
const emit = defineEmits(["close", "cook"])
defineProps(['name', 'image', 'ingredients', 'steps', 'video'])
</script>

<template>
    <div class=" bg-black/50 fixed inset-0  flex items-center justify-center z-50 p-4 ">

        <div
            class="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto border border-gray-100">

            <div
                class="sticky top-0 bg-white/80 backdrop-blur-md z-10 p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 class="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">
                    Recipe of <span class="text-primary underline decoration-primary/30 text-3xl md:text-5xl">{{ name
                    }}</span>
                </h2>
                <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
                    <span class="material-symbols-outlined text-3xl">close</span>
                </button>
            </div>

            <div class="p-6 md:p-10">
                <div class="rounded-xl overflow-hidden shadow-lg mb-8">
                    <img class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                        :src="image" :alt="name">
                </div>

                <div class="grid grid-cols-1 gap-10">

                    <div>
                        <h3 class="font-bold text-xl md:text-2xl mb-4 flex items-center gap-2 text-gray-800">
                            <span
                                class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">kitchen</span>
                            Ingredients
                        </h3>
                        <ul class="space-y-3">
                            <li v-for="(ing, index) in ingredients" :key="index" class="pb-2 border-b border-gray-50">

                                <p class="flex justify-between text-gray-600 italic">
                                    {{ ing.name }}
                                    <span class="font-bold text-gray-800">
                                        {{ ing.quantity }} {{ ing.unit }}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-xl md:text-2xl mb-4 flex items-center gap-2 text-gray-800">
                            <span
                                class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">cooking</span>
                            Step by Step
                        </h3>
                        <ol class="space-y-4">
                            <li v-for="(step, index) in steps" :key="index" class="flex gap-4">

                                <span
                                    class="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                    {{ index + 1 }}
                                </span>

                                <p class="text-gray-600 leading-relaxed">
                                    ขั้นตอนที่ {{ index + 1 }} : {{ step }}
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="mt-12 rounded-xl overflow-hidden shadow-inner bg-gray-100 p-2" v-if="video">
                    <div class="aspect-video w-full" >
                        <iframe class="w-full h-full rounded-lg"  :src="video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <div class="mt-10 flex justify-center gap-10">
                    <button
                        class="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-900 transition-all shadow-lg active:scale-95"
                        @click="emit('close')">
                        Close
                    </button>
                    <button
                        class="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-900 transition-all shadow-lg active:scale-95"
                        @click="emit('cook')">
                        Finished cooking
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>