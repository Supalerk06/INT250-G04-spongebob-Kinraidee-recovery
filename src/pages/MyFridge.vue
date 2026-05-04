<script setup>
import FridgeItems from "../components/myFridge/FridgeItems.vue";
import UseItUp from "../components/myFridge/UseItUp.vue";
import FridgeHealth from "../components/myFridge/FridgeHealth.vue";
import RecommendMenu from "../components/myFridge/RecommendMenu.vue";
import { ref, watch, computed } from "vue";


let fridgeItems = ref(JSON.parse(localStorage.getItem("fridgeItems")) || []);

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  editingItemId.value = null;
  originalItemData.value = null;

  error.value = {
    name: "",
    category: "",
    quantity: "",
    unit: "",
    expiredDate: "",
  };
  name.value = "";
  category.value = "";
  quantity.value = "";
  unit.value = "";
  expiredDate.value = "";
}

// error handling
const error = ref({
  name: "",
  category: "",
  quantity: "",
  unit: "",
  expiredDate: "",
});

function validateForm() {
  error.value = {
    name: "",
    category: "",
    quantity: "",
    unit: "",
    expiredDate: "",
  };
  let isValid = true;

  // --- 1. Name ---
  if (!name.value.trim()) {
    error.value.name = "กรุณากรอกชื่อวัตถุดิบ";
    isValid = false;
  } else {
    const isDuplicate = fridgeItems.value.some((item) => {
      if (editingItemId.value && item.id === editingItemId.value) return false;
      return item.name.toLowerCase() === name.value.trim().toLowerCase();
    });
    if (isDuplicate) {
      error.value.name =
        "วัตถุดิบนี้มีอยู่ในตู้เย็นแล้ว หากต้องการแก้ไขกรุณากดที่ปุ่มแก้ไขของรายการนั้นๆ";
      isValid = false;
    }
  }

  // --- 2. Category ---
  if (!category.value) {
    error.value.category = "กรุณาเลือกหมวดหมู่";
    isValid = false;
  }

  // --- 3. Quantity ---
  if (!quantity.value) {
    error.value.quantity = "กรุณากรอกจำนวน";
    isValid = false;
  } else if (isNaN(quantity.value) || Number(quantity.value) <= 0) {
    error.value.quantity = "จำนวนต้องเป็นตัวเลขที่มากกว่า 0";
    isValid = false;
  }

  // --- 4. Unit ---
  if (!unit.value) {
    error.value.unit = "กรุณาเลือกหน่วย";
    isValid = false;
  }

  // --- 5. Expired Date ---
  if (!expiredDate.value) {
    error.value.expiredDate = "กรุณาเลือกวันหมดอายุ";
    isValid = false;
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(expiredDate.value);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      error.value.expiredDate = "วันหมดอายุไม่สามารถเป็นวันที่ผ่านมาแล้วได้";
      isValid = false;
    }
  }

  return isValid;
}

const originalItemData = ref(null);
const editingItemId = ref(null);

const openAddModal = () => {
  editingItemId.value = null;
  originalItemData.value = null;

  name.value = "";
  category.value = "";
  quantity.value = "";
  unit.value = "";
  expiredDate.value = "";

  openModal();
};

// deleteItem
const showDeleteModal = ref(false);
const itemToDeleteId = ref(null);
const confirmDelete = (id) => {
  itemToDeleteId.value = id;
  showDeleteModal.value = true;
};
const executeDelete = () => {
  if (itemToDeleteId.value !== null) {
    fridgeItems.value = fridgeItems.value.filter(
      (item) => item.id !== itemToDeleteId.value,
    );
    showDeleteModal.value = false;
    itemToDeleteId.value = null;
  }
};
const cancelDelete = () => {
  showDeleteModal.value = false;
  itemToDeleteId.value = null;
};

// editItem
const editItem = (item) => {
  editingItemId.value = item.id;
  originalItemData.value = { ...item };
  name.value = item.name;
  category.value = item.category;
  quantity.value = item.quantity;
  unit.value = item.unit;
  expiredDate.value = item.expiredDate;

  openModal();
};

const isFormUnchanged = computed(() => {
  if (!originalItemData.value) return false;

  return (
    name.value === originalItemData.value.name &&
    category.value === originalItemData.value.category &&
    String(quantity.value) === String(originalItemData.value.quantity) &&
    unit.value === originalItemData.value.unit &&
    expiredDate.value === originalItemData.value.expiredDate
  );
});

// AddItem
const name = ref("");
const quantity = ref("");
const unit = ref("");
const expiredDate = ref("");
const category = ref("");

function submitAddItem() {
  if (!validateForm()) {
    return;
  }

  if (editingItemId.value) {
    const index = fridgeItems.value.findIndex(
      (item) => item.id === editingItemId.value,
    );

    if (index !== -1) {
      fridgeItems.value[index] = {
        ...fridgeItems.value[index],
        name: name.value,
        category: category.value,
        quantity: quantity.value,
        unit: unit.value,
        expiredDate: expiredDate.value,
      };
    }
  } else {
    const nextId =
      fridgeItems.value.length > 0
        ? Math.max(...fridgeItems.value.map((item) => item.id)) + 1
        : 1;
    const today = new Date().toISOString().split("T")[0];

    fridgeItems.value.push({
      id: nextId,
      name: name.value,
      category: category.value,
      quantity: quantity.value,
      unit: unit.value,
      purchaseDate: today,
      expiredDate: expiredDate.value,
    });
  }

  name.value = "";
  quantity.value = "";
  category.value = "";
  unit.value = "";
  expiredDate.value = "";

  closeModal();
}

watch(
  fridgeItems,
  (newVal) => {
    localStorage.setItem("fridgeItems", JSON.stringify(newVal));
  },
  { deep: true },
);

import { onMounted, onUnmounted } from 'vue';

const handleEsc = (e) => {
  if (e.key === 'Escape' && showModal.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc);
});


// คำนวนวันหมดอายุ
function calculateExpiredDate(expiredDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(expiredDate);
  targetDate.setHours(0, 0, 0, 0);

  const diffInMs = targetDate - today;
  return Math.round(diffInMs / (1000 * 60 * 60 * 24));
}

// เปลี่ยนสี/ข้อความ
function getExpiryMsg(expiredDate) {
  const diffInDays = calculateExpiredDate(expiredDate);
  if (diffInDays > 1) return `เหลืออีก ${diffInDays} วัน`;
  else if (diffInDays === 1) return "หมดอายุพรุ่งนี้";
  else if (diffInDays === 0) return "หมดอายุวันนี้";
  else return "หมดอายุแล้ว";
}

// sort
const searchQuery = ref("");
const sortBy = ref("expiry");
const filterBy = ref("all");

const selectedCategory = ref("all");

const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "vegetable", name: "ผัก 🥦" },
  { id: "fruit", name: "ผลไม้ 🍎" },
  { id: "meat", name: "เนื้อสัตว์ 🥩" },
  { id: "seafood", name: "อาหารทะเล 🐟" },
  { id: "dairy", name: "ไข่และนม 🥚" },
  { id: "drink", name: "เครื่องดื่ม 🥤" },
  { id: "spice", name: "เครื่องเทศ 🧂" },
];

const processedFridgeItems = computed(() => {
  let result = [...fridgeItems.value];

  // --- Step 1: SEARCH ---
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter((item) => item.name.toLowerCase().includes(query));
  }

  // --- Step 2: FILTER (เวลาที่เหลือ) ---
  if (filterBy.value !== "all") {
    result = result.filter((item) => {
      const diffInDays = calculateExpiredDate(item.expiredDate);
      if (filterBy.value === "24h") return diffInDays === 0 || diffInDays === 1;
      if (filterBy.value === "48h") return diffInDays === 2;
      if (filterBy.value === "more") return diffInDays > 2;
      if (filterBy.value === "expired") return diffInDays < 0;
      return true;
    });
  }

  // --- Step 3: FILTER CATEGORY ---
  if (selectedCategory.value !== "all") {
    result = result.filter(
      (item) =>
        item.category.toLowerCase() === selectedCategory.value.toLowerCase(),
    );
  }

  // Step 4: SORT
  result.sort((a, b) => {
    if (sortBy.value === "a-z") {
      return a.name.localeCompare(b.name);
    } else if (sortBy.value === "expiry") {
      return new Date(a.expiredDate) - new Date(b.expiredDate);
    } else if (sortBy.value === "purchase") {
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    }
    return 0;
  });

  return result;
});

const resetFilters = () => {
  searchQuery.value = "";
  sortBy.value = "expiry";
  filterBy.value = "all";
  selectedCategory.value = "all";
};

// match รูปกับ ชื่อ ingredient
const icons = import.meta.glob("../assets/ingredient-icon/*.png", {
  eager: true,
});
const iconNames = Object.keys(icons).map((path) => {
  return path.split("/").pop().replace(".png", "");
});
const getIngredientIcon = (name) => {
  const lowerName = name.toLowerCase().trim();
  const mapping = {
    นม: "milk",
    ไข่: "eggs",
    ไก่: "chicken",
    เนื้อ: "meat",
    ปลา: "fish",
    สเต็ก: "steak",
    กุ้ง: "shrimp",
    สตรอเบอร์รี่: "strawberry",
    ชีส: "cheese",
    หมู: "pork",
    สลัด: "salad",
    ขนมปัง: "bread",
    แครอท: "carrot",
    บรอกโคลี: "broccoli",
  };

  let fileName = null;

  for (const key in mapping) {
    if (lowerName.includes(key)) {
      fileName = mapping[key];
      break;
    }
  }
  if (!fileName && iconNames.includes(lowerName)) {
    fileName = lowerName;
  }
  if (!fileName) fileName = "default";
  const targetPath = `../assets/ingredient-icon/${fileName}.png`;
  return (
    icons[targetPath]?.default ||
    icons[`../assets/ingredient-icon/default.png`]?.default ||
    ""
  );
};


function handleCookUpdate(updatedItems) {
  fridgeItems.value = updatedItems;
}

</script>

<template>
  <div class="px-4 py-8 bg-slate-50 dark:bg-background-dark transition-colors duration-300 min-h-screen w-full flex flex-col gap-4 md:px-10 lg:flex-row font-sans justify-center">
    <div class="flex flex-col gap-4 w-full max-w-[1280px] lg:flex-row">
      <div class="flex flex-col gap-4 w-full lg:flex-1">
      <div class="flex justify-between py-2">
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold flex items-center gap-1 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>

            ตู้เย็นของฉัน
          </h1>
          <p class="text-neutral-600 dark:text-neutral-400 font-medium">จัดการวัตถุดิบในบ้านของคุณ</p>
        </div>
        <button
          class="rounded-full flex justify-center items-center min-w-[129px] shadow-lg shadow-secondary/20 bg-secondary text-white h-full max-h-10 gap-2 hover:scale-[1.025] transition py-3 px-1 md:py-2 md:px-5 lg:py-1 lg:px-4"
          @click="openModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          เพิ่มวัตถุดิบ
        </button>
      </div>
      <div class="flex rounded-3xl bg-white dark:bg-card-dark p-4 flex-wrap md:flex-nowrap shadow shadow-neutral-300 dark:shadow-slate-900/50 gap-3 border border-transparent dark:border-card-dark-02 transition-colors">
        <div class="shrink-2 bg-neutral-100 dark:bg-card-dark-02 px-4 py-1 rounded-3xl w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-neutral-500 dark:text-neutral-400 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            v-model="searchQuery"
            class="w-full bg-neutral-100 dark:bg-card-dark-02 outline-none focus:outline-none focus:ring-0 border-none dark:text-white placeholder:dark:text-neutral-500"
            placeholder="ค้นหาวัตถุดิบ (เช่น ไข่, นม)"
            type="text"
          />
        </div>

        <div class="shrink-0 bg-neutral-100 dark:bg-card-dark-02 px-3 py-1 w-[218px] grow rounded-3xl cursor-pointer flex justify-center items-center md:px-4 md:py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7 text-neutral-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
          <select
            v-model="sortBy"
            class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-bold w-full dark:text-white"
          >
            <option value="a-z" class="dark:bg-card-dark">เรียง: ก-ฮ</option>
            <option value="expiry" class="dark:bg-card-dark">เรียง: วันหมดอายุ</option>
            <option value="purchase" class="dark:bg-card-dark">เรียง: วันที่ซื้อ</option>
          </select>
        </div>

        <div class="shrink-0 bg-neutral-100 dark:bg-card-dark-02 px-3 py-1 w-[208px] grow rounded-3xl cursor-pointer flex justify-center items-center md:px-4 md:py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7 text-neutral-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <select
            v-model="filterBy"
            class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-bold w-full dark:text-white"
          >
            <option value="all" class="dark:bg-card-dark">ตัวกรอง: ทั้งหมด</option>
            <option value="24h" class="dark:bg-card-dark">หมดอายุใน 24 ชม.</option>
            <option value="48h" class="dark:bg-card-dark">หมดอายุใน 48 ชม.</option>
            <option value="more" class="dark:bg-card-dark">มากกว่า 48 ชม.</option>
            <option value="expired" class="dark:bg-card-dark">หมดอายุแล้ว</option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap lg:flex-no-wrap mt-4 mb-2 gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          :class="[
            'shrink-0 rounded-full shadow py-2 px-4 transition font-medium hover:scale-[1.015]',
            selectedCategory === cat.id
              ? 'bg-secondary text-white shadow-secondary/20'
              : 'bg-white dark:bg-card-dark text-slate-600 dark:text-slate-300 shadow-slate-100 dark:shadow-slate-900/50 hover:bg-secondary/10 hover:text-secondary',
          ]"
        >
          {{ cat.name }}
        </button>
      </div>

      <FridgeItems
        :fridgeItems="processedFridgeItems"
        :getIcon="getIngredientIcon"
        @delete-item="confirmDelete"
        @edit-item="editItem"
        :calculateExpiredDate="calculateExpiredDate"
        :getExpiryMsg="getExpiryMsg"
      />
    </div>

    <div class="flex flex-col gap-4 w-full lg:max-w-[350px]">
      <UseItUp
        :fridgeItems="fridgeItems"
        :getIcon="getIngredientIcon"
        :calculateExpiredDate="calculateExpiredDate"
        :getExpiryMsg="getExpiryMsg"
        @delete-item="confirmDelete"
      />

      <FridgeHealth :fridgeItems="fridgeItems" />
      <RecommendMenu :fridgeItems="fridgeItems" @cook="handleCookUpdate" />
    </div>

    <!-- Add Item Modal -->
    <div v-if="showModal" @click.self="closeModal" class="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100] transition-all p-4">
      <div class="bg-white dark:bg-card-dark p-6 rounded-3xl w-full max-w-[360px] max-h-[90vh] overflow-y-auto lg:max-w-[620px] lg:py-10 relative shadow-2xl border border-slate-100 dark:border-card-dark-02 custom-scrollbar">
        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <span class="material-symbols-outlined text-2xl">close</span>
        </button>
        <h2 class="text-2xl font-bold mb-4 dark:text-white">
          {{ editingItemId ? "แก้ไขวัตถุดิบ" : "เพิ่มวัตถุดิบ" }}
        </h2>
        <form
          @submit.prevent="submitAddItem"
          class="flex flex-col lg:grid grid-cols-2 gap-4"
        >
          <div class="flex flex-col gap-1 lg:order-0">
            <label class="dark:text-white" for="item-name">ชื่อวัตถุดิบ <span class="text-secondary  font-bold">*</span></label>
            <input
              type="text"
              id="item-name"
              v-model="name"
              placeholder="ชื่อวัตถุดิบ (เช่น ไข่)"
              class=" border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.name
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            />
            <div v-if="error.name" class="text-danger text-sm mt-1 ml-1">
              {{ error.name }}
            </div>
          </div>

          <div class="flex flex-col gap-1 lg:order-2">
            <label class="dark:text-white" for="item-quantity">จำนวน <span class="text-secondary font-bold">*</span></label>
            <input
              type="number"
              id="item-quantity"
              v-model="quantity"
              placeholder="จำนวน (เช่น 3)"
              class=" border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.quantity
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            />
            <div v-if="error.quantity" class="text-danger text-sm mt-1 ml-1">
              {{ error.quantity }}
            </div>
          </div>

          <div class="flex flex-col gap-1 lg:order-3">
            <label class="dark:text-white" for="item-unit">หน่วย <span class="text-secondary font-bold">*</span></label>
            <select
              id="item-unit"
              v-model="unit"
              class=" border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.unit
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            >
              <option value="" disabled selected>เลือกหน่วย</option>
              <option value="มล.">มิลลิลิตร (มล.)</option>
              <option value="กรัม">กรัม</option>
              <option value="ชิ้น">ชิ้น</option>
            </select>
            <div v-if="error.unit" class="text-danger text-sm mt-1 ml-1">
              {{ error.unit }}
            </div>
          </div>

          <div class="flex flex-col gap-1 lg:order-1">
            <label class="dark:text-white" for="item-category">หมวดหมู่ <span class="text-secondary font-bold">*</span></label>
            <select
              id="item-category"
              v-model="category"
              class=" border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.category
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            >
              <option value="" disabled selected>เลือกหมวดหมู่ <span class="text-secondary font-bold">*</span></option>
              <option v-for="cat in categories.slice(1)" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>
            <div v-if="error.category" class="text-danger text-sm mt-1 ml-1">
              {{ error.category }}
            </div>
          </div>

          <div class="flex flex-col gap-1 lg:order-4">
            <label class="dark:text-white" for="item-expired-date">วันหมดอายุ <span class="text-secondary font-bold">*</span></label>
            <input
              type="date"
              id="item-expired-date"
              v-model="expiredDate"
              placeholder="เลือกวันหมดอายุ"
              class=" border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.expiredDate
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            />
            <div v-if="error.expiredDate" class="text-danger text-sm mt-1 ml-1">
              {{ error.expiredDate }}
            </div>
          </div>

          <div class="flex justify-end items-end gap-2 lg:order-5">
            <button
              @click="closeModal"
              type="button"
              class="px-4 py-2 hover:bg-neutral-400 transition bg-gray-300 rounded-xl focus:outline-none"
            >
              ยกเลิก
            </button>
            <button
              class="px-4 py-2 hover:bg-orange-600 transition bg-secondary text-white rounded-xl focus:outline-none shadow-md shadow-secondary/20"
              type="submit"
            >
              {{ editingItemId ? "บันทึกการแก้ไข" : "เพิ่มวัตถุดิบ" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 flex items-center justify-center bg-black/50 z-[120]">
      <div class="bg-white  dark:bg-card-dark p-6 rounded-2xl w-full max-w-[320px] text-center shadow-xl">
        <div class="flex justify-center mb-4">
          <div class="bg-orange-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-danger"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
        <h2 class="text-xl font-bold dark:text-white mb-2">ลบวัตถุดิบ?</h2>
        <p class="text-neutral-500 mb-6 text-sm">
          คุณแน่ใจหรือไม่ว่าต้องการลบวัตถุดิบนี้? การดำเนินการนี้ไม่สามารถย้อนกลับได้
        </p>
        <div class="flex justify-center gap-3">
          <button
            @click="cancelDelete"
            class="flex-1 py-2 hover:bg-neutral-200 hover:-translate-y-1 transition-all duration-500 bg-neutral-100 text-neutral-700 font-bold rounded-xl focus:outline-none"
          >
            ยกเลิก
          </button>
          <button
            @click="executeDelete"
            class="flex-1 py-2 hover:bg-danger hover:-translate-y-1 transition-all duration-500 bg-danger text-white font-bold rounded-xl focus:outline-none shadow-md shadow-orange-100 dark:shadow-none"
          >
            ลบเลย
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
