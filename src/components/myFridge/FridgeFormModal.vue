<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  show: Boolean,
  item: Object,
  categories: Array,
  fridgeItems: Array,
});

const emit = defineEmits(["close", "save"]);

const name = ref("");
const quantity = ref("");
const unit = ref("");
const expiredDate = ref("");
const category = ref("");

const error = ref({
  name: "",
  category: "",
  quantity: "",
  unit: "",
  expiredDate: "",
});

watch(
  () => props.item,
  (newItem) => {
    if (newItem) {
      name.value = newItem.name || "";
      category.value = newItem.category || "";
      quantity.value = newItem.quantity || "";
      unit.value = newItem.unit || "";
      expiredDate.value = newItem.expiredDate || "";
    } else {
      resetForm();
    }
  },
  { immediate: true }
);

function resetForm() {
  name.value = "";
  category.value = "";
  quantity.value = "";
  unit.value = "";
  expiredDate.value = "";
  resetErrors();
}

function resetErrors() {
  error.value = {
    name: "",
    category: "",
    quantity: "",
    unit: "",
    expiredDate: "",
  };
}

function validateName() {
  error.value.name = "";
  if (!name.value.trim()) {
    error.value.name = "กรุณากรอกชื่อวัตถุดิบ";
    return false;
  }
  const isDuplicate = props.fridgeItems.some((item) => {
    if (props.item && item.id === props.item.id) return false;
    return item.name.toLowerCase() === name.value.trim().toLowerCase();
  });
  if (isDuplicate) {
    error.value.name = "วัตถุดิบนี้มีอยู่ในตู้เย็นแล้ว หากต้องการแก้ไขกรุณากดที่ปุ่มแก้ไขของรายการนั้นๆ";
    return false;
  }
  return true;
}

function validateCategory() {
  error.value.category = "";
  if (!category.value) {
    error.value.category = "กรุณาเลือกหมวดหมู่";
    return false;
  }
  return true;
}

function validateQuantity() {
  error.value.quantity = "";
  if (!quantity.value) {
    error.value.quantity = "กรุณากรอกจำนวน";
    return false;
  }
  if (isNaN(quantity.value) || Number(quantity.value) <= 0) {
    error.value.quantity = "จำนวนต้องเป็นตัวเลขที่มากกว่า 0";
    return false;
  }
  return true;
}

function validateUnit() {
  error.value.unit = "";
  if (!unit.value) {
    error.value.unit = "กรุณาเลือกหน่วย";
    return false;
  }
  return true;
}

function validateExpiredDate() {
  error.value.expiredDate = "";
  if (!expiredDate.value) {
    error.value.expiredDate = "กรุณาเลือกวันหมดอายุ";
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(expiredDate.value);
  selectedDate.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    error.value.expiredDate = "วันหมดอายุไม่สามารถเป็นวันที่ผ่านมาแล้วได้";
    return false;
  }
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isCategoryValid = validateCategory();
  const isQuantityValid = validateQuantity();
  const isUnitValid = validateUnit();
  const isExpiredDateValid = validateExpiredDate();
  
  return isNameValid && isCategoryValid && isQuantityValid && isUnitValid && isExpiredDateValid;
}

function handleSubmit() {
  if (!validateForm()) return;

  emit("save", {
    name: name.value.trim(),
    category: category.value,
    quantity: Number(quantity.value),
    unit: unit.value,
    expiredDate: expiredDate.value,
  });
  resetForm();
}

function handleClose() {
  resetForm();
  emit("close");
}

const handleEsc = (e) => {
  if (e.key === "Escape") {
    handleClose();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEsc);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEsc);
});
</script>

<template>
  <div v-if="show" @click.self="handleClose" class="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100] transition-all p-4">
    <div class="bg-white dark:bg-card-dark p-6 rounded-3xl w-full max-w-[360px] max-h-[90vh] overflow-y-auto lg:max-w-[620px] lg:py-10 relative shadow-2xl border border-slate-100 dark:border-card-dark-02 custom-scrollbar">
      <button @click="handleClose" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
        <span class="material-symbols-outlined text-2xl">close</span>
      </button>
      <h2 class="text-2xl font-bold mb-4 dark:text-white">
        {{ item ? "แก้ไขวัตถุดิบ" : "เพิ่มวัตถุดิบ" }}
      </h2>
      <form @submit.prevent="handleSubmit" class="flex flex-col lg:grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-1 lg:order-0">
          <label class="dark:text-white" for="item-name">ชื่อวัตถุดิบ <span class="text-secondary font-bold">*</span></label>
          <input
            type="text"
            id="item-name"
            v-model="name"
            @blur="validateName"
            placeholder="ชื่อวัตถุดิบ (เช่น ไข่)"
            class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
            :class="error.name ? 'border-danger focus:border-danger' : 'border-gray-100 focus:border-secondary'"
          />
          <div v-if="error.name" class="text-danger text-sm mt-1 ml-1">{{ error.name }}</div>
        </div>

        <div class="flex flex-col gap-1 lg:order-2">
          <label class="dark:text-white" for="item-quantity">จำนวน <span class="text-secondary font-bold">*</span></label>
          <input
            type="number"
            id="item-quantity"
            v-model="quantity"
            @blur="validateQuantity"
            placeholder="จำนวน (เช่น 3)"
            class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
            :class="error.quantity ? 'border-danger focus:border-danger' : 'border-gray-100 focus:border-secondary'"
          />
          <div v-if="error.quantity" class="text-danger text-sm mt-1 ml-1">{{ error.quantity }}</div>
        </div>

        <div class="flex flex-col gap-1 lg:order-3">
          <label class="dark:text-white" for="item-unit">หน่วย <span class="text-secondary font-bold">*</span></label>
          <select
            id="item-unit"
            v-model="unit"
            @blur="validateUnit"
            class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
            :class="error.unit ? 'border-danger focus:border-danger' : 'border-gray-100 focus:border-secondary'"
          >
            <option value="" disabled selected>เลือกหน่วย</option>
            <option value="มล.">มิลลิลิตร (มล.)</option>
            <option value="กรัม">กรัม</option>
            <option value="ชิ้น">ชิ้น</option>
          </select>
          <div v-if="error.unit" class="text-danger text-sm mt-1 ml-1">{{ error.unit }}</div>
        </div>

        <div class="flex flex-col gap-1 lg:order-1">
          <label class="dark:text-white" for="item-category">หมวดหมู่ <span class="text-secondary font-bold">*</span></label>
          <select
            id="item-category"
            v-model="category"
            @blur="validateCategory"
            class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
            :class="error.category ? 'border-danger focus:border-danger' : 'border-gray-100 focus:border-secondary'"
          >
            <option value="" disabled selected>เลือกหมวดหมู่</option>
            <option v-for="cat in categories.slice(1)" :key="cat.id" :value="cat.id">
              {{ cat.name }}
            </option>
          </select>
          <div v-if="error.category" class="text-danger text-sm mt-1 ml-1">{{ error.category }}</div>
        </div>

        <div class="flex flex-col gap-1 lg:order-4">
          <label class="dark:text-white" for="item-expired-date">วันหมดอายุ <span class="text-secondary font-bold">*</span></label>
          <input
            type="date"
            id="item-expired-date"
            v-model="expiredDate"
            @blur="validateExpiredDate"
            placeholder="เลือกวันหมดอายุ"
            class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
            :class="error.expiredDate ? 'border-danger focus:border-danger' : 'border-gray-100 focus:border-secondary'"
          />
          <div v-if="error.expiredDate" class="text-danger text-sm mt-1 ml-1">{{ error.expiredDate }}</div>
        </div>

        <div class="flex justify-end items-end gap-2 lg:order-5">
          <button @click="handleClose" type="button" class="px-4 py-2 hover:bg-neutral-400 transition bg-gray-300 rounded-xl focus:outline-none">
            ยกเลิก
          </button>
          <button class="px-4 py-2 hover:bg-orange-600 transition bg-secondary text-white rounded-xl focus:outline-none shadow-md shadow-secondary/20" type="submit">
            {{ item ? "บันทึกการแก้ไข" : "เพิ่มวัตถุดิบ" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
