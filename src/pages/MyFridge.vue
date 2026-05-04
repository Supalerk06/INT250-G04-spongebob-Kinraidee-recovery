<script setup>
import FridgeItems from "../components/FridgeItems.vue";
import UseItUp from "../components/UseItUp.vue";
import FridgeHealth from "../components/FridgeHealth.vue";
import RecommendMenu from "../components/RecommendMenu.vue";
import users from "../data/users.js";
import { ref, watch, computed } from "vue";

import { fridgeItems as Mock } from "@/data/fridgeItems";

let fridgeItems = ref(JSON.parse(localStorage.getItem("fridgeItems")) || []);
// let fridgeItems = ref(JSON.parse(localStorage.getItem("fridgeItems")) || Mock.value )

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
  // รีเซ็ต error ทุกครั้งที่กด Submit เพื่อล้างค่าเก่า
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
    error.value.name = "Please enter an item name.";
    isValid = false;
  } else {
    // เช็คความสมเหตุสมผล (ชื่อซ้ำ)
    const isDuplicate = fridgeItems.value.some((item) => {
      if (editingItemId.value && item.id === editingItemId.value) return false;
      return item.name.toLowerCase() === name.value.trim().toLowerCase();
    });
    if (isDuplicate) {
      error.value.name =
        "This item already exists in your fridge. Please go to that item and click “Edit.”";
      isValid = false;
    }
  }

  // --- 2. Category ---
  if (!category.value) {
    error.value.category = "Please select a category.";
    isValid = false;
  }

  // --- 3. Quantity ---
  if (!quantity.value) {
    // เช็คว่ามีค่าไหม
    error.value.quantity = "Please enter the quantity.";
    isValid = false;
  } else if (isNaN(quantity.value) || Number(quantity.value) <= 0) {
    // เช็ค Type และความสมเหตุสมผล
    error.value.quantity = "Quantity must be a valid number greater than 0.";
    isValid = false;
  }

  // --- 4. Unit ---
  if (!unit.value) {
    error.value.unit = "Please select a unit.";
    isValid = false;
  }

  // --- 5. Expired Date ---
  if (!expiredDate.value) {
    // เช็คว่าเลือกวันหรือยัง
    error.value.expiredDate = "Please select an expiration date.";
    isValid = false;
  } else {
    // เช็คความสมเหตุสมผล (หมดอายุไปแล้วหรือยัง)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // รีเซ็ตเวลาให้เป็นเที่ยงคืน เพื่อเทียบแค่วันที่

    const selectedDate = new Date(expiredDate.value);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      error.value.expiredDate = "Expiration date cannot be in the past.";
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
// เมื่อกดรูปถังขยะจาก FridgeItems หรือ UseItUp จะเรียกฟังก์ชันนี้
const confirmDelete = (id) => {
  itemToDeleteId.value = id;
  showDeleteModal.value = true;
};
// เมื่อกดยืนยันใน Modal
const executeDelete = () => {
  if (itemToDeleteId.value !== null) {
    fridgeItems.value = fridgeItems.value.filter(
      (item) => item.id !== itemToDeleteId.value,
    );
    showDeleteModal.value = false;
    itemToDeleteId.value = null;
  }
};
// เมื่อกดยกเลิกใน Modal
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
  if (diffInDays > 1) return `${diffInDays} days left`;
  else if (diffInDays === 1) return "Exp. Tomorrow";
  else if (diffInDays === 0) return "Exp. Today";
  else return "Expired";
}

// sort
const searchQuery = ref("");
const sortBy = ref("expiry");
const filterBy = ref("all");

const selectedCategory = ref("all");

const categories = [
  { id: "all", name: "All Items" },
  { id: "vegetable", name: "Vegetable 🥦" },
  { id: "fruit", name: "Fruit 🍎" },
  { id: "meat", name: "Meat & Poultry 🥩" },
  { id: "seafood", name: "Seafood 🐟" },
  { id: "dairy", name: "Dairy & Eggs 🥚" },
  { id: "drink", name: "Drinks 🥤" },
];

// 2. สร้าง Computed เพื่อกรองและจัดเรียงข้อมูลแบบเรียลไทม์
const processedFridgeItems = computed(() => {
  // ก๊อปปี้ array ออกมาก่อน จะได้ไม่กระทบข้อมูลต้นฉบับเวลา sort
  let result = [...fridgeItems.value];

  // --- Step 1: SEARCH ---
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter((item) => item.name.toLowerCase().includes(query));
  }

  // --- Step 2: FILTER (เวลาที่เหลือ) ---
  if (filterBy.value !== "all") {
    result = result.filter((item) => {
      // เรียกใช้ฟังก์ชันเดียวกันกับ UI เลย
      const diffInDays = calculateExpiredDate(item.expiredDate);

      // จัดกลุ่มให้ตรงกับ UI
      if (filterBy.value === "24h") return diffInDays === 0 || diffInDays === 1; // วันนี้ และ พรุ่งนี้
      if (filterBy.value === "48h") return diffInDays === 2; // มะรืนนี้ (2 วัน)
      if (filterBy.value === "more") return diffInDays > 2; // มากกว่า 2 วัน (สีเขียว)
      if (filterBy.value === "expired") return diffInDays < 0; // หมดอายุไปแล้ว (สีแดง)
      return true;
    });
  }

  // --- Step 3: SORT ---
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
    milk: "milk",
    chick: "chicken",
    meat: "meat",
    fish: "fish",
    steak: "steak",
    shrimp: "shrimp",
    chicken: "chicken",
    strawb: "strawberry",
    cheese: "cheese",
    pork: "pork",
    salad: "salad",
    egg: "eggs",
    bread: "bread",
    carrot: "carrot",
    broccoli: "broccoli",
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
</script>

<template>
  <div class="px-4 py-8 bg-slate-50 min-h-screen w-full flex flex-col gap-4 md:px-10 lg:flex-row font-sans">
    <div class="flex flex-col gap-4 w-full lg:max-w-[1250px]">
      <div class="flex justify-between py-2">
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold flex items-center gap-1">
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

            My Fridge
          </h1>
          <p class="text-neutral-600">Manage your household ingredients</p>
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
          Add Item
        </button>
      </div>
      <div class="flex rounded-3xl bg-white p-4 flex-wrap md:flex-nowrap shadow shadow-neutral-300 gap-3">
        <div class="shrink-2 bg-neutral-100 px-4 py-1 rounded-3xl w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-neutral-500 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            v-model="searchQuery"
            class="w-full bg-neutral-100 outline-none focus:outline-none focus:ring-0 border-none"
            placeholder="Search ingredients (e.g. Egg, Milk)"
            type="text"
          />
        </div>

        <div class="shrink-0 bg-neutral-100 px-3 py-1 w-[218px] grow rounded-3xl cursor-pointer flex justify-center items-center md:px-4 md:py-1">
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
            class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-medium w-full"
          >
            <option value="a-z">Sort: A-Z</option>
            <option value="expiry">Sort: Expiry</option>
            <option value="purchase">Sort: Purchase</option>
          </select>
        </div>

        <div class="shrink-0 bg-neutral-100 px-3 py-1 w-[208px] grow rounded-3xl cursor-pointer flex justify-center items-center md:px-4 md:py-1">
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
            class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-medium w-full"
          >
            <option value="all">Filter: All</option>
            <option value="24h">Exp in 24h</option>
            <option value="48h">Exp in 48h</option>
            <option value="more">Exp after 48h</option>
            <option value="expired">Expired</option>
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
              : 'bg-white text-slate-600 shadow-slate-100 hover:bg-secondary/10 hover:text-secondary',
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
      <RecommendMenu :fridgeItems="fridgeItems" />
    </div>

    <!-- Add Item -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/50">
      <div class="bg-white p-6 rounded-xl w-full max-w-[360px] max-h-[600px] overflow-y-scroll lg:max-w-[620px] lg:max-h-fit lg:py-10">
        <h2 class="text-2xl font-bold mb-4">
          {{ editingItemId ? "Edit Item" : "Add Item" }}
        </h2>
        <form
          @submit.prevent="submitAddItem"
          class="flex flex-col lg:grid grid-cols-2 gap-4"
        >
          <div class="flex flex-col gap-1 lg:order-0">
            <label for="item-name">Name</label>
            <input
              type="text"
              id="item-name"
              v-model="name"
              placeholder="Item Name (e.g. Egg)"
              class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
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
            <label for="item-quantity">Quantity</label>
            <input
              type="number"
              id="item-quantity"
              v-model="quantity"
              placeholder="Item Quantity (e.g. 3)"
              class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
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
            <label for="item-unit">Unit</label>
            <select
              id="item-unit"
              v-model="unit"
              class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.unit
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            >
              <option value="" disabled selected>Select Unit</option>
              <option value="ml">Milliliter</option>
              <option value="g">Gram</option>
              <option value="pcs">Pieces</option>
            </select>
            <div v-if="error.unit" class="text-danger text-sm mt-1 ml-1">
              {{ error.unit }}
            </div>
          </div>

          <div class="flex flex-col gap-1 lg:order-1">
            <label for="item-category">Category</label>
            <select
              id="item-category"
              v-model="category"
              class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
              :class="
                error.category
                  ? 'border-danger focus:border-danger'
                  : 'border-gray-100 focus:border-secondary'
              "
            >
              <option value="" disabled selected>Select Category</option>
              <option v-for="cat in categories.slice(1)" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>
            <div v-if="error.category" class="text-danger text-sm mt-1 ml-1">
              {{ error.category }}
            </div>
          </div>

          <div class="flex flex-col gap-1 lg:order-4">
            <label for="item-expired-date">Expired Date</label>
            <input
              type="date"
              id="item-expired-date"
              v-model="expiredDate"
              placeholder="Item Expired Date"
              class="border-2 py-2 px-4 w-full rounded-xl focus:border-secondary focus:ring-0 focus:outline-none"
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
              class="px-4 py-2 hover:bg-neutral-400 transition bg-gray-300 rounded-xl focus:border-success focus:ring-0 focus:outline-none"
            >
              Cancel
            </button>
            <button
              class="px-4 py-2 hover:bg-orange-600 transition bg-secondary text-white rounded-xl focus:outline-none shadow-md shadow-secondary/20"
              type="submit"
            >
              {{ editingItemId ? "Save Changes" : "Add Item" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showDeleteModal" class="fixed inset-0 flex items-center justify-center bg-black/50 z-[60]">
      <div class="bg-white p-6 rounded-2xl w-full max-w-[320px] text-center shadow-xl">
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
        <h2 class="text-xl font-bold mb-2">Delete Item?</h2>
        <p class="text-neutral-500 mb-6 text-sm">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div class="flex justify-center gap-3">
          <button
            @click="cancelDelete"
            class="flex-1 py-2 hover:bg-neutral-200 transition bg-neutral-100 text-neutral-700 font-bold rounded-xl focus:outline-none"
          >
            Cancel
          </button>
          <button
            @click="executeDelete"
            class="flex-1 py-2 hover:bg-danger transition bg-danger text-white font-bold rounded-xl focus:outline-none shadow-md shadow-orange-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
