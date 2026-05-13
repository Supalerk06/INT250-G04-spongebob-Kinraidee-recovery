import { ref, watch } from 'vue'

const STORAGE_KEY = 'fridgeItems'

// Load initial data from localStorage
const initialFridgeItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

// Reactive state for fridge items
export const fridgeItems = ref(initialFridgeItems)

// Watch for changes and sync with localStorage
watch(fridgeItems, (newItems) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
}, { deep: true })
