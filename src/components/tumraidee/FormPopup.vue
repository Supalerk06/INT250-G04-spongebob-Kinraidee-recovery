<script setup>
import { ref, reactive } from 'vue'
import { db } from '@/data/userRecipes'
import { toRaw } from 'vue'
import { onMounted } from 'vue'

const emit = defineEmits(['close', 'save'])

// โครงสร้างข้อมูลสำหรับ Form
const recipe = reactive({
  name: '',
  image: '',
  short_description: '',
  ingredients: [
    { name: '', quantity: 1, unit: 'pcs' } // ค่าเริ่มต้น 1 แถว
  ],
  steps: [''] // ค่าเริ่มต้น 1 ขั้นตอน
})

const errors = reactive({
  name: '',
  image: '',
  short_description: '',
  ingredients: [],
  steps: []
})

const validateForm = () => {
  let isValid = true

  // reset error ก่อน
  errors.name = ''
  errors.image = ''
  errors.ingredients = []
  errors.steps = []

  // 🔹 name
  if (!recipe.name.trim()) {
    errors.name = 'Recipe name is required'
    isValid = false
  }

  if (!recipe.short_description.trim()) {
    errors.short_description = 'Recipe Short Description is required'
    isValid = false
  }

  // 🔹 image
  if (!recipe.image) {
    errors.image = 'Please upload an image'
    isValid = false
  }

  // 🔹 ingredients
  recipe.ingredients.forEach((item, i) => {
    const err = { name: '', quantity: '', unit: '' }

    if (!item.name.trim()) {
      err.name = 'Required'
      isValid = false
    }

    if (!item.quantity || item.quantity <= 0) {
      err.quantity = 'Invalid'
      isValid = false
    }

    if (!item.unit.trim()) {
      err.unit = 'Required'
      isValid = false
    }

    errors.ingredients[i] = err
  })

  // 🔹 steps
  recipe.steps.forEach((step, i) => {
    if (!step.trim()) {
      errors.steps[i] = 'Step is required'
      isValid = false
    }
  })

  return isValid
}

// ฟังก์ชันเพิ่ม/ลบ วัตถุดิบ
const addIngredient = () => {
  recipe.ingredients.push({ name: '', quantity: 1, unit: 'pcs' })
}
const removeIngredient = (index) => {
  if (recipe.ingredients.length > 1) recipe.ingredients.splice(index, 1)
}

// ฟังก์ชันเพิ่ม/ลบ ขั้นตอน
const addStep = () => {
  recipe.steps.push('')
}
const removeStep = (index) => {
  if (recipe.steps.length > 1) recipe.steps.splice(index, 1)
}

const handleSubmit = async () => {

  if (!validateForm()) return

  try {
    const data = structuredClone(toRaw(recipe))

    if (props.recipeData?.id) {
      // ✏️ EDIT MODE
      await db.recipes.update(props.recipeData.id, data)
      console.log("Updated ✅")
    } else {
      // ➕ ADD MODE
      await db.recipes.add({
        ...data,
        createdAt: new Date()
      })
      console.log("Saved ✅")
    }

    emit('save')
    emit('close')

  } catch (err) {
    console.error("Error saving:", err)
  }
}

const handleFileChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()

  reader.onload = () => {
    recipe.image = reader.result // 👈 base64 string
  }

  reader.readAsDataURL(file)
}

const props = defineProps({
  recipeData: Object // 👈 ใช้ตอน edit
})

onMounted(() => {
  if (props.recipeData) {
    Object.assign(recipe, structuredClone(props.recipeData))
  }
})


</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">

      <div class="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
        <h2 class="text-2xl font-bold text-gray-800">
          {{ props.recipeData ? 'Edit Recipe' : 'Add New Recipe' }}
        </h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="p-6 space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Recipe Name</label>
          <input v-model="recipe.name" @input="errors.name = ''" :class="[
            'w-full px-4 py-2 border rounded-lg outline-none',
            errors.name ? 'border-red-500' : 'border-gray-300'
          ]" />

          <p v-if="errors.name" class="text-red-500 text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Short Description</label>
          <input v-model="recipe.short_description" @input="errors.short_description = ''" :class="[
            'w-full px-4 py-2 border rounded-lg outline-none',
            errors.short_description ? 'border-red-500' : 'border-gray-300'
          ]" />

          <p v-if="errors.short_description" class="text-red-500 text-sm mt-1">
            {{ errors.short_description }}
          </p>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Upload Photo</label>
          <input type="file" @change="(e) => { handleFileChange(e); errors.image = '' }" :class="[
            'w-full px-4 py-2 border rounded-lg',
            errors.image ? 'border-red-500' : 'border-gray-300'
          ]" />

          <p v-if="errors.image" class="text-red-500 text-sm mt-1">
            {{ errors.image }}
          </p>
          <img v-if="recipe.image" :src="recipe.image" class="w-40 mt-3 rounded-lg shadow" />
        </div>

        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-semibold text-gray-700">Ingredients</label>
            <button @click="addIngredient" type="button"
              class="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">add</span> Add Ingredient
            </button>
          </div>

          <div v-for="(item, index) in recipe.ingredients" :key="index" class="flex gap-2 mb-2 flex-col">

            <div class="flex gap-2">
              <input v-model="item.name" @input="errors.ingredients[index] && (errors.ingredients[index].name = '')"
                :class="['flex-1 px-3 py-2 border rounded-md',
                  errors.ingredients[index]?.name ? 'border-red-500' : ''
                ]" placeholder="Name" />

              <input v-model.number="item.quantity" type="number"
                @input="errors.ingredients[index] && (errors.ingredients[index].quantity = '')" :class="['w-20 px-3 py-2 border rounded-md',
                  errors.ingredients[index]?.quantity ? 'border-red-500' : ''
                ]" />

              <select v-model="item.unit" @change="errors.ingredients[index] && (errors.ingredients[index].unit = '')"
                :class="[
                  'w-24 px-3 py-2 border rounded-md',
                  errors.ingredients[index]?.unit ? 'border-red-500' : ''
                ]">
                <option value="pcs">pcs</option>
                <option value="ml">ml</option>
                <option value="g">g</option>
              </select>
            </div>

            <div class="text-red-500 text-xs flex gap-2">
              <span v-if="errors.ingredients[index]?.name">Name required</span>
              <span v-if="errors.ingredients[index]?.quantity">Qty invalid</span>
              <span v-if="errors.ingredients[index]?.unit">Unit required</span>
            </div>

          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-semibold text-gray-700">Steps</label>
            <button @click="addStep" type="button"
              class="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">add</span> Add Step
            </button>
          </div>
          <div v-for="(step, index) in recipe.steps" :key="index" class="flex gap-3 mb-3 items-start">

            <span class="mt-2 font-bold text-gray-400">
              {{ index + 1 }}.
            </span>

            <textarea v-model="recipe.steps[index]" @input="errors.steps[index] = ''" :class="[
              'flex-1 px-3 py-2 border rounded-md h-20',
              errors.steps[index] ? 'border-red-500' : ''
            ]"></textarea>

            <button @click="removeStep(index)" class="mt-2 text-red-500 hover:bg-red-50 p-1 rounded">
              <span class="material-symbols-outlined">delete</span>
            </button>

          </div>
        </div>
      </div>

      <div class="p-6 border-t flex justify-end gap-3 bg-gray-50">
        <button @click="emit('close')"
          class="px-6 py-2 border rounded-lg text-white bg-red-500 hover:bg-red-700">Cancel</button>
        <button @click="handleSubmit"
          class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold shadow-md">
          Save Recipe
        </button>
      </div>

    </div>
  </div>
</template>