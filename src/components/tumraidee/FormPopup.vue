<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { db } from '@/data/userRecipes'
import { toRaw } from 'vue'

const emit = defineEmits(['close', 'save'])

const recipe = reactive({
  name: '',
  image: '',
  short_description: '',
  ingredients: [
    { name: '', quantity: 1, unit: 'ชิ้น' } 
  ],
  steps: [''] 
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

  errors.name = ''
  errors.image = ''
  errors.ingredients = []
  errors.steps = []

  if (!recipe.name.trim()) {
    errors.name = 'กรุณากรอกชื่อสูตรอาหาร'
    isValid = false
  }

  if (!recipe.short_description.trim()) {
    errors.short_description = 'กรุณากรอกคำอธิบายสั้นๆ'
    isValid = false
  }

  if (!recipe.image) {
    errors.image = 'กรุณาอัปโหลดรูปภาพ'
    isValid = false
  }

  recipe.ingredients.forEach((item, i) => {
    const err = { name: '', quantity: '', unit: '' }

    if (!item.name.trim()) {
      err.name = 'จำเป็น'
      isValid = false
    }

    if (!item.quantity || item.quantity <= 0) {
      err.quantity = 'ไม่ถูกต้อง'
      isValid = false
    }

    if (!item.unit.trim()) {
      err.unit = 'จำเป็น'
      isValid = false
    }

    errors.ingredients[i] = err
  })

  recipe.steps.forEach((step, i) => {
    if (!step.trim()) {
      errors.steps[i] = 'กรุณากรอกขั้นตอน'
      isValid = false
    }
  })

  return isValid
}

const addIngredient = () => {
  recipe.ingredients.push({ name: '', quantity: 1, unit: 'ชิ้น' })
}
const removeIngredient = (index) => {
  if (recipe.ingredients.length > 1) recipe.ingredients.splice(index, 1)
}

const addStep = () => {
  recipe.steps.push('')
}
const removeStep = (index) => {
  if (recipe.steps.length > 1) recipe.steps.splice(index, 1)
}

const handleSubmit = () => {
  if (!validateForm()) return

  try {
    const data = structuredClone(toRaw(recipe))

    if (props.recipeData?.id) {
      db.recipes.update(props.recipeData.id, data)
      console.log("Updated ✅")
    } else {
      db.recipes.add({
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
    recipe.image = reader.result 
  }

  reader.readAsDataURL(file)
}

const props = defineProps({
  recipeData: Object 
})

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  if (props.recipeData) {
    Object.assign(recipe, structuredClone(props.recipeData))
  }
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})


</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click.self="$emit('close')">
    <div class="bg-white dark:bg-card-dark rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-transparent dark:border-card-dark-02 transition-colors">

      <div class="p-6 border-b dark:border-card-dark-02 flex justify-between items-center sticky top-0 bg-white dark:bg-card-dark z-10 transition-colors">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
          {{ props.recipeData ? 'แก้ไขสูตรอาหาร' : 'เพิ่มสูตรอาหารใหม่' }}
        </h2>
        <button @click="$emit('close')" class="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="p-6 space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">ชื่อสูตรอาหาร <span class="text-secondary font-bold">*</span></label>
          <input placeholder="เช่น ผัดไทย" v-model="recipe.name" @input="errors.name = ''" :class="[
            'w-full px-4 py-2 border rounded-lg outline-none bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
            errors.name ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
          ]" />

          <p v-if="errors.name" class="text-orange-500 text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">คำอธิบายสั้นๆ <span class="text-secondary font-bold">*</span></label>
          <input placeholder="เช่น ผัดเส้นสไตล์ไทยแบบดั้งเดิมใส่กุ้ง" v-model="recipe.short_description" @input="errors.short_description = ''" :class="[
            'w-full px-4 py-2 border rounded-lg outline-none bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
            errors.short_description ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
          ]" />

          <p v-if="errors.short_description" class="text-orange-500 text-sm mt-1">
            {{ errors.short_description }}
          </p>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">อัปโหลดรูปภาพ<span class="text-secondary font-bold">*</span></label>
          <input type="file" @change="(e) => { handleFileChange(e); errors.image = '' }" :class="[
            'w-full px-4 py-2 border rounded-lg bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
            errors.image ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
          ]" />

          <p v-if="errors.image" class="text-orange-500 text-sm mt-1">
            {{ errors.image }}
          </p>
          <img v-if="recipe.image" :src="recipe.image" class="w-40 mt-3 rounded-lg shadow" />
        </div>

        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-semibold text-gray-700 dark:text-slate-300">วัตถุดิบ <span class="text-secondary font-bold">*</span></label>
            <button @click="addIngredient" type="button"
              class="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-md hover:bg-secondary/20 flex items-center gap-1 font-bold transition-colors">
              <span class="material-symbols-outlined text-sm">add</span> เพิ่มวัตถุดิบ
            </button>
          </div>

          <div v-for="(item, index) in recipe.ingredients" :key="index" class="flex gap-2 mb-2 flex-col">

            <div class="flex gap-2">
              <input v-model="item.name" @input="errors.ingredients[index] && (errors.ingredients[index].name = '')"
                :class="['flex-1 px-3 py-2 border rounded-md bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
                  errors.ingredients[index]?.name ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
                ]" placeholder="ชื่อวัตถุดิบ" />

              <input v-model.number="item.quantity" type="number"
                @input="errors.ingredients[index] && (errors.ingredients[index].quantity = '')" :class="['w-20 px-3 py-2 border rounded-md bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
                  errors.ingredients[index]?.quantity ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
                ]" />

              <select v-model="item.unit" @change="errors.ingredients[index] && (errors.ingredients[index].unit = '')"
                :class="[
                  'w-24 px-3 py-2 border rounded-md bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
                  errors.ingredients[index]?.unit ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
                ]">
                <option value="ชิ้น" class="dark:bg-card-dark-02">ชิ้น</option>
                <option value="มล." class="dark:bg-card-dark-02">มล.</option>
                <option value="กรัม" class="dark:bg-card-dark-02">กรัม</option>
              </select>

              <button @click="removeIngredient(index)" class="text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 p-1 rounded transition-colors">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>

            <div class="text-orange-500 text-xs flex gap-2">
              <span v-if="errors.ingredients[index]?.name">กรุณากรอกชื่อ</span>
              <span v-if="errors.ingredients[index]?.quantity">จำนวนไม่ถูกต้อง</span>
              <span v-if="errors.ingredients[index]?.unit">กรุณาเลือกหน่วย</span>
            </div>

          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-semibold text-gray-700 dark:text-slate-300">ขั้นตอนการทำ <span class="text-secondary font-bold">*</span> <span class="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full font-black">อย่างน้อย 1</span></label>
            <button @click="addStep" type="button"
              class="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-md hover:bg-secondary/20 flex items-center gap-1 font-bold transition-colors">
              <span class="material-symbols-outlined text-sm">add</span> เพิ่มขั้นตอน
            </button>
          </div>
          <div v-for="(step, index) in recipe.steps" :key="index" class="flex gap-3 mb-3 items-start">

            <span class="mt-2 font-black text-gray-400 dark:text-slate-600">
              {{ index + 1 }}.
            </span>

            <textarea v-model="recipe.steps[index]" @input="errors.steps[index] = ''" :class="[
              'flex-1 px-3 py-2 border rounded-md h-20 bg-white dark:bg-card-dark-02 dark:text-white transition-colors',
              errors.steps[index] ? 'border-orange-500' : 'border-gray-300 dark:border-slate-700'
            ]"></textarea>

            <button @click="removeStep(index)" class="mt-2 text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 p-1 rounded transition-colors">
              <span class="material-symbols-outlined">delete</span>
            </button>

          </div>
        </div>
      </div>

      <div class="p-6 border-t dark:border-card-dark-02 flex justify-end gap-3 bg-slate-50 dark:bg-card-dark transition-colors">
        <button @click="emit('close')"
          class="px-6 py-2 border border-gray-100 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 bg-white dark:bg-card-dark-02 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold transition-colors">ยกเลิก</button>
        <button @click="handleSubmit"
          class="px-8 py-2 bg-secondary text-white rounded-xl hover:bg-orange-600 font-bold shadow-lg shadow-secondary/20 transition-all">
          บันทึกสูตรอาหาร
        </button>
      </div>

    </div>
  </div>
</template>