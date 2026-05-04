import { ref, watch } from 'vue'

const STORAGE_KEY = 'user_recipes'

// Load initial data from localStorage
const initialRecipes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

// Reactive state for recipes
export const userRecipes = ref(initialRecipes)

// Watch for changes and sync with localStorage
watch(userRecipes, (newRecipes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecipes))
}, { deep: true })

// Simple "DB" helpers for MVP
export const db = {
  recipes: {
    toArray: () => userRecipes.value,
    add: (recipe) => {
      const newRecipe = {
        ...recipe,
        id: Date.now() // Simple unique ID
      }
      userRecipes.value.push(newRecipe)
      return newRecipe
    },
    update: (id, data) => {
      const index = userRecipes.value.findIndex(r => r.id === id)
      if (index !== -1) {
        userRecipes.value[index] = { ...userRecipes.value[index], ...data }
      }
    },
    delete: (id) => {
      userRecipes.value = userRecipes.value.filter(r => r.id !== id)
    }
  }
}